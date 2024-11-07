<script setup lang="ts">
import { useLine, usePoint, useText } from '../../../composables/graphic'
import { computed, onMounted, ref, shallowRef } from 'vue'
import { useInteraction } from '../../../composables/interaction'

const { dataSuffix } = defineProps<{
  dataSuffix: string
}>()

const listeningElements = shallowRef<HTMLElement[]>([])

const alpha = ref(0.2)

onMounted(() => {
  listeningElements.value = [...document.querySelectorAll<HTMLElement>(`[data-${dataSuffix}]`)]
})

const { selectedElementId } = useInteraction(listeningElements)

const LINE_LENGTH = 75

const pointOCoordinates = computed(() => ({
  x: 30,
  y: 30,
}))
const pointACoordinates = computed(() => ({
  x: pointOCoordinates.value.x + LINE_LENGTH,
  y: 30,
}))
const pointBCoordinates = computed(() => ({
  x: alpha.value * LINE_LENGTH + 30,
  y: 30,
}))

const isOAHighlighted = computed(() => selectedElementId.value === 'oa-segment')
const isOASemiLineHighlighted = computed(() => selectedElementId.value === 'oa-semi-line')
const isBHighlighted = computed(() => selectedElementId.value === 'b-point')
const isOBHighlighted = computed(() => selectedElementId.value === 'ob-segment')

const { Component: APoint } = usePoint(() => ({
  point: pointACoordinates.value,
  labelText: 'A',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: isOAHighlighted.value ? 'svg-node-focused mathnormal' : 'mathnormal',
  circleClass: isOAHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: BPoint } = usePoint(() => ({
  point: pointBCoordinates.value,
  labelText: 'B',
  labelAngle: (7 / 4) * Math.PI,
  labelClass: isBHighlighted.value ? 'svg-node-focused mathnormal' : 'mathnormal',
  circleClass: isBHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: OPoint } = usePoint(() => ({
  point: pointOCoordinates.value,
  labelText: 'O',
  labelAngle: (7 / 4) * Math.PI,
  labelClass:
    isOAHighlighted.value || isOASemiLineHighlighted.value || isOBHighlighted.value
      ? 'svg-node-focused mathnormal'
      : 'mathnormal',
  circleClass:
    isOAHighlighted.value || isOASemiLineHighlighted.value || isOBHighlighted.value ? 'svg-node-focused' : '',
}))

const { Component: OASegment } = useLine(() => ({
  line: {
    start: pointOCoordinates.value,
    end: pointACoordinates.value,
  },
  width: isOAHighlighted.value ? 4 : 2,
  lineClass: isOAHighlighted.value ? 'svg-node-focused' : '',
}))
const { Component: OASemiLine } = useLine(() => ({
  line: {
    start: pointOCoordinates.value,
    end: {
      x: 360,
      y: pointOCoordinates.value.y,
    },
  },
  width: isOASemiLineHighlighted.value ? 4 : 2,
  lineClass: isOASemiLineHighlighted.value ? 'svg-node-focused' : 'svg-node-transparent',
}))
const { Component: OBSegment } = useLine(() => ({
  line: {
    start: pointOCoordinates.value,
    end: pointBCoordinates.value,
  },
  width: isOBHighlighted.value ? 4 : 2,
  lineClass: isOBHighlighted.value ? 'svg-node-focused' : '',
}))
</script>

<template>
  <div class="produs">
    <input v-model="alpha" type="range" name="alpha" min="0.1" max="4" step="0.01" />
    <span class="katex center">
      <span class="katex-html" aria-hidden="true">
        <span class="base">
          <span class="strut" style="height: 0.4306em" />
          <span class="mord mathnormal" style="margin-right: 0.0037em">α</span>
          <span class="mspace" style="margin-right: 0.2778em" />
          <span class="mrel">=</span>
          <span class="mspace" style="margin-right: 0.2778em" />
        </span>
        <span class="base">
          <span class="strut" style="height: 0.6444em" />
          <span class="mord">{{ alpha }}</span>
        </span>
      </span>
    </span>
    <svg class="produs-vector katex">
      <template v-if="isOBHighlighted">
        <OASegment />
        <OBSegment />
      </template>
      <template v-else>
        <OBSegment />
        <OASegment />
      </template>
      <OASemiLine />
      <APoint />
      <BPoint />
      <OPoint />
    </svg>
  </div>
</template>

<style scoped>
.produs {
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin: 0 auto;

  .produs-vector {
    width: 360px;
    height: 60px;
    color: var(--vp-c-text-1);
  }
}
</style>
