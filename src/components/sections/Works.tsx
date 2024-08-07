import { Image } from "@nextui-org/react"
import { experiences, images } from "../../utils/works"
import { PhotoProvider, PhotoView } from "react-photo-view"

import 'react-photo-view/dist/react-photo-view.css';

const CDN_PATH = `${import.meta.env.VITE_CDN_URL}/angeles`

export const Works = () => {
  return (
    <div id="works" className="min-h-screen flex justify-between gap-4 bg-background py-5">
      <div className="hidden md:block h-screen sticky top-0 w-1/4 p-5">
        <h3 className="text-2xl font-lora font-bold uppercase mt-20 mb-10">
          Experiencias
        </h3>
        <ul>
          {experiences.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <PhotoProvider>
          {images.map((work, index) => (
            <PhotoView src={`${CDN_PATH}/images/${work.src}`} key={index}>
              <Image isZoomed src={`${CDN_PATH}/images/${work.src}`} alt={`Angeles Vargas ${work.title} image`} radius="none" className="w-96 h-96 object-cover z-0 cursor-pointer" />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>

    </div>
  )
}
