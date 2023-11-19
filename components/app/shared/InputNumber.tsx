import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface IInputNumber {
  quantity: number
  min?: number
  max?: number
  dispatchQuantity: Dispatch<SetStateAction<number>>
}

export default function InputNumber({
  quantity,
  min,
  dispatchQuantity,
}: IInputNumber) {
  const handleAsc = () => {
    dispatchQuantity(quantity + 1)
  }

  const handleDec = () => {
    if (quantity > min!) {
      dispatchQuantity(quantity - 1)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchQuantity(Number(e.currentTarget.value))
  }

  return (
    <div className='flex items-center justify-center border border-stone-200 rounded-lg h-10'>
      <button className='h-10 w-10 rounded-l-full' onClick={handleDec}>
        -
      </button>
      <input
        type='text'
        value={quantity}
        className='outline-none border-0 w-1/2 border-transparent text-center'
        onChange={handleChange}
      />
      <button className='h-10 w-10 rounded-r-full' onClick={handleAsc}>
        +
      </button>
    </div>
  )
}
