interface ValidationProps {
  isTrue: boolean | null
}

export function Validation({ isTrue }: ValidationProps) {
  return (
    <div
      className='
        h-[100px]
        [@media(max-width:880px)]:h-[70px]
        [@media(max-width:880px)]:pt-[40px]
        [@media(max-width:880px)]:pb-[40px]
      '
    >
      {isTrue === null ? null : isTrue ? (
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
          Попробуй ещё раз
        </p>
      )}
    </div>
  )
}
