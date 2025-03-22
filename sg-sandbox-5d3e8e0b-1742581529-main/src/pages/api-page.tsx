
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { AILoader } from "@/components/ui/ai-loader"

export default function APIPage() {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsPageLoading(true)
    const handleComplete = () => setIsPageLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  }, [router])

  if (isPageLoading) {
    return <AILoader />
  }

  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-black/30 border-white/10">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                API Documentation
              </h1>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Welcome to the XenArcAI API Hub – Your gateway to integrating powerful AI solutions into your applications effortlessly.
                </p>
                
                <p>
                  Explore the power of XenArcAI's cutting-edge AI tools through our robust and user-friendly API. This page provides everything you need to seamlessly integrate our AI capabilities into your applications, systems, or workflows.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access endpoints tailored for user data, product management, and order processing.</li>
                    <li>Build dynamic solutions with precise and reliable data responses using our immensely powerful models and datacenter GPUs.</li>
                    <li>Empower your applications with the scalability and intelligence of XenArcAI.</li>
                  </ul>
                </div>

                <p>
                  Whether you're a developer looking to integrate AI into your projects or an enterprise seeking advanced solutions, our API is designed to fit your needs. Dive into the documentation and start transforming your ideas into impactful implementations.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Available Endpoints</h2>
                  <ul className="list-none space-y-2">
                    <li>• Endpoint 1: /api/v1/users</li>
                    <li>• Endpoint 2: /api/v1/products</li>
                    <li>• Endpoint 3: /api/v1/orders</li>
                  </ul>
                </div>

                <div className="flex justify-center mt-8">
                  <Button 
                    onClick={() => router.push("/api-docs")}
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  >
                    View Full Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
