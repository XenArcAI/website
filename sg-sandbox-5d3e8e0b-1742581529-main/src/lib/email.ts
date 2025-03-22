
import { toast } from "@/hooks/use-toast"

interface EmailData {
  name: string
  email: string
  message: string
  position?: string
}

export async function sendEmail(data: EmailData, type: "contact" | "career") {
  try {
    // In production, replace with actual email service
    console.log(`Sending ${type} email to pr086832@gmail.com`, data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: type === "contact" ? "Message sent successfully!" : "Application submitted successfully!",
      description: "We'll get back to you soon.",
    })
    
    return true
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again later.",
      variant: "destructive"
    })
    return false
  }
}
