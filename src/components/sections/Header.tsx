import { Image, Link } from "@nextui-org/react"
import { ArrowDown } from "lucide-react"

export const Header = () => {
  return (
    <div className="p-5 h-[90dvh] flex flex-col justify-between md:h-[67dvh]">
      <div className="w-full flex flex-1" />

      <div className="w-full h-fit flex justify-between">
        <div className="text-xs uppercase">
          <p>contact:</p>
          <Link href="#" className="text-inherit text-xs">
            angeles@email.com
          </Link>
          <p>
            © Angeles Photography 2024
          </p>
        </div>

        <div className="text-xs uppercase flex content-center items-center gap-7">
          <p>scroll down <br />
            to explore website</p>
          <ArrowDown className="animate-bounce" />
        </div>
      </div>
    </div>

  )
}
