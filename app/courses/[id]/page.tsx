export default function CourseDetailPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Web Development</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Complete Web Development Bootcamp 2026
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and deploy real-world projects.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-white font-semibold">4.8</span>
                <span className="text-gray-400">(2,345 reviews)</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">12,543</span> students
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://via.placeholder.com/50" alt="Instructor" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-white font-semibold">John Doe</p>
                <p className="text-gray-400 text-sm">Senior Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Sidebar Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 sticky top-8">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-xl text-gray-400 line-through">$199</span>
                  <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">75% OFF</span>
                </div>
                <p className="text-red-400 text-sm">⏰ 2 days left at this price!</p>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all mb-3">
                Enroll Now
              </button>
              <button className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all mb-4">
                Add to Wishlist
              </button>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>42 hours on-demand video</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>15 articles</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Full lifetime access</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What you'll learn */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Build responsive websites with HTML & CSS',
                  'Master JavaScript ES6+ features',
                  'Create dynamic UIs with React',
                  'Build REST APIs with Node.js',
                  'Work with databases (MongoDB, PostgreSQL)',
                  'Deploy applications to production',
                  'Implement authentication & authorization',
                  'Write clean, maintainable code',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Course Curriculum</h2>
              <div className="space-y-2">
                {[
                  { title: 'Introduction to Web Development', lessons: 5, duration: '45 min' },
                  { title: 'HTML Fundamentals', lessons: 12, duration: '2h 30min' },
                  { title: 'CSS & Responsive Design', lessons: 15, duration: '3h 15min' },
                  { title: 'JavaScript Basics', lessons: 20, duration: '4h 45min' },
                  { title: 'Advanced JavaScript', lessons: 18, duration: '5h 20min' },
                  { title: 'React Fundamentals', lessons: 25, duration: '6h 30min' },
                ].map((section, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-semibold">{section.title}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{section.lessons} lessons</span>
                        <span>{section.duration}</span>
                      </div>
                    </summary>
                    <div className="pl-12 pr-4 py-2 space-y-2">
                      {[1, 2, 3].map((lesson) => (
                        <div key={lesson} className="flex items-center justify-between py-2 text-gray-300 hover:text-white transition-colors">
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                            </svg>
                            <span className="text-sm">Lesson {lesson}: Introduction</span>
                          </div>
                          <span className="text-sm text-gray-400">12:34</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Student Reviews</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-white/10 pb-4 last:border-0">
                    <div className="flex items-start gap-4">
                      <img src="https://via.placeholder.com/40" alt="Student" className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-semibold">Sarah Johnson</h4>
                          <span className="text-sm text-gray-400">2 days ago</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-yellow-400">★★★★★</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Excellent course! The instructor explains everything clearly and the projects are very practical. Highly recommended for beginners.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Instructor */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">About the Instructor</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://via.placeholder.com/80" alt="Instructor" className="w-20 h-20 rounded-full" />
                <div>
                  <h4 className="text-white font-semibold text-lg">John Doe</h4>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.9 Instructor Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  <span>45,234 Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span>12 Courses</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                John is a senior full-stack developer with 10+ years of experience. He has worked with companies like Google and Microsoft, and loves teaching web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
