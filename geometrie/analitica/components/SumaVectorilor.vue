<script setup lang="ts">
import { useLine, usePoint, useText } from '../../../composables/graphic'
import { computed, onMounted, shallowRef } from 'vue'
import { useInteraction } from '../../../composables/interaction'

const { dataSuffix } = defineProps<{
  dataSuffix: string
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

onMounted(() => {
  listeningElements.value = [...document?.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

const { selectedElementId } = useInteraction(listeningElements)

const coordinates = {
  A: {
    x: 60,
    y: 110,
  },
  B: {
    x: 220,
    y: 70,
  },
  C: {
    x: 280,
    y: 150,
  },
}
const xLocation = {
  x: (coordinates.A.x + coordinates.B.x) / 2,
  y: (coordinates.A.y + coordinates.B.y) / 2,
}
const yLocation = {
  x: (coordinates.B.x + coordinates.C.x) / 2,
  y: (coordinates.B.y + coordinates.C.y) / 2,
}
const zLocation = {
  x: (coordinates.C.x + coordinates.A.x) / 2,
  y: (coordinates.C.y + coordinates.A.y) / 2,
}

const isABHighlighted = computed(() => selectedElementId.value === 'ab-line')
const isBCHighlighted = computed(() => selectedElementId.value === 'bc-line')
const isACHighlighted = computed(() => selectedElementId.value === 'ac-line')
const isAHighlighted = computed(() => selectedElementId.value === 'a-point')
const isBHighlighted = computed(() => selectedElementId.value === 'b-point')
const isCHighlighted = computed(() => selectedElementId.value === 'c-point')
const isXHighlighted = computed(() => selectedElementId.value === 'x-line')
const isYHighlighted = computed(() => selectedElementId.value === 'y-line')
const isZHighlighted = computed(() => selectedElementId.value === 'z-line')

const { Component: APoint } = usePoint(() => ({
  point: coordinates.A,
  labelText: 'A',
  labelAngle: (7 / 4) * Math.PI,
  labelClass:
    isABHighlighted.value || isACHighlighted.value || isAHighlighted.value
      ? 'svg-node-focused mathnormal'
      : 'mathnormal',
  circleClass: isABHighlighted.value || isACHighlighted.value || isAHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: BPoint } = usePoint(() => ({
  point: coordinates.B,
  labelText: 'B',
  labelAngle: (1 / 4) * Math.PI,
  labelClass:
    isABHighlighted.value || isBCHighlighted.value || isBHighlighted.value
      ? 'svg-node-focused mathnormal'
      : 'mathnormal',
  circleClass: isABHighlighted.value || isBCHighlighted.value || isBHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: CPoint } = usePoint(() => ({
  point: coordinates.C,
  labelText: 'C',
  labelAngle: (3 / 4) * Math.PI,
  labelClass:
    isACHighlighted.value || isBCHighlighted.value || isCHighlighted.value
      ? 'svg-node-focused mathnormal'
      : 'mathnormal',
  circleClass: isACHighlighted.value || isBCHighlighted.value || isCHighlighted.value ? 'svg-node-focused' : '',
}))

const { Component: ABLine } = useLine(() => ({
  line: {
    start: coordinates.A,
    end: coordinates.B,
  },
  width: isABHighlighted.value || isXHighlighted.value ? 6 : 2,
  lineClass: isABHighlighted.value || isXHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: BCLine } = useLine(() => ({
  line: {
    start: coordinates.B,
    end: coordinates.C,
  },
  width: isBCHighlighted.value || isYHighlighted.value ? 6 : 2,
  lineClass: isBCHighlighted.value || isYHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: CALine } = useLine(() => ({
  line: {
    start: coordinates.C,
    end: coordinates.A,
  },
  width: isACHighlighted.value || isZHighlighted.value ? 6 : 2,
  lineClass: isACHighlighted.value || isZHighlighted.value ? 'svg-node-focused' : '',
}))

const { Component: XLineNotation } = useText(() => ({
  location: xLocation,
  text: 'x',
  class: isXHighlighted.value ? 'mathbf svg-node-focused' : 'mathbf',
}))
const { Component: YLineNotation } = useText(() => ({
  location: yLocation,
  text: 'y',
  class: isYHighlighted.value ? 'mathbf svg-node-focused' : 'mathbf',
}))
const { Component: ZLineNotation } = useText(() => ({
  location: zLocation,
  text: 'z = x + y',
  class: isZHighlighted.value ? 'mathbf svg-node-focused' : 'mathbf',
}))
</script>

<template>
  <svg class="same-orientation-1 katex">
    <ABLine />
    <BCLine />
    <CALine />
    <APoint />
    <BPoint />
    <CPoint />
    <XLineNotation class="x" />
    <YLineNotation class="y" />
    <ZLineNotation class="z" />
  </svg>
</template>

<style scoped>
.same-orientation-1 {
  width: 360px;
  margin: 0 auto;
  height: 220px;
  color: var(--vp-c-text-1);

  .x {
    transform-box: fill-box;
    transform-origin: center;
    transform: translate(4px, -10px) rotateZ(-20deg);
  }

  .y {
    transform-box: fill-box;
    transform-origin: center;
    transform: translate(7px, -3px) rotateZ(-37deg);
  }

  .z {
    transform-box: fill-box;
    transform-origin: center;
    transform: translate(4px, 13px) rotateZ(10deg);
  }
}
</style>
