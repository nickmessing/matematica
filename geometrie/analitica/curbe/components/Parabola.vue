<script setup lang="ts">
import { useCoordinates, useLine, usePoint, useText } from '../../../../composables/graphic'
import { computed, onMounted, ref, shallowRef, useTemplateRef } from 'vue'
import { useInteraction } from '../../../../composables/interaction'
import { line, path } from 'd3'
import { useMouse, UseMouseEventExtractor } from '@vueuse/core'

const { dataSuffix } = defineProps<{
  dataSuffix: string
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

onMounted(() => {
  listeningElements.value = [...document?.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

const { selectedElementId } = useInteraction(listeningElements)

const {
  Component: Coordinates,
  convertXCoordinateToSvg,
  convertYCoordinateToSvg,
  covertCoordinatesToSvg,
} = useCoordinates({
  height: 220,
  width: 360,
})

const p = ref(2)

const points = computed(() =>
  new Array(220).fill(0).map((_, i) => {
    const y = (i - 110) / 20
    const x = y ** 2 / (2 * p.value)
    return { x, y }
  }),
)

const { Component: DLine } = useLine(() => ({
  line: {
    start: { x: convertXCoordinateToSvg(-p.value / 2), y: convertYCoordinateToSvg(-110 / 20) },
    end: { x: convertXCoordinateToSvg(-p.value / 2), y: convertYCoordinateToSvg(110 / 20) },
  },
}))
const lineFn = line<{ x: number; y: number }>(
  d => convertXCoordinateToSvg(d.x),
  d => convertYCoordinateToSvg(d.y),
)
const lineData = computed(() => lineFn(points.value))

const { Component: DLineLabel } = useText(() => ({
  text: 'd',
  location: {
    x: convertXCoordinateToSvg(-p.value / 2 - 0.5),
    y: convertYCoordinateToSvg(-5),
  },
}))

const svgReference = useTemplateRef('svg')

const extractor: UseMouseEventExtractor = event => {
  if (event instanceof Touch) return null
  else return [event.offsetX, event.offsetY]
}

const { y } = useMouse({
  target: svgReference,
  type: extractor,
})

const pointOnM = computed(() => {
  const py = (110 - y.value) / 20
  const px = py ** 2 / (2 * p.value)
  return { x: px, y: py }
})

const isMouseOver = ref(false)

const mouseProgress = computed(() => y.value / 220)

const { Component: FPoint } = usePoint(() => ({
  point: covertCoordinatesToSvg({
    x: p.value / 2,
    y: 0,
  }),
  labelText: 'F',
  labelOffset: 15,
  labelAngle: (1 / 4) * Math.PI,
}))
const { Component: OPoint } = usePoint(() => ({
  point: covertCoordinatesToSvg({
    x: 0,
    y: 0,
  }),
  labelText: 'O',
  labelOffset: 15,
  labelAngle: (5 / 4) * Math.PI,
}))

const { Component: MPoint } = usePoint(() => ({
  point: covertCoordinatesToSvg(pointOnM.value),
  labelText: 'M',
  labelAngle: Math.PI - Math.PI * mouseProgress.value,
}))
const { Component: MToDLine } = useLine(() => ({
  line: {
    start: { x: convertXCoordinateToSvg(pointOnM.value.x), y: convertYCoordinateToSvg(pointOnM.value.y) },
    end: { x: convertXCoordinateToSvg(-p.value / 2), y: y.value },
  },
  lineClass: 'dashed',
}))
const { Component: FToMLine } = useLine(() => ({
  line: {
    start: covertCoordinatesToSvg({ x: p.value / 2, y: 0 }),
    end: covertCoordinatesToSvg(pointOnM.value),
  },
  lineClass: 'dashed',
}))
</script>

<template>
  <div class="parabola">
    <input v-model="p" type="range" name="p" min="0.1" max="8" step="0.01" />
    <span class="katex center">
      <span class="katex-html" aria-hidden="true">
        <span class="base">
          <span class="strut" style="height: 0.4306em" />
          <span class="mord mathnormal" style="margin-right: 0.0037em">p</span>
          <span class="mspace" style="margin-right: 0.2778em" />
          <span class="mrel">=</span>
          <span class="mspace" style="margin-right: 0.2778em" />
        </span>
        <span class="base">
          <span class="strut" style="height: 0.6444em" />
          <span class="mord">{{ p }}</span>
        </span>
      </span>
    </span>

    <svg ref="svg" class="same-orientation-1 katex" @mouseenter="isMouseOver = true" @mouseleave="isMouseOver = false">
      <Coordinates />
      <path v-if="lineData" :d="lineData" style="stroke: var(--vp-c-text-1)" stroke-width="2" fill="none" />
      <DLine />
      <DLineLabel />
      <FPoint />
      <MPoint v-if="isMouseOver" />
      <MToDLine v-if="isMouseOver" />
      <FToMLine v-if="isMouseOver" />
      <OPoint />
    </svg>
  </div>
</template>

<style scoped>
.parabola {
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
