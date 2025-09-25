import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  Coffee,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  Info
} from 'lucide-react';

const SchedulePage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  // 获取指定月份的所有日期
  const getMonthDates = (monthOffset: number) => {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    
    // 获取当月第一天是星期几（0=周日，1=周一...）
    const firstDay = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // 调整为周一开始
    
    // 获取当月天数
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // 创建日期数组
    const dates = [];
    
    // 添加上个月的日期填充
    const prevMonth = new Date(year, month - 1, 0).getDate();
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      dates.push({
        date: new Date(year, month - 1, prevMonth - i),
        isCurrentMonth: false,
        availability: 'unavailable'
      });
    }
    
    // 添加当月日期
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      dates.push({
        date,
        isCurrentMonth: true,
        availability: getAvailabilityForDate(date)
      });
    }
    
    // 添加下个月的日期填充（确保总共42个格子，6行7列）
    const remainingSlots = 42 - dates.length;
    for (let day = 1; day <= remainingSlots; day++) {
      dates.push({
        date: new Date(year, month + 1, day),
        isCurrentMonth: false,
        availability: 'unavailable'
      });
    }
    
    return { dates, year, month };
  };

  // 模拟获取某日期的可用性
  const getAvailabilityForDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 过去的日期不可用
    if (date < today) return 'unavailable';
    
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    
    // 周末通常有限可用
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return Math.random() > 0.6 ? 'limited' : 'unavailable';
    }
    
    // 工作日的可用性模拟
    if (dayOfMonth % 7 === 0 || dayOfMonth % 11 === 0) return 'busy';
    if (dayOfMonth % 3 === 0) return 'limited';
    return 'available';
  };

  const { dates, year, month } = getMonthDates(currentMonth);
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const monthNamesCN = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekdaysCN = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

  const getAvailabilityColor = (availability: string, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return 'bg-gray-800/20 border-gray-800/30';
    
    switch (availability) {
      case 'available': return 'bg-green-500/80 border-green-400/50 hover:bg-green-400/90';
      case 'limited': return 'bg-yellow-500/80 border-yellow-400/50 hover:bg-yellow-400/90';
      case 'busy': return 'bg-red-500/80 border-red-400/50 hover:bg-red-400/90';
      case 'unavailable': return 'bg-gray-600/50 border-gray-500/30';
      default: return 'bg-gray-600/50 border-gray-500/30';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'limited': return 'Limited';
      case 'busy': return 'Busy';
      case 'unavailable': return 'Unavailable';
      default: return 'Unknown';
    }
  };

  // 统计当月可用性
  const currentMonthDates = dates.filter(d => d.isCurrentMonth);
  const stats = {
    available: currentMonthDates.filter(d => d.availability === 'available').length,
    limited: currentMonthDates.filter(d => d.availability === 'limited').length,
    busy: currentMonthDates.filter(d => d.availability === 'busy').length,
    unavailable: currentMonthDates.filter(d => d.availability === 'unavailable').length
  };

  const meetingPreferences = [
    { type: 'In-person meetings', location: 'Beijing/Changsha', icon: MapPin },
    { type: 'Video calls', platform: 'Zoom/Teams/Tencent Meeting', icon: Video },
    { type: 'Phone calls', time: 'Weekday evenings preferred', icon: Clock },
    { type: 'Coffee chats', note: 'Always welcome for informal discussions', icon: Coffee }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-200 mb-1">My Schedule</h2>
          <p className="text-gray-400 text-sm">
            Check my availability for meetings and collaborations
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentMonth(currentMonth - 1)}
            className="p-2 bg-gray-800/50 border border-gray-700/50 rounded hover:bg-gray-700/50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <span className="text-gray-300 text-sm font-medium px-4">
            {year}年 {monthNamesCN[month]}
          </span>
          <button
            onClick={() => setCurrentMonth(currentMonth + 1)}
            className="p-2 bg-gray-800/50 border border-gray-700/50 rounded hover:bg-gray-700/50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>


      <div className="grid lg:grid-cols-4 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              Monthly Availability
            </h3>
            
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekdaysCN.map((day, index) => (
                <div key={index} className="text-center text-gray-500 text-xs font-medium py-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {dates.map((dateInfo, index) => (
                <div
                  key={index}
                  className={`
                    aspect-square border rounded-sm cursor-pointer transition-all duration-200 
                    flex items-center justify-center text-xs font-medium
                    ${getAvailabilityColor(dateInfo.availability, dateInfo.isCurrentMonth)}
                    ${dateInfo.isCurrentMonth ? 'text-white' : 'text-gray-600'}
                  `}
                  title={`${dateInfo.date.getMonth() + 1}/${dateInfo.date.getDate()} - ${getAvailabilityText(dateInfo.availability)}`}
                >
                  {dateInfo.date.getDate()}
                </div>
              ))}
            </div>
            
            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-gray-800/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Less available</span>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gray-600/50 border border-gray-500/30 rounded-sm"></div>
                  <div className="w-3 h-3 bg-red-500/80 border border-red-400/50 rounded-sm"></div>
                  <div className="w-3 h-3 bg-yellow-500/80 border border-yellow-400/50 rounded-sm"></div>
                  <div className="w-3 h-3 bg-green-500/80 border border-green-400/50 rounded-sm"></div>
                </div>
                <span className="text-gray-500">More available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Status Legend */}
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Status Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <span className="text-xs text-gray-400">Available for meetings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                <span className="text-xs text-gray-400">Limited availability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-xs text-gray-400">Busy/Unavailable</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
                <span className="text-xs text-gray-400">Past dates</span>
              </div>
            </div>
          </div>

          {/* Meeting Preferences */}
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Users className="w-4 h-4 mr-2 text-gray-500" />
              Meeting Preferences
            </h3>
            <div className="space-y-3">
              {meetingPreferences.map((pref, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <pref.icon className="w-3 h-3 mt-0.5 text-gray-500 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 text-xs font-medium">{pref.type}</div>
                    <div className="text-gray-500 text-xs leading-tight">
                      {pref.location || pref.platform || pref.time || pref.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Schedule */}
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Coffee className="w-4 h-4 mr-2 text-gray-500" />
              Schedule a Meeting
            </h3>
            <div className="space-y-2 text-xs text-gray-400">
              <p>To schedule a meeting:</p>
              <div className="space-y-1 ml-2">
                <div>• Check available days above</div>
                <div>• Email me with preferred dates</div>
                <div>• Include meeting purpose & duration</div>
                <div>• I'll confirm within 24 hours</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-800/50">
              <div className="text-xs text-gray-500">
                <strong>Business:</strong> kangjiaju@fuxi-lab.com<br/>
                <strong>Research:</strong> kjj_python@163.com
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
              <Info className="w-4 h-4 mr-2 text-gray-500" />
              Additional Info
            </h3>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-gray-500" />
                <span>Changsha/Beijing/Macau</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-gray-500" />
                <span>GMT+8 (China Standard Time)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-900/30 border border-gray-800/50 rounded-lg px-3 py-1.5">
          <Clock className="w-3 h-3 text-gray-500" />
          <span className="text-gray-500 text-xs">Schedule last updated: December 15, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;