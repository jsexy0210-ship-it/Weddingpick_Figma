import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, MapPin, Phone, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Studio() {
  const [filter, setFilter] = useState('all');

  const studios = [
    {
      id: 1,
      name: '로맨틱 스튜디오',
      location: '강남구',
      price: 3000000,
      rating: 4.8,
      reviews: 245,
      type: 'modern',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    },
    {
      id: 2,
      name: '클래식 웨딩홀',
      location: '서초구',
      price: 5000000,
      rating: 4.9,
      reviews: 312,
      type: 'classic',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92',
    },
    {
      id: 3,
      name: '모던 포토 스튜디오',
      location: '송파구',
      price: 2500000,
      rating: 4.7,
      reviews: 189,
      type: 'modern',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff',
    },
    {
      id: 4,
      name: '빈티지 스냅',
      location: '마포구',
      price: 3500000,
      rating: 4.6,
      reviews: 156,
      type: 'vintage',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    },
  ];

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'modern', label: '모던' },
    { id: 'classic', label: '클래식' },
    { id: 'vintage', label: '빈티지' },
  ];

  const filteredStudios = filter === 'all'
    ? studios
    : studios.filter(s => s.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1>스튜디오 찾기</h1>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map(f => (
          <Button
            key={f.id}
            variant={filter === f.id ? 'default' : 'outline'}
            onClick={() => setFilter(f.id)}
            className={filter === f.id ? 'bg-pink-500 hover:bg-pink-600' : ''}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredStudios.map(studio => (
          <Card key={studio.id} className="overflow-hidden">
            <div className="flex gap-4 p-4">
              <ImageWithFallback
                src={studio.image}
                alt={studio.name}
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3>{studio.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{studio.location}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{studio.rating}</span>
                  <span className="text-sm text-gray-500">({studio.reviews})</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-pink-600">{studio.price.toLocaleString()}원~</p>
                  <Button variant="outline" size="sm">
                    상담 신청
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
