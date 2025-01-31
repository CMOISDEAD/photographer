import { videos } from "../../utils/works"
import { useCursor } from "../layout/Cursor"

export const Videos = () => {
  return (
    <div id="videos" className="py-10 overflow-auto flex content-center items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3 md:grid-rows-3 gap-4">
        <Video src={videos[0].src} className="md:row-span-full" />
        <Video src={videos[1].src} className="md:row-span-full" />
        <Video src={videos[2].src} />
        <Video alt src={videos[3].src} />
      </div>
    </div>
  )
}

const CDN_PATH = `${import.meta.env.VITE_CDN_URL}/angeles`

interface Props {
  src: string
  alt?: boolean
  className?: string
}

const Video = ({ src, alt, className }: Props) => {
  const { linkEnter, leave } = useCursor()
  const videoSrc = alt ? src : `${CDN_PATH}/videos/${src}`

  return (
    <video controls
      onMouseEnter={linkEnter}
      onMouseLeave={leave}
      className={`w-80 h-fit cursor-pointer aspect-auto ${className} rounded-md`}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
