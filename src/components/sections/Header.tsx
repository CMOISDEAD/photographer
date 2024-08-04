import { Image, Link } from "@nextui-org/react"
import { ArrowDown } from "lucide-react"

export const Header = () => {
  return (
    <div className="p-5 h-[90vh] flex flex-col justify-between md:h-[67vh]">
      <div className="w-full flex flex-1 flex-col content-center items-center justify-center gap-2 md:flex-row md:justify-end">
        {[1].map((i) => (
          <Link key={i} href="#" className="relative" >
            <Image isZoomed radius="none" src="https://olgaprudka.com/wp-content/uploads/2022/07/dblack-2022-05-03-152639.142-166x208.jpg" alt="main image" />
            <p className="absolute w-fit mx-auto bottom-1 right-0 left-0 text-xs uppercase z-50 text-white italic">
              Nobody, NY
            </p>
          </Link>

        ))}
      </div>

      <div className="w-full h-fit flex justify-between">
        <div className="text-xs text-default-500 uppercase">
          <p>contact:</p>
          <Link href="#" className="text-inherit text-xs">
            angeles@email.com
          </Link>
          <p>
            © Angeles Photography 2024
          </p>
        </div>

        <div className="text-xs text-default-500 uppercase flex content-center items-center gap-7">
          <p>scroll down <br />
            to explore website</p>
          <ArrowDown className="animate-bounce" />
        </div>
      </div>
    </div>

  )
}
