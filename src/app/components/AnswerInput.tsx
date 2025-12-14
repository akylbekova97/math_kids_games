interface AnswerInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AnswerInput: React.FC<AnswerInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className='max-w-[350px] w-full h-[60px] flex items-center gap-[20px] mx-auto justify-around mb-[-50px]'>
      <p className='text-[26px]'>Ответ:</p>
      <input
        value={value}
        onChange={onChange}
        className='max-w-[200px] w-full p-[10px] text-[18px] outline-none border-none rounded-[10px] [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        type='number'
      />
    </div>
  )
}
