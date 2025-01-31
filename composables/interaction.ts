import { useEventListener } from '@vueuse/core'
import { computed, MaybeRefOrGetter, onScopeDispose, shallowRef, toRef, watch } from 'vue'

type Listener = {
  element: HTMLElement
  listener: EventListener
  type: string
}

export function useInteraction(elements: MaybeRefOrGetter<HTMLElement[]>) {
  const hoveredElement = shallowRef<HTMLElement>()
  const selectedElement = shallowRef<HTMLElement>()

  const selectedElementId = computed(() => hoveredElement.value?.dataset.id ?? selectedElement.value?.dataset.id)

  const elementsReference = toRef(elements)

  const listenersToRemove = shallowRef<Listener[]>([])

  watch(
    elementsReference,
    elements => {
      for (const listener of listenersToRemove.value) {
        listener.element.removeEventListener(listener.type, listener.listener)
      }
      for (const element of elements) {
        const mouseEnterListener = () => {
          hoveredElement.value = element
        }
        const mouseLeaveListener = () => {
          hoveredElement.value = undefined
        }
        const clickListener = () => {
          selectedElement.value = element
        }
        element.addEventListener('mouseenter', mouseEnterListener)
        element.addEventListener('mouseleave', mouseLeaveListener)
        element.addEventListener('click', clickListener)

        listenersToRemove.value.push(
          { element, listener: mouseEnterListener, type: 'mouseenter' },
          { element, listener: mouseLeaveListener, type: 'mouseleave' },
          { element, listener: clickListener, type: 'click' },
        )
      }
    },
    { immediate: true },
  )

  watch(
    selectedElement,
    (newValue, oldValue) => {
      if (oldValue) {
        oldValue.classList.remove('selected')
      }
      if (newValue) {
        newValue.classList.add('selected')
      }
    },
    {
      immediate: true,
    },
  )

  if (typeof document !== 'undefined') {
    useEventListener(document?.body, 'click', event => {
      if (
        !elementsReference.value.some(element => element.contains(event.target as Node) || element === event.target)
      ) {
        selectedElement.value = undefined
      }
    })
  }

  onScopeDispose(() => {
    for (const listener of listenersToRemove.value) {
      listener.element.removeEventListener(listener.type, listener.listener)
    }
  })

  return {
    hoveredElement,
    selectedElement,
    selectedElementId,
  }
}
