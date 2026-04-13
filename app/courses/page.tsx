'use client';

import { useEffect, useState } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPrice: string | null;
  thumbnailUrl: string | null;
  level: string;
  instructor: {
    fullName: string;
  };
  category: {
    name: string;
  };
  _count: {
    enrollments: number;
    reviews: number;
  };
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://152.69.205.111:5000/api';
    fetch(`${API_URL}/courses`)
      .then(res => res.json())
      .then(data => {
        setCourses(data.courses);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white text-xl">Loading courses...</div>
        </div>
      </main>
    );
  }

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
            <option>Artificial Intelligence</option>
            <option>Data Science</option>
            <option>Web Development</option>
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
          {courses.map((course) => (
            <div key={course.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative">
                {course.discountPrice && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {Math.round((1 - parseFloat(course.discountPrice) / parseFloat(course.price)) * 100)}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-purple-400 font-semibold uppercase">{course.category.name}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-400">by {course.instructor.fullName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">${course.discountPrice || course.price}</span>
                    {course.discountPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">${course.price}</span>
                    )}
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
