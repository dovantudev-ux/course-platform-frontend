export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Courses</h1>
          <p className="text-gray-300">Discover your next learning adventure</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
          <select className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500">
            <option>All Categories</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Design</option>
          </select>
          <select className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500">
            <option>Sort by: Newest</option>
            <option>Sort by: Popular</option>
            <option>Sort by: Price</option>
          </select>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                <div className="absolute top-3 right-3 px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                  Bestseller
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-purple-400 font-semibold">WEB DEVELOPMENT</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  Complete Web Development Bootcamp 2026
                </h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  Learn HTML, CSS, JavaScript, React, Node.js and more
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-white text-sm ml-1">4.8</span>
                  </div>
                  <span className="text-gray-400 text-sm">(2,345)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">$49</span>
                    <span className="text-sm text-gray-400 line-through ml-2">$199</span>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg transition-all ${
                page === 1
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
            Next
          </button>
        </div>
      </div>
    </main>
  )
}
