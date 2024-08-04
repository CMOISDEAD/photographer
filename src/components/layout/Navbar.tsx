import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Logs } from "lucide-react";

const duration = 0.2;

export const Navbar = () => {
  const [fontSize, setFontSize] = useState<number>(8);
  const { scrollYProgress } = useScroll();

  const size = useTransform(scrollYProgress, [0, 0.2], [8, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const opacitySpring = useSpring(opacity, { duration });

  useMotionValueEvent(scrollYProgress, "change", () => {
    setFontSize(size.get());
  });

  return (
    <nav className="w-full p-5 sticky top-0 flex justify-between items-center content-center md:items-start z-10">
      <header className="md:hidden">
        <motion.h1 className="uppercase text-xl font-lora">
          angeles
        </motion.h1>
      </header>

      <header className="hidden md:block">
        <motion.h1
          className="font-bold uppercase font-lora"
          style={{
            fontSize: fontSize + "rem",
            lineHeight: 1
          }}
        >
          angeles
        </motion.h1>
        <motion.h6
          className="text-xs w-64"
          style={{ opacity: opacitySpring }}
        >
          Photographer based in Los Angeles, California. Specializing in portrait, lifestyle, and event photography.
        </motion.h6>
      </header>

      <nav className="hidden md:block">
        <ul className="flex content-center items-center gap-5">
          <li>
            <Link href="/" className="text-xs uppercase text-inherit">portfolio</Link>
          </li>
          <li>
            <Link href="/" className="text-xs uppercase text-inherit">about</Link>
          </li>
          <li>
            <Link href="/contact" className="text-xs uppercase text-inherit">contact</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>

      <Button isIconOnly variant="light" className="md:hidden">
        <Logs />
      </Button>
    </nav>
  );
};


