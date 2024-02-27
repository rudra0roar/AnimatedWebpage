"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null)
  console.log("active kya show kar rha hai" , active);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu
        setActive={setActive}
      >
        <Link href="#">
          <MenuItem setActive={setActive} active={active} item="Home" >
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div> */}
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Courses</HoveredLink>
            <HoveredLink href="/web-dev">Basic Music Theory</HoveredLink>
            <HoveredLink href="/web-dev">Advanced Composition</HoveredLink>
            <HoveredLink href="/web-dev">Songwriting</HoveredLink>
            <HoveredLink href="/web-dev">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact-us">      
        <MenuItem setActive={setActive} active={active} item="Contanct Us" >
        </MenuItem></Link>

      </Menu>
    </div>
  )
}
