'use client'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Validation } from '../components/Validation'
import { AnswerInput } from '../components/AnswerInput'
import { PillGroup } from '../components/PillGroup'
import { useRouter } from 'next/navigation'

export default function Page2() {
  const [data, setData] = useState<number | null>(null)
  const [input, setInput] = useState<string>('')
  const [repeat, setRepeat] = useState<boolean>(false)
  const [isTrue, setIsTrue] = useState<boolean | null>(null)

  const router = useRouter()

  function getRandom4Digits() {
    return Math.floor(1000 + Math.random() * 9000)
  }

  useEffect(() => {
    setData(getRandom4Digits())
  }, [repeat])

  function submitHandler(e: React.FormEvent) {
    e.preventDefault()
    if (Math.round((data ?? 0) / 10) * 10 === +input) {
      setIsTrue(true)
      setTimeout(() => {
        setInput('')
        setIsTrue(null)
        setRepeat(!repeat)
      }, 2000)
    } else {
      setIsTrue(false)
      setTimeout(() => {
        setInput('')
        setIsTrue(null)
      }, 4000)
    }
  }

  return (
    <section
      className='px-[20px] h-screen flex flex-col
      justify-evenly gap-[20px]'
    >
      <h1
        className='
        text-center
        h-[30px]
        pt-[10px]
      '
      >
        {data} округлите число до ближайшего десятка
      </h1>
      <p className='text-[20px] text-center'>Игра: Округляйка 🎞️</p>

      <div>
        <PillGroup />

        <div
          style={{
            borderColor: 'rgb(231, 185, 120)',
            color: 'rgb(229, 183, 120)',
          }}
          className='
        max-w-[480px]
        w-[80%]
        h-[170px]
        bg-[white]
        flex
        justify-center
        items-center
        text-[36px]
        font-[900]
        mx-auto 
        border-[15px]    
        border-solid      
        rounded-[10px]    
        mb-[10px]
        mt-[-25px]
      '
        >
          {data}
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <AnswerInput value={input} onChange={(e) => setInput(e.target.value)} />

        <div className='h-[140px]'>
          <Validation isTrue={isTrue} />
        </div>

        <Footer
          rightClick={() => {
            setRepeat(!repeat)
          }}
          leftClick={() => router.push('/')}
          rightText={'обновить'}
          leftText={'Числовая цепочка 🔗'}
        />
      </form>
    </section>
  )
}
