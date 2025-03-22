
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/router"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { AILoader } from "@/components/ui/ai-loader"

export default function ResearchPage() {
  const router = useRouter()
  const [selectedResearch, setSelectedResearch] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(false)

  // Handle route changes
  router.events?.on("routeChangeStart", () => setIsPageLoading(true))
  router.events?.on("routeChangeComplete", () => setIsPageLoading(false))
  router.events?.on("routeChangeError", () => setIsPageLoading(false))

  if (isPageLoading) {
    return <AILoader />
  }

  const researchDetails = {
    neural: {
      title: "Neural Architecture Evolution",
      description: `Our groundbreaking research in evolutionary algorithms for neural network architecture optimization 
      has achieved unprecedented results across multiple domains.

      Key Innovations:
      • Self-evolving neural architectures that adapt to new data patterns
      • Reduced computational requirements through intelligent pruning
      • Automated architecture optimization for specific tasks
      • Enhanced generalization capabilities across domains

      Technical Achievements:
      • 45% reduction in training time compared to traditional approaches
      • 30% improvement in model efficiency
      • State-of-the-art performance on benchmark datasets
      • Successful deployment in production environments

      Applications:
      • Computer Vision
      • Natural Language Processing
      • Reinforcement Learning
      • Time Series Analysis`
    },
    quantum: {
      title: "Quantum-Inspired AI",
      description: `Our research at the intersection of quantum computing principles and artificial intelligence 
      is opening new frontiers in computational capabilities.

      Key Breakthroughs:
      • Novel quantum-inspired algorithms for optimization
      • Hybrid classical-quantum approaches for AI
      • Quantum-inspired neural network architectures
      • Advanced quantum simulation techniques

      Technical Innovations:
      • Quantum-inspired tensor networks for deep learning
      • Quantum-inspired optimization algorithms
      • Hybrid quantum-classical training methods
      • Quantum-inspired feature extraction

      Applications:
      • Financial Modeling
      • Drug Discovery
      • Materials Science
      • Cryptography`
    }
  }

  const handleCareerRedirect = async () => {
    setIsLoading(true)
    try {
      await router.push("/careers")
    } catch (error) {
      console.error("Navigation error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Research at XenArcAI
            </h1>
            <p className="text-xl text-gray-300">
              Advancing the boundaries of artificial intelligence
            </p>
          </div>

          <Tabs defaultValue="highlights" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-black/30">
              <TabsTrigger value="highlights">Research Highlights</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
              <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
            </TabsList>

            <TabsContent value="highlights">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-black/30 border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Neural Architecture Evolution</CardTitle>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        Latest
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Our breakthrough research in evolutionary algorithms for neural network architecture optimization has led to state-of-the-art performance across multiple domains.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => setSelectedResearch("neural")}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border-white/10">
                  <CardHeader>
                    <CardTitle>Quantum-Inspired AI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      Exploring the intersection of quantum computing principles and artificial intelligence to develop more efficient and powerful algorithms.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => setSelectedResearch("quantum")}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-2">2025</h3>
                      <div className="space-y-4">
                        <div className="bg-black/20 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Evolutionary Neural Architecture Search</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Published in International Conference on Machine Learning (ICML 2025)
                          </p>
                          <div className="flex gap-2">
                            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                              Neural Networks
                            </Badge>
                            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                              Architecture Search
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-2">2024</h3>
                      <div className="space-y-4">
                        <div className="bg-black/20 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Quantum-Inspired Optimization for Deep Learning</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Published in Nature Machine Intelligence
                          </p>
                          <div className="flex gap-2">
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                              Quantum Computing
                            </Badge>
                            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                              Deep Learning
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="collaborations">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4">Academic Partners</h3>
                      <div className="space-y-4">
                        <Card className="bg-black/20 border-white/10">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">MIT AI Lab</h4>
                            <p className="text-gray-300 text-sm">
                              Joint research on advanced neural architectures and quantum computing applications in AI.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">Industry Partners</h3>
                      <div className="space-y-4">
                        <Card className="bg-black/20 border-white/10">
                          <CardContent className="p-4">
                            <h4 className="font-medium mb-2">Quantum Computing Inc.</h4>
                            <p className="text-gray-300 text-sm">
                              Collaboration on quantum-inspired algorithms for optimization problems in AI.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Our Research Team</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented researchers and engineers to help push the boundaries of AI technology.
                </p>
                <div className="flex justify-center gap-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                    onClick={handleCareerRedirect}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : (
                      "View Openings"
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                    onClick={() => router.push("/careers#internships")}
                  >
                    Research Internships
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedResearch} onOpenChange={() => setSelectedResearch(null)}>
        <DialogContent className="bg-black/90 border-white/10">
          <DialogHeader>
            <DialogTitle>
              {selectedResearch && researchDetails[selectedResearch as keyof typeof researchDetails].title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-300 whitespace-pre-line">
              {selectedResearch && researchDetails[selectedResearch as keyof typeof researchDetails].description}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
