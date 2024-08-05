import { Image } from "@nextui-org/react"
import { works } from "../../utils/works"
import { PhotoProvider, PhotoView } from "react-photo-view"

import 'react-photo-view/dist/react-photo-view.css';

export const Works = () => {
  return (
    <div className="min-h-screen my-16 flex justify-between gap-4 bg-background py-5">
      <div className="hidden md:block h-screen sticky left-0 top-0 w-1/4 p-5">
        <h3 className="text-2xl font-lora font-bold uppercase mt-20 mb-10">
          Works
        </h3>
        <ul>
          {works.map((work, index) => (
            <li key={index}>{work.title}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <PhotoProvider>
          {works.map((work, index) => (
            <PhotoView src={work.image} key={index}>
              <Image isZoomed src={work.image} alt={work.title} radius="none" className="w-96 object-cover h-96 z-0 cursor-pointer" />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </div>
  )
}
