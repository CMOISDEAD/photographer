import { Link } from "@nextui-org/react"
import { ArrowDown } from "lucide-react"

export const Header = () => {
  return (
    <div className="p-5 h-[90dvh] flex flex-col justify-between md:h-[67dvh]">
      <div className="w-full flex flex-1" />

      <div className="w-full h-fit flex justify-between">
        <div className="text-xs uppercase">
          <p>contacto:</p>
          <Link isExternal showAnchorIcon href="mailto:angelesgonzalez5503@gmail.com" className="text-inherit text-xs font-bold">
            angelesgonzalez5503@gmail.com
          </Link>
          <p>
            © Angeles Fotografia 2024
          </p>
        </div>

        <div className="text-xs uppercase flex content-center items-center gap-7">
          <p>Desliza hacia abajo<br />
            para ver mas</p>
          <ArrowDown className="animate-bounce" />
        </div>
      </div>
    </div>

  )
}
