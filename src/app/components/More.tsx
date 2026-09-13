import { Link } from 'react-router';
import { Card, CardContent } from './ui/card';
import {
  Camera,
  CheckSquare,
  Settings,
  Bell,
  Heart,
  HelpCircle,
  User,
  Shield,
  ChevronRight
} from 'lucide-react';

export function More() {
  const menuItems = [
    {
      title: '나의 서비스',
      items: [
        { icon: Camera, label: '스튜디오 찾기', path: '/studio', color: 'text-pink-500' },
        { icon: CheckSquare, label: '체크리스트', path: '/checklist', color: 'text-green-500' },
        { icon: Heart, label: '찜한 업체', path: '/favorites', color: 'text-red-500' },
      ],
    },
    {
      title: '설정',
      items: [
        { icon: User, label: '프로필 설정', path: '/profile', color: 'text-blue-500' },
        { icon: Bell, label: '알림 설정', path: '/notifications', color: 'text-purple-500' },
        { icon: Shield, label: '개인정보 보호', path: '/privacy', color: 'text-gray-500' },
      ],
    },
    {
      title: '고객 지원',
      items: [
        { icon: HelpCircle, label: '도움말', path: '/help', color: 'text-orange-500' },
        { icon: Settings, label: '앱 설정', path: '/settings', color: 'text-gray-700' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1>더보기</h1>

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-pink-600" />
            </div>
            <div>
              <h3>사용자님</h3>
              <p className="text-sm text-gray-600">user@example.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {menuItems.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h2 className="text-sm text-gray-500 px-2">{section.title}</h2>
            <Card>
              <CardContent className="p-0">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={itemIdx}
                      to={item.path}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center py-6">
        <p className="text-sm text-gray-500">버전 1.0.0</p>
      </div>
    </div>
  );
}
