'use client'

import { useState } from 'react'
import Link from 'next/link'
import { List, X, MagnifyingGlass } from '@phosphor-icons/react'

const navLinks = [
  { href: '/weekly', label: '週報' },
  { href: '/issues', label: '月刊' },
  { href: '/calendar', label: '賽事日曆' },
  { href: '/dojo', label: '道場地圖' },
  { href: '/people', label: '人物誌' },
  { href: '/kendoti', label: 'kendoTI' },
  { href: '/about', label: '關於我們' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold text-kendo-red tracking-tight">
              武道台灣
            </span>
            <span className="font-sans text-[10px] text-kendo-black/50 tracking-[0.2em] uppercase">
              ButoTaiwan
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-kendo-black/70 hover:text-kendo-red transition-colors kendo-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link href="/search" className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-border transition-colors">
              <MagnifyingGlass size={18} weight="regular" />
            </Link>
            <Link
              href="/subscribe"
              className="hidden md:block px-4 py-2 bg-kendo-red text-white font-sans text-sm font-medium rounded-sm hover:bg-kendo-red/90 active:scale-[0.98] transition-all"
            >
              訂閱月刊
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-9 h-9"
              aria-label="選單"
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 font-sans text-base text-kendo-black hover:text-kendo-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              onClick={() => setOpen(false)}
              className="mt-3 px-4 py-3 bg-kendo-red text-white font-sans text-sm font-medium text-center rounded-sm"
            >
              訂閱月刊
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
