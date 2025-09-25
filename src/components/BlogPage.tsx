import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  FileText, 
  Folder, 
  FolderOpen, 
  Calendar, 
  Clock, 
  Tag,
  Search,
  ChevronRight,
  ChevronDown,
  Eye,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<string>('multimodal-llm-insights');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['research', 'tech', 'life']));
  const [searchTerm, setSearchTerm] = useState('');
  const [postContent, setPostContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const blogStructure = {
    research: {
      name: '研究发现',
      icon: Folder,
      posts: [
        {
          id: 'multimodal-llm-insights',
          title: '多模态大语言模型的新见解',
          date: '2024-12-15',
          tags: ['LLM', 'Multimodal', 'AI'],
          readTime: '8 min',
          views: 234,
          likes: 12,
          file: '../blog/research/multimodal-llm-insights.md'
        },
        {
          id: 'cognitive-neuroscience-ai',
          title: '认知神经科学与AI的交叉研究',
          date: '2024-12-10',
          tags: ['Neuroscience', 'AI', 'Cognition'],
          readTime: '12 min',
          views: 189,
          likes: 8,
          file: '../blog/research/cognitive-neuroscience-ai.md'
        }
      ]
    },
    tech: {
      name: '技术笔记',
      icon: Folder,
      posts: [
        {
          id: 'pytorch-optimization',
          title: 'PyTorch模型优化实践',
          date: '2024-12-12',
          tags: ['PyTorch', 'Optimization', 'Deep Learning'],
          readTime: '10 min',
          views: 312,
          likes: 23,
          file: '../blog/tech/pytorch-optimization.md'
        }
      ]
    },
    life: {
      name: '人生感悟',
      icon: Folder,
      posts: [
        {
          id: 'research-life-balance',
          title: '科研与生活的平衡艺术',
          date: '2024-12-14',
          tags: ['Life', 'Research', 'Balance'],
          readTime: '5 min',
          views: 167,
          likes: 28,
          file: '../blog/life/research-life-balance.md'
        },
        {
          id: 'cat-dad-lessons',
          title: '当猫爸教会我的事',
          date: '2024-12-11',
          tags: ['Life', 'Pets', 'Growth'],
          readTime: '4 min',
          views: 145,
          likes: 35,
          file: '../blog/life/cat-dad-lessons.md'
        }
      ]
    }
  };

  // 加载博客内容
  const loadPostContent = async (postId: string) => {
    setLoading(true);
    try {
      // 查找对应的文件路径
      let filePath = '';
      Object.values(blogStructure).forEach(folder => {
        const post = folder.posts.find(p => p.id === postId);
        if (post) {
          filePath = post.file;
        }
      });

      if (filePath) {
        const response = await fetch(`/src/blog/${filePath}`);
        if (response.ok) {
          const content = await response.text();
          setPostContent(content);
        } else {
          setPostContent('# 文章加载失败\n\n抱歉，无法加载此文章内容。');
        }
      }
    } catch (error) {
      console.error('Error loading post:', error);
      setPostContent('# 文章加载失败\n\n抱歉，无法加载此文章内容。');
    } finally {
      setLoading(false);
    }
  };

  // 当选中的文章改变时加载内容
  useEffect(() => {
    loadPostContent(selectedPost);
  }, [selectedPost]);

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const getAllPosts = () => {
    const allPosts: any[] = [];
    Object.entries(blogStructure).forEach(([folderId, folder]) => {
      folder.posts.forEach(post => {
        allPosts.push({ ...post, folderId, folderName: folder.name });
      });
    });
    return allPosts;
  };

  const filteredPosts = getAllPosts().filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getCurrentPost = () => {
    const allPosts = getAllPosts();
    return allPosts.find(post => post.id === selectedPost) || allPosts[0];
  };

  const currentPost = getCurrentPost();

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-4">
      {/* Left Sidebar - File Management */}
      <div className="w-80 bg-gray-900/30 border border-gray-800/50 rounded-lg p-4 overflow-y-auto">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="搜索博客..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded text-gray-300 text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600"
          />
        </div>

        {/* Folder Structure */}
        <div className="space-y-2">
          {Object.entries(blogStructure).map(([folderId, folder]) => (
            <div key={folderId}>
              {/* Folder Header */}
              <button
                onClick={() => toggleFolder(folderId)}
                className="flex items-center w-full p-2 text-left hover:bg-gray-800/30 rounded transition-colors"
              >
                {expandedFolders.has(folderId) ? (
                  <ChevronDown className="w-4 h-4 mr-2 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-500" />
                )}
                {expandedFolders.has(folderId) ? (
                  <FolderOpen className="w-4 h-4 mr-2 text-gray-500" />
                ) : (
                  <Folder className="w-4 h-4 mr-2 text-gray-500" />
                )}
                <span className="text-gray-300 text-sm font-medium">{folder.name}</span>
                <span className="ml-auto text-gray-500 text-xs">
                  {folder.posts.length}
                </span>
              </button>

              {/* Posts in Folder */}
              {expandedFolders.has(folderId) && (
                <div className="ml-6 space-y-1">
                  {folder.posts
                    .filter(post => 
                      !searchTerm || 
                      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                    )
                    .map((post) => (
                    <button
                      key={post.id}
                      onClick={() => setSelectedPost(post.id)}
                      className={`flex items-start w-full p-2 text-left rounded transition-colors ${
                        selectedPost === post.id
                          ? 'bg-gray-700/50 border border-gray-600/50'
                          : 'hover:bg-gray-800/30'
                      }`}
                    >
                      <FileText className="w-3 h-3 mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-300 text-xs font-medium truncate">
                          {post.title}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-gray-500 text-xs">{post.date}</span>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3 text-gray-600" />
                            <span className="text-gray-600 text-xs">{post.views}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-gray-700/30 text-gray-500 text-xs px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Results */}
        {searchTerm && (
          <div className="mt-6 pt-4 border-t border-gray-800/50">
            <h3 className="text-gray-400 text-xs font-medium mb-2">
              搜索结果 ({filteredPosts.length})
            </h3>
            <div className="space-y-1">
              {filteredPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  className={`flex items-start w-full p-2 text-left rounded transition-colors ${
                    selectedPost === post.id
                      ? 'bg-gray-700/50 border border-gray-600/50'
                      : 'hover:bg-gray-800/30'
                  }`}
                >
                  <FileText className="w-3 h-3 mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-300 text-xs font-medium truncate">
                      {post.title}
                    </div>
                    <div className="text-gray-500 text-xs">{post.folderName}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content Area */}
      <div className="flex-1 bg-gray-900/30 border border-gray-800/50 rounded-lg overflow-hidden flex flex-col">
        {/* Post Header */}
        <div className="border-b border-gray-800/50 p-6 flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-200 mb-3">
            {currentPost?.title || '加载中...'}
          </h1>
          
          {currentPost && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{currentPost.views} 阅读</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{currentPost.likes} 点赞</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {currentPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700/30 text-gray-400 text-xs px-2 py-1 rounded flex items-center"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-gray-400">加载中...</div>
              </div>
            ) : (
              <div className="prose prose-invert prose-xs max-w-none text-gray-300 leading-relaxed text-sm">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h1 className="text-xl font-bold text-gray-200 mb-3 mt-5">{children}</h1>,
                    h2: ({children}) => <h2 className="text-lg font-semibold text-gray-200 mb-2 mt-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-base font-medium text-gray-200 mb-2 mt-3">{children}</h3>,
                    p: ({children}) => <p className="text-gray-300 mb-3 leading-relaxed text-sm">{children}</p>,
                    ul: ({children}) => <ul className="text-gray-300 mb-3 ml-4 list-disc text-sm">{children}</ul>,
                    ol: ({children}) => <ol className="text-gray-300 mb-3 ml-4 list-decimal text-sm">{children}</ol>,
                    li: ({children}) => <li className="mb-1">{children}</li>,
                    code: ({children}) => <code className="bg-gray-800/50 text-gray-200 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                    pre: ({children}) => <pre className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 mb-3 overflow-x-auto text-sm">{children}</pre>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-gray-600 pl-3 italic text-gray-400 mb-3 text-sm">{children}</blockquote>,
                    table: ({children}) => <table className="w-full border-collapse border border-gray-700 mb-3 text-sm">{children}</table>,
                    th: ({children}) => <th className="border border-gray-700 px-2 py-1.5 bg-gray-800/30 text-gray-200 font-medium text-left text-sm">{children}</th>,
                    td: ({children}) => <td className="border border-gray-700 px-2 py-1.5 text-gray-300 text-sm">{children}</td>,
                    strong: ({children}) => <strong className="text-gray-200 font-semibold">{children}</strong>,
                    em: ({children}) => <em className="text-gray-300 italic">{children}</em>,
                    hr: () => <hr className="border-gray-700 my-4" />,
                    a: ({href, children}) => <a href={href} className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>
                  }}
                >
                  {postContent}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {/* Post Actions */}
        <div className="border-t border-gray-800/50 p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm">点赞</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">评论</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">分享</span>
              </button>
            </div>
            
            {currentPost && (
              <div className="text-gray-500 text-xs">
                最后更新: {currentPost.date}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;