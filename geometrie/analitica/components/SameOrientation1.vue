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
  A: { x: 52, y: 108 },
  B: { x: 308, y: 32 },
  C: { x: 52, y: 168 },
  D: { x: 308, y: 92 },
}

const { Component: ABLine } = useLine(() => ({
  line: {
    start: points.A,
    end: points.B,
  },
  extensionLength: 40,
  width: selectedElementId.value === 'ab-line' || selectedElementId.value === 'ab-segment' ? 6 : 2,
  lineClass:
    selectedElementId.value === 'ab-line' || selectedElementId.value === 'ab-segment' ? 'svg-node-focused' : '',
  extensionWidth: selectedElementId.value === 'ab-line' ? 6 : 2,
  extensionClass: selectedElementId.value === 'ab-line' ? 'svg-node-focused' : '',
}))
const { Component: CDLine } = useLine(() => ({
  line: {
    start: points.C,
    end: points.D,
  },
  extensionLength: 40,
  width: selectedElementId.value === 'cd-line' || selectedElementId.value === 'cd-segment' ? 6 : 2,
  lineClass:
    selectedElementId.value === 'cd-line' || selectedElementId.value === 'cd-segment' ? 'svg-node-focused' : '',
  extensionWidth: selectedElementId.value === 'cd-line' ? 6 : 2,
  extensionClass: selectedElementId.value === 'cd-line' ? 'svg-node-focused' : '',
}))
const { Component: ACLine } = useLine(() => ({
  line: {
    start: points.A,
    end: points.C,
  },
  extensionLength: 40,
  width: selectedElementId.value === 'ac-line' ? 6 : 2,
  lineClass: selectedElementId.value === 'ac-line' ? 'svg-node-focused' : '',
  extensionWidth: selectedElementId.value === 'ac-line' ? 6 : 2,
  extensionClass: selectedElementId.value === 'ac-line' ? 'svg-node-focused' : '',
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
  labelAngle: (7 / 4) * Math.PI,
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
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
</script>

<template>
  <svg class="same-orientation-1 katex">
    <rect
      x="52"
      y="0"
      width="308"
      height="220"
      class="semiplan"
      :class="{ active: selectedElementId === 'semiplan' }"
    />
    <ABLine />
    <CDLine />
    <ACLine />
    <PointA />
    <PointB />
    <PointC />
    <PointD />
  </svg>
</template>

<style scoped>
.same-orientation-1 {
  width: 360px;
  margin: 0 auto;
  height: 220px;
  color: var(--vp-c-text-1);

  .semiplan {
    fill: var(--vp-c-bg-alt);
    opacity: 0;

    &.active {
      opacity: 1;
    }
  }
}
</style>
