'use client'

import { useEffect, useState } from 'react'
import { Validation } from './components/Validation'
import { Footer } from './components/Footer'
import { Element } from './components/Elemint'
import { useRouter } from 'next/navigation'

const STEP = 4

interface DataItem {
  value: number
  img: string
  isVal: boolean
}
interface FormData {
  1: number
  3: number
  4: number
  7: number
}

export default function Home() {
  const [data, setData] = useState<DataItem[]>([
    {
      value: 1,
      img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
      isVal: true,
    },
  ])

  const [num, setNum] = useState<number>(getRandom4Digits())
  const [isTrue, setIsTrue] = useState<boolean | null>(null)
  const [repeat, setRepeat] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    1: num,
    3: num + STEP * 2,
    4: num + STEP * 3,
    7: num + STEP * 6,
  })

  const router = useRouter()

  function getRandom4Digits() {
    return Math.floor(1000 + Math.random() * 9000)
  }

  useEffect(() => {
    setNum(getRandom4Digits())
  }, [repeat])

  useEffect(() => {
    setFormData({
      1: num,
      3: num + STEP * 2,
      4: num + STEP * 3,
      7: num + STEP * 6,
    })
  }, [num])

  useEffect(() => {
    setData([
      {
        value: formData[1],
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
        isVal: true,
      },
      {
        value: 0,
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/1.png',
        isVal: false,
      },
      {
        value: formData[3],
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
        isVal: true,
      },
      {
        value: formData[4],
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
        isVal: true,
      },
      {
        value: 0,
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
        isVal: false,
      },
      {
        value: 0,
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
        isVal: false,
      },
      {
        value: formData[7],
        img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
        isVal: true,
      },
    ])
  }, [num])

  function submitHandler(e: React.FormEvent) {
    e.preventDefault()

    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1].value
      const curr = data[i].value

      if (prev === null || curr === null) {
        setIsTrue(false)
        setTimeout(() => {
          setIsTrue(null)
        }, 4000)
        return
      }
      if (curr !== prev + STEP) {
        setIsTrue(false)
        setTimeout(() => {
          setIsTrue(null)
        }, 4000)
        return
      }
    }

    setIsTrue(true)
    setTimeout(() => {
      setRepeat((prev) => !prev)
      setIsTrue(null)
    }, 2000)
  }

  function inputChangeHanler(
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ) {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value)
    setData((prev) =>
      prev.map((item, idx) =>
        idx === ind ? { ...item, value: newValue } : item,
      ),
    )
  }

  return (
    <div
      className='px-[20px] h-screen flex flex-col
      justify-evenly '
    >
      <h1 className='text-center '>Дополните последовательность</h1>
      <p className='text-[20px] text-center'>Игра: Числовая цепочка 🔗</p>
      <form onSubmit={submitHandler}>
        <div>
          <div
            className='
          max-w-[1000px]
          w-full
          grid
          grid-cols-[13%_13%_13%_13%_13%_13%_13%]
          gap-[15px]
          mx-auto
          pb-[60]

          [@media(max-width:880px)]:grid-cols-[20%_20%_20%]
          [@media(max-width:880px)]:justify-center
          [@media(max-width:880px)]:gap-[30px]
          [@media(max-width:880px)]:pb-[0px]
        '
          >
            {data.map((el, ind) => (
              <Element
                key={ind}
                img={el.img}
                value={el.value}
                index={ind}
                isVal={el.isVal}
                onChange={inputChangeHanler}
              />
            ))}
          </div>

          <Validation isTrue={isTrue} />

          <Footer
            leftClick={() => router.push('page2')}
            rightClick={() => {
              setRepeat((prev) => !prev)
              setIsTrue(null)
            }}
            rightText='обновить'
            leftText='Округляйка 🎞️'
          />
        </div>
      </form>
    </div>
  )
}
