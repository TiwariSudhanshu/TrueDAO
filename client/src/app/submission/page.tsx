"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Upload,
  Twitter,
  FileText,
  ImageIcon,
  Video,
  Globe,
  ArrowLeft,
  AlertCircle,
  X,
  Plus,
  Tag,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

interface SubmissionForm {
  contentType: "url" | "tweet" | "text" | "image" | "video" | ""
  title: string
  description: string
  content: string
  url: string
  tweetUrl: string
  category: string
  tags: string[]
  priority: "low" | "medium" | "high"
  source: string
  datePublished: string
  author: string
  additionalContext: string
  attachments: File[]
}

export default function SubmissionPage() {
  const [form, setForm] = useState<SubmissionForm>({
    contentType: "",
    title: "",
    description: "",
    content: "",
    url: "",
    tweetUrl: "",
    category: "",
    tags: [],
    priority: "medium",
    source: "",
    datePublished: "",
    author: "",
    additionalContext: "",
    attachments: [],
  })

  const [currentTag, setCurrentTag] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewData, setPreviewData] = useState<any>(null)

  const contentTypes = [
    {
      id: "url",
      name: "Website/Article",
      icon: <Globe className="w-6 h-6" />,
      description: "Submit a web article, blog post, or news story",
    },
    {
      id: "tweet",
      name: "Tweet/Social Media",
      icon: <Twitter className="w-6 h-6" />,
      description: "Submit a tweet or social media post",
    },
    {
      id: "text",
      name: "Text Content",
      icon: <FileText className="w-6 h-6" />,
      description: "Submit raw text, quotes, or statements",
    },
    {
      id: "image",
      name: "Image/Screenshot",
      icon: <ImageIcon className="w-6 h-6" />,
      description: "Submit an image, meme, or screenshot",
    },
    {
      id: "video",
      name: "Video Content",
      icon: <Video className="w-6 h-6" />,
      description: "Submit a video or video clip",
    },
  ]

  const categories = [
    "Politics",
    "Health & Medicine",
    "Science & Technology",
    "Climate & Environment",
    "Economics & Finance",
    "Social Issues",
    "Entertainment",
    "Sports",
    "Education",
    "Other",
  ]

  const handleContentTypeSelect = (type: string) => {
    setForm({ ...form, contentType: type as any })
  }

  const handleInputChange = (field: keyof SubmissionForm, value: any) => {
    setForm({ ...form, [field]: value })
  }

  const handleAddTag = () => {
    if (currentTag.trim() && !form.tags.includes(currentTag.trim())) {
      setForm({ ...form, tags: [...form.tags, currentTag.trim()] })
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setForm({ ...form, tags: form.tags.filter((tag) => tag !== tagToRemove) })
  }

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files)
      setForm({ ...form, attachments: [...form.attachments, ...newFiles] })
    }
  }

  const handleRemoveFile = (index: number) => {
    const newAttachments = form.attachments.filter((_, i) => i !== index)
    setForm({ ...form, attachments: newAttachments })
  }

  const handleUrlPreview = async () => {
    if (form.url) {
      // Simulate URL preview fetch
      setPreviewData({
        title: "Sample Article Title",
        description: "This is a sample description of the article content...",
        image: "/placeholder.svg?height=200&width=400",
        domain: "example.com",
      })
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle success/redirect
  }

  const isFormValid = () => {
    return (
      form.contentType &&
      form.title.trim() &&
      form.description.trim() &&
      (form.contentType === "url" ? form.url.trim() : true) &&
      (form.contentType === "tweet" ? form.tweetUrl.trim() : true) &&
      (form.contentType === "text" ? form.content.trim() : true)
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-emerald-900/20 px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="ml-8 flex items-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-2">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">TrueDAO</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Submit Content for Verification</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Help combat misinformation by submitting content that needs fact-checking. Our decentralized community of
            verified fact-checkers will review and vote on the accuracy of your submission.
          </p>
        </div>

        {/* Content Type Selection */}
        {!form.contentType && (
          <Card className="bg-slate-900/50 border-slate-700/50 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-emerald-400" />
                Choose Content Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleContentTypeSelect(type.id)}
                    className="p-4 border border-slate-600 rounded-lg hover:border-emerald-400 hover:bg-slate-800/50 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-emerald-400 group-hover:text-emerald-300">{type.icon}</div>
                      <h3 className="font-medium text-white">{type.name}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Submission Form */}
        {form.contentType && (
          <div className="space-y-6">
            {/* Content Type Header */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {contentTypes.find((t) => t.id === form.contentType)?.icon}
                    <div>
                      <h3 className="font-medium text-white">
                        {contentTypes.find((t) => t.id === form.contentType)?.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {contentTypes.find((t) => t.id === form.contentType)?.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setForm({ ...form, contentType: "" })}
                    className="text-gray-400 hover:text-white"
                  >
                    Change Type
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Basic Information */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter a clear, descriptive title"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Provide a brief description of what needs to be fact-checked"
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={form.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                    <select
                      value={form.priority}
                      onChange={(e) => handleInputChange("priority", e.target.value)}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content-Specific Fields */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Content Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {form.contentType === "url" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      URL <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={form.url}
                        onChange={(e) => handleInputChange("url", e.target.value)}
                        placeholder="https://example.com/article"
                        className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      />
                      <Button onClick={handleUrlPreview} variant="outline" className="border-slate-600">
                        Preview
                      </Button>
                    </div>
                    {previewData && (
                      <div className="mt-4 p-4 bg-slate-800 rounded-md border border-slate-600">
                        <div className="flex gap-4">
                          <img
                            src={previewData.image || "/placeholder.svg"}
                            alt="Preview"
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{previewData.title}</h4>
                            <p className="text-sm text-gray-400 mt-1">{previewData.description}</p>
                            <p className="text-xs text-emerald-400 mt-2">{previewData.domain}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {form.contentType === "tweet" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tweet URL <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="url"
                      value={form.tweetUrl}
                      onChange={(e) => handleInputChange("tweetUrl", e.target.value)}
                      placeholder="https://twitter.com/username/status/123456789"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                  </div>
                )}

                {form.contentType === "text" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Text Content <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={form.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      placeholder="Paste the text content that needs fact-checking"
                      rows={6}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                  </div>
                )}

                {(form.contentType === "image" || form.contentType === "video") && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload {form.contentType === "image" ? "Image" : "Video"} <span className="text-red-400">*</span>
                    </label>
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
                      <input
                        type="file"
                        accept={form.contentType === "image" ? "image/*" : "video/*"}
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400">Click to upload or drag and drop your {form.contentType}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {form.contentType === "image" ? "PNG, JPG, GIF up to 10MB" : "MP4, MOV, AVI up to 100MB"}
                        </p>
                      </label>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Author/Source
                    </label>
                    <input
                      type="text"
                      value={form.author}
                      onChange={(e) => handleInputChange("author", e.target.value)}
                      placeholder="Author or original source"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Date Published
                    </label>
                    <input
                      type="date"
                      value={form.datePublished}
                      onChange={(e) => handleInputChange("datePublished", e.target.value)}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Tag className="w-4 h-4 inline mr-1" />
                    Tags
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                      placeholder="Add tags (press Enter)"
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                    <Button onClick={handleAddTag} size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  {form.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {form.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm"
                        >
                          {tag}
                          <button onClick={() => handleRemoveTag(tag)} className="hover:text-emerald-100">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Additional Context</label>
                  <textarea
                    value={form.additionalContext}
                    onChange={(e) => handleInputChange("additionalContext", e.target.value)}
                    placeholder="Any additional context or background information that might help fact-checkers"
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                </div>
              </CardContent>
            </Card>

            {/* File Attachments */}
            {form.attachments.length > 0 && (
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white">Attachments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {form.attachments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-800 rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-white">{file.name}</span>
                          <span className="text-xs text-gray-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button onClick={() => handleRemoveFile(index)} className="text-red-400 hover:text-red-300">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submission Guidelines */}
            <Card className="bg-blue-900/20 border-blue-700/30">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Submission Guidelines</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Ensure your submission contains factual claims that can be verified</li>
                      <li>• Provide as much context as possible to help fact-checkers</li>
                      <li>• Avoid submitting opinion pieces or clearly satirical content</li>
                      <li>• Check if similar content has already been submitted</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid() || isSubmitting}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit for Verification"}
              </Button>
              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="border-slate-600 text-gray-300 hover:bg-slate-800"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
