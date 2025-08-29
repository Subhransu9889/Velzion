"use client"

import React, { useState } from "react"
import {Home, Search, Monitor, Package, User, Video, Smartphone, Crown, Plus} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileSheet from "@/components/atom/ProfileSheet";
import {redirect} from "next/navigation";

// Custom star icon component
function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  )
}

// Custom running icon component
function RunningIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 4v6l3.5 3.5M7 4v2m3 6v4m-3-3 2.5 2.5M18 15l-2-2M8.5 9l2-2M12 19.5L14.5 22M17 18l-2.5 2.5M16 8l2 2M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  )
}

export default function Header() {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "search", icon: Search, label: "Search", path: "/" },
    { id: "tv", icon: Smartphone, label: "TV", path: "/tv" },
    { id: "movies", icon: Package, label: "Movies", path: "/movies" },
      {id: "plus", icon: Plus, label: "Plus", path: "/plus"},
  ]

    const [open, setOpen] = useState(false);

  const openHandler = (id, path) => {
      setActiveItem(id);
      redirect(path);
  }

  const premiumHandler = () => {
      redirect("/subscription");
      setActiveItem("premium");
  }

  return (
    <div className="fixed left-0 top-12 flex flex-col h-screen w-16 md:w-16 sm:w-12 bg-black items-center py-2 z-50">
      {/* Star logo at the top */}
      <div className="mb-12 transition-transform duration-300 hover:scale-110 hover:rotate-360 cursor-pointer mt-16 sm:mt-12">
        <img src='/Velzion_logo.png' alt='logo' className="w-8 h-8 sm:w-6 sm:h-6 text-violet-500" />
      </div>
      <div className="mb-12 transition-transform duration-300 hover:scale-110 cursor-pointer mt-16 sm:mt-12">
        <Crown className="w-8 h-8 sm:w-6 sm:h-6 text-[#FFD700]" onClick={premiumHandler}/>
      </div>

      {/* Navigation items */}
      <nav className="flex flex-col items-center space-y-8 sm:space-y-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="group relative transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => openHandler(item.id, item?.path)}
          >
            <item.icon
              className={`w-6 h-6 sm:w-5 sm:h-5 ${
                activeItem === item.id ? "text-white" : "text-gray-500 hover:text-gray-300"
              } transition-colors duration-200`}
            />
            <span className="absolute left-14 sm:left-10 top-1/2 -translate-y-1/2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm sm:text-xs font-medium">
              {item.label}
            </span>
          </button>
        ))}

        {/* Profile item with Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                  <button
                      className="group relative transition-transform duration-300 hover:scale-110 cursor-pointer"
                      onClick={() => setActiveItem("profile")}
                  >
                      <User
                          className={`w-6 h-6 sm:w-5 sm:h-5 ${
                              activeItem === "profile" ? "text-white" : "text-gray-500 hover:text-gray-300"
                          } transition-colors duration-200`}
                      />
                      <span className="absolute left-14 sm:left-10 top-1/2 -translate-y-1/2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm sm:text-xs font-medium">
                Profile
              </span>
                  </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] md:w-[400px] overflow-y-auto">
                  <SheetHeader>
                      <SheetTitle className="text-center text-lg md:text-xl">Your Profile</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4 text-gray-600">
                      <ProfileSheet setOpen={setOpen}/>
                  </div>
              </SheetContent>
          </Sheet>
          {}
      </nav>
    </div>
  )
}
