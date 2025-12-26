"use client";

import Hero from "@/components/home/hero";
import ValueProposition from "@/components/home/valueprop";
import UseCases from "@/components/home/usecases";
import ResearchModel from "@/components/home/researchmodel";
import { useNavbar } from "@/components/navbar/context";
import { useEffect } from "react";
export default function Home() {
  const {setButtons} = useNavbar()
  
  useEffect (() => {
    setButtons([
        { href: '/contact', label: 'Contact Sales', variant: 'glass' },
      ])
    return() => setButtons([])
    }, [setButtons])

  return (
    <div className="min-h-screen max-w-screen bg-[#FAF75]">
      <Hero />
      <ValueProposition />
      <UseCases />
      <ResearchModel />
    </div>
  );
}
