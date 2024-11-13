<script setup lang="ts">
import { useCoordinates, useLine, usePoint, useText } from '../../../../composables/graphic'
import { computed, onMounted, ref, shallowRef, useTemplateRef } from 'vue'
import { line } from 'd3'
import { useMouse, type UseMouseEventExtractor } from '@vueuse/core'

const { dataSuffix } = defineProps<{
  dataSuffix: string
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

onMounted(() => {
  listeningElements.value = [...document?.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

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
  a: 6,
  b: 3,
})

const c = computed(() => Math.sqrt(parameters.value.a ** 2 - parameters.value.b ** 2))
const e = computed(() => c.value / parameters.value.a)

const points = computed(() =>
  new Array(360)
    .fill(0)
    .map((_, i) => {
      const x = (i - 200) / 20
      const y = Math.sqrt(1 - x ** 2 / parameters.value.a ** 2) * parameters.value.b
      return { x, y }
    })
    .filter(({ y }) => !isNaN(y)),
)
const lineFn = line<{ x: number; y: number }>(
  d => convertXCoordinateToSvg(d.x),
  d => convertYCoordinateToSvg(d.y),
)
const lineData = computed(() =>
  lineFn([...points.value, ...points.value.toReversed().map(({ x, y }) => ({ x, y: -y }))]),
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
  const py = Math.sqrt(1 - px ** 2 / parameters.value.a ** 2) * parameters.value.b * (y.value < 110 ? 1 : -1)
  if (!isNaN(py)) return { x: px, y: py }
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
const { Component: BPoint } = usePoint(() => ({
  point: convertCoordinatesToSvg({ x: 0, y: parameters.value.b }),
  labelText: 'B',
}))
const { Component: B1Point } = usePoint(() => ({
  point: convertCoordinatesToSvg({ x: 0, y: -parameters.value.b }),
  labelText: 'B₁',
}))
</script>

<template>
  <div class="elipsa">
    <template v-for="(value, key) in parameters" :index="key">
      <input
        v-model="parameters[key]"
        type="range"
        name="p"
        :min="key === 'a' ? parameters.b : 0.1"
        :max="key === 'b' ? parameters.a : 10"
        step="0.01"
      />
      <span class="katex center">
        <span class="katex-html" aria-hidden="true">
          <span class="base">
            <span class="strut" style="height: 0.4306em" />
            <span class="mord mathnormal" style="margin-right: 0.0037em">{{ key }}</span>
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
      <path v-if="lineData" :d="lineData" style="stroke: var(--vp-c-text-1)" stroke-width="2" fill="none" />
      <F1Point />
      <F2Point />
      <APoint />
      <A1Point />
      <BPoint />
      <B1Point />
      <template v-if="pointOnM && isMouseOver">
        <MPoint />
        <F1ToMLine />
        <F2ToMLine />
      </template>
    </svg>
    <p v-if="pointOnM && isMouseOver" class="katex-block">
      <span class="katex-display">
        <span class="katex">
          <span class="katex-html" aria-hidden="true">
            <span class="base">
              <span class="strut" style="height: 1em; vertical-align: -0.25em"></span>
              <span class="mord mathnormal" style="margin-right: 0.10903em">M</span><span class="mopen">(</span>
              <span class="mord">{{ pointOnM.x.toFixed(2) }}</span>
              <span class="mpunct">,</span>
              <span class="mspace" style="margin-right: 0.1667em"></span>
              <span class="mord">{{ pointOnM.y.toFixed(2) }}</span>
              <span class="mclose">)</span>
            </span>
          </span>
        </span>
      </span>
    </p>
  </div>
</template>

<style scoped>
.elipsa {
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
}
</style>
