<script setup lang="ts">
import { useLine, usePoint, useText } from '../../../composables/graphic'
import { computed, onMounted, shallowRef } from 'vue'
import { useInteraction } from '../../../composables/interaction'

const { dataSuffix } = defineProps<{
  dataSuffix: string
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

onMounted(() => {
  listeningElements.value = [...document.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

const { selectedElementId } = useInteraction(listeningElements)

const graphLines = {
  vertical: {
    leftDistance: 40,
    from: 20,
    to: 200,
  },
  horizontal: {
    topDistance: 180,
    from: 20,
    to: 320,
  },
}

const vectorSpace = {
  x: 100,
  y: 40,
}

const pointPY = computed(() => ({
  x: graphLines.vertical.leftDistance,
  y: graphLines.vertical.from,
}))
const pointPY1 = computed(() => ({
  x: graphLines.vertical.leftDistance,
  y: graphLines.vertical.to,
}))
const pointPX = computed(() => ({
  x: graphLines.horizontal.from,
  y: graphLines.horizontal.topDistance,
}))
const pointPX1 = computed(() => ({
  x: graphLines.horizontal.to,
  y: graphLines.horizontal.topDistance,
}))
const pointO = computed(() => ({
  x: graphLines.vertical.leftDistance,
  y: graphLines.horizontal.topDistance,
}))
const pointA = computed(() => ({
  x: pointO.value.x + 60,
  y: pointO.value.y - 40,
}))
const pointB = computed(() => ({
  x: pointA.value.x + vectorSpace.x,
  y: pointA.value.y - vectorSpace.y,
}))
const pointX1 = computed(() => ({
  x: pointA.value.x + 20,
  y: pointA.value.y - 60,
}))
const pointY1 = computed(() => ({
  x: pointX1.value.x + vectorSpace.x,
  y: pointX1.value.y - vectorSpace.y,
}))
const pointX2 = computed(() => ({
  x: pointA.value.x + 100,
  y: pointA.value.y + 30,
}))
const pointY2 = computed(() => ({
  x: pointX2.value.x + vectorSpace.x,
  y: pointX2.value.y - vectorSpace.y,
}))

const { Component: PYLine } = useLine(() => ({
  line: {
    start: pointPY.value,
    end: pointPY1.value,
  },
}))
const { Component: PXLine } = useLine(() => ({
  line: {
    start: pointPX.value,
    end: pointPX1.value,
  },
}))
const { Component: ABLine } = useLine(() => ({
  line: {
    start: pointA.value,
    end: pointB.value,
  },
  width: selectedElementId.value === 'ab-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'ab-segment' ? 'svg-node-focused' : '',
}))
const { Component: X1Y1Line } = useLine(() => ({
  line: {
    start: pointX1.value,
    end: pointY1.value,
  },
  width: selectedElementId.value === 'xy-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'xy-segment' ? 'svg-node-focused' : '',
}))
const { Component: X2Y2Line } = useLine(() => ({
  line: {
    start: pointX2.value,
    end: pointY2.value,
  },
  width: selectedElementId.value === 'xy-segment' ? 6 : 2,
  lineClass: selectedElementId.value === 'xy-segment' ? 'svg-node-focused' : '',
}))

const { Component: PYText } = useText(() => ({
  text: 'P',
  location: {
    x: pointPY1.value.x + 10,
    y: pointPY1.value.y + 10,
  },
}))
const { Component: PXText } = useText(() => ({
  text: 'P',
  location: {
    x: pointPX1.value.x - 10,
    y: pointPX1.value.y + 12,
  },
}))
const { Component: OPoint } = usePoint(() => ({
  point: pointO.value,
  labelText: 'O',
  labelAngle: (1 / 4) * Math.PI,
}))
const { Component: APoint } = usePoint(() => ({
  point: pointA.value,
  labelText: 'A',
  labelAngle: (7 / 4) * Math.PI,
}))
const { Component: BPoint } = usePoint(() => ({
  point: pointB.value,
  labelText: 'B',
  labelAngle: (7 / 4) * Math.PI,
}))
const { Component: X1Point } = usePoint(() => ({
  point: pointX1.value,
  labelText: 'X',
  labelAngle: (7 / 4) * Math.PI,
}))
const { Component: Y1Point } = usePoint(() => ({
  point: pointY1.value,
  labelText: 'Y',
  labelAngle: (7 / 4) * Math.PI,
}))
const { Component: X2Point } = usePoint(() => ({
  point: pointX2.value,
  labelText: 'X',
  labelAngle: (7 / 4) * Math.PI,
}))
const { Component: Y2Point } = usePoint(() => ({
  point: pointY2.value,
  labelText: 'Y',
  labelAngle: (7 / 4) * Math.PI,
}))
</script>

<template>
  <svg class="same-orientation-1 katex">
    <PYLine />
    <PXLine />
    <ABLine />
    <X1Y1Line />
    <X2Y2Line />
    <PYText />
    <PXText />
    <OPoint />
    <APoint />
    <BPoint />
    <X1Point />
    <Y1Point />
    <X2Point />
    <Y2Point />
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
