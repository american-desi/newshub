import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Newspaper, Zap, BarChart3 } from 'lucide-react'

// Placeholder pages
const FeedPage = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Real-time News Feed</h2>
    <p className="text-gray-600">Aggregated content from multiple sources, orchestrated in real-time.</p>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 border rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold">News Item {i}</h3>
          <p className="text-sm text-gray-500 mt-2">Source • 2 hours ago</p>
          <p className="mt-3 text-gray-700">Breaking news content would appear here with rich formatting and media integration.</p>
        </div>
      ))}
    </div>
  </div>
)

const PipelinePage = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Pipeline Orchestrator</h2>
    <p className="text-gray-600">Manage data flow, curation rules, and content transformation.</p>
    <div className="bg-slate-50 p-6 rounded-lg border">
      <p className="text-gray-600">Configure sources → Filter → Enhance → Distribute</p>
    </div>
  </div>
)

const AnalyticsPage = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Content Analytics</h2>
    <p className="text-gray-600">Track engagement, trending topics, and audience insights.</p>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="p-4 bg-blue-50 rounded-lg border">
        <p className="text-sm font-semibold text-blue-900">Total Articles</p>
        <p className="text-3xl font-bold text-blue-600 mt-2">2,847</p>
      </div>
      <div className="p-4 bg-green-50 rounded-lg border">
        <p className="text-sm font-semibold text-green-900">Engagement Rate</p>
        <p className="text-3xl font-bold text-green-600 mt-2">34.2%</p>
      </div>
    </div>
  </div>
)

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2">
                <Newspaper className="w-6 h-6 text-blue-600" />
                <span className="font-bold text-lg">News-XP</span>
              </Link>
              <div className="flex gap-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Feed</Link>
                <Link to="/pipeline" className="text-gray-700 hover:text-blue-600 font-medium">Pipeline</Link>
                <Link to="/analytics" className="text-gray-700 hover:text-blue-600 font-medium">Analytics</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/pipeline" element={<PipelinePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>News-XP Orchestrator • Next-generation news aggregation platform</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}
