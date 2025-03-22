import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { sendEmail } from "@/lib/email"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await sendEmail(formData, "contact")
    if (success) {
      setFormData({ name: "", email: "", message: "" })
    }
  }

  return (
    <section className="py-20 px-4">
      <Card className="max-w-2xl mx-auto bg-black/30 border-white/10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <Textarea 
                placeholder="Your Message" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}