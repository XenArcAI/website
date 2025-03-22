
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Privacy Policy
          </h1>
          
          <Card className="bg-black/30 border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
              <p className="text-gray-300 mb-4">
                At XenArcAI™, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
              </p>
              <p className="text-gray-300">
                This is a placeholder privacy policy. Please replace with your actual privacy policy content.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Information Security</h2>
              <p className="text-gray-300">
                This is a placeholder for information security details. Please replace with your actual security policy content.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-300">
                This is a placeholder for user rights information. Please replace with your actual user rights content.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
