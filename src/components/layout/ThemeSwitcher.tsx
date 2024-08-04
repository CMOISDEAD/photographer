import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";


export const ThemeSwitcher = () => {
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
