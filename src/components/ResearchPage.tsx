import React from 'react';
import backgroundImage from '../images/research.JPG';
import { 
  BookOpen, 
  Microscope, 
  Award, 
  Network, 
  Clock,
  Users,
  Trophy,
  Star,
  Shield
} from 'lucide-react';

const ResearchPage: React.FC = () => {
  const publications = [
    {
      title: "Correcting Factuality Hallucination in Complaint Large Language Model via Entity-Augmented",
      authors: "J. Kang†, W. Pan, T. Zhang, Z. Wang, S. Yang, Z. Wang, J. Wang, X. Niu",
      venue: "International Joint Conference on Neural Networks (IJCNN 2024)",
      location: "Yokohama, Japan",
      year: "2024",
      status: "published",
      citations: 5,
      link: "#",
      ranking: "CCF C, CORE B"
    },
    {
      title: "PolicySimEval: A Benchmark for Evaluating Policy Outcomes through Agent-Based Simulation",
      authors: "J. Kang†, P. Han, X. Wang, T. Zhang, L. Gong",
      venue: "IEEE ICME 2025",
      location: "Nantes, France",
      year: "2025",
      status: "accepted",
      citations: 0,
      link: "#",
      ranking: "CCF B, CORE A"
    },
    {
      title: "ECG-Chat: A Large ECG-Language Model for Cardiac Disease Diagnosis",
      authors: "Y. Zhao, J. Kang*†, T. Zhang, X. Wang, P. Han, T. Chen, L. Huang, Y. Jin",
      venue: "IEEE ICME 2025",
      location: "Nantes, France",
      year: "2025",
      status: "accepted",
      citations: 0,
      link: "#",
      ranking: "CCF B, CORE A"
    },
    {
      title: "CoA4Complaint: LLMs Response Strategy for Complex Public Complaint Texts",
      authors: "L. Huang, J. Kang*†",
      venue: "International Conference on Computer Supported Cooperative Work in Design (CSCWD 2025)",
      location: "Compiègne, France",
      year: "2025",
      status: "accepted",
      citations: 0,
      link: "#",
      ranking: "CCF C"
    },
    {
      title: "LuoJiaHOG: A Hierarchy Oriented Geo-aware Image Caption Dataset for Remote Sensing Image-Text Retrieval",
      authors: "Y. Zhao, M. Zhang†, B. Yang, Z. Zhang, J. Kang, J. Gong",
      venue: "ISPRS Journal of Photogrammetry and Remote Sensing",
      location: "",
      year: "2024",
      status: "published",
      citations: 12,
      link: "#",
      ranking: "JCR Q1, IF = 10.6"
    },
    {
      title: "Spectral Enhancement and Pseudo-Anchor Guidance for Infrared-Visible Person Re-Identification",
      authors: "Y. Ge†, Z. Chen, Z. Wang, J. Kang, M. Zhang",
      venue: "IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP 2025)",
      location: "Hyderabad, India",
      year: "2025",
      status: "accepted",
      citations: 0,
      link: "#",
      ranking: "CCF B, CORE B"
    },
    {
      title: "TransformDAS: Mapping Φ-OTDR Signals to Riemannian Manifold for Robust Classification",
      authors: "J. Kang, P. Han, Y. Chun, L. Gong†",
      venue: "arXiv preprint",
      location: "",
      year: "2024",
      status: "preprint",
      citations: 2,
      link: "#",
      ranking: ""
    },
    {
      title: "Bureaucrat-Expert Collaboration in LLM Adoption: An Institutional Logic Perspective on China's Public Sector",
      authors: "M. Ma, C. Wang, F. Han, T. Zhang, J. Kang†",
      venue: "arXiv preprint",
      location: "",
      year: "2025",
      status: "preprint",
      citations: 0,
      link: "#"
    },
    {
      title: "ECG-Expert-QA: A Benchmark for Evaluating Medical Large Language Models in Heart Disease Diagnosis",
      authors: "X. Wang, J. Kang*†, P. Han",
      venue: "arXiv preprint",
      location: "",
      year: "2025",
      status: "preprint",
      citations: 0,
      link: "#"
    },
    {
      title: "Bureaucrat-Expert Collaboration in LLM Adoption: An Institutional Logic Perspective on China's Public Sector",
      authors: "M. Ma, C. Wang, F. Han, T. Zhang, J. Kang†",
      venue: "arXiv preprint",
      year: "2025",
      status: "preprint",
      citations: 0,
      link: "#"
    }
  ];

  // 更新统计数据
  const totalPublications = publications.length;
  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  const publishedPapers = publications.filter(pub => pub.status === 'published').length;
  const hIndex = 2.8; // 根据实际引用情况计算

  const researchStats = [
    { label: "Publications", value: totalPublications.toString(), icon: BookOpen },
    { label: "Citations", value: totalCitations.toString(), icon: Award },
    { label: "Published Papers", value: publishedPapers.toString(), icon: Microscope },
    { label: "H-Index", value: hIndex.toString(), icon: Network }
  ];

  const academicService = [
    {
      role: "Reviewer",
      organization: "ICME 2025, ICASSP 2025, ICoCSETI 2025, IJCNN 2025",
      period: "2024-2025",
      type: "review"
    },
    {
      role: "CTO",
      organization: "FUXI AI Lab, Shenzhen Fuxi Cloud Technology Co., LTD",
      period: "2023-Present",
      type: "industry"
    },
    {
      role: "Chair, Undergraduate Research Team",
      organization: "School of Computer Science, Shandong Jianzhu University",
      period: "2020-2023",
      description: "Consecutively elected as Chair for three years, managing a team of 20+ undergraduate researchers",
      type: "leadership"
    }
  ];

  const awards = [
    {
      title: "National Bronze Award",
      event: "China International College Students Innovation Competition",
      year: "2024",
      level: "national",
      type: "competition"
    },
    {
      title: "Gold Award",
      event: "China International College Students Innovation Competition (2024 Guangdong Division)",
      year: "2024",
      level: "provincial",
      type: "competition"
    },
    {
      title: "Equity Investment",
      event: "1 Million CNY Equity Investment from Hunan College Student Venture Capital Fund (Served as CTO)",
      year: "2024",
      level: "funding",
      type: "investment"
    },
    {
      title: "Third Prize",
      event: "20th Shandong College Student Software Design Competition - Industry Scene Application Based on Artificial Intelligence",
      year: "10/2022",
      level: "provincial",
      type: "competition"
    },
    {
      title: "Third Prize",
      event: "20th Shandong College Student Software Design Competition - Cyberspace Security Technology Application Design",
      year: "10/2022",
      level: "provincial",
      type: "competition"
    },
    {
      title: "Second Prize",
      event: "5th China Youth Cup National College Students Mathematical Modeling Competition",
      year: "07/2022",
      level: "national",
      type: "competition"
    },
    {
      title: "Second Prize",
      event: "Chinese-English Group of the 6th General Translation Award National College Student Translation Competition",
      year: "06/2022",
      level: "national",
      type: "competition"
    },
    {
      title: "First Prize",
      event: "Campus Selection of the 17th National University and Provincial Transportation Science and Technology Competition",
      year: "04/2022",
      level: "university",
      type: "competition"
    }
  ];

  const honours = [
    {
      title: "Young and Promising",
      event: "Huawei National Youth Artificial Intelligence Social Practice",
      year: "12/2021"
    },
    {
      title: "Excellent Volunteer",
      event: "13th Shandong College Students Science and Technology Festival - The 19th Shandong College Students Software Design Competition",
      year: "11/2021"
    },
    {
      title: "Excellent Communication Ambassador",
      event: "5th China Youth Cup National College Student Mathematical Modelling Competition",
      year: "07/2022"
    },
    {
      title: "Outstanding Organizer",
      event: "5th China Youth Cup National College Student Mathematical Modelling Competition",
      year: "07/2022"
    }
  ];

  const activeProjects = [
    {
      title: "AI Applications in Cognitive Neuroscience",
      institution: "University of Macau",
      supervisor: "Prof. Haiyan Wu",
      period: "2024 - Present",
      funding: "UM Research Grant",
      description: "Investigating neural mechanisms using multimodal AI approaches"
    },
    {
      title: "Embodied Intelligence and Visual LLMs",
      institution: "Beijing Normal University",
      supervisor: "Prof. Ping Shen, Prof. Weijia Jia",
      period: "2024 - 2025",
      funding: "National Natural Science Foundation",
      description: "Developing embodied AI systems with visual language understanding"
    },
    {
      title: "Remote Sensing Image-Text Retrieval",
      institution: "Wuhan University",
      supervisor: "Prof. Mi Zhang, Prof. Jianya Gong",
      period: "2023 - 2024",
      funding: "Key Laboratory Fund",
      description: "Large language models for geospatial data analysis"
    }
  ];

  const presentations = [
    {
      type: "presentation",
      title: "Multimodal AI in Remote Sensing",
      event: "AAAI 2024 Conference",
      location: "Vancouver, Canada",
      date: "Feb 2024"
    },
    {
      type: "award",
      title: "Outstanding Research Award",
      event: "Beijing Normal University",
      location: "Beijing, China",
      date: "Dec 2024"
    },
    {
      type: "presentation",
      title: "Swarm Intelligence Applications",
      event: "ICRA 2024",
      location: "Yokohama, Japan",
      date: "May 2024"
    },
    {
      type: "award",
      title: "Best Student Paper Award",
      event: "Data Science Conference 2023",
      location: "Shanghai, China",
      date: "Nov 2023"
    }
  ];

  const collaborations = [
    {
      institution: "University of Cambridge",
      collaborator: "Prof. Amanda Prorok",
      field: "Swarm Intelligence",
      papers: 2
    },
    {
      institution: "Beijing Normal University",
      collaborator: "Prof. Ping Shen",
      field: "Embodied AI",
      papers: 3
    },
    {
      institution: "Wuhan University",
      collaborator: "Prof. Mi Zhang",
      field: "Remote Sensing AI",
      papers: 4
    },
    {
      institution: "Tongji University",
      collaborator: "Prof. Changrong Lu",
      field: "Natural Language Processing",
      papers: 2
    },
    {
      institution: "Shandong Jianzhu University",
      collaborator: "Prof. Xiaofei Niu",
      field: "Data Science",
      papers: 1
    }
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
      {/* Research Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {researchStats.map((stat, index) => (
          <div key={index} className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 text-center backdrop-blur-sm">
            <stat.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-200 mb-1">{stat.value}</div>
            <div className="text-gray-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {/* Publications */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
            Publications
          </h3>
          <div className="space-y-3">
            {publications.map((paper, index) => (
              <div key={index} className="border-l border-gray-600 pl-3 pb-3 border-b border-gray-800/30 last:border-b-0">
                <h4 className="text-gray-300 font-medium text-xs mb-1 leading-tight">
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-100 hover:underline transition-colors cursor-pointer"
                  >
                    {paper.title}
                  </a>
                </h4>
                <div className="text-gray-500 text-xs mb-1">{paper.authors}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-xs">{paper.venue}</span>
                    {paper.ranking && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-blue-900/30 text-blue-400 border border-blue-800/50">
                        {paper.ranking}
                      </span>
                    )}
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      paper.status === 'published' ? 'bg-green-900/30 text-green-400 border border-green-800/50' :
                      paper.status === 'accepted' ? 'bg-green-900/30 text-green-400 border border-green-800/50' :
                      paper.status === 'preprint' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50' :
                      'bg-gray-800/30 text-gray-400'
                    }`}>
                      {paper.status === 'published' ? 'Published' :
                       paper.status === 'accepted' ? 'Accepted' :
                       paper.status === 'preprint' ? 'Preprint' : 'Published'}
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs">
                    {paper.citations > 0 ? `${paper.citations} citations` : paper.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Service */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Users className="w-4 h-4 mr-2 text-gray-500" />
            Service
          </h3>
          <div className="space-y-2">
            {academicService.map((service, index) => (
              <div key={index} className="border-l border-gray-600 pl-3 pb-2 border-b border-gray-800/30 last:border-b-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-gray-300 font-medium text-xs">{service.role}</h4>
                  <span className="text-gray-500 text-xs font-mono">{service.period}</span>
                </div>
                <div className="text-gray-500 text-xs mb-1">{service.organization}</div>
                {service.description && (
                  <div className="text-gray-500 text-xs leading-tight">{service.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Trophy className="w-4 h-4 mr-2 text-gray-500" />
            Awards
          </h3>
          <div className="space-y-2">
            {awards.map((award, index) => (
              <div key={index} className="border-l border-gray-600 pl-3 pb-2 border-b border-gray-800/30 last:border-b-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-gray-300 font-medium text-xs">{award.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      award.level === 'national' ? 'bg-red-900/30 text-red-400 border border-red-800/50' :
                      award.level === 'provincial' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50' :
                      award.level === 'funding' ? 'bg-green-900/30 text-green-400 border border-green-800/50' :
                      'bg-gray-800/30 text-gray-400'
                    }`}>
                      {award.level === 'national' ? 'National' :
                       award.level === 'provincial' ? 'Provincial' :
                       award.level === 'funding' ? 'Funding' : 'University'}
                    </span>
                    <span className="text-gray-500 text-xs font-mono">{award.year}</span>
                  </div>
                </div>
                <div className="text-gray-500 text-xs leading-tight">{award.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Honours */}
        <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <Star className="w-4 h-4 mr-2 text-gray-500" />
            Honours
          </h3>
          <div className="space-y-2">
            {honours.map((honour, index) => (
              <div key={index} className="border-l border-gray-600 pl-3 pb-2 border-b border-gray-800/30 last:border-b-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="text-gray-300 font-medium text-xs">"{honour.title}"</h4>
                  <span className="text-gray-500 text-xs font-mono">{honour.year}</span>
                </div>
                <div className="text-gray-500 text-xs leading-tight">{honour.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-900/60 border border-gray-800/50 rounded-lg px-3 py-1.5 backdrop-blur-sm">
          <Clock className="w-3 h-3 text-gray-500" />
          <span className="text-gray-500 text-xs">Last updated: December 15, 2024</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ResearchPage;