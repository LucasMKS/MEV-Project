import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Roboto } from 'next/font/google'

import SparklesText from "@/components/magicui/sparkles-text";
import ShinyButton from "@/components/magicui/shiny-button";
import BlurFade from "@/components/magicui/blur-fade";


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const images = [
  { src: "/images/mesa-cadeira.png", alt: "Jogo de mesa" },
  { src: "/images/cama-bolinhas.png", alt: "Piscina de bolinha e cama elástica" },
  { src: "/images/camaElastica.jpeg", alt: "Cama elástica" },
  { src: "/images/mesa-infantil.png", alt: "Jogo de mesa infantil" },
  { src: "/images/piscina-bolinha.png", alt: "Piscina de bolinha" },
  { src: "/images/toto.png", alt: "Totó" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="/images/mev-flyer.png"
          alt="MEV FESTAS Flyer"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className=" flex flex-col text-center justify-center items-center p-4">

            <section id="header">
              <BlurFade delay={0.05} inView>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <SparklesText text="MEV FESTA" className='text-yellow-400' />
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 2} inView>
                <span className="text-sm text-pretty tracking-tighter sm:text-3xl xl:text-2xl/none font-bold mt-6">
                  MATERIAIS PARA FESTAS
                </span>
              </BlurFade>

              <BlurFade delay={0.25 * 3} inView>
              <Link href="/contatos">
              <ShinyButton text="ALUGUE AGORA" className="font-bold bg-white border border-black mt-6" />
            </Link>
              </BlurFade>
            </section>
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-12 sm:mb-16">NOSSOS SERVIÇOS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg bg-red-600">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold text-yellow-400">MEV FESTAS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 ">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full p-3">
                    <Image src="/images/mesa-festa.png" alt="Materiais para Festas" width={120} height={120} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${roboto.className}`}>Aluguel de Material</h3>
                    <p className="font-semibold">Transforme sua festa em um evento inesquecível com nossos materiais de alta qualidade. Oferecemos aluguel de mesas, cadeiras, toalhas de mesa, rechauds e muito mais, garantindo praticidade e elegância para o seu evento.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full p-3">
                    <Image src="/images/bolo-decoracao.png" alt="Materiais para Festas" width={100} height={100} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${roboto.className}`}>Aluguel de Decoração</h3>
                    <p className="font-semibold">Complete a atmosfera festiva com nossa seleção de itens de decoração. Desde painéis temáticos a suportes para bolo e arranjos, cuidamos de cada detalhe para que sua festa tenha o visual que você sempre sonhou.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full p-3">
                    <Image src="/images/brinquedos.png" alt="Brinquedos para Festas" width={100} height={100} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${roboto.className}`}>Aluguel de Brinquedos</h3>
                    <p className="font-semibold">Diversão garantida para os pequenos com nossos brinquedos! Alugue pula-pula, piscina de bolinhas, cama elástica e outros brinquedos que vão transformar sua festa em um verdadeiro parque de diversão.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-full p-3">
                    <Image src="/images/MEV-P.png" alt="MEV Festas Logo" width={120} height={120} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${roboto.className}`}>Sobre a MEV Festas</h3>
                    <p className="font-semibold">Atuando em Belo Horizonte e região, a MEV Festas é referência em aluguel de materiais e brinquedos para eventos. Nossa missão é tornar a sua comemoração especial, oferecendo produtos de qualidade e atendimento de excelência.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/contatos">
                    <Button size="lg" className="w-full">Solicitar Orçamento</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <section id="photos">
              <div className="grid grid-cols-2 gap-4 mt-8">
                {images.map((image, idx) => (
                  <BlurFade delay={0.25 + idx * 0.25} inView key={idx}>
                    <Image
                      className="mb-4 size-full rounded-lg object-cover"
                      src={image.src}
                      alt={image.alt}
                      width={300} 
                      height={300}
                    />
                  </BlurFade>
                ))}
              </div>
            </section>

          </div>
        </div>
      </section>
    </main>
  )
}