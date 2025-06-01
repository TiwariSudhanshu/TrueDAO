"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Wallet, Chrome, Smartphone, Shield, ExternalLink, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface ConnectWalletProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface WalletOption {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  installed?: boolean
  popular?: boolean
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ open, onOpenChange }) => {
  const [connecting, setConnecting] = useState<string | null>(null)
  const [connected, setConnected] = useState(false)

  const walletOptions: WalletOption[] = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: (
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Wallet className="w-5 h-5 text-white" />
        </div>
      ),
      description: "Connect using browser wallet",
      installed: typeof window !== "undefined" && !!(window as any).ethereum,
      popular: true,
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      icon: (
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Smartphone className="w-5 h-5 text-white" />
        </div>
      ),
      description: "Connect using mobile wallet",
      installed: true,
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: (
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
      ),
      description: "Connect using Coinbase Wallet",
      installed: true,
    },
    {
      id: "phantom",
      name: "Phantom",
      icon: (
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
          <Chrome className="w-5 h-5 text-white" />
        </div>
      ),
      description: "Connect using Phantom wallet",
      installed: false,
    },
  ]

  const handleConnect = async (walletId: string) => {
    setConnecting(walletId)

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 2000))

      if (walletId === "metamask" && typeof window !== "undefined" && (window as any).ethereum) {
        // Real MetaMask connection logic would go here
        console.log("Connecting to MetaMask...")
      }

      setConnected(true)
      setTimeout(() => {
        setConnecting(null)
        onOpenChange(false)
        setConnected(false)
      }, 1500)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      setConnecting(null)
    }
  }

  const handleInstallWallet = (walletId: string) => {
    const urls: Record<string, string> = {
      metamask: "https://metamask.io/download/",
      phantom: "https://phantom.app/download",
    }

    if (urls[walletId]) {
      window.open(urls[walletId], "_blank")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md bg-slate-900 border-slate-700 text-white"
        onClose={() => onOpenChange(false)}
      >
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-2">
            <Wallet className="w-5 h-5 text-emerald-400" />
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Choose your preferred wallet to connect to TrueDAO
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {walletOptions.map((wallet) => (
            <div key={wallet.id} className="relative">
              {wallet.popular && (
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  Popular
                </div>
              )}

              <button
                onClick={() => (wallet.installed ? handleConnect(wallet.id) : handleInstallWallet(wallet.id))}
                disabled={connecting !== null}
                className="w-full p-4 border border-slate-600 rounded-lg hover:border-emerald-400 hover:bg-slate-800/50 transition-all duration-200 flex items-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex-shrink-0">{wallet.icon}</div>

                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-white">{wallet.name}</h3>
                    {wallet.installed && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                    {!wallet.installed && <AlertCircle className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <p className="text-sm text-gray-400">{wallet.description}</p>
                </div>

                <div className="flex-shrink-0">
                  {connecting === wallet.id ? (
                    <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" />
                  ) : connected && connecting === wallet.id ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : !wallet.installed ? (
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-400" />
                  ) : (
                    <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-white mb-1">Secure Connection</h4>
              <p className="text-xs text-gray-400">
                TrueDAO uses industry-standard security practices. We never store your private keys or personal
                information.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-800"
          >
            Cancel
          </Button>
          <Button
            onClick={() => window.open("https://ethereum.org/en/wallets/", "_blank")}
            variant="ghost"
            className="flex-1 text-emerald-400 hover:bg-emerald-400/10"
          >
            Learn More
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConnectWallet
