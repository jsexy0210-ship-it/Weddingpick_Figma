import { useState } from "react";
import { Bell, ChevronRight, Heart, MapPin, Star, CheckCircle2, Clock, Circle, Search } from "lucide-react";
import { useNavigate } from "react-router";

const PREP_STATUS = [
  { label: "웨딩홀", status: "done", detail: "서울 그랜드 워커힐", icon: "🏛️" },
  { label: "스튜디오", status: "picking", detail: "후보 3개 저장됨", icon: "📷" },
  { label: "드레스", status: "todo", detail: "아직 탐색 전", icon: "👗" },
  { label: "메이크업", status: "todo", detail: "아직 탐색 전", icon: "💄" },
];

const RECOMMENDATIONS = [
  {
    id: 1,
    name: "블루밍 스튜디오",
    category: "스튜디오",
    location: "강남구",
    price: "80–150만원",
    picks: 1247,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=280&fit=crop&auto=format",
    badge: "인기",
  },
  {
    id: 2,
    name: "오드 메이크업",
    category: "메이크업",
    location: "청담동",
    price: "45–80만원",
    picks: 892,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=280&fit=crop&auto=format",
    badge: null,
  },
  {
    id: 3,
    name: "그레이스 드레스",
    category: "드레스",
    location: "압구정동",
    price: "150–380만원",
    picks: 634,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=400&h=280&fit=crop&auto=format",
    badge: "신규",
  },
];

const CATEGORIES = [
  { id: "hall", name: "웨딩홀", emoji: "🏛️" },
  { id: "studio", name: "스튜디오", emoji: "📷" },
  { id: "dress", name: "드레스", emoji: "👗" },
  { id: "makeup", name: "메이크업", emoji: "💄" },
  { id: "snap", name: "스냅", emoji: "📸" },
  { id: "honeymoon", name: "허니문", emoji: "✈️" },
];

const WEDDING_CONTENT = [
  { category: "예산", title: "예산을 넘기지 않는 스드메 조합 3가지", meta: "웨딩픽 에디터 · 5분", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=240&h=180&fit=crop&auto=format" },
  { category: "체크리스트", title: "본식 4개월 전, 지금 정리할 7가지", meta: "준비 가이드 · 4분", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=240&h=180&fit=crop&auto=format" },
];

export function Home() {
  const [pickedIds, setPickedIds] = useState<number[]>([]);
  const navigate = useNavigate();

  const togglePick = (id: number) =>
    setPickedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="pb-4">
      <header className="flex items-center justify-between px-5 pb-4 pt-6">
        <h1 className="font-display text-[26px] font-bold tracking-[-0.02em]">웨딩픽</h1>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/explore")} aria-label="업체 검색" className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-muted"><Search className="h-5 w-5" /></button>
          <button aria-label="알림" className="relative grid h-10 w-10 place-items-center rounded-full bg-secondary"><Bell className="h-5 w-5 text-foreground" /><span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" /></button>
        </div>
      </header>

      {/* Unified hero + D-day */}
      <div className="relative mx-5 mb-6 overflow-hidden rounded-[26px] bg-primary p-6 text-white">
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/[0.1]" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full border-[20px] border-white/[0.08]" />
        <div className="relative">
          <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase">Wedding Day</p>
          <span
            className="mb-2 block font-display text-[64px] font-bold leading-none text-white tracking-[-0.03em]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            D-127
          </span>
          <p className="text-sm text-white/75">2027년 1월 15일 (금) · 서울 그랜드 워커힐</p>
        </div>
      </div>

      {/* Prep Status */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground text-sm">준비 현황</h3>
          <span className="text-xs text-primary font-semibold">4개 중 1개 완료</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {PREP_STATUS.map((item) => {
            const isDone = item.status === "done";
            const isPicking = item.status === "picking";
            return (
              <div
                key={item.label}
                className={`p-3.5 rounded-2xl border ${
                  isDone
                    ? "bg-primary/[0.07] border-primary/20"
                    : isPicking
                    ? "bg-sky-50 border-sky-200/80"
                    : "bg-secondary border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xl">{item.icon}</span>
                  {isDone && <CheckCircle2 className="w-4 h-4 text-primary" />}
                  {isPicking && <Clock className="w-4 h-4 text-sky-500" />}
                  {!isDone && !isPicking && <Circle className="w-4 h-4 text-muted-foreground/30" />}
                </div>
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p
                  className={`text-xs mt-0.5 font-medium ${
                    isDone ? "text-primary" : isPicking ? "text-sky-600" : "text-muted-foreground"
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vendor Recommendations */}
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between px-5">
          <div>
            <h3 className="text-sm font-semibold text-foreground">지금 탐색할 업체</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">스튜디오 후보 3개를 비교해보세요</p>
          </div>
          <button onClick={() => navigate("/pick")} className="rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-sm shadow-primary/20">비교하기</button>
        </div>
        <div className="flex gap-3 pl-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {RECOMMENDATIONS.map((v) => (
            <div
              key={v.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/vendor/${v.id}`)}
              onKeyDown={(event) => event.key === "Enter" && navigate(`/vendor/${v.id}`)}
              className="flex-none w-52 cursor-pointer bg-card rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <div className="relative">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-36 object-cover bg-muted"
                />
                <button
                  onClick={(event) => { event.stopPropagation(); togglePick(v.id); }}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
                    pickedIds.includes(v.id) ? "bg-primary" : "bg-white/80"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      pickedIds.includes(v.id) ? "fill-white text-white" : "text-foreground"
                    }`}
                  />
                </button>
                {v.badge && (
                  <span
                    className={`absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      v.badge === "신규" ? "bg-accent" : "bg-primary"
                    }`}
                  >
                    {v.badge}
                  </span>
                )}
              </div>
              <div className="p-3">
                <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  {v.category}
                </span>
                <p className="font-semibold text-foreground text-sm mt-0.5">{v.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{v.location}</span>
                </div>
                <div className="flex items-center justify-between mt-2.5">
                  <span className="text-xs font-mono text-foreground font-medium">{v.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-muted-foreground font-medium">{v.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-none w-4" />
        </div>
      </div>

      {/* Category Grid */}
      <div className="px-5 mb-6">
        <h3 className="font-semibold text-foreground text-sm mb-3">카테고리별 탐색</h3>
        <div className="grid grid-cols-3 gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate("/explore")}
              className="bg-secondary hover:bg-muted rounded-2xl p-4 flex flex-col items-center gap-2 transition-colors active:scale-95"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-xs font-semibold text-foreground">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Wedding content */}
      <div className="px-5">
        <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold text-foreground">웨딩 준비 콘텐츠</h3><button onClick={() => navigate("/community")} className="text-xs font-semibold text-primary">더보기</button></div>
        <div className="space-y-3">
          {WEDDING_CONTENT.map((content) => (
            <article key={content.title} className="flex gap-3 rounded-2xl border border-border bg-card p-3">
              <img src={content.image} alt="웨딩 준비 가이드 이미지" className="h-20 w-20 rounded-xl bg-muted object-cover" />
              <div className="flex min-w-0 flex-1 flex-col justify-center"><p className="text-[10px] font-bold tracking-wide text-primary">{content.category}</p><p className="mt-1 text-sm font-semibold leading-5 text-foreground">{content.title}</p><p className="mt-1 text-[11px] text-muted-foreground">{content.meta}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
