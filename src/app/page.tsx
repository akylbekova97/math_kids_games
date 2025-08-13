'use client'

import { useState } from 'react'
import { Validation } from './components/Validation'
import { Footer } from './components/Footer'
import { Element } from './components/Elemint'

const STEP = 4
const DATA = [
  {
    value: 1456,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
  },
  {
    value: null,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/1.png',
  },
  {
    value: 1464,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
  },
  {
    value: 1468,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
  },
  {
    value: null,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
  },
  {
    value: null,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
  },
  {
    value: 1480,
    img: 'http://212.112.98.206:9000/development/mathproblem/366/items/3.png',
  },
]

export default function Home() {
  const [data, setData] = useState(DATA)
  const [isTrue, setIsTrue] = useState<boolean | null>(null)

  function submitHandler(e: React.FormEvent) {
    e.preventDefault()

    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1].value
      const curr = data[i].value

      if (prev === null || curr === null) {
        setIsTrue(false)
        return
      }
      if (curr !== prev + STEP) {
        setIsTrue(false)
        return
      }
    }

    setIsTrue(true)
  }

  function inputChangeHanler(
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ) {
    const newValue = e.target.value === '' ? null : Number(e.target.value)
    setData((prev) =>
      prev.map((item, idx) =>
        idx === ind ? { ...item, value: newValue } : item,
      ),
    )
  }

  return (
    <div className='px-[20px]'>
      <h1 className='text-center py-[20px]'>Дополните последовательность</h1>

      <form onSubmit={submitHandler}>
        <div
          className='
          max-w-[1000px]
          h-[400px]
          w-full
          grid
          grid-cols-[13%_13%_13%_13%_13%_13%_13%]
          gap-[13px]
          mx-auto
          
          [@media(max-width:880px)]:grid-cols-[26%_26%_26%]
          [@media(max-width:880px)]:justify-center
          [@media(max-width:880px)]:gap-[10px]
          
          [@media(max-width:580px)]:h-[370px]
          [@media(max-width:580px)]:pt-[0px]
        '
        >
          {data.map((el, ind) => (
            <Element
              key={ind}
              img={el.img}
              value={el.value}
              index={ind}
              onChange={inputChangeHanler}
            />
          ))}
        </div>

        <Validation isTrue={isTrue} />

        <Footer />
      </form>
    </div>
  )
}
