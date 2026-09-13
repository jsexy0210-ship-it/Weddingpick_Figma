import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, MapPin, Heart, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Proposal() {
  const [filter, setFilter] = useState('all');

  const proposals = [
    {
      id: 1,
      name: '로맨틱 레스토랑 프로포즈',
      location: '여의도',
      price: 1500000,
      rating: 4.9,
      reviews: 89,
      type: 'restaurant',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      tags: ['실내', '저녁', '프라이빗'],
    },
    {
      id: 2,
      name: '한강 야경 프로포즈',
      location: '반포',
      price: 800000,
      rating: 4.7,
      reviews: 156,
      type: 'outdoor',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9',
      tags: ['야외', '야경', '낭만'],
    },
    {
      id: 3,
      name: '호텔 루프탑 프로포즈',
      location: '강남',
      price: 2000000,
      rating: 4.8,
      reviews: 124,
      type: 'hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      tags: ['럭셔리', '야경', '프라이빗'],
    },
    {
      id: 4,
      name: '놀이공원 프로포즈',
      location: '잠실',
      price: 500000,
      rating: 4.6,
      reviews: 98,
      type: 'outdoor',
      image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6',
      tags: ['야외', '낮', '활동적'],
    },
    {
      id: 5,
      name: '갤러리 프라이빗 프로포즈',
      location: '삼청동',
      price: 1200000,
      rating: 4.9,
      reviews: 67,
      type: 'indoor',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912',
      tags: ['실내', '예술적', '프라이빗'],
    },
  ];

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'restaurant', label: '레스토랑' },
    { id: 'hotel', label: '호텔' },
    { id: 'outdoor', label: '야외' },
    { id: 'indoor', label: '실내' },
  ];

  const filteredProposals = filter === 'all'
    ? proposals
    : proposals.filter(p => p.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-pink-500" />
        <h1>프로포즈 플래너</h1>
      </div>

      <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
        <CardContent className="pt-6">
          <p className="text-center text-gray-700">
            완벽한 프로포즈 순간을 위한 맞춤 플래닝
          </p>
        </CardContent>
      </Card>

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
        {filteredProposals.map(proposal => (
          <Card key={proposal.id} className="overflow-hidden">
            <div className="flex gap-4 p-4">
              <ImageWithFallback
                src={proposal.image}
                alt={proposal.name}
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3>{proposal.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{proposal.location}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-1">
                  {proposal.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{proposal.rating}</span>
                  <span className="text-sm text-gray-500">({proposal.reviews})</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-pink-600">{proposal.price.toLocaleString()}원~</p>
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
