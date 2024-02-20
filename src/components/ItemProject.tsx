import React from 'react'

type Props = {
  id: number
  mainUrl: string
  title: string
  description: string
  live: string
  code: string
}

const ItemProject = ({id, mainUrl, title, description, live, code}: Props) => {
  return (
    <div
              key={id}
              className="group cursor-pointer rounded-xl overflow-hidden relative grow flex flex-row items-center justify-center bg-cover bg-center
              before:content-[''] before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:hover:bg-gradient-to-r from-gray-800 to-indigo-800 before:hover:h-full before:opacity-85 
              before:transition-all before:duration-500
              "
            >
              <div className="w-full h-[350px] xl:h-[400px]">
                <img
                  className="object-cover object-top w-full h-full"
                  src={mainUrl}
                  alt="mainUrl"
                />
              </div>
              <div
                className="w-full h-full hidden absolute text-white top-0 left-0 gap-3 p-2
                group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center"
              >
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="text-sm">{description}</p>

                <div className="flex flex-row items-center justify-center gap-2 mt-6">
                  <a
                    href={live}
                    className='relative animate-bounce text-base uppercase mx-auto w-[100px] 
                    after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-white after:left-3 after:top-0
                    before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-white before:right-3 before:top-0'
                  >
                    demo
                  </a>
                  <a
                    href={code}
                    className='relative animate-bounce text-base uppercase mx-auto w-[100px] 
                    after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-white after:left-3 after:top-0
                    before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-white before:right-3 before:top-0'
                  >
                    code
                  </a>
                </div>
              </div>
            </div>
  )
}

export default ItemProject