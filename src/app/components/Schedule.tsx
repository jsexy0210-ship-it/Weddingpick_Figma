import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';

export function Schedule() {
  const [selectedMonth, setSelectedMonth] = useState(5);

  const schedules = [
    { date: '5월 5일', time: '10:00', title: '스튜디오 상담', status: 'completed', category: 'studio' },
    { date: '5월 10일', time: '14:00', title: '스튜디오 촬영', status: 'upcoming', category: 'studio' },
    { date: '5월 12일', time: '15:00', title: '웨딩홀 투어', status: 'upcoming', category: 'venue' },
    { date: '5월 15일', time: '11:00', title: '드레스 피팅', status: 'upcoming', category: 'dress' },
    { date: '5월 18일', time: '13:00', title: '한복 피팅', status: 'upcoming', category: 'hanbok' },
    { date: '5월 20일', time: '-', title: '예식장 계약금 납부', status: 'pending', category: 'payment' },
    { date: '5월 25일', time: '16:00', title: '메이크업 시연', status: 'pending', category: 'makeup' },
    { date: '5월 28일', time: '10:00', title: '청첩장 최종 확인', status: 'pending', category: 'invitation' },
  ];

  const categoryColors = {
    studio: 'bg-pink-100 text-pink-700',
    venue: 'bg-purple-100 text-purple-700',
    dress: 'bg-blue-100 text-blue-700',
    hanbok: 'bg-green-100 text-green-700',
    payment: 'bg-orange-100 text-orange-700',
    makeup: 'bg-rose-100 text-rose-700',
    invitation: 'bg-indigo-100 text-indigo-700',
  };

  const statusText = {
    completed: '완료',
    upcoming: '예정',
    pending: '대기',
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1>일정 관리</h1>
        <Button className="bg-pink-500 hover:bg-pink-600">
          <Plus className="w-4 h-4 mr-2" />
          일정 추가
        </Button>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardContent className="pt-6">
          <div className="grid grid-cols-7 gap-2 text-center">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="text-sm text-gray-600 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <div
                key={day}
                className={`py-2 text-sm rounded-lg ${
                  [5, 10, 12, 15, 18, 20, 25, 28].includes(day)
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-700'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {schedules.map((schedule, idx) => (
          <Card key={idx}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{schedule.date}</span>
                    {schedule.time !== '-' && (
                      <>
                        <Clock className="w-4 h-4 text-gray-500 ml-2" />
                        <span className="text-sm text-gray-600">{schedule.time}</span>
                      </>
                    )}
                  </div>
                  <p>{schedule.title}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={categoryColors[schedule.category]}>
                    {schedule.category}
                  </Badge>
                  <Badge
                    variant={schedule.status === 'completed' ? 'default' : 'outline'}
                    className={schedule.status === 'completed' ? 'bg-green-500' : ''}
                  >
                    {statusText[schedule.status]}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
