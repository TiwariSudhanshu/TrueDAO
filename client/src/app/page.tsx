"use client"

import {
  CheckCircle,
  Users,
  Shield,
  Vote,
  Coins,
  Search,
  AnchorIcon as ChainIcon,
  Star,
  Github,
  Twitter,
  MessageCircle,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ConnectWallet from "@/components/ConnectWallet"

export default function TrueDAOLanding() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full border-2 border-emerald-400/20 animate-pulse">
          <div className="w-full h-full rounded-full bg-emerald-400/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
        </div>
        <div className="absolute top-40 right-32 w-20 h-20 rounded-full border-2 border-blue-400/20 animate-pulse delay-1000">
          <div className="w-full h-full rounded-full bg-blue-400/10 flex items-center justify-center">
            <ChainIcon className="w-10 h-10 text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-40 left-32 w-12 h-12 rounded-full border-2 border-purple-400/20 animate-pulse delay-2000">
          <div className="w-full h-full rounded-full bg-purple-400/10 flex items-center justify-center">
            <Vote className="w-6 h-6 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-60 right-20 w-14 h-14 rounded-full border-2 border-yellow-400/20 animate-pulse delay-500">
          <div className="w-full h-full rounded-full bg-yellow-400/10 flex items-center justify-center">
            <Coins className="w-7 h-7 text-yellow-400" />
          </div>
        </div>

        {/* Sparkle elements */}
        <Star className="absolute top-32 left-1/3 w-4 h-4 text-emerald-300/40 animate-pulse" />
        <Star className="absolute top-60 right-1/4 w-3 h-3 text-blue-300/40 animate-pulse delay-1000" />
        <Star className="absolute bottom-80 left-1/4 w-5 h-5 text-purple-300/40 animate-pulse delay-2000" />
        <Star className="absolute bottom-32 right-1/3 w-4 h-4 text-yellow-300/40 animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center border-b border-emerald-900/20">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">TrueDAO</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            How it Works?
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            Features
          </Link>
          <Link href="#why-truedao" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            Why TrueDAO
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-emerald-400 transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <button className="bg-transparent border-none text-white hover:text-emerald-400 cursor-pointer transition-colors">
            Log In
          </button>
          <button
            className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-md transition-colors cursor-pointer"
            onClick={() => setIsWalletModalOpen(true)}
          >
            Connect Wallet
          </button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 relative">
          {/* Web/Network Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Network nodes */}
              <circle cx="100" cy="150" r="3" fill="#10b981" />
              <circle cx="300" cy="100" r="3" fill="#3b82f6" />
              <circle cx="500" cy="200" r="3" fill="#8b5cf6" />
              <circle cx="700" cy="120" r="3" fill="#f59e0b" />
              <circle cx="900" cy="180" r="3" fill="#ef4444" />
              <circle cx="1100" cy="140" r="3" fill="#10b981" />

              <circle cx="150" cy="350" r="3" fill="#3b82f6" />
              <circle cx="350" cy="300" r="3" fill="#8b5cf6" />
              <circle cx="550" cy="400" r="3" fill="#f59e0b" />
              <circle cx="750" cy="320" r="3" fill="#ef4444" />
              <circle cx="950" cy="380" r="3" fill="#10b981" />
              <circle cx="1050" cy="340" r="3" fill="#3b82f6" />

              <circle cx="200" cy="550" r="3" fill="#8b5cf6" />
              <circle cx="400" cy="500" r="3" fill="#f59e0b" />
              <circle cx="600" cy="600" r="3" fill="#ef4444" />
              <circle cx="800" cy="520" r="3" fill="#10b981" />
              <circle cx="1000" cy="580" r="3" fill="#3b82f6" />

              {/* Network connections */}
              <line x1="100" y1="150" x2="300" y2="100" stroke="#10b981" strokeWidth="1" opacity="0.3" />
              <line x1="300" y1="100" x2="500" y2="200" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <line x1="500" y1="200" x2="700" y2="120" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
              <line x1="700" y1="120" x2="900" y2="180" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
              <line x1="900" y1="180" x2="1100" y2="140" stroke="#ef4444" strokeWidth="1" opacity="0.3" />

              <line x1="150" y1="350" x2="350" y2="300" stroke="#10b981" strokeWidth="1" opacity="0.3" />
              <line x1="350" y1="300" x2="550" y2="400" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <line x1="550" y1="400" x2="750" y2="320" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
              <line x1="750" y1="320" x2="950" y2="380" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
              <line x1="950" y1="380" x2="1050" y2="340" stroke="#ef4444" strokeWidth="1" opacity="0.3" />

              <line x1="200" y1="550" x2="400" y2="500" stroke="#10b981" strokeWidth="1" opacity="0.3" />
              <line x1="400" y1="500" x2="600" y2="600" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <line x1="600" y1="600" x2="800" y2="520" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
              <line x1="800" y1="520" x2="1000" y2="580" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
              <line x1="1000" y1="580" x2="1100" y2="140" stroke="#ef4444" strokeWidth="1" opacity="0.3" />

              {/* Vertical connections */}
              <line x1="100" y1="150" x2="150" y2="350" stroke="#10b981" strokeWidth="1" opacity="0.2" />
              <line x1="300" y1="100" x2="350" y2="300" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
              <line x1="500" y1="200" x2="550" y2="400" stroke="#8b5cf6" strokeWidth="1" opacity="0.2" />
              <line x1="700" y1="120" x2="750" y2="320" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
              <line x1="900" y1="180" x2="950" y2="380" stroke="#ef4444" strokeWidth="1" opacity="0.2" />

              <line x1="150" y1="350" x2="200" y2="550" stroke="#10b981" strokeWidth="1" opacity="0.2" />
              <line x1="350" y1="300" x2="400" y2="500" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
              <line x1="550" y1="400" x2="600" y2="600" stroke="#8b5cf6" strokeWidth="1" opacity="0.2" />
              <line x1="750" y1="320" x2="800" y2="520" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
              <line x1="950" y1="380" x2="1000" y2="580" stroke="#ef4444" strokeWidth="1" opacity="0.2" />
            </svg>
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Decentralized Fact Verification, <span className="text-emerald-400">Powered by You.</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Combat misinformation with the power of blockchain and a trusted community.
                </p>
                <div className="flex gap-4 mt-8">
                  <button
                    className="bg-white text-black hover:bg-gray-100 px-8 py-2 rounded-md transition-colors cursor-pointer"
                    onClick={() => setIsWalletModalOpen(true)}
                  >
                    Connect Wallet
                  </button>
                  <button
                    className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-2 rounded-md transition-colors cursor-pointer"
                  >
                    Submit a Claim
                  </button>
                </div>
              </div>

              {/* Right side - Floating keywords box */}
              <div className="relative">
                <div className="relative w-full h-96 bg-gradient-to-br from-emerald-900/20 to-slate-900/40 rounded-2xl border border-emerald-700/30 backdrop-blur-sm overflow-hidden">
                  {/* Floating keyword bubbles */}
                  <div className="absolute inset-0 p-6">
                    {/* Bubble 1 */}
                    <div className="absolute top-8 left-8 bg-emerald-500/20 border border-emerald-400/40 rounded-full px-4 py-2 animate-float">
                      <span className="text-emerald-300 text-sm font-medium">Blockchain</span>
                    </div>

                    {/* Bubble 2 */}
                    <div className="absolute top-16 right-12 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-2 animate-float-delay-1">
                      <span className="text-blue-300 text-sm font-medium">Fact-Check</span>
                    </div>

                    {/* Bubble 3 */}
                    <div className="absolute top-32 left-16 bg-purple-500/20 border border-purple-400/40 rounded-full px-4 py-2 animate-float-delay-2">
                      <span className="text-purple-300 text-sm font-medium">Decentralized</span>
                    </div>

                    {/* Bubble 4 */}
                    <div className="absolute top-24 right-24 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-3 py-2 animate-float-delay-3">
                      <span className="text-yellow-300 text-sm font-medium">Truth</span>
                    </div>

                    {/* Bubble 5 */}
                    <div className="absolute top-48 left-12 bg-red-500/20 border border-red-400/40 rounded-full px-4 py-2 animate-float">
                      <span className="text-red-300 text-sm font-medium">Verification</span>
                    </div>

                    {/* Bubble 6 */}
                    <div className="absolute top-56 right-8 bg-emerald-500/20 border border-emerald-400/40 rounded-full px-4 py-2 animate-float-delay-1">
                      <span className="text-emerald-300 text-sm font-medium">Community</span>
                    </div>

                    {/* Bubble 7 */}
                    <div className="absolute bottom-24 left-20 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-2 animate-float-delay-2">
                      <span className="text-blue-300 text-sm font-medium">Consensus</span>
                    </div>

                    {/* Bubble 8 */}
                    <div className="absolute bottom-32 right-16 bg-purple-500/20 border border-purple-400/40 rounded-full px-4 py-2 animate-float-delay-3">
                      <span className="text-purple-300 text-sm font-medium">Transparency</span>
                    </div>

                    {/* Bubble 9 */}
                    <div className="absolute bottom-16 left-32 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-3 py-2 animate-float">
                      <span className="text-yellow-300 text-sm font-medium">DAO</span>
                    </div>

                    {/* Bubble 10 */}
                    <div className="absolute bottom-8 right-32 bg-red-500/20 border border-red-400/40 rounded-full px-4 py-2 animate-float-delay-1">
                      <span className="text-red-300 text-sm font-medium">Immutable</span>
                    </div>

                    {/* Central larger bubble */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500/30 border-2 border-emerald-400/60 rounded-full px-6 py-3 animate-pulse">
                      <span className="text-emerald-200 text-lg font-semibold">TrueDAO</span>
                    </div>
                  </div>

                  {/* Connecting lines between bubbles */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    <line
                      x1="80"
                      y1="50"
                      x2="200"
                      y2="200"
                      stroke="#10b981"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                    <line
                      x1="320"
                      y1="80"
                      x2="200"
                      y2="200"
                      stroke="#3b82f6"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                    <line
                      x1="120"
                      y1="150"
                      x2="200"
                      y2="200"
                      stroke="#8b5cf6"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                    <line
                      x1="280"
                      y1="120"
                      x2="200"
                      y2="200"
                      stroke="#f59e0b"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                    <line
                      x1="100"
                      y1="250"
                      x2="200"
                      y2="200"
                      stroke="#ef4444"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                    <line
                      x1="320"
                      y1="280"
                      x2="200"
                      y2="200"
                      stroke="#10b981"
                      strokeWidth="1"
                      opacity="0.2"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by section */}
        <section className="w-full py-12 border-t border-emerald-900/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center">
              <p className="text-gray-400 mb-8">Trusted by over 40+ Fact-Checkers</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  <span>FactCheck.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  <span>Snopes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  <span>PolitiFact</span>
                </div>
                <div className="flex items-center gap-2">
                  <Vote className="w-6 h-6" />
                  <span>Reuters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  <span>AP News</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Four simple steps to decentralized truth verification
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-emerald-900/20 border-emerald-700/30 rounded-md">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Submit Content</h3>
                  <p className="text-gray-300 text-sm">Anyone can submit tweets, videos, or news for verification.</p>
                </div>
              </div>
              <div className="bg-blue-900/20 border-blue-700/30 rounded-md">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Vote className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Vote to Verify</h3>
                  <p className="text-gray-300 text-sm">Verified fact-checkers stake tokens and vote on the truth.</p>
                </div>
              </div>
              <div className="bg-purple-900/20 border-purple-700/30 rounded-md">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                    <ChainIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">On-Chain Truth</h3>
                  <p className="text-gray-300 text-sm">Results are immutable, timestamped, and public.</p>
                </div>
              </div>
              <div className="bg-yellow-900/20 border-yellow-700/30 rounded-md">
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Earn Rewards</h3>
                  <p className="text-gray-300 text-sm">Stakeholders and fact-checkers earn tokens for participation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="w-full py-24 md:py-32 bg-slate-900/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">Built for transparency, powered by community</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <Search className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">🔍 Open Submissions</h3>
                  <p className="text-gray-300">Anyone can request a fact-check.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">✅ Verified Voting</h3>
                  <p className="text-gray-300">Only verified, staked fact-checkers vote.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <ChainIcon className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">⛓️ On-Chain Record</h3>
                  <p className="text-gray-300">Facts stored immutably via blockchain.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <Star className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">🧠 Reputation System</h3>
                  <p className="text-gray-300">Transparent public scores for fact-checkers.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <Vote className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">🗳️ DAO Governance</h3>
                  <p className="text-gray-300">Token holders decide protocol upgrades.</p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <Coins className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white">🔄 Token Incentives</h3>
                  <p className="text-gray-300">Rewards for accurate voting and participation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TrueDAO */}
        <section id="why-truedao" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Why Choose TrueDAO Over Traditional Fact-Checkers?
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">No central authority or bias</h3>
                      <p className="text-gray-300">
                        Decentralized verification removes single points of failure and bias.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <ChainIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Immutable and transparent truth</h3>
                      <p className="text-gray-300">All verification results are permanently recorded on blockchain.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Community-led verification</h3>
                      <p className="text-gray-300">Powered by a global network of verified fact-checkers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">Scales globally across topics</h3>
                      <p className="text-gray-300">Politics, health, finance, and more - all covered by our network.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-24 md:py-32 bg-slate-900/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">How do I become a fact-checker?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-300 mt-2">
                    Apply through our verification process, stake tokens, and maintain a good reputation score.
                  </p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">What happens if I vote incorrectly?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-300 mt-2">
                    Incorrect votes result in slashed stakes and reduced reputation scores.
                  </p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">How are rewards distributed?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-300 mt-2">
                    Rewards are distributed proportionally based on stake size and voting accuracy.
                  </p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Is my vote anonymous?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-300 mt-2">
                    Votes are pseudonymous - linked to wallet addresses but not personal identities.
                  </p>
                </div>
              </div>
              <div className="bg-slate-800/50 border-slate-700/50 rounded-md">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">How is TrueDAO governed?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-300 mt-2">
                    Token holders vote on protocol upgrades, parameter changes, and governance proposals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Start verifying the truth today.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the movement to combat misinformation with decentralized fact verification.
              </p>
              <div className="flex gap-4 justify-center">
                <button
              
                  className="bg-white text-black hover:bg-gray-100 px-8 py-2 rounded-md transition-colors cursor-pointer"
                  onClick={() => setIsWalletModalOpen(true)}
                >
                  Connect Wallet
                </button>
                <button
             
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-2 rounded-md transition-colors cursor-pointer"
                >
                  Explore Verified Claims
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-900/20 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TrueDAO</span>
              </div>
              <p className="text-gray-400 text-sm">
                Decentralized fact verification powered by blockchain and community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <div className="space-y-2">
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  About
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  Governance Docs
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  Whitepaper
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Developers</h4>
              <div className="space-y-2">
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  API Docs
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  Smart Contracts
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Community</h4>
              <div className="space-y-2">
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Discord
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  Lens
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm block">
                  Farcaster
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-900/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 TrueDAO. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Powered by Ethereum</p>
          </div>
        </div>
      </footer>
      <ConnectWallet open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen} />
    </div>
  )
}
