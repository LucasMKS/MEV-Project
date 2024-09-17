import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Menu from '@/components/header/menu'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MEV Project",
  description: "Desenvolvendo projeto MEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen">
          <Menu />
          {children}
          <footer className="bg-yellow-400 text-secondary-foreground py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2023 MEV FESTAS. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
