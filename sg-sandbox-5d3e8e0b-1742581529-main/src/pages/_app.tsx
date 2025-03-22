
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { AILoader } from "@/components/ui/ai-loader"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  }, [router])

  return (
    <>
      {isLoading && <AILoader />}
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
