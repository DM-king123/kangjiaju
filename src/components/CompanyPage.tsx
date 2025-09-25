import React from 'react';
import backgroundImage from '../images/IMG_2575.HEIC';
import { 
  Building2, 
  Users, 
  Globe, 
  Brain, 
  Database, 
  Cpu, 
  Network,
  Target,
  Award,
  Calendar,
  ExternalLink,
  MapPin,
  Briefcase
} from 'lucide-react';

const CompanyPage: React.FC = () => {
  const companyInfo = {
    name: "长沙伏羲云科技有限公司",
    nameEn: "Changsha Fuxi Cloud Technology Co., Ltd.",
    website: "www.fuxi-lab.com",
    location: "Changsha, Hunan, China",
    founded: "2023",
    myRole: "CTO & Board Member"
  };

  const researchProjects = [
    {
      title: "Cultural Heritage AI Assistant",
      description: "Developing specialized LLMs for museum curation and cultural artifact analysis",
      status: "In Progress",
      timeline: "2024 - Present",
      technologies: ["Large Language Models", "Computer Vision", "Knowledge Graphs"],
      impact: "Serving 15+ museums nationwide"
    },
    {
      title: "Multimodal Museum Guide System",
      description: "AI-powered interactive guide system combining text, image, and audio processing",
      status: "Beta Testing",
      timeline: "2024 Q2 - Q4",
      technologies: ["Multimodal AI", "Speech Recognition", "AR/VR"],
      impact: "Deployed in 5 pilot museums"
    },
    {
      title: "Historical Document Digitization Platform",
      description: "Automated OCR and content analysis for ancient Chinese texts and artifacts",
      status: "Production",
      timeline: "2023 - 2024",
      technologies: ["OCR", "NLP", "Deep Learning"],
      impact: "Processed 100K+ historical documents"
    },
    {
      title: "Cultural Knowledge Graph Construction",
      description: "Building comprehensive knowledge graphs for Chinese cultural heritage",
      status: "Research Phase",
      timeline: "2024 - 2025",
      technologies: ["Knowledge Graphs", "Entity Recognition", "Semantic Web"],
      impact: "Covering 50+ cultural domains"
    }
  ];

  const companyStats = [
    { label: "Museums Served", value: "20+", icon: Building2 },
    { label: "AI Models Deployed", value: "8", icon: Brain },
    { label: "Team Members", value: "25", icon: Users },
    { label: "Patents Filed", value: "12", icon: Award }
  ];

  const keyAchievements = [
    {
      title: "National High-Tech Enterprise Certification",
      date: "2024",
      description: "Recognized as a national high-tech enterprise by the Chinese government"
    },
    {
      title: "Cultural Heritage AI Innovation Award",
      date: "2024",
      description: "Awarded for outstanding contributions to cultural heritage digitization"
    },
    {
      title: "Strategic Partnership with Palace Museum",
      date: "2024",
      description: "Established collaboration for AI-powered cultural artifact analysis"
    },
    {
      title: "Series A Funding Completed",
      date: "2023",
      description: "Secured $5M Series A funding for cultural AI research and development"
    }
  ];

  const technologyStack = [
    "Large Language Models (LLMs)",
    "Computer Vision",
    "Natural Language Processing",
    "Knowledge Graphs",
    "Deep Learning",
    "Multimodal AI",
    "OCR & Document Analysis",
    "Speech Recognition",
    "AR/VR Technologies",
    "Cloud Computing"
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay with gradient fade for natural edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10 space-y-4 p-4">
      {/* Company Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {companyStats.map((stat, index) => (
          <div key={index} className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 text-center backdrop-blur-sm">
            <stat.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-200 mb-1">{stat.value}</div>
            <div className="text-gray-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Company Information */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Building2 className="w-4 h-4 mr-2 text-gray-500" />
              Company Information
            </h3>
            <div className="space-y-3">
              <div>
                <div className="text-gray-300 font-medium text-xs mb-1">{companyInfo.name}</div>
                <div className="text-gray-500 text-xs">{companyInfo.nameEn}</div>
              </div>
              
              <div className="flex items-center text-gray-400 text-xs">
                <Globe className="w-3 h-3 mr-2 text-gray-500" />
                <a 
                  href={`https://${companyInfo.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 hover:underline transition-colors"
                >
                  {companyInfo.website}
                  <ExternalLink className="w-3 h-3 inline ml-1" />
                </a>
              </div>
              
              <div className="flex items-center text-gray-400 text-xs">
                <MapPin className="w-3 h-3 mr-2 text-gray-500" />
                {companyInfo.location}
              </div>
              
              <div className="flex items-center text-gray-400 text-xs">
                <Calendar className="w-3 h-3 mr-2 text-gray-500" />
                Founded in {companyInfo.founded}
              </div>
              
              <div className="flex items-center text-gray-400 text-xs">
                <Briefcase className="w-3 h-3 mr-2 text-gray-500" />
                {companyInfo.myRole}
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Cpu className="w-4 h-4 mr-2 text-gray-500" />
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {technologyStack.map((tech, index) => (
                <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded px-2 py-1">
                  <span className="text-gray-400 text-xs">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2 text-gray-500" />
              Key Achievements
            </h3>
            <div className="space-y-2">
              {keyAchievements.map((achievement, index) => (
                <div key={index} className="border-l border-gray-600 pl-3 pb-2 border-b border-gray-800/30 last:border-b-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-gray-300 font-medium text-xs">{achievement.title}</h4>
                    <span className="text-gray-500 text-xs font-mono">{achievement.date}</span>
                  </div>
                  <div className="text-gray-500 text-xs leading-tight">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Projects */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Brain className="w-4 h-4 mr-2 text-gray-500" />
              Current Research Projects
            </h3>
            <div className="space-y-4">
              {researchProjects.map((project, index) => (
                <div key={index} className="border border-gray-700/50 rounded-lg p-3 bg-gray-800/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-300 font-medium text-sm">{project.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.status === 'Production' ? 'bg-green-900/30 text-green-400 border border-green-800/50' :
                        project.status === 'Beta Testing' ? 'bg-blue-900/30 text-blue-400 border border-blue-800/50' :
                        project.status === 'In Progress' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50' :
                        'bg-gray-800/30 text-gray-400 border border-gray-700/50'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-gray-500 text-xs font-mono">{project.timeline}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700/30 text-gray-400 text-xs px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-xs">
                    <Target className="w-3 h-3 mr-1" />
                    Impact: {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Mission */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mt-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Network className="w-4 h-4 mr-2 text-gray-500" />
              Our Mission
            </h3>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <p>
                At Fuxi Cloud Technology, we are dedicated to revolutionizing the cultural heritage industry through 
                cutting-edge AI technologies. Our mission is to bridge the gap between traditional cultural preservation 
                and modern digital innovation.
              </p>
              <p>
                We specialize in developing large language model solutions specifically tailored for museums, cultural 
                institutions, and heritage preservation organizations. Our AI-powered platforms enable intelligent 
                curation, automated documentation, and enhanced visitor experiences.
              </p>
              <p>
                As CTO and Board Member, I lead our technical vision and research initiatives, ensuring that our 
                solutions not only preserve cultural heritage but also make it more accessible and engaging for 
                future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-900/60 border border-gray-800/50 rounded-lg px-3 py-1.5 backdrop-blur-sm">
          <Database className="w-3 h-3 text-gray-500" />
          <span className="text-gray-500 text-xs">Company information last updated: December 15, 2024</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CompanyPage;