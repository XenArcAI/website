
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            About XenArcAI
          </h1>
          
          <Card className="bg-black/30 border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At XenArcAI, we're dedicated to advancing artificial intelligence technology while ensuring it remains safe, ethical, and beneficial to humanity.
              </p>
              <p className="text-gray-300">
                Our team of researchers and engineers works at the forefront of AI development, pushing the boundaries of what's possible while maintaining a strong focus on responsible innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                We envision a future where artificial intelligence enhances human capabilities and improves lives across the globe. Through continuous research and development, we strive to make this vision a reality.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Innovation with Responsibility</li>
                <li>• Ethical AI Development</li>
                <li>• Transparency and Trust</li>
                <li>• Global Collaboration</li>
                <li>• Human-Centered Design</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
