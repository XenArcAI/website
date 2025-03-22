
import { useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const { redirect } = router.query
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate login - replace with actual auth
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simulate successful login
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("user", JSON.stringify({
        name: formData.email.split("@")[0],
        email: formData.email
      }))
      
      toast({
        title: "Login successful!",
        description: "Welcome back to XenArcAI",
      })

      // Redirect to the original destination or default to /models/interact
      router.push(redirect as string || "/models/interact")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive"
      })
    }
  }

  const handleGoogleLogin = () => {
    // Simulate Google login
    toast({
      title: "Google login",
      description: "Google authentication will be implemented in production",
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <NeuralBackground />
      <Card className="w-full max-w-md bg-black/30 border-white/10">
        <CardHeader className="space-y-2">
          <Link href="/" className="block text-center mb-6">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              XenArcAI
            </h1>
          </Link>
          <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Sign in to continue to XenArcAI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Button 
              variant="outline" 
              className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white"
              onClick={handleGoogleLogin}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-400">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                Sign In
              </Button>
            </form>

            <div className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link 
                href={`/auth/register${redirect ? `?redirect=${redirect}` : ""}`}
                className="text-blue-400 hover:text-blue-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
