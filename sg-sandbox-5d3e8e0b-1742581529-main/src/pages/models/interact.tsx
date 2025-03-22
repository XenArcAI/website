import { useState, useCallback } from 'react'
import { Navbar } from "@/components/layout/Navbar"
import { NeuralBackground } from "@/components/home/NeuralBackground"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { Loader2 } from 'lucide-react'

interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatHistory {
  id: string
  title: string
  date: Date
  preview: string
}

export default function ModelInteractionPage() {
  const [selectedModel, setSelectedModel] = useState("gpt-4")
  const [temperature, setTemperature] = useState([0.7])
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [chatHistory] = useState<ChatHistory[]>([
    {
      id: "1",
      title: "Neural Network Architecture",
      date: new Date(),
      preview: "Discussion about evolutionary neural architectures..."
    },
    {
      id: "2",
      title: "Quantum Computing Applications",
      date: new Date(Date.now() - 86400000),
      preview: "Exploring quantum-inspired optimization..."
    }
  ])

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return
    
    setIsLoading(true)
    const newMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }
    
    setMessages([...messages, newMessage])
    setInput('')
    
    try {
      setTimeout(() => {
        const response: ChatMessage = {
          role: 'assistant',
          content: 'This is a simulated response. In production, this would be replaced with actual AI response.',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, response])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      setIsLoading(false)
    }
  }, [input, messages, isLoading])

  const handleNewChat = () => {
    setMessages([])
  }

  return (
    <div className="min-h-screen bg-black">
      <NeuralBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                XenArc AI Assistant
              </h1>
              <p className="text-gray-400 mt-1">How can I assist you today?</p>
            </div>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-48 bg-black/30 border-white/10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/10">
                <SelectItem value="gpt-4">XenArc-4</SelectItem>
                <SelectItem value="gpt-3.5">XenArc-3.5</SelectItem>
                <SelectItem value="claude">XenArc Vision</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-4">
                  <Button 
                    onClick={handleNewChat}
                    className="w-full mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  >
                    New Chat
                  </Button>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-2">
                      {chatHistory.map((chat) => (
                        <Button
                          key={chat.id}
                          variant="ghost"
                          className="w-full justify-start text-left text-gray-400 hover:text-white p-3"
                        >
                          <div className="w-full">
                            <div className="font-medium truncate">{chat.title}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {chat.date.toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-400 truncate mt-1">
                              {chat.preview}
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-6">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <ScrollArea className="h-[600px] mb-4 px-4">
                    {messages.length === 0 ? (
                      <div className="text-center mt-[200px] space-y-4">
                        <h2 className="text-2xl font-bold text-white/80">
                          XenArc AI Assistant
                        </h2>
                        <p className="text-gray-400 max-w-md mx-auto">
                          I can help you with research, analysis, coding, and more. What would you like to explore?
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {messages.map((msg, i) => (
                          <div
                            key={i}
                            className={`flex ${
                              msg.role === "user" ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`flex gap-3 max-w-[80%] ${
                                msg.role === "user" ? "flex-row-reverse" : "flex-row"
                              }`}
                            >
                              <Avatar />
                              <div className={`rounded-lg p-4 ${
                                msg.role === "user" 
                                  ? "bg-blue-600 text-white" 
                                  : "bg-gray-800 text-gray-100"
                              }`}>
                                <p>{msg.content}</p>
                                <p className="text-xs opacity-70 mt-2">
                                  {msg.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                  <div className="flex gap-4">
                    <Textarea
                      placeholder="Message XenArc..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      rows={1}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSend}
                      disabled={isLoading || !input.trim()}
                      className='bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500'
                    >
                      {isLoading ? (
                        <Loader2 className='w-4 h-4 animate-spin' />
                      ) : (
                        'Send'
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-3">
              <Card className="bg-black/30 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Model Settings</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Temperature</Label>
                        <span className="text-sm text-gray-400">{temperature[0]}</span>
                      </div>
                      <Slider
                        value={temperature}
                        onValueChange={setTemperature}
                        max={2}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="space-y-2">
                      <Label>System Prompt</Label>
                      <Textarea
                        placeholder="Set system behavior..."
                        className="min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}