import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Footer } from "@/components/layout/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { sendEmail } from "@/lib/email"

interface JobPosition {
  id: string
  title: string
  department: string
  type: string
  location: string
  description: string
  requirements: string[]
}

const positions: JobPosition[] = [
  {
    id: "ml-researcher",
    title: "Machine Learning Researcher",
    department: "Research",
    type: "Full-time",
    location: "Remote / Onsite",
    description: "Join our research team to advance the state-of-the-art in machine learning and neural architectures.",
    requirements: [
      "Ph.D. in Machine Learning, Computer Science, or related field",
      "Strong publication record in top-tier ML conferences",
      "Experience with deep learning frameworks (PyTorch, TensorFlow)",
      "Expertise in neural architecture search and optimization"
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Onsite",
    description: "Build and deploy state-of-the-art AI models and systems at scale.",
    requirements: [
      "M.S. or B.S. in Computer Science or related field",
      "3+ years experience in AI/ML engineering",
      "Proficiency in Python and ML frameworks",
      "Experience with distributed systems and cloud platforms"
    ]
  },
  {
    id: "full-stack",
    title: "Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Onsite",
    description: "Develop and maintain our AI platform and developer tools.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and TypeScript",
      "Experience with cloud services (AWS/GCP/Azure)",
      "Understanding of AI/ML concepts and integration"
    ]
  }
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await sendEmail({
      ...formData,
      message: `Position: ${formData.position}

${formData.message}`
    }, "career")
    
    if (success) {
      setFormData({ name: "", email: "", position: "", message: "" })
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you soon.",
      })
    } else {
      toast({
        title: "Error submitting application",
        description: "Please try again later.",
        variant: "destructive"
      })
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300">
              Help us shape the future of artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {positions.map((position) => (
              <Card key={position.id} className="bg-black/30 border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="border-white/20">
                      {position.type}
                    </Badge>
                  </div>
                  <CardTitle>{position.title}</CardTitle>
                  <p className="text-sm text-gray-400">{position.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-black/30 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Apply Now</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="space-y-2">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Position You're Applying For" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Tell us about yourself and why you'd be a great fit" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}