import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const ChatBot = () => {
  const { isVisible, sectionRef } = useRevealOnScroll(0.1)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm Aashish's AI assistant. Ask me anything about his experience, projects, or tech stack!"
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const messageIdCounterRef = useRef(1)

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isTyping])

  const suggestedPrompts = [
    "What's Aashish's tech stack?",
    "Tell me about OwenWrites",
    "What's his work experience?",
    "Why should we hire Aashish?"
  ]

  const handleSend = async (content: string) => {
    const trimmedContent = content.trim()
    if (!trimmedContent) return

    const userMessage: Message = {
      id: `message-${messageIdCounterRef.current++}`,
      role: 'user',
      content: trimmedContent
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // TODO: Connect to Custom GPT API endpoint here
    // Replace the setTimeout below with actual API call:
    // 
    // const response = await fetch('YOUR_CUSTOM_GPT_ENDPOINT', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message: content })
    // })
    // const data = await response.json()
    // setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: data.reply }])

    // Placeholder response for demo
    setTimeout(() => {
      setIsTyping(false)
      const assistantMessage: Message = {
        id: `message-${messageIdCounterRef.current++}`,
        role: 'assistant',
        content: "AI assistant coming soon — connect your Custom GPT endpoint to activate!"
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 1500)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(input)
    }
  }

  return (
    <section 
      id="chatbot" 
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Section Header */}
        <h2 className="heading-md flex items-center mb-4">
          <span className="section-number">04.</span>
          Ask My AI
          <span className="flex-1 h-px bg-navy-lighter ml-6 max-w-[200px]" />
        </h2>

        <p className="body-text mb-8 max-w-xl">
          Curious about my experience, projects, or tech stack? Ask my AI assistant — 
          built with a custom RAG pipeline.
        </p>

        {/* Chat Interface */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-navy-light border border-navy-lighter rounded-lg overflow-hidden">
            {/* Messages */}
            <div ref={messagesContainerRef} className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] px-4 py-3 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-accent/10 text-slate-lighter border border-accent/30'
                        : 'bg-navy text-slate border border-navy-lighter'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-navy text-slate border border-navy-lighter px-4 py-3 rounded-lg">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Prompts */}
            <div className="px-4 py-3 border-t border-navy-lighter bg-navy/50">
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(prompt)}
                    className="px-3 py-1.5 text-xs font-mono text-slate-light bg-navy border border-navy-lighter rounded hover:border-accent/50 hover:text-accent transition-all duration-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-navy-lighter">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 bg-navy border border-navy-lighter rounded text-slate-lighter text-sm placeholder:text-slate/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-3 bg-accent/10 border border-accent text-accent rounded hover:bg-accent/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatBot
