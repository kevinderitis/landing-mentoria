import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Code, Database, Globe, Laptop, MessageCircle, Rocket, Zap, Calendar, Clock, Briefcase, MapPin, Star, User, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <div className="relative">
        <Image
          src="/iamentoria.webp?height=800&width=1600"
          alt="Fondo de tecnología"
          width={1600}
          height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <header className="relative container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Aprovecha la IA antes de que sea tarde</h1>
          <p className="text-xl text-center mb-8 text-gray-300">La IA está redefiniendo el desarrollo de software. Descubre cómo acelerar tu trabajo y optimizar cada proyecto con tecnología de vanguardia</p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" className="bg-[#ffd700] hover:bg-[#f0c800] text-[#0a192f] font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105">
              ¡Reserva tu lugar ahora por $900 USD!
            </Button>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm bg-[#1e2a4a] text-white">
                <Calendar className="w-4 h-4 mr-1" />
                1 mes de duración
              </Badge>
              <Badge variant="secondary" className="text-sm bg-[#1e2a4a] text-white">
                <Clock className="w-4 h-4 mr-1" />
                1 hora diaria (L-V)
              </Badge>
              <Badge variant="secondary" className="text-sm bg-[#1e2a4a] text-white">
                <MapPin className="w-4 h-4 mr-1" />
                100% online
              </Badge>
            </div>
          </div>
        </header>
      </div>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd700]">¿Estás listo para destacar en el mercado tech?</h2>
          <Card className="bg-[#1e2a4a] border-none">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-6">En un mercado laboral cada vez más competitivo, dominar las últimas tecnologías y saber aplicar la IA en el desarrollo web es crucial. Esta mentoría está diseñada específicamente para las necesidades y oportunidades en Latinoamérica.</p>
              <p className="text-xl font-bold text-[#ffd700] mb-4">Con esta mentoría, aprenderás:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Desarrollo de aplicaciones web modernas con las tecnologías más demandadas.</li>
                <li>Integración de herramientas de IA para optimizar tu flujo de trabajo y crear soluciones innovadoras.</li>
                <li>Construcción de un portafolio sólido que te destaque en el mercado laboral.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd700]">Conoce a tu Mentor</h2>
          <Card className="bg-[#1e2a4a] border-none">
            <CardContent className="p-6 flex flex-col md:flex-row items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-6">
                <Image
                  src="/ia-img.jpg?height=192&width=192"
                  alt="Kevin de Ritis"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-300 mb-4">Kevin de Ritis es un experto en desarrollo web con amplia experiencia en la formación de nuevos talentos en Latinoamérica. Su trayectoria incluye:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Profesor en Coderhouse, una de las plataformas educativas más reconocidas de la región.</li>
                  <li>Mentor en Alkemy, acelerando el crecimiento de desarrolladores junior.</li>
                  <li>Especialista en integración de IA en proyectos web y backend.</li>
                </ul>
                <p className="text-[#ffd700] mt-4 italic">"Mi objetivo es brindarte las herramientas y conocimientos necesarios para que te conviertas en un desarrollador altamente competitivo en el mercado."</p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="https://www.linkedin.com/in/kevinderitis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#0077b5] hover:bg-[#006699] text-white font-bold py-2 px-4 rounded">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Conecta en LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd700]">Beneficios Adaptados al Mercado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mentoría Personalizada",
                description: "Sesiones diarias one-on-one adaptadas a las necesidades específicas del mercado tech en Latinoamérica.",
                icon: <User className="w-12 h-12 mb-4 text-[#ffd700]" />,
              },
              {
                title: "Proyectos Relevantes",
                description: "Desarrolla aplicaciones que resuelvan problemas reales de la región.",
                icon: <Laptop className="w-12 h-12 mb-4 text-[#ffd700]" />,
              },
              {
                title: "IA en Desarrollo Web",
                description: "Aprende a integrar herramientas de IA para destacar en el mercado laboral.",
                icon: <Zap className="w-12 h-12 mb-4 text-[#ffd700]" />,
              },
              {
                title: "Flexibilidad Horaria",
                description: "Sesiones diarias de 1 hora, adaptadas a tu zona horaria en Latinoamérica.",
                icon: <Clock className="w-12 h-12 mb-4 text-[#ffd700]" />,
              },
              {
                title: "Tecnologías en Demanda",
                description: "Domina las herramientas y frameworks más solicitados por las empresas latinoamericanas.",
                icon: <Rocket className="w-12 h-12 mb-4 text-[#ffd700]" />,
              },
              {
                title: "Código fuente",
                description: "Conserva todo el código sobre el que hayas trabajado y más.",
                icon: <Code className="w-12 h-12 mb-4 text-[#ffd700]" />,
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-[#1e2a4a] border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {benefit.icon}
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd700]">Testimonios de Profesionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "La mentoría de Kevin me dio las herramientas para destacar en el competitivo mercado tech de Buenos Aires. Ahora trabajo en una startup fintech líder.",
                author: "Ana L., Desarrolladora Full Stack, Argentina",
              },
              {
                quote: "Aprender a integrar IA en mis proyectos web me abrió puertas que antes parecían inalcanzables. Kevin tiene un don para explicar conceptos complejos de forma simple.",
                author: "Carlos M., Ingeniero de Software, Colombia",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#1e2a4a] border-none">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-[#ffd700] font-bold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd700]">Estructura del Programa</h2>
          <Card className="bg-[#1e2a4a] border-none">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-6">Nuestro programa está diseñado para adaptarse a las necesidades del profesional:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Duración: 1 mes intensivo</li>
                <li>Frecuencia: Sesiones diarias de lunes a viernes, 1 hora por día</li>
                <li>Modalidad: 100% online, con flexibilidad horaria</li>
                <li>Proyectos prácticos a elección</li>
                <li>Acceso a una comunidad de desarrolladores de toda Latinoamérica</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd700]">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "¿Es este programa adecuado para desarrolladores de todos los países de Latinoamérica?",
                answer: "Sí, el programa está diseñado para ser relevante y valioso para desarrolladores de toda Latinoamérica, con un enfoque especial en Argentina, Uruguay, Colombia, México, Chile, Perú y Bolivia.",
              },
              {
                question: "¿Necesito experiencia previa en desarrollo web?",
                answer: "Se recomienda tener conocimientos básicos de programación, pero el programa está diseñado para llevarte desde un nivel principiante hasta un nivel profesional.",
              },
              {
                question: "¿Cómo se manejan las diferencias de zona horaria?",
                answer: "Ofrecemos flexibilidad en los horarios de las sesiones diarias para acomodar diferentes zonas horarias en Latinoamérica, manteniendo la estructura de 1 hora por día durante un mes.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#ffd700]">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="text-center mb-16">
          <h2  className="text-3xl font-bold mb-4 text-[#ffd700]">Impulsa tu Carrera Tech</h2>
          <p className="text-xl mb-8 text-gray-300">No pierdas la oportunidad de transformar tu carrera en solo un mes y destacar en el mercado tech. Con la guía experta de un profesional y un programa intensivo de 1 hora diaria, estarás preparado para enfrentar los desafíos del desarrollo web moderno.</p>
          <Button size="lg" className="bg-[#ffd700] hover:bg-[#f0c800] text-[#0a192f] font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105">
            Asegura tu lugar por $900 USD
          </Button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2024 Koderix. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}