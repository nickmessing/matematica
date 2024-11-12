<script setup lang="ts">
import { useCoordinates, useLine, usePoint } from '../../../../composables/graphic'
import { computed, ref, useTemplateRef } from 'vue'
import { line } from 'd3'
import { useMouse, type UseMouseEventExtractor } from '@vueuse/core'

const {
  Component: Coordinates,
  convertXCoordinateToSvg,
  convertYCoordinateToSvg,
  convertCoordinatesToSvg,
} = useCoordinates({
  height: 220,
  width: 360,
})

const parameters = ref({
  a: 4,
  b: 3,
})

const c = computed(() => Math.sqrt(parameters.value.a ** 2 + parameters.value.b ** 2))
const e = computed(() => c.value / parameters.value.a)

const pointsRight = computed(() => {
  const a = parameters.value.a
  const b = parameters.value.b
  const step = 0.1
  const xValues = []
  for (let x = 0; x <= 10; x += step) {
    xValues.push(x)
  }
  return xValues
    .map(x => {
      const y = Math.sqrt((x ** 2 / a ** 2 - 1) * b ** 2)
      return { x, y }
    })
    .filter(({ y }) => !isNaN(y))
})

const pointsLeft = computed(() => {
  const a = parameters.value.a
  const b = parameters.value.b
  const step = 0.1
  const xValues = []
  for (let x = -10; x <= 0; x += step) {
    xValues.push(x)
  }
  return xValues
    .map(x => {
      const y = Math.sqrt((x ** 2 / a ** 2 - 1) * b ** 2)
      return { x, y }
    })
    .filter(({ y }) => !isNaN(y))
})

const lineFn = line<{ x: number; y: number }>(
  d => convertXCoordinateToSvg(d.x),
  d => convertYCoordinateToSvg(d.y),
)

const lineDataRight = computed(() =>
  lineFn([...pointsRight.value, ...pointsRight.value.map(({ x, y }) => ({ x, y: -y })).reverse()]),
)
const lineDataLeft = computed(() =>
  lineFn([...pointsLeft.value, ...pointsLeft.value.map(({ x, y }) => ({ x, y: -y })).reverse()]),
)

const svgReference = useTemplateRef('svg')

const extractor: UseMouseEventExtractor = event => {
  if (event instanceof Touch) return null
  else return [event.offsetX, event.offsetY]
}

const { x, y } = useMouse({
  target: svgReference,
  type: extractor,
})

const pointOnM = computed(() => {
  const px = (x.value - 180) / 20
  const a = parameters.value.a
  const b = parameters.value.b
  if (Math.abs(px) < a) {
    return null
  }
  const underSqrt = (px ** 2 / a ** 2 - 1) * b ** 2
  if (underSqrt < 0) {
    return null
  }
  const py = Math.sqrt(underSqrt) * (y.value < 110 ? 1 : -1)
  if (!isNaN(py)) return { x: px, y: py }
  else return null
})

const { Component: MPoint } = usePoint(() => ({
  point: convertCoordinatesToSvg(pointOnM.value),
  labelText: 'M',
}))

const isMouseOver = ref(false)

const { Component: F1Point } = usePoint(() => ({
  point: convertCoordinatesToSvg({ x: -c.value, y: 0 }),
  labelText: 'F₁',
}))
const { Component: F2Point } = usePoint(() => ({
  point: convertCoordinatesToSvg({ x: c.value, y: 0 }),
  labelText: 'F₂',
}))

const { Component: F1ToMLine } = useLine(() => ({
  line: {
    start: convertCoordinatesToSvg({ x: -c.value, y: 0 }),
    end: convertCoordinatesToSvg(pointOnM.value),
  },
  lineClass: 'dashed',
}))
const { Component: F2ToMLine } = useLine(() => ({
  line: {
    start: convertCoordinatesToSvg({ x: c.value, y: 0 }),
    end: convertCoordinatesToSvg(pointOnM.value),
  },
  lineClass: 'dashed',
}))

const { Component: APoint } = usePoint(() => ({
  point: convertCoordinatesToSvg({ x: parameters.value.a, y: 0 }),
  labelText: 'A',
}))
const { Component: A1Point } = usePoint(() => ({
  point: convertCoordinatesToSvg({ x: -parameters.value.a, y: 0 }),
  labelText: 'A₁',
}))

const asymptoteSlope = computed(() => parameters.value.b / parameters.value.a)

const asymptoteLines = computed(() => {
  const slope = asymptoteSlope.value
  const xMin = -10
  const xMax = 10
  const line1 = {
    start: convertCoordinatesToSvg({ x: xMin, y: slope * xMin }),
    end: convertCoordinatesToSvg({ x: xMax, y: slope * xMax }),
  }
  const line2 = {
    start: convertCoordinatesToSvg({ x: xMin, y: -slope * xMin }),
    end: convertCoordinatesToSvg({ x: xMax, y: -slope * xMax }),
  }
  return [line1, line2]
})

const { Component: Asymptote1 } = useLine(() => ({
  line: asymptoteLines.value[0],
  lineClass: 'dashed asymptote',
}))
const { Component: Asymptote2 } = useLine(() => ({
  line: asymptoteLines.value[1],
  lineClass: 'dashed asymptote',
}))
</script>

<template>
  <div class="hiperbola">
    <template v-for="(value, key) in parameters" :key="key">
      <input v-model="parameters[key]" type="range" :min="0.1" :max="10" step="0.1" />
      <span class="katex center">
        <span class="katex-html" aria-hidden="true">
          <span class="base">
            <span class="strut" style="height: 0.4306em" />
            <span class="mord mathnormal">{{ key }}</span>
            <span class="mspace" style="margin-right: 0.2778em" />
            <span class="mrel">=</span>
            <span class="mspace" style="margin-right: 0.2778em" />
          </span>
          <span class="base">
            <span class="strut" style="height: 0.6444em" />
            <span class="mord">{{ value }}</span>
          </span>
        </span>
      </span>
    </template>

    <svg ref="svg" class="same-orientation-1 katex" @mouseenter="isMouseOver = true" @mouseleave="isMouseOver = false">
      <Coordinates />

      <path v-if="lineDataRight" :d="lineDataRight" style="stroke: var(--vp-c-text-1)" stroke-width="2" fill="none" />
      <path v-if="lineDataLeft" :d="lineDataLeft" style="stroke: var(--vp-c-text-1)" stroke-width="2" fill="none" />
      <Asymptote1 />
      <Asymptote2 />
      <F1Point />
      <F2Point />
      <APoint />
      <A1Point />
      <template v-if="pointOnM && isMouseOver">
        <MPoint />
        <F1ToMLine />
        <F2ToMLine />
      </template>
    </svg>
  </div>
</template>

<style scoped>
.hiperbola {
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 0 auto;

  .same-orientation-1 {
    width: 360px;
    margin: 0 auto;
    height: 220px;
    color: var(--vp-c-text-1);
  }

  .dashed {
    stroke-dasharray: 5, 5;
  }

  .asymptote {
    stroke: red;
  }
}
</style>
