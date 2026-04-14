'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPrice: string | null;
  thumbnailUrl: string | null;
  level: string;
  instructor: {
    id: string;
    fullName: string;
    avatarUrl: string | null;
  };
  category: {
    name: string;
  };
  lessons: Array<{
    id: string;
    title: string;
    duration: number;
    orderIndex: number;
    isPreview: boolean;
  }>;
  reviews: Array<{
    id: string;
    rating: number;
    comment: string | null;
    createdAt: string;
    user: {
      fullName: string;
      avatarUrl: string | null;
    };
  }>;
  _count: {
    enrollments: number;
  };
}

export default function CourseDetailPage() {
  const params = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetch(`/api/courses/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setCourse(data);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error:', err);
          setLoading(false);
        });
    }
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">CourseHub</Link>
              <div className="flex items-center gap-6">
                <Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link>
                <Link href="/dashboard" className="text-gray-300 hover:text-white">My Learning</Link>
                <Link href="/auth" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Sign In</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white text-xl">Loading course...</div>
        </div>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">CourseHub</Link>
              <div className="flex items-center gap-6">
                <Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link>
                <Link href="/dashboard" className="text-gray-300 hover:text-white">My Learning</Link>
                <Link href="/auth" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Sign In</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white text-xl">Course not found</div>
        </div>
      </main>
    );
  }

  const totalDuration = course.lessons.reduce((acc, lesson) => acc + lesson.duration, 0);
  const hours = Math.floor(totalDuration / 3600);
  const avgRating = course.reviews.length > 0 
    ? (course.reviews.reduce((acc, r) => acc + r.rating, 0) / course.reviews.length).toFixed(1)
    : '0.0';

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">CourseHub</Link>
            <div className="flex items-center gap-6">
              <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">My Learning</Link>
              <Link href="/auth" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">{course.category.name}</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {course.description}
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-white font-semibold">{avgRating}</span>
                <span className="text-gray-400">({course.reviews.length} reviews)</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold">{course._count.enrollments}</span> students
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {course.instructor.fullName.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold">{course.instructor.fullName}</p>
                <p className="text-gray-400 text-sm">Course Instructor</p>
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
                  <span className="text-4xl font-bold text-white">${course.discountPrice || course.price}</span>
                  {course.discountPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">${course.price}</span>
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">
                        {Math.round((1 - parseFloat(course.discountPrice) / parseFloat(course.price)) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-red-400 text-sm">⏰ Limited time offer!</p>
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
                  <span>{hours} hours on-demand video</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{course.lessons.length} lessons</span>
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
                  'Master fundamental concepts and techniques',
                  'Build real-world projects from scratch',
                  'Understand advanced algorithms and patterns',
                  'Apply best practices in production',
                  'Work with modern tools and frameworks',
                  'Deploy applications to the cloud',
                  'Implement security and optimization',
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
                {course.lessons.map((lesson, i) => (
                  <div key={lesson.id} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                        <span className="text-white">{lesson.title}</span>
                        {lesson.isPreview && (
                          <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded">Preview</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">{Math.floor(lesson.duration / 60)}:{(lesson.duration % 60).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            {course.reviews.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Student Reviews</h2>
                <div className="space-y-4">
                  {course.reviews.map((review) => (
                    <div key={review.id} className="border-b border-white/10 pb-4 last:border-0">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {review.user.fullName.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-semibold">{review.user.fullName}</h4>
                            <span className="text-sm text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-yellow-400">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                          </div>
                          {review.comment && (
                            <p className="text-gray-300 text-sm">{review.comment}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Instructor */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">About the Instructor</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {course.instructor.fullName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{course.instructor.fullName}</h4>
                  <p className="text-gray-400 text-sm">Expert Instructor</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Experienced professional with years of expertise in the field. Passionate about teaching and helping students achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
