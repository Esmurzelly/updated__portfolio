import { IProject } from "../../types";

const ItemProject = ({ id, mainUrl, title, description, live, code }: IProject) => {
  return (
    <div
      key={id}
      className="group cursor-pointer rounded-xl overflow-hidden relative flex flex-row items-center justify-center grow bg-cover bg-center
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:hover:h-full before:h-0 before:hover:bg-gradient-to-r from-gray-800 to-indigo-800 before:opacity-85 
              before:transition-all before:duration-500"
    >
      <div className="w-full h-[350px] xl:h-[400px]">
        <img
          className="object-cover object-top w-full h-full"
          src={mainUrl}
          alt="mainUrl"
        />
      </div>
      <div
        className="hidden absolute w-full h-full text-white top-0 left-0 gap-3 p-2
                group-hover:flex group-hover:flex-col group-hover:items-center group-hover:justify-center"
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm">{description}</p>

        <div className="flex flex-row items-center justify-center gap-2 mt-6">
          <a
            href={live}
            className='relative w-[100px] animate-bounce text-base uppercase mx-auto
                    after:content-[""] after:absolute after:w-[2px] after:h-6 after:bg-white after:left-3 after:top-0
                    before:content-[""] before:absolute before:w-[2px] before:h-6 before:bg-white before:right-3 before:top-0'
          >
            demo
          </a>
          <a
            href={code}
            className='relative w-[100px] animate-bounce text-base uppercase mx-auto
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