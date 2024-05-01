import { FC } from "react"

import { TooltipProvider } from "@/components/ui/tooltip"

import ToastProvider from "./toast-provider"
import ThemeProvider from "./theme-provider"

interface Providersprops {
  children: React.ReactNode
}

const Providers: FC<Providersprops> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <ToastProvider />
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default Providers