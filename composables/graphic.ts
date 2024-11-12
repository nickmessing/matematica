import { line } from 'd3'
import { computed, h, MaybeRefOrGetter, toRef } from 'vue'
import type { OptionalKeysOf } from 'type-fest'

export type Point = {
  x: number
  y: number
}
export type Line = {
  start: Point
  end: Point
}

const lineFn = line<Point>(
  ({ x }) => x,
  ({ y }) => y,
)

export type UseLineOptions = {
  line: Line
  width?: number
  lineClass?: string
  extensionLength?: number
  extensionWidth?: number
  extensionWidthBefore?: number
  extensionWidthAfter?: number
  extensionClass?: string
  extensionClassBefore?: string
  extensionClassAfter?: string
}
export const defaultUseLineOptions = {
  width: 2,
  extensionLength: 0,
} as const satisfies Pick<UseLineOptions, OptionalKeysOf<UseLineOptions>>
export function useLine(options: MaybeRefOrGetter<UseLineOptions>) {
  const optionsReference = toRef(options)
  const optionsWithDefaults = computed(() => ({
    ...defaultUseLineOptions,
    ...optionsReference.value,
    extensionWidth:
      optionsReference.value.extensionWidth ?? optionsReference.value.width ?? defaultUseLineOptions.width,
  }))

  const lineReference = computed(() => optionsWithDefaults.value.line)

  const path = computed(() => lineFn([lineReference.value.start, lineReference.value.end])!)

  const lineLength = computed(() =>
    Math.sqrt(
      (lineReference.value.end.x - lineReference.value.start.x) ** 2 +
        (lineReference.value.end.y - lineReference.value.start.y) ** 2,
    ),
  )
  const extensionRelativeLength = computed(() => optionsWithDefaults.value.extensionLength / lineLength.value)

  const extensionPointBefore = computed(() => ({
    x:
      optionsWithDefaults.value.line.start.x +
      (optionsWithDefaults.value.line.end.x - optionsWithDefaults.value.line.start.x) * -extensionRelativeLength.value,
    y:
      optionsWithDefaults.value.line.start.y +
      (optionsWithDefaults.value.line.end.y - optionsWithDefaults.value.line.start.y) * -extensionRelativeLength.value,
  }))
  const extensionPointAfter = computed(() => ({
    x:
      optionsWithDefaults.value.line.end.x +
      (optionsWithDefaults.value.line.end.x - optionsWithDefaults.value.line.start.x) * extensionRelativeLength.value,
    y:
      optionsWithDefaults.value.line.end.y +
      (optionsWithDefaults.value.line.end.y - optionsWithDefaults.value.line.start.y) * extensionRelativeLength.value,
  }))

  const extensionBeforeVNode = computed(() =>
    optionsWithDefaults.value.extensionLength
      ? h('path', {
          d: lineFn([lineReference.value.start, extensionPointBefore.value])!,
          stroke: 'currentColor',
          'stroke-width': optionsWithDefaults.value.extensionWidthBefore ?? optionsWithDefaults.value.extensionWidth,
          fill: 'none',
          class: optionsWithDefaults.value.extensionClassBefore ?? optionsWithDefaults.value.extensionClass,
        })
      : undefined,
  )
  const extensionAfterVNode = computed(() =>
    optionsWithDefaults.value.extensionLength
      ? h('path', {
          d: lineFn([lineReference.value.end, extensionPointAfter.value])!,
          stroke: 'currentColor',
          'stroke-width': optionsWithDefaults.value.extensionWidthAfter ?? optionsWithDefaults.value.extensionWidth,
          fill: 'none',
          class: optionsWithDefaults.value.extensionClassAfter ?? optionsWithDefaults.value.extensionClass,
        })
      : undefined,
  )

  const Component = () => [
    h('path', {
      d: path.value,
      stroke: 'currentColor',
      'stroke-width': optionsWithDefaults.value.width,
      fill: 'none',
      class: optionsWithDefaults.value.lineClass,
    }),
    extensionBeforeVNode.value,
    extensionAfterVNode.value,
  ]

  return {
    path,
    lineFn,
    line: lineReference,
    Component,
  }
}

export type UseTextOptions = {
  location: Point
  text?: string
  class?: string
}
export const defaultUseTextOptions = {} as const satisfies Pick<UseTextOptions, OptionalKeysOf<UseTextOptions>>
export function useText(options: MaybeRefOrGetter<UseTextOptions>) {
  const optionsReference = toRef(options)
  const optionsWithDefaults = computed(() => ({ ...defaultUseTextOptions, ...optionsReference.value }))

  const labelVNode = computed(() =>
    optionsWithDefaults.value.text
      ? h(
          'text',
          {
            x: optionsWithDefaults.value.location.x,
            y: optionsWithDefaults.value.location.y,
            fill: 'currentColor',
            'dominant-baseline': 'middle',
            'text-anchor': 'middle',
            class: optionsWithDefaults.value.class,
          },
          optionsWithDefaults.value.text,
        )
      : undefined,
  )

  const Component = () => labelVNode.value

  return {
    Component,
  }
}

export type UsePointOptions = {
  point: Point
  size?: number
  color?: string
  circleClass?: string
  labelText?: string
  labelAngle?: number
  labelOffset?: number
  labelClass?: string
  isCircleHidden?: boolean
}
export const defaultUsePointOptions = {
  size: 5,
  color: 'currentColor',
  labelAngle: 0,
  labelOffset: 20,
} as const satisfies Pick<UsePointOptions, OptionalKeysOf<UsePointOptions>>
export function usePoint(options: MaybeRefOrGetter<UsePointOptions>) {
  const optionsReference = toRef(options)
  const optionsWithDefaults = computed(() => ({ ...defaultUsePointOptions, ...optionsReference.value }))

  const circleVNode = computed(() =>
    h('circle', {
      cx: optionsWithDefaults.value.point.x,
      cy: optionsWithDefaults.value.point.y,
      r: optionsWithDefaults.value.size,
      fill: optionsWithDefaults.value.color,
      class: optionsWithDefaults.value.circleClass,
    }),
  )

  const { Component: LabelComponent } = useText(() => ({
    location: {
      x:
        optionsWithDefaults.value.point.x +
        optionsWithDefaults.value.labelOffset * Math.sin(optionsWithDefaults.value.labelAngle),
      y:
        optionsWithDefaults.value.point.y -
        optionsWithDefaults.value.labelOffset * Math.cos(optionsWithDefaults.value.labelAngle),
    },
    text: optionsWithDefaults.value.labelText,
    class: optionsWithDefaults.value.labelClass,
  }))

  const Component = () => [optionsWithDefaults.value.isCircleHidden ? null : circleVNode.value, LabelComponent()]

  return {
    Component,
  }
}

export type UseCoordinatesOptions = {
  height: number
  width: number
  origin?: Point
}
export function useCoordinates(options: MaybeRefOrGetter<UseCoordinatesOptions>) {
  const optionsReference = toRef(options)

  const xLeft = computed(() => 0)
  const xRight = computed(() => optionsReference.value.width)
  const yTop = computed(() => 0)
  const yBottom = computed(() => optionsReference.value.height)

  const originX = computed(() => optionsReference.value.origin?.x ?? xRight.value / 2)
  const originY = computed(() => optionsReference.value.origin?.y ?? yBottom.value / 2)

  const { Component: XLineComponent } = useLine(() => ({
    line: {
      start: { x: xLeft.value, y: originY.value },
      end: { x: xRight.value, y: originY.value },
    },
    width: 1,
  }))
  const { Component: YLineComponent } = useLine(() => ({
    line: {
      start: { x: originX.value, y: yTop.value },
      end: { x: originX.value, y: yBottom.value },
    },
    width: 1,
  }))
  const { Component: XLineArrowUpHalf } = useLine(() => ({
    line: {
      start: { x: xRight.value, y: originY.value },
      end: { x: xRight.value - 10, y: originY.value - 5 },
    },
    width: 1,
  }))
  const { Component: XLineArrowDownHalf } = useLine(() => ({
    line: {
      start: { x: xRight.value, y: originY.value },
      end: { x: xRight.value - 10, y: originY.value + 5 },
    },
    width: 1,
  }))
  const { Component: YLineArrowLeftHalf } = useLine(() => ({
    line: {
      start: { x: originX.value, y: yTop.value },
      end: { x: originX.value - 5, y: yTop.value + 10 },
    },
    width: 1,
  }))
  const { Component: YLineArrowRightHalf } = useLine(() => ({
    line: {
      start: { x: originX.value, y: yTop.value },
      end: { x: originX.value + 5, y: yTop.value + 10 },
    },
    width: 1,
  }))

  const { Component: XLabel } = usePoint(() => ({
    point: { x: xRight.value, y: originY.value },
    labelText: 'x',
    labelAngle: (5 / 4) * Math.PI,
    labelOffset: 20,
    isCircleHidden: true,
  }))
  const { Component: YLabel } = usePoint(() => ({
    point: { x: originX.value, y: yTop.value },
    labelText: 'y',
    labelAngle: (3 / 4) * Math.PI,
    labelOffset: 20,
    isCircleHidden: true,
  }))

  const { Component: X1Point } = usePoint(() => ({
    point: { x: originX.value + 20, y: originY.value },
    labelText: '1',
    labelAngle: Math.PI,
    labelOffset: 20,
  }))
  const { Component: Y1Point } = usePoint(() => ({
    point: { x: originX.value, y: originY.value - 20 },
    labelText: '1',
    labelAngle: (3 / 2) * Math.PI,
    labelOffset: 10,
  }))

  const Component = () => [
    XLineComponent(),
    YLineComponent(),
    XLineArrowDownHalf(),
    XLineArrowUpHalf(),
    XLabel(),
    YLineArrowLeftHalf(),
    YLineArrowRightHalf(),
    YLabel(),
    X1Point(),
    Y1Point(),
  ]

  function convertXCoordinateToSvg(x: number) {
    return x * 20 + originX.value
  }

  function convertYCoordinateToSvg(y: number) {
    return -y * 20 + originY.value
  }

  function convertCoordinatesToSvg({ x, y }: Point) {
    return { x: convertXCoordinateToSvg(x), y: convertYCoordinateToSvg(y) }
  }

  return { Component, convertCoordinatesToSvg, convertXCoordinateToSvg, convertYCoordinateToSvg }
}
