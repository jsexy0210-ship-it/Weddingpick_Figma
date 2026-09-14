import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';

export function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: '지혜',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        username: 'jihye_wedding',
      },
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      caption: '드디어 스튜디오 촬영 끝! 너무 행복했어요 💕',
      likes: 342,
      comments: [
        { user: '수민', text: '너무 예쁘세요! 축하해요 🎉' },
        { user: '민지', text: '어디 스튜디오인가요?' },
      ],
      timestamp: '2시간 전',
      liked: false,
      saved: false,
    },
    {
      id: 2,
      author: {
        name: '민수',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        username: 'minsu_love',
      },
      image: 'https://images.unsplash.com/photo-1529634597217-8f8d0e4e1465',
      caption: '프로포즈 성공! 한강에서 했는데 완전 낭만적이었어요 💍',
      likes: 589,
      comments: [
        { user: '현우', text: '축하합니다! 부럽네요 ㅎㅎ' },
        { user: '지수', text: '감동이에요 😭' },
        { user: '태희', text: '너무 로맨틱해요!' },
      ],
      timestamp: '5시간 전',
      liked: true,
      saved: false,
    },
    {
      id: 3,
      author: {
        name: '서연',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        username: 'seoyeon_bride',
      },
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
      caption: '드레스 피팅 완료! 이 드레스로 결정했어요 👰',
      likes: 421,
      comments: [
        { user: '유진', text: '완전 공주님이세요!' },
        { user: '하늘', text: '드레스 브랜드 알 수 있을까요?' },
      ],
      timestamp: '1일 전',
      liked: false,
      saved: true,
    },
    {
      id: 4,
      author: {
        name: '준호',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        username: 'junho_groom',
      },
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
      caption: '신혼여행 예약 완료! 몰디브 갑니다 ✈️🌴',
      likes: 276,
      comments: [
        { user: '영희', text: '부럽습니다! 즐거운 여행 되세요' },
      ],
      timestamp: '2일 전',
      liked: false,
      saved: false,
    },
  ]);

  const toggleLike = (postId: number) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const toggleSave = (postId: number) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, saved: !post.saved } : post
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto pb-6">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
        <h1>커뮤니티</h1>
        <span className="text-xs font-semibold text-muted-foreground">웨딩피드</span>
      </div>

      <div className="space-y-0">
        {posts.map(post => (
          <Card key={post.id} className="rounded-none border-x-0 border-t-0">
            <CardContent className="p-0">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p>{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>

              <ImageWithFallback
                src={post.image}
                alt="Post"
                className="w-full aspect-square object-cover"
              />

              <div className="px-4 py-3 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleLike(post.id)}
                      className="hover:bg-transparent"
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          post.liked ? 'fill-red-500 text-red-500' : 'text-gray-700'
                        }`}
                      />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-transparent">
                      <MessageCircle className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-transparent">
                      <Send className="w-6 h-6" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleSave(post.id)}
                    className="hover:bg-transparent"
                  >
                    <Bookmark
                      className={`w-6 h-6 ${
                        post.saved ? 'fill-gray-700 text-gray-700' : 'text-gray-700'
                      }`}
                    />
                  </Button>
                </div>

                <div>
                  <p className="text-sm">
                    좋아요 <span>{post.likes}</span>개
                  </p>
                </div>

                <div>
                  <p className="text-sm">
                    <span>{post.author.name}</span>{' '}
                    <span className="text-gray-700">{post.caption}</span>
                  </p>
                </div>

                {post.comments.length > 0 && (
                  <div className="space-y-1">
                    <Button variant="link" className="p-0 h-auto text-sm text-gray-500">
                      댓글 {post.comments.length}개 모두 보기
                    </Button>
                    {post.comments.slice(0, 2).map((comment, idx) => (
                      <p key={idx} className="text-sm">
                        <span>{comment.user}</span>{' '}
                        <span className="text-gray-700">{comment.text}</span>
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 pt-2 border-t">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>나</AvatarFallback>
                  </Avatar>
                  <Input
                    placeholder="댓글 달기..."
                    className="border-0 focus-visible:ring-0 px-0"
                  />
                  <Button variant="link" className="text-blue-500 p-0">
                    게시
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
