'use client'

import CloseIcon from '@mui/icons-material/Close'
import { useRef, useState } from 'react'

function InputSearch() {
  const [searchValue, setSearchValue] = useState('') // State to store the search input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value) // Update the searchValue state when input changes
  }
  const inputRef = useRef<HTMLInputElement | null>(null) // Ref to store the input element reference

  const handleClear = () => {
    setSearchValue('') // Clear the search input value
    inputRef?.current?.focus() // Focus on the input element after clearing
  }

  return (
    <div className='w-full lg:w-[400px] relative'>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={handleChange}
        placeholder='Search'
        className='rounded-[8px] w-full ease-in-out duration-300 bg-transparent overflow-hidden px-4 py-2 text-[#666d85] focus:text-white border-[2px] border-[#262b42] focus:border-[#505770]'
      />
      {searchValue?.length > 0 && ( // Show clear button only when searchValue has length
        <div
          className='absolute right-2 cursor-pointer top-1/2 -translate-y-1/2'
          onClick={handleClear}
        >
          <CloseIcon className='text-white' />
        </div>
      )}
    </div>
  )
}

export default InputSearch
