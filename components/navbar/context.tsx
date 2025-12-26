'use client'

import { createContext, useContext, useState } from 'react'

export type NavbarButton = {
  href: string
  label: string
  variant: 'dark' | 'glass' | 'link'
}

type NavbarContextType = {
  buttons: NavbarButton[]
  setButtons: (buttons: NavbarButton[]) => void
}

const NavbarContext = createContext<NavbarContextType | null>(null)

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [buttons, setButtons] = useState<NavbarButton[]>([])

  return (
    <NavbarContext.Provider value={{ buttons, setButtons }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbar() {
  const ctx = useContext(NavbarContext)
  if (!ctx) {
    throw new Error('useNavbar must be used inside NavbarProvider')
  }
  return ctx
}
