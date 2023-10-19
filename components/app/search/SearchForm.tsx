import { Dispatch, SetStateAction } from 'react'

type IProps = {
  setQueryFilter: Dispatch<SetStateAction<string>>
}

export default function SearchForm({ setQueryFilter }: IProps) {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-rows-1'>
        <div className='grid grid-cols-1'>
          <input
            type='text'
            placeholder='Buscar...'
            className='h-10 rounded-lg indent-2 outline-none'
            onChange={e => {
              setQueryFilter(e.currentTarget.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
