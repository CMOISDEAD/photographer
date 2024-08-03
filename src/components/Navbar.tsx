import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const duration = 0.2;

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const controlsH1 = useAnimation();
  const controlsH6 = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const maxScroll = window.innerHeight;
    const minFontSize = 2;
    const maxFontSize = 8;

    const fontSizeH1 = Math.max(minFontSize, maxFontSize - (scrollY / maxScroll) * (maxFontSize - minFontSize)) + 'rem';
    const opacityH6 = Math.max(0, 1 - (scrollY / maxScroll));

    controlsH1.start({
      fontSize: fontSizeH1,
      transition: { duration, ease: "easeOut" }
    });

    controlsH6.start({
      opacity: opacityH6,
      display: opacityH6 > 0 ? 'block' : 'none',
      transition: { duration, ease: "easeOut" }
    });
  }, [scrollY, controlsH1, controlsH6]);

  return (
    <motion.nav className="w-full p-5 sticky top-0 flex justify-between">
      <header>
        <motion.h1
          animate={controlsH1}
          className="font-bold uppercase"
          style={{ lineHeight: 1 }}
        >
          angeles
        </motion.h1>
        <motion.h6
          animate={controlsH6}
          className="text-xs w-64"
        >
          Photographer based in Los Angeles, California. Specializing in portrait, lifestyle, and event photography.
        </motion.h6>
      </header>
      <nav>
        <ul className="flex content-center items-center gap-5">
          <li>
            <Link href="#" className="text-xs uppercase text-inherit">portfolio</Link>
          </li>
          <li>
            <Link href="#" className="text-xs uppercase text-inherit">about</Link>
          </li>
          <li>
            <Link href="#" className="text-xs uppercase text-inherit">contact</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </motion.nav>
  );
};



const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return null

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button isIconOnly size="sm" variant="light" onPress={handleSwitch}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
} 
