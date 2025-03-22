
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/router"
import { Loader2 } from "lucide-react"
import { AILoader } from "@/components/ui/ai-loader"

export default function ProductsPage() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(false)

  const handleTryAI = async () => {
    setIsLoading(true)
    try {
      await router.push("/models/interact")
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle route changes
  router.events?.on("routeChangeStart", () => setIsPageLoading(true))
  router.events?.on("routeChangeComplete", () => setIsPageLoading(false))
  router.events?.on("routeChangeError", () => setIsPageLoading(false))

  if (isPageLoading) {
    return <AILoader />
  }

  const productDetails = {
    vision: {
      title: "XenArc Vision™",
      description: `Our advanced computer vision system represents the cutting edge of visual AI technology. 
      Key features include:
      • Real-time object detection with 99.9% accuracy
      • Advanced scene understanding and context analysis
      • Visual reasoning capabilities that match human performance
      • Support for multiple camera inputs and distributed processing
      • Edge device optimization for mobile and IoT applications
      • Custom model training for specific industry needs`
    },
    language: {
      title: "XenArc Language™",
      description: `State-of-the-art natural language processing that sets new standards in AI communication.
      Key capabilities include:
      • Multi-language support for over 100 languages
      • Context-aware translation and interpretation
      • Advanced sentiment analysis and emotion detection
      • Real-time speech recognition and transcription
      • Natural language generation for content creation
      • Custom vocabulary and industry-specific terminology support`
    },
    neural: {
      title: "XenArc Neural™",
      description: `Our revolutionary neural network architecture pushes the boundaries of AI capabilities.
      Key innovations include:
      • Dynamic architecture adaptation for optimal performance
      • Self-optimizing neural pathways
      • Reduced training time and computational requirements
      • Enhanced pattern recognition across complex datasets
      • Scalable deployment from edge devices to cloud infrastructure
      • Industry-leading accuracy in decision-making tasks`
    }
  }

  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Our Technology
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Cutting-edge AI solutions transforming industries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/30 border-white/10 hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle>XenArc Vision™</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Advanced computer vision system capable of real-time object detection, scene understanding, and visual reasoning.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  onClick={() => setSelectedProduct("vision")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10 hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle>XenArc Language™</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  State-of-the-art natural language processing for understanding, generation, and translation.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  onClick={() => setSelectedProduct("language")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10 hover:border-white/20 transition-all">
              <CardHeader>
                <CardTitle>XenArc Neural™</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Neural network architecture optimized for complex pattern recognition and decision making.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  onClick={() => setSelectedProduct("neural")}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Enterprise Solutions</h2>
                <p className="text-gray-300 mb-6">
                  Custom AI solutions tailored for your business needs. Our team works closely with enterprises to implement AI that drives real results.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => router.push("/contact")}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Try XenArcAI v1.0</h2>
                <p className="text-gray-300 mb-6">
                  Experience the power of our AI technology firsthand. Start building with XenArcAI today.
                </p>
                <Button 
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  onClick={handleTryAI}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    "Try XenArcAI"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="bg-black/90 border-white/10">
          <DialogHeader>
            <DialogTitle>
              {selectedProduct && productDetails[selectedProduct as keyof typeof productDetails].title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-300 whitespace-pre-line">
              {selectedProduct && productDetails[selectedProduct as keyof typeof productDetails].description}
            </p>
            <div className="mt-6 flex justify-end">
              <Button
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                onClick={handleTryAI}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  "Try XenArcAI"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
