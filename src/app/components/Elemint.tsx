interface ElementProps {
  img: string
  value: number
  index: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
  isVal: boolean
}

export function Element({ img, value, index, onChange, isVal }: ElementProps) {
  return (
    <div className='relative'>
      <img
        src={img}
        alt='images'
        className='
          max-w-[220px]
          w-full
          mb-[-75px]
          [@media(max-width:580px)]:mb-[-60px]
          [@media(max-width:580px)]:mb-[-10px]
        '
      />

      {isVal ? (
        <p
          className='
          text-[24px]
          text-center
          [@media(max-width:600px)]:mt-[0px]
        '
        >
          {value}
        </p>
      ) : (
        <input
          className='
          w-full
          bg-transparent
          border-none
          outline-none
          z-[100]
          text-[24px]
          text-center
          [@media(max-width:600px)]:mt-[0px]
          [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        '
          value={value === 0 ? '?' : value}
          onChange={(e) => onChange(e, index)}
          type='number'
          placeholder='?'
        />
      )}
    </div>
  )
}
