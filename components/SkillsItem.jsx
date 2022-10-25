import React from 'react'
import Image from 'next/image'

export default function SkillsItem(props) {
  return (
    <div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-1905 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={props.src}
                alt="/"
                width="64px"
                height="64px"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>{props.title}</h3>
            </div>
          </div>
        </div>
    </div>
  )
}
