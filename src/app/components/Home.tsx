import { useState } from "react";
import {
  IconNotificationRegular,
  IconChevronRightRegular,
  IconMoreHorizRegular,
  IconHeartRegular,
  IconHeartFill,
  IconLocationRegular,
  IconSearchRegular,
  IconReviewStarFill,
  IconCheckFlowerFill,
  IconClockRegular,
} from "@seed-design/icon";
import { useNavigate } from "react-router";
import { toast } from "sonner";

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
  { id: "2", category: "예산", title: "예산을 넘기지 않는 스드메 조합 3가지", meta: "웨딩픽 에디터 · 5분", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=240&h=180&fit=crop&auto=format" },
  { id: "3", category: "체크리스트", title: "본식 4개월 전, 지금 정리할 7가지", meta: "준비 가이드 · 4분", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=240&h=180&fit=crop&auto=format" },
];

// #E7898D as default first theme
const HERO_THEMES = [
  { name: "웨딩픽", surface: "bg-[#E7898D]", swatch: "bg-[#E7898D]" },
  { name: "코랄", surface: "bg-[#F26A5F]", swatch: "bg-[#F26A5F]" },
  { name: "옐로우", surface: "bg-[#E1AE2E]", swatch: "bg-[#E1AE2E]" },
  { name: "라일락", surface: "bg-[#9A82C9]", swatch: "bg-[#9A82C9]" },
  { name: "민트", surface: "bg-[#4D9D87]", swatch: "bg-[#4D9D87]" },
];

export function Home() {
  const [pickedIds, setPickedIds] = useState<number[]>([]);
  const [heroTheme, setHeroTheme] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const navigate = useNavigate();

  const togglePick = (id: number) => {
    const isAdding = !pickedIds.includes(id);
    setPickedIds((prev) => (isAdding ? [...prev, id] : prev.filter((x) => x !== id)));
    if (isAdding) toast.success("Pick 목록에 담겼어요.");
  };

  return (
    <div className="pb-4">
      <header className="flex items-center justify-between px-5 pb-4 pt-6">
        <h1 className="font-display text-[26px] font-bold tracking-[-0.02em]">웨딩픽</h1>
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate("/explore")}
            aria-label="업체 검색"
            className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <IconSearchRegular size={20} />
          </button>
          <button
            aria-label="알림"
            className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <IconNotificationRegular size={20} />
          </button>
        </div>
      </header>

      {/* Hero */}
      <div
        className={`relative mx-5 mb-6 overflow-hidden rounded-[26px] p-6 text-white transition-colors duration-300 ${HERO_THEMES[heroTheme].surface}`}
      >
        <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/[0.12]" />
        <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full border-[20px] border-white/[0.07]" />
        <div className="relative">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[10px] tracking-[0.2em] text-white/60">두근두근</p>
            <div className="relative">
              <button
                type="button"
                aria-label="히어로 색상 더보기"
                aria-expanded={paletteOpen}
                onClick={() => setPaletteOpen((open) => !open)}
                className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <IconMoreHorizRegular size={16} />
              </button>
              {paletteOpen && (
                <div className="absolute right-0 top-9 z-10 flex gap-1.5 rounded-full border border-white/20 bg-black/20 p-1.5 backdrop-blur">
                  {HERO_THEMES.map((theme, index) => (
                    <button
                      key={theme.name}
                      type="button"
                      aria-label={`${theme.name} 히어로 색상`}
                      aria-pressed={heroTheme === index}
                      onClick={() => { setHeroTheme(index); setPaletteOpen(false); }}
                      className={`grid h-6 w-6 place-items-center rounded-full transition-transform ${
                        heroTheme === index
                          ? "scale-110 ring-1 ring-white ring-offset-2 ring-offset-transparent"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <span className={`h-4 w-4 rounded-full ${theme.swatch}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <span
            className="mb-2 block font-display text-[64px] font-bold leading-none text-white tracking-[-0.03em]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            D-127
          </span>
          <p className="text-sm text-white/75">2027년 1월 15일 (금) · 서울 그랜드 워커힐</p>
          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-white/60 bg-[#F7D2C4] text-[9px] font-bold text-[#513B37]">지</span>
                <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-white/60 bg-[#C9DAEC] text-[9px] font-bold text-[#31475D]">준</span>
              </div>
              <span className="text-[11px] font-medium text-white/80">지윤 · 준혁 함께 준비 중</span>
            </div>
            <span className="text-[10px] text-white/65">연결됨</span>
          </div>
        </div>
      </div>

      {/* Prep Status */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground text-sm">준비현황</h3>
          <span className="text-xs text-muted-foreground font-semibold">4개 중 1개 완료</span>
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
                    ? "bg-secondary border-border"
                    : isPicking
                    ? "bg-sky-50 border-sky-200/80"
                    : "bg-secondary border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xl">{item.icon}</span>
                  {isDone && <IconCheckFlowerFill size={16} className="text-foreground" />}
                  {isPicking && <IconClockRegular size={16} className="text-sky-500" />}
                  {!isDone && !isPicking && (
                    <span className="inline-block h-4 w-4 rounded-full border-[1.5px] border-muted-foreground/30" />
                  )}
                </div>
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p
                  className={`text-xs mt-0.5 font-medium ${
                    isDone ? "text-foreground" : isPicking ? "text-sky-600" : "text-muted-foreground"
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
            <h3 className="text-sm font-semibold text-foreground">웨딩픽 추천</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">저장한 업체를 한 번에 비교해봐요</p>
          </div>
          <button
            onClick={() => navigate("/pick", { state: { openCompare: true } })}
            className="rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-sm shadow-primary/20"
          >
            비교하기
          </button>
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
              {/* Thumbnail flush to card top — original state */}
              <div className="relative">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-36 object-cover"
                />
                <button
                  onClick={(event) => { event.stopPropagation(); togglePick(v.id); }}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
                    pickedIds.includes(v.id) ? "bg-foreground" : "bg-white/80"
                  }`}
                >
                  {pickedIds.includes(v.id)
                    ? <IconHeartFill size={16} className="text-white" />
                    : <IconHeartRegular size={16} className="text-foreground" />
                  }
                </button>
                {v.badge && (
                  <span className="absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2 py-0.5 rounded-full bg-foreground">
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
                  <IconLocationRegular size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{v.location}</span>
                </div>
                <div className="flex items-center justify-between mt-2.5">
                  <span className="text-xs font-mono text-foreground font-medium">{v.price}</span>
                  <div className="flex items-center gap-1">
                    <IconReviewStarFill size={12} className="text-amber-400" />
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
        <h3 className="font-semibold text-foreground text-sm mb-3">카테고리</h3>
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
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">웨딩피드</h3>
          <button onClick={() => navigate("/community?tab=feed")} className="text-xs font-semibold text-foreground">더보기</button>
        </div>
        <div className="space-y-3">
          {WEDDING_CONTENT.map((content) => (
            <article
              key={content.title}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/community/feed/${content.id}`)}
              onKeyDown={(e) => e.key === "Enter" && navigate(`/community/feed/${content.id}`)}
              className="flex cursor-pointer gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-secondary/50"
            >
              <img
                src={content.image}
                alt="웨딩 준비 가이드 이미지"
                className="h-20 w-20 rounded-lg bg-muted object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <p className="text-[10px] font-bold tracking-wide text-muted-foreground">{content.category}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-foreground">{content.title}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{content.meta}</p>
              </div>
              <IconChevronRightRegular size={16} className="my-auto flex-none text-muted-foreground" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
