"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Search,
  Filter,
  Globe,
  Twitter,
  FileText,
  ImageIcon,
  Video,
  Calendar,
  User,
  ExternalLink,
  Eye,
  MessageSquare,
  TrendingUp,
  Award,
  Coins,
  Shield,
  Plus,
  SortAsc,
  SortDesc,
} from "lucide-react"
import Link from "next/link"

// Sample submissions data
const sampleSubmissions = [
  {
    id: "sub-001",
    title: "Study Claims COVID-19 Vaccine Causes Severe Side Effects in 50% of Recipients",
    description: "A widely shared article claims that a new study shows COVID-19 vaccines cause severe side effects...",
    contentType: "url",
    category: "Health & Medicine",
    priority: "high",
    status: "pending",
    submittedAt: "2023-11-15T14:30:00Z",
    submitter: "anonymous_user_42",
    votingEndsAt: "2023-11-18T14:30:00Z",
    totalVotes: 42,
    totalStaked: 1250,
    leadingVerdict: "false",
    verdictPercentage: 65,
    tags: ["COVID-19", "Vaccine", "Medical Research"],
    preview: {
      image: "/placeholder.svg?height=100&width=150",
      domain: "example-news-site.com",
    },
  },
  {
    id: "sub-002",
    title: "Elon Musk announces Tesla will accept Dogecoin for all purchases",
    description: "Tweet claims Tesla will now accept Dogecoin as payment for all Tesla products and services...",
    contentType: "tweet",
    category: "Economics & Finance",
    priority: "medium",
    status: "verified",
    submittedAt: "2023-11-14T09:15:00Z",
    submitter: "crypto_watcher",
    votingEndsAt: "2023-11-17T09:15:00Z",
    totalVotes: 28,
    totalStaked: 890,
    leadingVerdict: "false",
    verdictPercentage: 78,
    tags: ["Tesla", "Dogecoin", "Cryptocurrency"],
    finalVerdict: "false",
  },
  {
    id: "sub-003",
    title: "Climate change will cause sea levels to rise 10 feet by 2030",
    description: "Article claims dramatic sea level rise predictions based on new climate research...",
    contentType: "text",
    category: "Climate & Environment",
    priority: "high",
    status: "pending",
    submittedAt: "2023-11-13T16:45:00Z",
    submitter: "climate_concerned",
    votingEndsAt: "2023-11-16T16:45:00Z",
    totalVotes: 35,
    totalStaked: 1100,
    leadingVerdict: "misleading",
    verdictPercentage: 52,
    tags: ["Climate Change", "Sea Level", "Environment"],
    preview: {
      image: "/placeholder.svg?height=100&width=150",
      domain: "climate-news.org",
    },
  },
  {
    id: "sub-004",
    title: "Viral image shows aliens landing in New York City",
    description: "Image circulating on social media allegedly shows UFO landing in Times Square...",
    contentType: "image",
    category: "Other",
    priority: "low",
    status: "verified",
    submittedAt: "2023-11-12T11:20:00Z",
    submitter: "ufo_hunter",
    votingEndsAt: "2023-11-15T11:20:00Z",
    totalVotes: 67,
    totalStaked: 2100,
    leadingVerdict: "false",
    verdictPercentage: 89,
    tags: ["UFO", "Aliens", "New York"],
    finalVerdict: "false",
  },
  {
    id: "sub-005",
    title: "Video shows new breakthrough in quantum computing",
    description: "Video demonstration claims to show quantum computer solving complex problems instantly...",
    contentType: "video",
    category: "Science & Technology",
    priority: "medium",
    status: "pending",
    submittedAt: "2023-11-11T13:30:00Z",
    submitter: "tech_enthusiast",
    votingEndsAt: "2023-11-14T13:30:00Z",
    totalVotes: 19,
    totalStaked: 650,
    leadingVerdict: "true",
    verdictPercentage: 68,
    tags: ["Quantum Computing", "Technology", "Science"],
    preview: {
      image: "/placeholder.svg?height=100&width=150",
      domain: "tech-innovations.com",
    },
  },
  {
    id: "sub-006",
    title: "New study proves coffee prevents all forms of cancer",
    description: "Medical research article claims coffee consumption eliminates cancer risk entirely...",
    contentType: "url",
    category: "Health & Medicine",
    priority: "high",
    status: "verified",
    submittedAt: "2023-11-10T08:45:00Z",
    submitter: "health_researcher",
    votingEndsAt: "2023-11-13T08:45:00Z",
    totalVotes: 54,
    totalStaked: 1800,
    leadingVerdict: "false",
    verdictPercentage: 91,
    tags: ["Coffee", "Cancer", "Medical Research"],
    finalVerdict: "false",
    preview: {
      image: "/placeholder.svg?height=100&width=150",
      domain: "health-studies.net",
    },
  },
]

const contentTypes = [
  { id: "all", name: "All Content", icon: <Filter className="w-4 h-4" /> },
  { id: "url", name: "Articles/URLs", icon: <Globe className="w-4 h-4" /> },
  { id: "tweet", name: "Social Media", icon: <Twitter className="w-4 h-4" /> },
  { id: "text", name: "Text Content", icon: <FileText className="w-4 h-4" /> },
  { id: "image", name: "Images", icon: <ImageIcon className="w-4 h-4" /> },
  { id: "video", name: "Videos", icon: <Video className="w-4 h-4" /> },
]

const categories = [
  "All Categories",
  "Health & Medicine",
  "Politics",
  "Science & Technology",
  "Climate & Environment",
  "Economics & Finance",
  "Social Issues",
  "Entertainment",
  "Sports",
  "Education",
  "Other",
]

const statusOptions = [
  { id: "all", name: "All Status", color: "text-gray-400" },
  { id: "pending", name: "Pending", color: "text-yellow-400" },
  { id: "verified", name: "Verified", color: "text-green-400" },
  { id: "disputed", name: "Disputed", color: "text-red-400" },
]

const priorityOptions = [
  { id: "all", name: "All Priority" },
  { id: "high", name: "High Priority" },
  { id: "medium", name: "Medium Priority" },
  { id: "low", name: "Low Priority" },
]

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState(sampleSubmissions)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContentType, setSelectedContentType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Filter submissions based on selected filters
  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesContentType = selectedContentType === "all" || submission.contentType === selectedContentType
    const matchesCategory = selectedCategory === "All Categories" || submission.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || submission.status === selectedStatus
    const matchesPriority = selectedPriority === "all" || submission.priority === selectedPriority

    return matchesSearch && matchesContentType && matchesCategory && matchesStatus && matchesPriority
  })

  // Sort submissions
  const sortedSubmissions = [...filteredSubmissions].sort((a, b) => {
    let comparison = 0

    switch (sortBy) {
      case "newest":
        comparison = new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
        break
      case "priority":
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        comparison =
          priorityOrder[b.priority as keyof typeof priorityOrder] -
          priorityOrder[a.priority as keyof typeof priorityOrder]
        break
      case "votes":
        comparison = b.totalVotes - a.totalVotes
        break
      case "staked":
        comparison = b.totalStaked - a.totalStaked
        break
      default:
        comparison = 0
    }

    return sortOrder === "asc" ? -comparison : comparison
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-400" />
      case "verified":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "disputed":
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case "true":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "false":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "misleading":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "url":
        return <Globe className="w-4 h-4" />
      case "tweet":
        return <Twitter className="w-4 h-4" />
      case "text":
        return <FileText className="w-4 h-4" />
      case "image":
        return <ImageIcon className="w-4 h-4" />
      case "video":
        return <Video className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
  }

  const calculateTimeRemaining = (endTime: string) => {
    const end = new Date(endTime)
    const now = new Date()
    const diffMs = end.getTime() - now.getTime()

    if (diffMs <= 0) return "Ended"

    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    if (diffHrs > 24) {
      const diffDays = Math.floor(diffHrs / 24)
      return `${diffDays}d ${diffHrs % 24}h`
    }

    return `${diffHrs}h ${diffMins}m`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-emerald-900/20 px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">TrueDAO</span>
        </Link>
        <nav className="ml-8 flex gap-6">
          <Link href="/dashboard" className="text-emerald-400 font-medium">
            Dashboard
          </Link>
          <Link href="/submission" className="text-gray-300 hover:text-emerald-400 transition-colors">
            Submit Content
          </Link>
          <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
            My Votes
          </Link>
          <Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
            Leaderboard
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">250 TRUE</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium">Expert</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Fact-Checker Dashboard</h1>
            <p className="text-gray-300">Review and verify content submissions from the community</p>
          </div>
          <Link href="/submission">
            <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Submit Content
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Submissions</p>
                  <p className="text-2xl font-bold text-white">1,247</p>
                </div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">+12% this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Pending Review</p>
                  <p className="text-2xl font-bold text-white">23</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-gray-400">Avg. 2.5h response time</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Your Accuracy</p>
                  <p className="text-2xl font-bold text-white">94.2%</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-green-400">Expert level</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Tokens Earned</p>
                  <p className="text-2xl font-bold text-white">1,850</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-yellow-400">+125 this week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="bg-slate-900/50 border-slate-700/50 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Content Type Filter */}
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedContentType(type.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedContentType === type.id
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    {type.icon}
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Filters */}
            <div className="flex flex-wrap gap-4 mt-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {statusOptions.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {priorityOptions.map((priority) => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="newest">Newest First</option>
                <option value="priority">Priority</option>
                <option value="votes">Most Votes</option>
                <option value="staked">Most Staked</option>
              </select>

              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white hover:bg-slate-700 transition-colors"
              >
                {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-400">
            Showing {sortedSubmissions.length} of {submissions.length} submissions
          </p>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {sortedSubmissions.map((submission) => (
            <Card
              key={submission.id}
              className="bg-slate-900/50 border-slate-700/50 hover:border-emerald-700/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Content Type Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      {getContentTypeIcon(submission.contentType)}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-white truncate">{submission.title}</h3>
                          <div
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              submission.priority === "high"
                                ? "bg-red-500/20 text-red-400"
                                : submission.priority === "medium"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {submission.priority.toUpperCase()}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{submission.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {submission.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                          {submission.tags.length > 3 && (
                            <span className="px-2 py-1 bg-slate-600/20 text-gray-400 rounded-full text-xs">
                              +{submission.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(submission.submittedAt)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {submission.submitter}
                          </div>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(submission.status)}
                            {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                          </div>
                          <div className="text-gray-400">{submission.category}</div>
                        </div>
                      </div>

                      {/* Preview Image */}
                      {submission.preview?.image && (
                        <div className="flex-shrink-0">
                          <img
                            src={submission.preview.image || "/placeholder.svg"}
                            alt="Preview"
                            className="w-20 h-16 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>

                    {/* Voting Stats */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          {getVerdictIcon(submission.leadingVerdict)}
                          <span className="text-sm text-gray-300">
                            {submission.leadingVerdict?.charAt(0).toUpperCase() + submission.leadingVerdict?.slice(1)} (
                            {submission.verdictPercentage}%)
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MessageSquare className="w-4 h-4" />
                          {submission.totalVotes} votes
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Coins className="w-4 h-4" />
                          {submission.totalStaked} TRUE staked
                        </div>
                        {submission.status === "pending" && (
                          <div className="text-sm text-yellow-400">
                            {calculateTimeRemaining(submission.votingEndsAt)} left
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Link href={`/verify/${submission.id}`}>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            <Eye className="w-4 h-4 mr-1" />
                            {submission.status === "pending" ? "Vote" : "View"}
                          </Button>
                        </Link>
                        {submission.preview?.domain && (
                          <Button size="sm" variant="outline" className="border-slate-600 text-gray-300">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedSubmissions.length === 0 && (
          <Card className="bg-slate-900/50 border-slate-700/50">
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No submissions found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your filters or search terms</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedContentType("all")
                  setSelectedCategory("All Categories")
                  setSelectedStatus("all")
                  setSelectedPriority("all")
                }}
                variant="outline"
                className="border-slate-600 text-gray-300"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {sortedSubmissions.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-800">
              Load More Submissions
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
