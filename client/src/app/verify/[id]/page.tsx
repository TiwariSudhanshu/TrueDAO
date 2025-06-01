"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Clock,
  User,
  Calendar,
  Tag,
  MessageSquare,
  Shield,
  Info,
  HelpCircle,
  Coins,
  ChevronDown,
  ChevronUp,
  FileText,
  LinkIcon,
} from "lucide-react"
import Link from "next/link"

// Sample data for the verification page
const sampleSubmission = {
  id: "sub-123456",
  title: "Study Claims COVID-19 Vaccine Causes Severe Side Effects in 50% of Recipients",
  description:
    "A widely shared article claims that a new study shows COVID-19 vaccines cause severe side effects in half of all recipients. This needs verification.",
  contentType: "url",
  url: "https://example-news-site.com/covid-vaccine-study",
  dateSubmitted: "2023-11-15T14:30:00Z",
  submitter: "anonymous_user_42",
  category: "Health & Medicine",
  priority: "high",
  tags: ["COVID-19", "Vaccine", "Medical Research", "Side Effects"],
  status: "pending",
  votingEndsAt: "2023-11-18T14:30:00Z",
  source: "Example News Network",
  datePublished: "2023-11-14",
  author: "John Smith",
  additionalContext:
    "This article has been shared over 50,000 times on social media. The study it references appears to be from a non-peer-reviewed source.",
  preview: {
    title: "New Study Shows Alarming Vaccine Side Effects",
    description: "Research reveals concerning data about COVID-19 vaccine safety profile...",
    image: "/placeholder.svg?height=200&width=400",
    domain: "example-news-site.com",
  },
  relatedFacts: [
    {
      claim: "COVID-19 vaccines have undergone rigorous clinical trials",
      status: "verified",
      source: "CDC, WHO, FDA",
    },
    {
      claim: "All vaccines can cause side effects, but severe ones are rare",
      status: "verified",
      source: "CDC, WHO",
    },
    {
      claim: "The referenced study was not peer-reviewed",
      status: "verified",
      source: "Medical journal databases",
    },
  ],
  comments: [
    {
      user: "factchecker_jane",
      text: "I've reviewed the original study. It actually states that 50% experienced mild side effects like soreness at injection site, not severe effects.",
      timestamp: "2023-11-16T09:15:00Z",
      reputation: "Expert",
    },
    {
      user: "medical_reviewer",
      text: "The article misrepresents the study's findings. The actual severe side effect rate was 0.5%, not 50%.",
      timestamp: "2023-11-16T10:22:00Z",
      reputation: "Senior",
    },
  ],
}

// Voting options
const votingOptions = [
  {
    id: "false",
    label: "False",
    description: "The claim is factually incorrect",
    icon: <XCircle className="w-5 h-5 text-red-500" />,
    color: "bg-red-500/10 border-red-500/30 hover:bg-red-500/20",
    textColor: "text-red-400",
  },
  {
    id: "misleading",
    label: "Misleading",
    description: "The claim contains some truth but is presented in a misleading way",
    icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    color: "bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20",
    textColor: "text-yellow-400",
  },
  {
    id: "true",
    label: "True",
    description: "The claim is factually correct",
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    color: "bg-green-500/10 border-green-500/30 hover:bg-green-500/20",
    textColor: "text-green-400",
  },
]

export default function VerificationPage({ params }: { params: { id: string } }) {
  const [selectedVote, setSelectedVote] = useState<string | null>(null)
  const [stakeAmount, setStakeAmount] = useState<number>(10)
  const [reasoning, setReasoning] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showEvidence, setShowEvidence] = useState<boolean>(true)
  const [showComments, setShowComments] = useState<boolean>(true)
  const [showRelatedFacts, setShowRelatedFacts] = useState<boolean>(true)

  // For demo purposes, we're using the sample data
  const submission = sampleSubmission

  const handleVoteSelect = (voteId: string) => {
    setSelectedVote(voteId)
  }

  const handleStakeChange = (amount: number) => {
    setStakeAmount(amount)
  }

  const handleSubmitVote = async () => {
    if (!selectedVote) return

    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle success/redirect
  }

  // Calculate time remaining for voting
  const calculateTimeRemaining = () => {
    const endTime = new Date(submission.votingEndsAt)
    const now = new Date()
    const diffMs = endTime.getTime() - now.getTime()

    if (diffMs <= 0) return "Voting ended"

    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    return `${diffHrs}h ${diffMins}m remaining`
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-emerald-900/20 px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <div className="ml-8 flex items-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">TrueDAO</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">250 TRUE</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium">Verified Fact-Checker</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Pending Verification</span>
            </div>
            <div className="text-sm text-gray-400">{calculateTimeRemaining()}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-400">Submission ID: {submission.id}</div>
            <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
              {submission.priority.toUpperCase()} Priority
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Submission Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Claim Card */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{submission.title}</CardTitle>
                <CardDescription className="text-gray-300">{submission.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {submission.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400 flex items-center gap-1 mb-1">
                      <Calendar className="w-3 h-3" />
                      Submitted
                    </div>
                    <div className="text-white">{formatDate(submission.dateSubmitted)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 flex items-center gap-1 mb-1">
                      <User className="w-3 h-3" />
                      Submitter
                    </div>
                    <div className="text-white">{submission.submitter}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 flex items-center gap-1 mb-1">
                      <Tag className="w-3 h-3" />
                      Category
                    </div>
                    <div className="text-white">{submission.category}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 flex items-center gap-1 mb-1">
                      <Calendar className="w-3 h-3" />
                      Published
                    </div>
                    <div className="text-white">{submission.datePublished}</div>
                  </div>
                </div>

                {/* Content Preview */}
                {submission.contentType === "url" && submission.preview && (
                  <div className="mt-4 p-4 bg-slate-800/50 rounded-md border border-slate-700/50">
                    <div className="flex gap-4">
                      <img
                        src={submission.preview.image || "/placeholder.svg"}
                        alt="Preview"
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{submission.preview.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">{submission.preview.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <LinkIcon className="w-3 h-3 text-emerald-400" />
                          <a
                            href={submission.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            {submission.preview.domain} <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Context */}
                {submission.additionalContext && (
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-300 mb-1">Additional Context</h4>
                    <p className="text-sm text-gray-400">{submission.additionalContext}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Evidence Section */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader className="pb-3 cursor-pointer" onClick={() => setShowEvidence(!showEvidence)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    Evidence & Source Analysis
                  </CardTitle>
                  {showEvidence ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {showEvidence && (
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-md border border-slate-700/50">
                    <h4 className="font-medium text-white mb-2">Source Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400 mb-1">Source Name</div>
                        <div className="text-white">{submission.source}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 mb-1">Author</div>
                        <div className="text-white">{submission.author}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-gray-400 mb-1">Source Reliability</div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-xs text-yellow-400">Medium</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-white mb-2">Key Claims Analysis</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-800/50 rounded-md border border-slate-700/50">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-white">
                              "50% of vaccine recipients experienced severe side effects"
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              This claim misrepresents the study data. The study reported that 50% experienced mild side
                              effects like soreness at the injection site, not severe effects.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-md border border-slate-700/50">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-white">
                              "The study was conducted by leading medical researchers"
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              The study was not conducted by established medical researchers and has not been
                              peer-reviewed or published in any recognized medical journal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Related Facts */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader className="pb-3 cursor-pointer" onClick={() => setShowRelatedFacts(!showRelatedFacts)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Info className="w-5 h-5 text-emerald-400" />
                    Related Verified Facts
                  </CardTitle>
                  {showRelatedFacts ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {showRelatedFacts && (
                <CardContent>
                  <div className="space-y-3">
                    {submission.relatedFacts.map((fact, index) => (
                      <div key={index} className="p-3 bg-slate-800/50 rounded-md border border-slate-700/50">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-white">{fact.claim}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-emerald-400">Verified</span>
                              <span className="text-xs text-gray-400">Source: {fact.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Comments Section */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader className="pb-3 cursor-pointer" onClick={() => setShowComments(!showComments)}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    Fact-Checker Comments ({submission.comments.length})
                  </CardTitle>
                  {showComments ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </CardHeader>
              {showComments && (
                <CardContent>
                  <div className="space-y-4">
                    {submission.comments.map((comment, index) => (
                      <div key={index} className="p-4 bg-slate-800/50 rounded-md border border-slate-700/50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-600/30 flex items-center justify-center">
                              <User className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{comment.user}</div>
                              <div className="text-xs text-emerald-400">{comment.reputation}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-400">{new Date(comment.timestamp).toLocaleString()}</div>
                        </div>
                        <p className="text-sm text-gray-300">{comment.text}</p>
                      </div>
                    ))}

                    {/* Comment Input */}
                    <div className="mt-4">
                      <textarea
                        placeholder="Add your analysis or comment..."
                        rows={3}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      />
                      <div className="flex justify-end mt-2">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Add Comment</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Right Column - Voting Panel */}
          <div className="space-y-6">
            {/* Voting Card */}
            <Card className="bg-slate-900/50 border-slate-700/50 sticky top-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  Cast Your Vote
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Vote on the credibility of this claim and stake your tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Voting Options */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Select Your Verdict</label>
                  {votingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleVoteSelect(option.id)}
                      className={`w-full p-3 border rounded-lg transition-all duration-200 flex items-center gap-3 ${
                        option.color
                      } ${selectedVote === option.id ? "ring-2 ring-offset-2 ring-offset-slate-900" : ""}`}
                    >
                      {option.icon}
                      <div className="text-left">
                        <div className={`font-medium ${option.textColor}`}>{option.label}</div>
                        <div className="text-xs text-gray-400">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Staking Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stake Amount (TRUE tokens)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="10"
                      value={stakeAmount}
                      onChange={(e) => handleStakeChange(Number.parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <div className="w-16 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white text-center">
                      {stakeAmount}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Min: 10</span>
                    <span>Max: 100</span>
                  </div>
                </div>

                {/* Reasoning */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Reasoning (Optional)</label>
                  <textarea
                    value={reasoning}
                    onChange={(e) => setReasoning(e.target.value)}
                    placeholder="Explain your vote with evidence..."
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmitVote}
                  disabled={!selectedVote || isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Vote & Stake Tokens"}
                </Button>

                {/* Voting Info */}
                <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-md">
                  <div className="flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-medium text-white mb-1">About Voting & Staking</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Your tokens are locked until voting ends</li>
                        <li>• Correct votes earn rewards + reputation</li>
                        <li>• Incorrect votes lose staked tokens</li>
                        <li>• Higher stakes = higher potential rewards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Voting Stats */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-lg">Current Voting Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-white">False</span>
                    </div>
                    <span className="text-gray-300">65%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span className="text-white">Misleading</span>
                    </div>
                    <span className="text-gray-300">30%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-white">True</span>
                    </div>
                    <span className="text-gray-300">5%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Votes:</span>
                    <span className="text-white">42</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-400">Total Staked:</span>
                    <span className="text-white">1,250 TRUE</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Fact-Checkers */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-lg">Top Fact-Checkers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600/30 flex items-center justify-center">
                        <User className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">factchecker_jane</div>
                        <div className="text-xs text-emerald-400">Expert • 98% Accuracy</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <Coins className="w-3 h-3" />
                      <span>100 TRUE</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600/30 flex items-center justify-center">
                        <User className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">medical_reviewer</div>
                        <div className="text-xs text-emerald-400">Senior • 95% Accuracy</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <Coins className="w-3 h-3" />
                      <span>75 TRUE</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600/30 flex items-center justify-center">
                        <User className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">truth_seeker</div>
                        <div className="text-xs text-emerald-400">Verified • 92% Accuracy</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <Coins className="w-3 h-3" />
                      <span>50 TRUE</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
