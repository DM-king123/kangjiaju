import React, { useState } from 'react';
import { 
  Mail, 
  Building2, 
  GraduationCap, 
  Send, 
  MessageCircle,
  Clock,
  MapPin,
  Phone,
  Globe,
  Copy,
  CheckCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const contactInfo = {
    business: {
      email: "kangjiaju@fuxi-lab.com",
      title: "Business Inquiries",
      description: "For company partnerships, business collaborations, and commercial projects",
      icon: Building2,
      color: "blue"
    },
    research: {
      email: "kjj_python@163.com", 
      title: "Research Collaboration",
      description: "For academic research, paper collaborations, and scientific discussions",
      icon: GraduationCap,
      color: "green"
    }
  };

  const copyToClipboard = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const responseTime = [
    {
      type: "Business Inquiries",
      time: "Within 24 hours",
      icon: Building2
    },
    {
      type: "Research Collaboration", 
      time: "Within 48 hours",
      icon: GraduationCap
    },
    {
      type: "General Questions",
      time: "Within 72 hours", 
      icon: MessageCircle
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Changsha, Hunan, China / Macau SAR"
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "GMT+8 (China Standard Time)"
    },
    {
      icon: Globe,
      label: "Languages",
      value: "Chinese (Native), English (Fluent)"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <Mail className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-200 mb-2">Get In Touch</h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, research collaborations, and interesting projects. 
          Please choose the appropriate contact method based on your inquiry type.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {Object.entries(contactInfo).map(([key, contact]) => (
          <div key={key} className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                contact.color === 'blue' ? 'bg-blue-900/30 border border-blue-800/50' : 
                'bg-green-900/30 border border-green-800/50'
              }`}>
                <contact.icon className={`w-5 h-5 ${
                  contact.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                }`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-200">{contact.title}</h3>
            </div>
            
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {contact.description}
            </p>
            
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-mono text-sm">{contact.email}</span>
                <button
                  onClick={() => copyToClipboard(contact.email)}
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {copiedEmail === contact.email ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <a
                href={`mailto:${contact.email}`}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded text-sm font-medium transition-colors ${
                  contact.color === 'blue' 
                    ? 'bg-blue-900/30 text-blue-400 border border-blue-800/50 hover:bg-blue-900/50' 
                    : 'bg-green-900/30 text-green-400 border border-green-800/50 hover:bg-green-900/50'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Response Time */}
      <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-gray-500" />
          Expected Response Time
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {responseTime.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/20 rounded border border-gray-700/30">
              <item.icon className="w-5 h-5 text-gray-500" />
              <div>
                <div className="text-gray-300 text-sm font-medium">{item.type}</div>
                <div className="text-gray-500 text-xs">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Additional Information</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {additionalInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-3">
              <info.icon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                <div className="text-gray-500 text-xs leading-tight">{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Guidelines */}
      <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact Guidelines</h3>
        <div className="space-y-3 text-gray-400 text-sm">
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>Please use the appropriate email address based on your inquiry type to ensure faster response.</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>Include relevant details about your project or research to help me provide better assistance.</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>For urgent matters, please mention "URGENT" in the subject line.</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <p>I welcome collaborations, speaking opportunities, and interesting discussions about AI and research.</p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-900/30 border border-gray-800/50 rounded-lg px-3 py-1.5">
          <Clock className="w-3 h-3 text-gray-500" />
          <span className="text-gray-500 text-xs">Contact information last updated: December 15, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;