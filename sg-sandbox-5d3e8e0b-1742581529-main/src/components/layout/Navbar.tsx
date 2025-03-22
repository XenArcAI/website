
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              XenArcAI™
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Products
            </Link>
            <Link href="/api" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              API
            </Link>
            <Link href="/research" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Research
            </Link>
            <Link href="/careers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Careers
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Get Started
              </Button>
            </Link>
            <Link href="/models/interact">
              <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white hover:opacity-90">
                Try AI
              </Button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md rounded-lg mt-2">
              <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Products
              </Link>
              <Link href="/api" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                API
              </Link>
              <Link href="/research" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Research
              </Link>
              <Link href="/careers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Careers
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <div className="space-y-2 mt-4">
                <Link href="/products" className="block">
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    Get Started
                  </Button>
                </Link>
                <Link href="/models/interact" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white hover:opacity-90">
                    Try AI
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
