'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

import BlurFade from "@/components/magicui/blur-fade";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Mesa Infantil", price: 50, image: "/images/mesa-infantil.png" },
  { id: 2, name: "Cadeira Infantil", price: 25, image: "/images/mesa-cadeira.png" },
  { id: 3, name: "Pula-Pula", price: 150, image: "/images/camaElastica.jpeg" },
  { id: 4, name: "Piscina de Bolinhas", price: 100, image: "/images/piscina-bolinha.png" },
  { id: 5, name: "Totó", price: 75, image: "/images/toto.png" },
  { id: 6, name: "Cama Elastica", price: 200, image: "/images/piscinaBolinha.png" },
  { id: 7, name: "Kit de Jogos", price: 40, image: "/images/cama-bolinhas.png" },
  { id: 8, name: "Tenda Festa", price: 80, image: "/images/piscinaBolinha.png" },
]

export default function FotosPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <main className=" bg-neutral-100 w-full min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">Galeria de Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <BlurFade delay={0.05 + idx * 0.15} inView key={idx}>
            <Card key={product.id} className="overflow-hidden border-black">
              <CardContent className="p-0">
                <div
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedProduct(product)}
                >
                   
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                 
                </div>



              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 bg-yellow-400">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-lg font-bold text-primary">R$ {product.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
            </BlurFade>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedProduct?.name}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center">
              <Image
                src={selectedProduct?.image || '/images/mesa-cadeira.png'}
                alt={selectedProduct?.name || 'Produto'}
                width={300}
                height={300}
                className="rounded-lg object-cover mb-4 w-full h-auto"
              />
              <p className="text-xl font-bold text-primary">R$ {selectedProduct?.price.toFixed(2)}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}