import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Newspaper } from 'lucide-react'

const FeedPage = () => (<div><h2 className="text-2xl font-bold">News-XP Feed</h2><p>Real-time news aggregation.</p></div>)
const PipelinePage = () => (<div><h2 className="text-2xl font-bold">Pipeline</h2></div>)
const AnalyticsPage = () => (<div><h2 className="text-2xl font-bold">Analytics</h2></div>)

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2"><Newspaper className="w-6 h-6"/><span className="font-bold">News-XP</span></Link>
            <div className="flex gap-6"><Link to="/">Feed</Link><Link to="/pipeline">Pipeline</Link><Link to="/analytics">Analytics</Link></div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/pipeline" element={<PipelinePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
