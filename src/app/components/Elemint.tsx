interface ElementProps {
  img: string
  value: number | null
  index: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

export function Element({ img, value, index, onChange }: ElementProps) {
  return (
    <div className='relative'>
      <img
        src={img}
        alt='images'
        className='
          max-w-[220px]
          w-full
          mb-[-75px]
          [@media(max-width:880px)]:mb-[-90px]
          [@media(max-width:580px)]:mb-[-10px]
        '
      />
      <input
        className='
          w-full
          bg-transparent
          border-none
          outline-none
          z-[100]
          text-[18px]
          text-center
          [@media(max-width:600px)]:mt-[30px]
        '
        value={value === null ? '' : value}
        onChange={(e) => onChange(e, index)}
        type='number'
        placeholder='?'
      />
    </div>
  )
}
