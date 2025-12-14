interface ValidationProps {
  isTrue: boolean | null
}

export function Validation({ isTrue }: ValidationProps) {
  return (
    <div
      className='
        h-[190px]
        pt-[50px]
        [@media(max-width:880px)]:h-[120px]
      '
    >
      {isTrue === null ? (
        <p className='text-[22px]'></p>
      ) : isTrue ? (
        <p
          className='
            block
            text-[22px]
            text-center
            font-medium
            text-[rgb(25,211,38)]
          '
        >
          Даа получился👏
        </p>
      ) : (
        <p
          className='
            block
            text-[22px]
            text-center
            font-medium
            text-[rgb(211,56,25)]
          '
        >
          Не правильно! Попробуйте ещё раз 💪
        </p>
      )}
    </div>
  )
}
