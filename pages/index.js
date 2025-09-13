import { useState } from 'react'

export default function Home() {
  const [userBalance] = useState(5000)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">FullHousey</h1>
          <p className="text-white/80">AI-Powered Gaming Platform</p>
          <div className="mt-4 inline-block bg-white/10 backdrop-blur rounded-lg px-4 py-2">
            <span className="text-white">Balance: ₹{userBalance}</span>
          </div>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition cursor-pointer">
            <div className="text-3xl mb-3">⚡</div>
            <h2 className="text-xl font-bold text-white mb-2">Jaldi-5</h2>
            <p className="text-white/70 mb-4">First to 5 numbers wins!</p>
            <div className="flex justify-between items-center">
              <span className="text-white/60">Entry: ₹50</span>
              <span className="text-green-400">Prize: ₹750</span>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90">
              Play Now
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 opacity-50">
            <div className="text-3xl mb-3">🏠</div>
            <h2 className="text-xl font-bold text-white mb-2">Classic Housie</h2>
            <p className="text-white/70 mb-4">Traditional housie with ShowAgents</p>
            <span className="text-yellow-400">Coming Soon</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 opacity-50">
            <div className="text-3xl mb-3">🚀</div>
            <h2 className="text-xl font-bold text-white mb-2">Turbo Games</h2>
            <p className="text-white/70 mb-4">Quick wins every 10 minutes</p>
            <span className="text-yellow-400">Coming Soon</span>
          </div>
        </div>
        
        <footer className="mt-12 text-center text-white/60 text-sm">
          <p>18+ | Play Responsibly | RNG Certified</p>
          <p className="mt-2">Powered by NAT Discovery & PRISM Engine</p>
        </footer>
      </div>
    </div>
  )
}