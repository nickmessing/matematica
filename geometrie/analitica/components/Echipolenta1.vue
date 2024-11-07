<script setup lang="ts">
import { useLine, usePoint } from '../../../composables/graphic'
import { onMounted, shallowRef } from 'vue'
import { useInteraction } from '../../../composables/interaction'

const { dataSuffix } = defineProps<{
  dataSuffix: string
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

onMounted(() => {
  listeningElements.value = [...document.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

const { selectedElementId } = useInteraction(listeningElements)

const points = {
  A: { x: 40, y: 40 },
  B: { x: 320, y: 40 },
  C: { x: 40, y: 180 },
  D: { x: 320, y: 180 },
}
//Lines: AB, CD, AD, BC
const { Component: ABLine } = useLine(() => ({
  line: {
    start: points.A,
    end: points.B,
  },
  width: selectedElementId.value === 'ab-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'ab-segment' ? 'svg-node-focused' : '',
}))
const { Component: CDLine } = useLine(() => ({
  line: {
    start: points.C,
    end: points.D,
  },
  width: selectedElementId.value === 'cd-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'cd-segment' ? 'svg-node-focused' : '',
}))
const { Component: ADLine } = useLine(() => ({
  line: {
    start: points.A,
    end: points.D,
  },
  width: selectedElementId.value === 'ad-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'ad-segment' ? 'svg-node-focused' : '',
}))
const { Component: BCLine } = useLine(() => ({
  line: {
    start: points.B,
    end: points.C,
  },
  width: selectedElementId.value === 'bc-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'bc-segment' ? 'svg-node-focused' : '',
}))

const { Component: PointA } = usePoint(() => ({
  point: points.A,
  labelText: 'A',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
const { Component: PointB } = usePoint(() => ({
  point: points.B,
  labelText: 'B',
  labelAngle: (1 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
const { Component: PointC } = usePoint(() => ({
  point: points.C,
  labelText: 'C',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
const { Component: PointD } = usePoint(() => ({
  point: points.D,
  labelText: 'D',
  labelAngle: (1 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
const { Component: PointM } = usePoint(() => ({
  point: { x: 180, y: 110 },
  labelText: 'M',
  circleClass: selectedElementId.value === 'm-point' ? 'svg-node-focused' : '',
  labelClass: selectedElementId.value === 'm-point' ? 'svg-node-focused mathnormal' : 'mathnormal',
}))
</script>

<template>
  <svg class="same-orientation-1 katex">
    <ABLine />
    <CDLine />
    <ADLine />
    <BCLine />
    <PointA />
    <PointB />
    <PointC />
    <PointD />
    <PointM />
  </svg>
</template>

<style scoped>
.same-orientation-1 {
  width: 360px;
  margin: 0 auto;
  height: 220px;
  color: var(--vp-c-text-1);
}
</style>
