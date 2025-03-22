
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/router"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { AILoader } from "@/components/ui/ai-loader"

export default function DocumentationPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(false)
  const [isViewingRef, setIsViewingRef] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(false)

  const handleStartBuilding = async () => {
    setIsLoading(true)
    try {
      await router.push("/models/interact")
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleViewReference = () => {
    setIsViewingRef(true)
    setActiveTab("documentation")
    setIsViewingRef(false)
  }

  // Handle route changes
  router.events?.on("routeChangeStart", () => setIsPageLoading(true))
  router.events?.on("routeChangeComplete", () => setIsPageLoading(false))
  router.events?.on("routeChangeError", () => setIsPageLoading(false))

  if (isPageLoading) {
    return <AILoader />
  }

  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Developer Platform
            </h1>
            <p className="text-xl text-gray-300">
              Build the future with our powerful AI APIs
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-black/30">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4">Quick Start Guide</h3>
                      <p className="text-gray-300 mb-4">
                        Get up and running with our APIs in minutes. Follow our step-by-step guide to integrate AI capabilities into your applications.
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                        onClick={handleStartBuilding}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        ) : (
                          "Try XenArcAI"
                        )}
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-4">API Reference</h3>
                      <p className="text-gray-300 mb-4">
                        Explore our comprehensive API documentation, including endpoints, parameters, and response formats.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={handleViewReference}
                        disabled={isViewingRef}
                      >
                        {isViewingRef ? (
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        ) : (
                          "View Reference"
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentation">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">API Documentation</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Authentication</h3>
                      <p className="text-gray-300">Learn how to authenticate your API requests</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Rate Limits</h3>
                      <p className="text-gray-300">Understanding API rate limits and quotas</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Error Handling</h3>
                      <p className="text-gray-300">How to handle API errors and edge cases</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-black/50 border-white/10">
                      <CardHeader>
                        <CardTitle>Python Example</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm text-gray-300">
{`import xenarcai

client = xenarcai.Client(api_key="your-key")
response = client.generate(
    prompt="Your prompt here",
    max_tokens=100
)`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>

                    <Card className="bg-black/50 border-white/10">
                      <CardHeader>
                        <CardTitle>JavaScript Example</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm text-gray-300">
{`const xenarcai = require('xenarcai');

const client = new xenarcai.Client({
  apiKey: 'your-key'
});

const response = await client.generate({
  prompt: 'Your prompt here',
  maxTokens: 100
});`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join our developer community and start building the next generation of AI-powered applications.
                </p>
                <div className="flex justify-center gap-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                    onClick={handleStartBuilding}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : (
                      "Try XenArcAI"
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => setActiveTab("documentation")}
                  >
                    Explore Technology
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
