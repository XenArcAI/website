
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Terms of Service
          </h1>
          
          <Card className="bg-black/30 border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using XenArcAI™ services, you agree to be bound by these Terms of Service.
              </p>
              <p className="text-gray-300">
                This is a placeholder terms of service. Please replace with your actual terms of service content.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-white/10 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Service Usage</h2>
              <p className="text-gray-300">
                This is a placeholder for service usage terms. Please replace with your actual service usage terms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-white/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Limitations and Liability</h2>
              <p className="text-gray-300">
                This is a placeholder for limitations and liability information. Please replace with your actual terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
