'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle, Info } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const images = [
  "/images/mesa-cadeira.png",
  "/images/camaElastica.jpeg",
  "/images/piscina-bolinha.png",
  "/images/toto.png",
]

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os serviços da MEV FESTAS."

export default function ContatosPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    const timer = setInterval(() => {
      if (api) {
        const nextIndex = (api.selectedScrollSnap() + 1) % count
        api.scrollTo(nextIndex)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [api, count])

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">Sobre Nós e Contato</h1>
      
      <div className="mb-8 relative">
        <Carousel setApi={setApi} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-contain rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className='bg-red-600'>
          <CardHeader>
            <CardTitle className="flex items-center text-xl sm:text-2xl">
              <Info className="mr-2" />
              Quem Somos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base ">
              A MEV FESTAS é uma empresa especializada em locação de equipamentos para festas e eventos. 
              Com mais de 10 anos de experiência no mercado, nos dedicamos a tornar cada celebração única e inesquecível.
            </p>
            <p className="mt-4 text-sm sm:text-base ">
              Nossa missão é proporcionar alegria e diversão para todas as idades, oferecendo uma ampla variedade de 
              brinquedos, mesas, cadeiras e acessórios para festas. Priorizamos a qualidade, segurança e satisfação 
              dos nossos clientes em cada aluguel.
            </p>
          </CardContent>
        </Card>

        <Card className='bg-yellow-400'>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">Informações de Contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">Rua das Festas, 123 - Cidade Alegre, SP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">(11) 1234-5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">contato@mevfestas.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">WhatsApp: ${whatsappNumber}</span>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full mt-4 bg-green-500 hover:bg-green-600"
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Enviar Mensagem no WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}