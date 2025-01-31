import { ReactNode } from "react"
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useNavigate } from "react-router-dom";
import { CursorProvider } from "./Cursor";
import { AnimatePresence } from "motion/react";
import { ReactLenis } from "lenis/react";

interface Props {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  const navigate = useNavigate();

  return (
    <ReactLenis root>
      <NextUIProvider navigate={navigate}>
        <NextThemesProvider attribute="class" enableSystem>
          <CursorProvider>
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
          </CursorProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </ReactLenis>
  )
}
