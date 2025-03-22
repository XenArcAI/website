
import Head from "next/head"
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { ContactSection } from "@/components/home/ContactSection"
import { Button } from "@/components/ui/button"
import { XLogo } from "@/components/home/XLogo"
import { Footer } from "@/components/layout/Footer"
import { useRouter } from "next/router"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { AILoader } from "@/components/ui/ai-loader"

export default function Home() {
  const router = useRouter()
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(false)

  const handleTryAI = async () => {
    setIsRedirecting(true)
    try {
      await router.push("/models/interact")
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsRedirecting(false)
    }
  }

  const handleTechnologies = async () => {
    setIsRedirecting(true)
    try {
      await router.push("/products")
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsRedirecting(false)
    }
  }

  // Handle route changes
  router.events?.on("routeChangeStart", () => setIsPageLoading(true))
  router.events?.on("routeChangeComplete", () => setIsPageLoading(false))
  router.events?.on("routeChangeError", () => setIsPageLoading(false))

  if (isPageLoading) {
    return <AILoader />
  }

  return (
    <>
      <Head>
        <title>XenArcAI - Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="XenArcAI is pioneering the future of artificial intelligence with cutting-edge solutions and research." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NeuralBackground />
      <Navbar />

      <main className="min-h-screen">
        <section className="h-screen flex flex-col items-center justify-center px-4">
          <XLogo />
          <div className="text-center mt-8">
            <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto">
              Building the future of artificial intelligence
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button 
                size="lg"
                onClick={handleTechnologies}
                disabled={isRedirecting}
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                {isRedirecting ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  "Our Technologies"
                )}
              </Button>
              <Button 
                size="lg"
                onClick={handleTryAI}
                disabled={isRedirecting}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white hover:opacity-90"
              >
                {isRedirecting ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  "Try XenArcAI"
                )}
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
