<script setup lang="ts">
import { computed, onMounted, shallowRef } from 'vue'
import { useLine, usePoint } from '../../../composables/graphic'
import { useInteraction } from '../../../composables/interaction'

const { dataSuffix, reversed = false } = defineProps<{
  dataSuffix: string
  reversed?: boolean
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

onMounted(() => {
  listeningElements.value = [...document.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

const { selectedElementId } = useInteraction(listeningElements)

const pointsCoordinates = {
  A: { x: 50, y: 30 },
  B: { x: 260, y: 30 },
  C: { x: 100, y: 30 },
  D: { x: 310, y: 30 },
}

const points = computed(() => ({
  A: reversed ? pointsCoordinates.C : pointsCoordinates.A,
  B: reversed ? pointsCoordinates.D : pointsCoordinates.B,
  C: reversed ? pointsCoordinates.A : pointsCoordinates.C,
  D: reversed ? pointsCoordinates.B : pointsCoordinates.D,
}))

const { Component: BigLine } = useLine(() => ({
  line: {
    start: pointsCoordinates.A,
    end: pointsCoordinates.D,
  },
  extensionLength: 40,
  width:
    (!reversed && selectedElementId.value === 'ab-half-line') ||
    (reversed && selectedElementId.value === 'cd-half-line')
      ? 6
      : 2,
  lineClass:
    (!reversed && selectedElementId.value === 'ab-half-line') ||
    (reversed && selectedElementId.value === 'cd-half-line')
      ? 'svg-node-focused'
      : '',
  extensionClass: '',
  extensionWidth: 2,
  extensionClassAfter:
    selectedElementId.value === 'ab-half-line' || selectedElementId.value === 'cd-half-line' ? 'svg-node-focused' : '',
  extensionWidthAfter: selectedElementId.value === 'ab-half-line' || selectedElementId.value === 'cd-half-line' ? 6 : 2,
}))

const { Component: ABLine } = useLine(() => ({
  line: {
    start: points.value.A,
    end: points.value.B,
  },
  width: selectedElementId.value === 'ab-segment' || selectedElementId.value === 'ab-half-line' ? 6 : 2,
  lineClass:
    selectedElementId.value === 'ab-segment' || selectedElementId.value === 'ab-half-line'
      ? 'svg-node-focused'
      : 'svg-node-transparent',
}))
const { Component: CDLine } = useLine(() => ({
  line: {
    start: points.value.C,
    end: points.value.D,
  },
  width: selectedElementId.value === 'cd-segment' || selectedElementId.value === 'cd-half-line' ? 6 : 2,
  lineClass:
    selectedElementId.value === 'cd-segment' || selectedElementId.value === 'cd-half-line'
      ? 'svg-node-focused'
      : 'svg-node-transparent',
}))

const { Component: PointA } = usePoint(() => ({
  point: points.value.A,
  labelText: 'A',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
const { Component: PointB } = usePoint(() => ({
  point: points.value.B,
  labelText: 'B',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))

const { Component: PointC } = usePoint(() => ({
  point: points.value.C,
  labelText: 'C',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
const { Component: PointD } = usePoint(() => ({
  point: points.value.D,
  labelText: 'D',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: 'mathnormal',
}))
</script>

<template>
  <svg class="same-orientation-2 katex">
    <BigLine />
    <ABLine />
    <CDLine />
    <PointA />
    <PointB />
    <PointC />
    <PointD />
  </svg>
</template>

<style scoped>
.same-orientation-2 {
  width: 360px;
  margin: 0 auto;
  height: 60px;
  color: var(--vp-c-text-1);
}
</style>
