import { useState } from "react";
import { SearchIcon, SlidersHorizontal, MapPin, Star, Heart, X, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "hall", label: "웨딩홀" },
  { id: "studio", label: "스튜디오" },
  { id: "dress", label: "드레스" },
  { id: "makeup", label: "메이크업" },
  { id: "snap", label: "스냅" },
  { id: "honeymoon", label: "허니문" },
];

const VENDORS = [
  {
    id: 1,
    name: "더 라인 웨딩홀",
    category: "hall",
    categoryLabel: "웨딩홀",
    location: "서울 송파구",
    price: "300–500만원",
    picks: 2341,
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=280&fit=crop&auto=format",
    tags: ["웨딩홀전용", "야외정원"],
    badge: "인기",
  },
  {
    id: 2,
    name: "블루밍 스튜디오",
    category: "studio",
    categoryLabel: "스튜디오",
    location: "서울 강남구",
    price: "80–150만원",
    picks: 1247,
    rating: 4.9,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=280&fit=crop&auto=format",
    tags: ["자연광", "야외촬영"],
    badge: "인기",
  },
  {
    id: 3,
    name: "스튜디오 온",
    category: "studio",
    categoryLabel: "스튜디오",
    location: "서울 마포구",
    price: "70–130만원",
    picks: 892,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=280&fit=crop&auto=format",
    tags: ["필름감성"],
    badge: null,
  },
  {
    id: 4,
    name: "그레이스 드레스",
    category: "dress",
    categoryLabel: "드레스",
    location: "서울 압구정동",
    price: "150–380만원",
    picks: 634,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=400&h=280&fit=crop&auto=format",
    tags: ["A라인", "볼가운"],
    badge: null,
  },
  {
    id: 5,
    name: "라로쉐 드레스",
    category: "dress",
    categoryLabel: "드레스",
    location: "서울 청담동",
    price: "200–450만원",
    picks: 511,
    rating: 4.9,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=280&fit=crop&auto=format",
    tags: ["이탈리안브랜드", "럭셔리"],
    badge: "신규",
  },
  {
    id: 6,
    name: "오드 메이크업",
    category: "makeup",
    categoryLabel: "메이크업",
    location: "서울 청담동",
    price: "45–80만원",
    picks: 892,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=280&fit=crop&auto=format",
    tags: ["당일메이크업", "리허설포함"],
    badge: "인기",
  },
  {
    id: 7,
    name: "뷰티 바이 소이",
    category: "makeup",
    categoryLabel: "메이크업",
    location: "서울 강남구",
    price: "50–90만원",
    picks: 743,
    rating: 4.7,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=280&fit=crop&auto=format",
    tags: ["자연스러운웨딩룩"],
    badge: null,
  },
];

const SORT_OPTIONS = ["인기순", "평점순", "계약인증순", "최신등록순"];

export function Search() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [pickedIds, setPickedIds] = useState<number[]>([]);
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeSort, setActiveSort] = useState("인기순");
  const [area, setArea] = useState("서울 전체");
  const [budget, setBudget] = useState("전체");
  const [timing, setTiming] = useState("준비 중");
  const [style, setStyle] = useState("자연스러운 무드");

  const togglePick = (id: number) => {
    const isAdding = !pickedIds.includes(id);
    setPickedIds((prev) => isAdding ? [...prev, id] : prev.filter((x) => x !== id));
    if (isAdding) toast.success("Pick 목록에 담겼어요.");
  };

  const filtered = VENDORS.filter((v) => {
    const matchCategory = activeCategory === "all" || v.category === activeCategory;
    const matchQuery =
      query === "" ||
      v.name.includes(query) ||
      v.location.includes(query) ||
      v.categoryLabel.includes(query);
    return matchCategory && matchQuery;
  });

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="sticky top-0 z-20 border-b border-border/70 bg-background/95 px-5 pb-4 pt-3 backdrop-blur">
        <div className="mb-3 flex items-center gap-2">
          <button onClick={() => navigate("/")} aria-label="홈으로 돌아가기" className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"><ArrowLeft className="h-5 w-5" /></button>
          <div><p className="font-display text-xl font-bold tracking-[-0.02em]">업체 탐색</p><p className="text-[11px] text-muted-foreground">우리 조건에 맞는 선택만 모았어요</p></div>
        </div>
        {/* Search bar */}
        <div className="flex gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-2xl bg-secondary px-4 h-12">
            <SearchIcon className="w-4 h-4 text-muted-foreground flex-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="업체 이름, 지역, 카테고리 검색"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div
        className="flex gap-2 px-5 overflow-x-auto pb-1 mb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-none px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-primary text-white shadow-sm shadow-primary/30"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-3 flex items-center justify-between px-5">
        <span className="text-xs font-medium text-muted-foreground">{filtered.length}개 업체</span>
        <button onClick={() => setShowFilters(true)} className="flex h-8 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs font-bold text-foreground transition-colors hover:bg-secondary"><SlidersHorizontal className="h-3.5 w-3.5 text-primary" />필터 {area !== "서울 전체" || budget !== "전체" || timing !== "준비 중" || style !== "자연스러운 무드" ? "· 1+" : ""}</button>
      </div>

      {/* Vendor List */}
      <div className="px-5 space-y-3">
        {filtered.map((v) => (
          <div
            key={v.id}
            onClick={() => navigate(`/vendor/${v.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => event.key === "Enter" && navigate(`/vendor/${v.id}`)}
            className="w-full cursor-pointer bg-card rounded-2xl border border-border overflow-hidden shadow-sm text-left"
          >
            <div className="flex gap-0">
              <div className="relative w-32 flex-none">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-32 h-36 object-cover bg-muted"
                />
                {v.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-bold text-white">
                    {v.badge}
                  </span>
                )}
              </div>
              <div className="flex-1 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                          {v.categoryLabel}
                        </span>
                      </div>
                      <p className="font-bold text-foreground text-sm leading-snug mt-0.5">{v.name}</p>
                    </div>
                    <button
                      onClick={(event) => { event.stopPropagation(); togglePick(v.id); }}
                      className={`flex-none w-7 h-7 rounded-full flex items-center justify-center transition-all mt-0.5 ${
                        pickedIds.includes(v.id) ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          pickedIds.includes(v.id) ? "fill-white text-white" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{v.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-mono text-foreground font-semibold">{v.price}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-foreground">{v.rating}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">저장 {v.picks}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="py-16 flex flex-col items-center gap-3 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-foreground font-semibold">검색 결과가 없어요</p>
            <p className="text-sm text-muted-foreground">다른 키워드나 카테고리로 찾아봐요</p>
          </div>
        )}
      </div>

      {showFilters && <div className="fixed inset-0 z-50 flex items-end bg-foreground/35" onClick={(event) => event.target === event.currentTarget && setShowFilters(false)}>
        <section className="max-h-[86dvh] w-full max-w-[430px] overflow-y-auto rounded-t-[28px] bg-background px-5 pb-8 pt-3">
          <div className="mx-auto h-1 w-10 rounded-full bg-border" />
          <header className="flex items-center justify-between py-5"><div><h2 className="text-lg font-bold text-foreground">필터</h2><p className="mt-0.5 text-xs text-muted-foreground">우리에게 맞는 업체만 남겨볼게요.</p></div><button onClick={() => { setArea("서울 전체"); setBudget("전체"); setTiming("준비 중"); setStyle("자연스러운 무드"); }} className="text-xs font-bold text-primary">초기화</button></header>
          <FilterGroup label="지역" options={["서울 전체", "강남·서초", "송파·강동", "마포·성수", "경기·인천"]} value={area} onChange={setArea} />
          <FilterGroup label="예산" options={["전체", "100만원 이하", "100–200만원", "200–400만원", "400만원 이상"]} value={budget} onChange={setBudget} />
          <FilterGroup label="준비 단계" options={["준비 중", "상담 전", "비교 중", "계약 직전"]} value={timing} onChange={setTiming} />
          <FilterGroup label="선호 무드" options={["자연스러운 무드", "화려한 연출", "미니멀", "클래식"]} value={style} onChange={setStyle} />
          <div className="mt-7"><p className="mb-2 text-xs font-bold text-foreground">정렬</p><div className="flex gap-2 overflow-x-auto pb-1">{SORT_OPTIONS.map((option) => <button key={option} onClick={() => setActiveSort(option)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold ${activeSort === option ? "bg-foreground text-white" : "bg-secondary text-muted-foreground"}`}>{option}</button>)}</div></div>
          <button onClick={() => setShowFilters(false)} className="mt-8 h-14 w-full rounded-2xl bg-primary text-sm font-bold text-white">{filtered.length}개 업체 보기</button>
        </section>
      </div>}
    </div>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return <section className="border-t border-border py-5"><p className="mb-3 text-sm font-bold text-foreground">{label}</p><div className="flex flex-wrap gap-2">{options.map((option) => <button key={`${label}-${option}`} onClick={() => onChange(option)} className={`flex items-center gap-1 rounded-full px-3.5 py-2.5 text-xs font-semibold transition-colors ${value === option ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}>{value === option && <Check className="h-3.5 w-3.5" />}{option}</button>)}</div></section>;
}
