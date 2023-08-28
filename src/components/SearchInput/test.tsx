import { render, fireEvent, act } from '@testing-library/react'
import { SearchInput } from './SearchInput' // Adjust the path accordingly
import { vi } from 'vitest'

describe('<SearchInput />', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchInput onDebounce={() => {}} placeholder="Search" />
    )
    expect(getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('calls onDebounce with debounced value', async () => {
    vi.useFakeTimers()
    const onDebounceMock = vi.fn()

    const { getByPlaceholderText } = render(
      <SearchInput onDebounce={onDebounceMock} placeholder="Search" />
    )

    act(() => {
      fireEvent.change(getByPlaceholderText('Search'), {
        target: { value: 'React' }
      })
      vi.advanceTimersByTime(500) // advance by the debounce time
    })

    expect(onDebounceMock).toHaveBeenCalledWith('React')
  })
})
