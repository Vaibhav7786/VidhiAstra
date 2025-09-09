import React, { useState, useEffect } from 'react';
import { Calendar, User, Play, ExternalLink, ChevronRight, BookOpen, Video } from 'lucide-react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'https://cc28a91f-adb9-4940-a084-00adc71723e4-00-2moxppmayxvnj.worf.replit.dev:3001/';

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const BlogsVideos = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'blogs' | 'videos'>('blogs');

  // Sample video data - in a real implementation, this could come from an API
  const legalVideos = [
    {
      id: 1,
      title: 'Understanding Property Law in India',
      description: 'A comprehensive guide to property rights, documentation, and legal procedures in India.',
      thumbnail: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12:45',
      author: 'Advocate Shubham Patidar',
      uploadDate: '2024-01-15',
      category: 'Property Law'
    },
    {
      id: 2,
      title: 'Civil Litigation Process Explained',
      description: 'Step-by-step breakdown of civil litigation procedures and what to expect in court.',
      thumbnail: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '18:30',
      author: 'Advocate Shubham Patidar',
      uploadDate: '2024-01-10',
      category: 'Civil Law'
    },
    {
      id: 3,
      title: 'Family Law: Your Rights and Responsibilities',
      description: 'Essential information about matrimonial disputes, divorce proceedings, and child custody.',
      thumbnail: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '15:20',
      author: 'Advocate Shubham Patidar',
      uploadDate: '2024-01-05',
      category: 'Family Law'
    },
    {
      id: 4,
      title: 'Criminal Defense: Know Your Rights',
      description: 'Important information about criminal proceedings, bail applications, and defense strategies.',
      thumbnail: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '20:15',
      author: 'Advocate Shubham Patidar',
      uploadDate: '2023-12-28',
      category: 'Criminal Law'
    }
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${apiUrl}api/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Use sample data if API fails
      const sampleBlogs: Blog[] = [
        {
          _id: '1',
          title: 'Understanding Property Registration in Madhya Pradesh',
          content: 'Property registration is a crucial legal process that establishes ownership rights...',
          author: 'Advocate Shubham Patidar',
          image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z'
        },
        {
          _id: '2',
          title: 'Recent Updates in Family Law Legislation',
          content: 'The recent amendments to family law have brought significant changes...',
          author: 'Advocate Shubham Patidar',
          image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
          createdAt: '2024-01-10T10:00:00Z',
          updatedAt: '2024-01-10T10:00:00Z'
        },
        {
          _id: '3',
          title: 'Civil Litigation: Best Practices for Clients',
          content: 'When involved in civil litigation, there are several best practices...',
          author: 'Advocate Shubham Patidar',
          image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
          createdAt: '2024-01-05T10:00:00Z',
          updatedAt: '2024-01-05T10:00:00Z'
        }
      ];
      setBlogs(sampleBlogs);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <section id="blogs-videos" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Legal Resources
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Stay informed with our latest legal insights, articles, and educational videos
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'blogs'
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Legal Articles</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'videos'
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
              }`}
            >
              <Video className="h-5 w-5" />
              <span>Educational Videos</span>
            </button>
          </div>
        </div>

        {/* Blogs Section */}
        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-4 w-1/2"></div>
                  </div>
                </div>
              ))
            ) : (
              blogs.map((blog) => (
                <article
                  key={blog._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {truncateContent(blog.content)}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(blog.createdAt)}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-900 font-semibold hover:text-amber-600 transition-colors duration-300 group-hover:translate-x-2 transform">
                      <span>Read More</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        )}

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalVideos.map((video) => (
              <article
                key={video.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-blue-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {video.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{video.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(video.uploadDate)}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-900 font-semibold hover:text-amber-600 transition-colors duration-300 group-hover:translate-x-2 transform">
                    <Play className="h-4 w-4" />
                    <span>Watch Video</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Legal Insights
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest legal updates, case studies, and expert advice
            </p>
            <button className="bg-blue-900 hover:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsVideos;