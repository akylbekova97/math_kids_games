interface Props {
  rightClick: () => void
  leftClick: () => void
  rightText: string
  leftText: string
}

export function Footer({ rightClick, leftClick, rightText, leftText }: Props) {
  return (
    <footer
      className='
        max-w-[700px]
        w-full
        flex
        justify-between
        mx-auto
        gap-[8px]
      '
    >
      <button
        className='
          cursor-pointer
          py-[10px]
          px-[15px]
          border-none
          rounded-[5px]
          bg-[rgb(150,188,231)]
          text-[16px]
        '
        type='button'
        onClick={leftClick}
      >
        {leftText}
      </button>

      <button
        className='
          cursor-pointer
          text-[16px]
          text-[rgb(255,255,255)]
          w-full
          py-[10px]
          px-[15px]
          border-none
          rounded-[5px]
          bg-[rgb(173,128,216)]
        '
        type='submit'
      >
        Проверить
      </button>

      <button
        className='
          cursor-pointer
          py-[10px]
          px-[15px]
          border-none
          rounded-[5px]
          bg-[rgb(150,188,231)]
          text-[16px]
        '
        type='button'
        onClick={rightClick}
      >
        {rightText}
      </button>
    </footer>
  )
}
