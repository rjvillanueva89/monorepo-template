import { useCallback, useState } from 'react'

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  const open = () => setState(true)
  const close = () => setState(false)
  const toggle = useCallback(() => {
    setState((currentState) => !currentState)
  }, [])

  return {
    state,
    open,
    close,
    toggle,
  }
}

export default useToggle
