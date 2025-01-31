import { Link } from "@nextui-org/react"
import { ArrowDown } from "lucide-react"
import { useCursor } from "../layout/Cursor";

export const Header = () => {
  const { linkEnter, leave } = useCursor();

  return (
    <div className="p-5 h-screen flex flex-col justify-end">
      <div className="w-full h-fit flex justify-between flex-col md:flex-row gap-4">
        <div className="uppercase text-xs sm:text-sm md:text-base">
          <p>contacto:</p>
          <Link
            isExternal
            showAnchorIcon
            href="mailto:angelesgonzalez5503@gmail.com"
            onMouseEnter={linkEnter}
            onMouseLeave={leave}
            className="text-xs sm:text-sm md:text-base text-inherit font-bold">
            angelesgonzalez5503@gmail.com
          </Link>
          <p>
            © Angeles Fotografia 2024
          </p>
        </div>

        <div className="uppercase flex content-center items-center  gap-7 text-xs sm:text-sm md:text-base">
          <p>Desliza hacia abajo<br />
            para ver mas</p>
          <ArrowDown className="animate-bounce w-8 h-8" />
        </div>
      </div>
    </div>

  )
}
