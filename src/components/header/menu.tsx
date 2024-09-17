'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Home, Camera, Phone, Menu as MenuIcon } from 'lucide-react'

const menuItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Produtos', icon: Camera, href: '/produtos' },
  { name: 'Contatos', icon: Phone, href: '/contatos' }
]

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-primary">MEV FESTAS</h1>
                    
                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="space-x-4 lg:space-x-8">
                            {menuItems.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink className="flex items-center space-x-2 text-red-600 hover:text-yellow-500">
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.name}</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent 
                            side="top" 
                            className="w-full h-full bg-black text-white"
                        >
                            <nav className="flex flex-col space-y-4 mt-8">
                                {menuItems.map((item) => (
                                    <Link 
                                        key={item.name} 
                                        href={item.href}
                                        className="flex items-center space-x-2 text-white hover:text-yellow-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}