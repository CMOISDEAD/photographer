import { videos } from "../../utils/works"
const CDN_PATH = `${import.meta.env.VITE_CDN_URL}/angeles`

export const Videos = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-5 overflow-auto">
      {videos.map((video, index) => (
        <video key={index} controls className="min-w-96 h-96 object-cover z-0 cursor-pointer">
          <source src={`${CDN_PATH}/videos/${video.src}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  )
}
