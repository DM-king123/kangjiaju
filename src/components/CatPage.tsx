import React from 'react';
import { 
  Heart, 
  Camera, 
  Calendar, 
  MapPin, 
  Clock, 
  Award,
  Activity,
  Smile,
  Coffee,
  Moon,
  Sun,
  Fish,
  Gamepad2,
  Home
} from 'lucide-react';

import backgroundImage from '../images/cat_background.png';
import headImage from '../images/head.jpg';
import catImage1 from '../images/1.jpg';
import catImage2 from '../images/2.jpg';
import catImage3 from '../images/3.jpg';
import catImage4 from '../images/4.jpg';
import catImage5 from '../images/5.jpg';
import catImage6 from '../images/6.jpg';

const CatPage: React.FC = () => {
  const catInfo = {
    name: "GaoGao",
    breed: "American Ragdoll cat",
    age: "1 years old",
    gender: "Male",
    adoptionDate: "June 16, 2025",
    weight: "6.2 kg",
    favoriteFood: "Salmon treats",
    personality: "Playful, Curious, Affectionate"
  };

  const dailyRoutine = [
    {
      time: "7:00 AM",
      activity: "Wake up and demand breakfast",
      icon: Sun,
      mood: "Hungry"
    },
    {
      time: "8:30 AM",
      activity: "Morning playtime with feather toy",
      icon: Gamepad2,
      mood: "Energetic"
    },
    {
      time: "10:00 AM",
      activity: "First nap of the day",
      icon: Moon,
      mood: "Sleepy"
    },
    {
      time: "12:00 PM",
      activity: "Lunch and window watching",
      icon: Fish,
      mood: "Content"
    },
    {
      time: "3:00 PM",
      activity: "Afternoon exploration",
      icon: Activity,
      mood: "Curious"
    },
    {
      time: "6:00 PM",
      activity: "Dinner time (favorite part!)",
      icon: Fish,
      mood: "Excited"
    },
    {
      time: "8:00 PM",
      activity: "Cuddle time with dad",
      icon: Heart,
      mood: "Affectionate"
    },
    {
      time: "10:00 PM",
      activity: "Final playtime before bed",
      icon: Gamepad2,
      mood: "Playful"
    }
  ];

  const recentMoments = [
    {
      date: "2 hours ago",
      moment: "Successfully learned to high-five! New trick mastered 🎉",
      type: "achievement",
      photo: catImage1
    },
    {
      date: "Yesterday",
      moment: "Discovered a new hiding spot behind the bookshelf",
      type: "adventure",
      photo: catImage2
    },
    {
      date: "3 days ago",
      moment: "Had a vet checkup - clean bill of health!",
      type: "health",
      photo: catImage3
    },
    {
      date: "1 week ago",
      moment: "First time trying catnip - hilarious reactions ensued",
      type: "funny",
      photo: catImage4
    }
  ];

  const catStats = [
    { label: "Naps per Day", value: "16", icon: Moon },
    { label: "Treats Earned", value: "8", icon: Fish },
    { label: "Toys Owned", value: "23", icon: Gamepad2 },
    { label: "Cuddles Given", value: "∞", icon: Heart }
  ];

  const achievements = [
    {
      title: "Master of High-Five",
      description: "Successfully learned to give high-fives on command",
      date: "Dec 2024",
      difficulty: "Advanced"
    },
    {
      title: "Window Watcher Expert",
      description: "Can spot birds from 100 meters away",
      date: "Nov 2024",
      difficulty: "Natural Talent"
    },
    {
      title: "Cardboard Box Conqueror",
      description: "Claimed every delivery box as personal territory",
      date: "Oct 2024",
      difficulty: "Beginner"
    },
    {
      title: "Midnight Zoomies Champion",
      description: "Perfected the art of 3 AM energy bursts",
      date: "Sep 2024",
      difficulty: "Expert"
    }
  ];

  const favoriteSpots = [
    "Sunny spot by the living room window",
    "Cozy corner of the sofa",
    "Warm laptop keyboard (especially during work)",
    "Top shelf of the bookcase",
    "Under the dining table",
    "Dad's office chair (when he's not using it)"
  ];

  const photoGallery = [
    { image: catImage5, caption: "The bright and shining big eyes heal everyone" },
    { image: catImage6, caption: "The first selfie of Gao" },
    { image: catImage1, caption: "Really enjoy the human carpet" },
    { image: catImage2, caption: "A frontal photo that requires no explanation" }
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
      {/* Cat Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {catStats.map((stat, index) => (
          <div key={index} className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 text-center backdrop-blur-sm">
            <stat.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-200 mb-1">{stat.value}</div>
            <div className="text-gray-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Cat Profile */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-3 overflow-hidden">
                <img 
                  src={headImage} 
                  alt="Whiskers - My cat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-200 mb-1">{catInfo.name}</h2>
              <div className="text-gray-400 text-xs mb-3">{catInfo.breed}</div>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Age:</span>
                <span className="text-gray-400">{catInfo.age}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Gender:</span>
                <span className="text-gray-400">{catInfo.gender}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Weight:</span>
                <span className="text-gray-400">{catInfo.weight}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Adopted:</span>
                <span className="text-gray-400">{catInfo.adoptionDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Favorite Food:</span>
                <span className="text-gray-400">{catInfo.favoriteFood}</span>
              </div>
              <div className="pt-2 border-t border-gray-800/50">
                <span className="text-gray-500 text-xs">Personality:</span>
                <p className="text-gray-400 text-xs mt-1">{catInfo.personality}</p>
              </div>
            </div>
          </div>

          {/* Favorite Spots */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 mb-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Home className="w-4 h-4 mr-2 text-gray-500" />
              Favorite Spots
            </h3>
            <div className="space-y-1">
              {favoriteSpots.map((spot, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <MapPin className="w-3 h-3 mt-0.5 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-400 text-xs leading-tight">{spot}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2 text-gray-500" />
              Cat Achievements
            </h3>
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l border-gray-600 pl-3 pb-2 border-b border-gray-800/30 last:border-b-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-gray-300 font-medium text-xs">{achievement.title}</h4>
                    <span className="text-gray-500 text-xs font-mono">{achievement.date}</span>
                  </div>
                  <div className="text-gray-500 text-xs mb-1">{achievement.description}</div>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${
                    achievement.difficulty === 'Advanced' ? 'bg-red-900/30 text-red-400' :
                    achievement.difficulty === 'Expert' ? 'bg-purple-900/30 text-purple-400' :
                    achievement.difficulty === 'Natural Talent' ? 'bg-green-900/30 text-green-400' :
                    'bg-gray-800/30 text-gray-400'
                  }`}>
                    {achievement.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          {/* Daily Routine */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gray-500" />
              Daily Routine
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {dailyRoutine.map((routine, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-gray-800/20 rounded border border-gray-700/30">
                  <routine.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-gray-300 text-xs font-medium">{routine.time}</span>
                      <span className="text-gray-500 text-xs bg-gray-700/30 px-1.5 py-0.5 rounded">
                        {routine.mood}
                      </span>
                    </div>
                    <div className="text-gray-400 text-xs leading-tight">{routine.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Moments */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Camera className="w-4 h-4 mr-2 text-gray-500" />
              Recent Moments
            </h3>
            <div className="space-y-3">
              {recentMoments.map((moment, index) => (
                <div key={index} className="flex space-x-3 p-3 bg-gray-800/20 rounded border border-gray-700/30">
                  <div className="w-16 h-16 bg-gray-700 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={moment.photo} 
                      alt="Cat moment" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-500 text-xs font-mono">{moment.date}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        moment.type === 'achievement' ? 'bg-yellow-900/30 text-yellow-400' :
                        moment.type === 'adventure' ? 'bg-blue-900/30 text-blue-400' :
                        moment.type === 'health' ? 'bg-green-900/30 text-green-400' :
                        'bg-purple-900/30 text-purple-400'
                      }`}>
                        {moment.type}
                      </span>
                    </div>
                    <div className="text-gray-300 text-xs leading-relaxed">{moment.moment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Camera className="w-4 h-4 mr-2 text-gray-500" />
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {photoGallery.map((photo, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-700 rounded overflow-hidden">
                    <img 
                      src={photo.image} 
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded flex items-end">
                    <p className="text-white text-xs p-2 leading-tight">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cat Dad Notes */}
          <div className="bg-gray-900/60 border border-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Heart className="w-4 h-4 mr-2 text-gray-500" />
              Cat Dad Notes
            </h3>
            <div className="text-gray-400 text-xs leading-relaxed space-y-2">
              <p>
                Being a cat dad has been one of the most rewarding experiences. GaoGao has brought so much 
                joy and laughter into my life, especially during long research sessions. His curious nature 
                reminds me to stay curious about my own work.
              </p>
              <p>
                He has this amazing ability to sense when I'm stressed and will come over for cuddles. 
                Sometimes I think he's better at work-life balance than I am! His daily routine of naps 
                and play has taught me the importance of taking breaks.
              </p>
              <p>
                The high-five trick took weeks to master, but seeing his proud expression when he gets it 
                right makes all the training sessions worth it. He's definitely the smartest research 
                assistant I've ever had (even if he mostly just sleeps on my papers).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-4 text-center pb-4">
        <div className="inline-flex items-center space-x-2 bg-gray-900/60 border border-gray-800/50 rounded-lg px-3 py-1.5 backdrop-blur-sm">
          <Calendar className="w-3 h-3 text-gray-500" />
          <span className="text-gray-500 text-xs">Cat diary last updated: December 15, 2024</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CatPage;