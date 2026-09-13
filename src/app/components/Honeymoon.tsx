import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plane, MapPin, Calendar, DollarSign, Sun, Mountain, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Honeymoon() {
  const [filter, setFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: '몰디브',
      country: '인도양',
      duration: '5박 7일',
      price: 8000000,
      rating: 4.9,
      type: 'beach',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
      tags: ['휴양', '스노쿨링', '리조트'],
      bestSeason: '11월~4월',
    },
    {
      id: 2,
      name: '파리',
      country: '프랑스',
      duration: '6박 8일',
      price: 7000000,
      rating: 4.8,
      type: 'city',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      tags: ['문화', '낭만', '관광'],
      bestSeason: '4월~6월, 9월~10월',
    },
    {
      id: 3,
      name: '발리',
      country: '인도네시아',
      duration: '4박 6일',
      price: 3500000,
      rating: 4.7,
      type: 'beach',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      tags: ['휴양', '힐링', '스파'],
      bestSeason: '4월~10월',
    },
    {
      id: 4,
      name: '스위스',
      country: '유럽',
      duration: '7박 9일',
      price: 9000000,
      rating: 4.9,
      type: 'nature',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3',
      tags: ['자연', '알프스', '기차여행'],
      bestSeason: '6월~9월',
    },
    {
      id: 5,
      name: '산토리니',
      country: '그리스',
      duration: '5박 7일',
      price: 6000000,
      rating: 4.8,
      type: 'beach',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
      tags: ['에게해', '석양', '화이트하우스'],
      bestSeason: '4월~10월',
    },
    {
      id: 6,
      name: '뉴욕',
      country: '미국',
      duration: '5박 7일',
      price: 6500000,
      rating: 4.6,
      type: 'city',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
      tags: ['도시', '쇼핑', '브로드웨이'],
      bestSeason: '4월~6월, 9월~11월',
    },
  ];

  const filters = [
    { id: 'all', label: '전체', icon: Plane },
    { id: 'beach', label: '해변', icon: Sun },
    { id: 'city', label: '도시', icon: Building2 },
    { id: 'nature', label: '자연', icon: Mountain },
  ];

  const filteredDestinations = filter === 'all'
    ? destinations
    : destinations.filter(d => d.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Plane className="w-6 h-6 text-blue-500" />
        <h1>신혼여행 추천</h1>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardContent className="pt-6">
          <p className="text-center text-gray-700">
            평생 기억에 남을 특별한 여행지를 찾아보세요
          </p>
        </CardContent>
      </Card>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map(f => {
          const Icon = f.icon;
          return (
            <Button
              key={f.id}
              variant={filter === f.id ? 'default' : 'outline'}
              onClick={() => setFilter(f.id)}
              className={filter === f.id ? 'bg-blue-500 hover:bg-blue-600' : ''}
            >
              <Icon className="w-4 h-4 mr-1" />
              {f.label}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDestinations.map(destination => (
          <Card key={destination.id} className="overflow-hidden">
            <ImageWithFallback
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{destination.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{destination.country}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{destination.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {destination.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  <span>여행적기: {destination.bestSeason}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-blue-600">{destination.price.toLocaleString()}원~</span>
                </div>
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                상세 보기
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
