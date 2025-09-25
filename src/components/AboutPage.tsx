import React from 'react';
import backgroundImage from '../images/personal.jpg';
import { 
  Code, 
  Brain, 
  Heart, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  GraduationCap,
  Microscope,
  Database,
  Cpu,
  Network,
  Activity,
  Clock,
  MapPin,
  Briefcase
} from 'lucide-react';

interface AboutPageProps {
  typedText: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ typedText }) => {
  const education = [
    {
      degree: "M.Sc. in Cognitive Neuroscience (expected)",
      school: "University of Macau",
      year: "2024-2027",
      focus: "Cognitive processes and neural mechanisms"
    }
    ,
    {
      degree: "Graduation Research",
      school: "Wuhan University",
      year: "2023-2024",
      focus: "Image-text intelligent retrieval standard - Remote Sensing Intelligent interpretation"
    },
    {
      degree: "B.Sc. in Data Science and Big Data Technology",
      school: "Shandong University of Architecture",
      year: "2020-2024",
      focus: "Data analysis and machine learning applications"
    }
  ];

  const workBackground = [
    {
      position: "Research Assistant",
      institution: "Beijing Normal University",
      supervisor: "Prof. Ping Shen, Prof. Weijia Jia",
      period: "Aug. 2024 - Apr. 2025",
      research: "Embodied Intelligence and Visual LLMs",
      location: "Beijing, China"
    },
    {
      position: "Visiting Student",
      institution: "Wuhan University",
      supervisor: "Prof. Mi Zhang, Prof. Jianya Gong",
      period: "Jul. 2023 - Apr. 2024",
      research: "Remote sensing images and texts retrieval based on LLMs",
      location: "Wuhan, China"
    },
    {
      position: "Research Intern",
      institution: "University of Cambridge",
      supervisor: "Prof. Amanda Prorok",
      period: "Feb. 2023 - Jun. 2023",
      research: "Swarm intelligence and obstacle avoidance",
      location: "Cambridge, UK"
    },
    {
      position: "Research Intern",
      institution: "Tongji University",
      supervisor: "Prof. Changrong Lu",
      period: "Jul. 2022 - Nov. 2022",
      research: "LLMs and natural language processing",
      location: "Shanghai, China"
    },
    {
      position: "Chair, Undergraduate Research Team",
      institution: "School of Computer Science, Shandong Jianzhu University",
      supervisor: "Prof. Xiaofei Niu",
      period: "Dec. 2020 - Sep. 2023",
      research: "Leading undergraduate research projects in data science",
      location: "Jinan, China"
    }
  ];

  const recentUpdates = [
    {
      time: "April 2025",
      type: "work",
      content: "Left Beijing Normal University and started a new research direction"
    },
    {
      time: "June 2025", 
      type: "research",
      content: "In Changsha, we focused on large model solutions in the cultural and museum field"
    },
    {
      time: "August 2025",
      type: "education", 
      content: "Began my graduate life in Macau"
    },
    {
      time: "September 2025",
      type: "research",
      content: "Returned to Changsha, and the wenyaun large model went into production"
    },
    {
      time: "September 2025",
      type: "life", 
      content: "My cat Gaogao recovered from cat flu! 🎉"
    }
];

  const researchInterests = [
    { icon: Brain, title: "Multimodal LLMs", desc: "Applications in industry and academia" },
    { icon: Database, title: "Research Translation", desc: "Bridging academic research and practical value" },
    { icon: Cpu, title: "Innovation", desc: "Transforming research outcomes into productive forces" },
    { icon: Network, title: "Cognitive Science", desc: "Neural mechanisms and cognitive processes" }
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
        <div className="grid lg:grid-cols-3 gap-4">
      {/* Personal Info Card */}
      <div className="lg:col-span-1">
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
          <div className="text-center mb-4">
            
            <h2 className="text-lg font-semibold text-gray-200 mb-1">Jiaju Kang</h2>
            <div className="text-gray-400 font-mono text-xs mb-3">{typedText}</div>
            <div className="flex justify-center space-x-3">
              <Github className="w-4 h-4 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex items-center text-gray-400">
              <Mail className="w-3 h-3 mr-2 text-gray-500" />
              kjj_python@163.com
            </div>
            <div className="flex items-center text-gray-400">
              <GraduationCap className="w-3 h-3 mr-2 text-gray-500" />
              University of Macau M.Sc. Student
            </div>
            <div className="flex items-center text-gray-400">
              <Briefcase className="w-3 h-3 mr-2 text-gray-500" />
              Student project leader at ANDLab UM
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Microscope className="w-4 h-4 mr-2 text-gray-500" />
            Research Interests
          </h3>
          <div className="space-y-2">
            {researchInterests.map((interest, index) => (
              <div key={index} className="flex items-start space-x-2">
                <interest.icon className="w-3 h-3 mt-0.5 text-gray-500 flex-shrink-0" />
                <div>
                  <div className="text-gray-300 text-xs font-medium">{interest.title}</div>
                  <div className="text-gray-500 text-xs leading-tight">{interest.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Activity className="w-4 h-4 mr-2 text-gray-500" />
            Recent Updates
          </h3>
          <div className="space-y-2">
            {recentUpdates.map((update, index) => (
              <div key={index} className="flex items-start space-x-2 pb-2 border-b border-gray-800/30 last:border-b-0">
                <Clock className="w-3 h-3 mt-0.5 text-gray-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-0.5">
                    <span className="text-gray-500 text-xs font-mono">{update.time}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded text-gray-400 ${
                      update.type === 'research' ? 'bg-gray-800/30' :
                      update.type === 'work' ? 'bg-gray-800/30' : 'bg-gray-800/30'
                    }`}>
                      {update.type === 'research' ? 'Research' : update.type === 'work' ? 'Work' : 'Life'}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs leading-tight">{update.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-2 space-y-4">
        {/* Personal Introduction */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3">About Me</h3>
          <div className="text-gray-400 text-xs leading-relaxed space-y-2">
            <p>
              I am a passionate researcher currently pursuing my M.Sc. in Cognitive Neuroscience at the University of Macau. 
              With a background in Data Science and Big Data Technology, I focus on bridging the gap between academic research 
              and practical applications.
            </p>
            <p>
              My research interests lie in the applications of multimodal large language models in both industry and academia. 
              I am particularly passionate about innovative approaches to transform research outcomes into productive forces 
              that can create real-world value.
            </p>
            <p>
              Beyond research, I have gained valuable experience through internships and research positions at prestigious 
              institutions including Cambridge, Beijing Normal University, and Wuhan University. I'm also a proud cat dad, 
              learning the joys and challenges of caring for my feline companion.
            </p>
          </div>
        </div>

        {/* Education Background */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <GraduationCap className="w-4 h-4 mr-2 text-gray-500" />
            Education
          </h3>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="border-l border-gray-600 pl-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-0.5">
                  <h4 className="text-gray-300 font-medium text-xs">{edu.degree}</h4>
                  <span className="text-gray-500 text-xs font-mono">{edu.year}</span>
                </div>
                <div className="text-gray-400 text-xs mb-0.5">{edu.school}</div>
                <div className="text-gray-500 text-xs">{edu.focus}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Background */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
            Research Experience
          </h3>
          <div className="space-y-3">
            {workBackground.map((work, index) => (
              <div key={index} className="border-l border-gray-600 pl-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-0.5">
                  <h4 className="text-gray-300 font-medium text-xs">{work.position}</h4>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 text-gray-600" />
                    <span className="text-gray-500 text-xs">{work.location}</span>
                    <span className="text-gray-500 text-xs font-mono">{work.period}</span>
                  </div>
                </div>
                <div className="text-gray-400 text-xs mb-0.5">{work.institution}</div>
                <div className="text-gray-500 text-xs mb-1">Supervisor: {work.supervisor}</div>
                <div className="text-gray-500 text-xs">{work.research}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Code className="w-4 h-4 mr-2 text-gray-500" />
            Core Skills
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "Python", "PyTorch", "TensorFlow", "R",
              "MATLAB", "JavaScript", "React", "Node.js","Deep Learning", "NLP", "CV"
            ].map((skill, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded px-2 py-1 text-center">
                <span className="text-gray-400 text-xs">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;