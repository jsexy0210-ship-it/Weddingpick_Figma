import { useState } from "react";
import { Heart, Star, MapPin, X, ChevronDown, CheckCircle2, BarChart2, Link2 } from "lucide-react";
import { useNavigate } from "react-router";

const SAVED_VENDORS = [
  {
    id: 1,
    name: "블루밍 스튜디오",
    category: "studio",
    categoryLabel: "스튜디오",
    location: "서울 강남구",
    price: "80–150만원",
    priceMin: 80,
    picks: 1247,
    rating: 4.9,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=280&fit=crop&auto=format",
    status: "picking",
    tags: ["자연광", "야외촬영"],
  },
  {
    id: 2,
    name: "스튜디오 온",
    category: "studio",
    categoryLabel: "스튜디오",
    location: "서울 마포구",
    price: "70–130만원",
    priceMin: 70,
    picks: 892,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=280&fit=crop&auto=format",
    status: "picking",
    tags: ["필름감성"],
  },
  {
    id: 3,
    name: "포레스트 스튜디오",
    category: "studio",
    categoryLabel: "스튜디오",
    location: "서울 성수동",
    price: "90–160만원",
    priceMin: 90,
    picks: 634,
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=280&fit=crop&auto=format",
    status: "picking",
    tags: ["인더스트리얼", "넓은공간"],
  },
  {
    id: 4,
    name: "오드 메이크업",
    category: "makeup",
    categoryLabel: "메이크업",
    location: "서울 청담동",
    price: "45–80만원",
    priceMin: 45,
    picks: 892,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=280&fit=crop&auto=format",
    status: "picking",
    tags: ["당일메이크업"],
  },
];

const COMPARE_FIELDS = [
  { label: "가격대", key: "price" },
  { label: "평점", key: "rating" },
  { label: "후기 수", key: "reviews" },
  { label: "Pick 수", key: "picks" },
  { label: "위치", key: "location" },
];

const CATEGORY_LABELS: Record<string, string> = {
  studio: "스튜디오",
  makeup: "메이크업",
  dress: "드레스",
  hall: "웨딩홀",
};

export function Pick() {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState(SAVED_VENDORS);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [confirmedIds, setConfirmedIds] = useState<number[]>([]);

  const categories = ["all", ...Array.from(new Set(vendors.map((v) => v.category)))];

  const filtered =
    activeCategory === "all"
      ? vendors
      : vendors.filter((v) => v.category === activeCategory);

  const toggleCompare = (id: number) => {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const removePick = (id: number) => {
    setVendors((prev) => prev.filter((v) => v.id !== id));
    setCompareIds((prev) => prev.filter((x) => x !== id));
  };

  const confirmVendor = (id: number) => {
    setConfirmedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const compareVendors = vendors.filter((v) => compareIds.includes(v.id));

  const getFieldValue = (v: typeof SAVED_VENDORS[0], key: string): string => {
    if (key === "price") return v.price;
    if (key === "rating") return `⭐ ${v.rating}`;
    if (key === "reviews") return `${v.reviews}개`;
    if (key === "picks") return `${v.picks.toLocaleString()}명`;
    if (key === "location") return v.location;
    return "";
  };

  return (
    <div className="pb-4">
      <div className="h-14" />

      {/* Header */}
      <div className="px-5 pb-4">
        <div className="flex items-center justify-between mb-1">
          <h1
            className="text-2xl font-bold text-foreground tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pick
          </h1>
          <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {vendors.length}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">관심 업체를 모아 비교해보세요</p>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-3.5 py-3"><div className="flex items-center gap-2.5"><div className="flex -space-x-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-secondary">지</span><span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[10px] font-bold text-white ring-2 ring-secondary">준</span></div><p className="text-xs font-semibold text-foreground">준혁님과 함께 보고 있어요</p></div><button onClick={() => navigate("/contract-verify")} className="flex items-center gap-1 text-xs font-bold text-primary"><Link2 className="h-3.5 w-3.5" />계약 인증</button></div>
      </div>

      {/* Compare CTA */}
      {compareIds.length >= 2 && (
        <div className="mx-5 mb-4 p-4 bg-foreground rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-white text-sm font-semibold">{compareIds.length}개 선택됨</p>
            <p className="text-white/50 text-xs mt-0.5">나란히 비교해봐요</p>
          </div>
          <button
            onClick={() => setShowCompare(true)}
            className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-full"
          >
            <BarChart2 className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
            비교하기
          </button>
        </div>
      )}

      {/* Category Filter */}
      <div className="flex gap-2 px-5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-none px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {cat === "all" ? "전체" : CATEGORY_LABELS[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Vendor Cards */}
      <div className="px-5 space-y-3">
        {filtered.map((v) => {
          const isComparing = compareIds.includes(v.id);
          const isConfirmed = confirmedIds.includes(v.id);
          return (
            <div
              key={v.id}
              className={`bg-card rounded-2xl border overflow-hidden shadow-sm transition-all ${
                isConfirmed ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
              }`}
            >
              <div className="relative">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-44 object-cover bg-muted"
                />
                <button
                  onClick={() => removePick(v.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
                {isConfirmed && (
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    확정
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] text-white/70 font-bold uppercase tracking-wider">
                    {v.categoryLabel}
                  </span>
                  <p className="text-white font-bold text-base leading-snug">{v.name}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{v.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-foreground">{v.rating}</span>
                    <span className="text-[10px] text-muted-foreground">({v.reviews})</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-foreground ml-auto">{v.price}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleCompare(v.id)}
                    disabled={!isComparing && compareIds.length >= 3}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      isComparing
                        ? "bg-foreground text-white border-foreground"
                        : compareIds.length >= 3
                        ? "bg-secondary text-muted-foreground border-border opacity-50 cursor-not-allowed"
                        : "bg-secondary text-foreground border-border hover:border-foreground/30"
                    }`}
                  >
                    {isComparing ? "비교 중" : "비교 선택"}
                  </button>
                  <button
                    onClick={() => confirmVendor(v.id)}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isConfirmed
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-primary text-white"
                    }`}
                  >
                    {isConfirmed ? "확정 취소" : "확정하기"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {vendors.length === 0 && (
          <div className="py-20 flex flex-col items-center gap-3 text-center">
            <Heart className="w-12 h-12 text-muted-foreground/30" />
            <p className="font-semibold text-foreground">아직 Pick한 업체가 없어요</p>
            <p className="text-sm text-muted-foreground">검색에서 마음에 드는 업체를 저장해봐요</p>
          </div>
        )}
      </div>

      {/* Comparison Modal */}
      {showCompare && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center"
          onClick={(e) => e.target === e.currentTarget && setShowCompare(false)}
        >
          <div className="bg-background w-full max-w-[430px] rounded-t-3xl overflow-hidden max-h-[85dvh] flex flex-col">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h2 className="font-bold text-foreground text-lg">비교하기</h2>
              <button
                onClick={() => setShowCompare(false)}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>
            </div>
            <div className="overflow-y-auto p-5" style={{ scrollbarWidth: "none" }}>
              {/* Compare header */}
              <div className="grid gap-2 mb-4" style={{ gridTemplateColumns: `120px repeat(${compareVendors.length}, 1fr)` }}>
                <div />
                {compareVendors.map((v) => (
                  <div key={v.id} className="text-center">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-20 object-cover rounded-xl bg-muted mb-2"
                    />
                    <p className="text-xs font-bold text-foreground leading-tight">{v.name}</p>
                  </div>
                ))}
              </div>

              {/* Compare rows */}
              <div className="space-y-1">
                {COMPARE_FIELDS.map((field) => (
                  <div
                    key={field.key}
                    className="grid items-center gap-2 py-3 border-b border-border last:border-0"
                    style={{ gridTemplateColumns: `120px repeat(${compareVendors.length}, 1fr)` }}
                  >
                    <span className="text-xs text-muted-foreground font-semibold">{field.label}</span>
                    {compareVendors.map((v) => (
                      <div key={v.id} className="text-center">
                        {field.key === "rating" ? (
                          <div className="flex items-center justify-center gap-0.5">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-bold text-foreground">{v.rating}</span>
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-foreground">
                            {getFieldValue(v, field.key)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: `120px repeat(${compareVendors.length}, 1fr)` }}>
                <div />
                {compareVendors.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      confirmVendor(v.id);
                      setShowCompare(false);
                    }}
                    className="py-3 rounded-xl bg-primary text-white text-sm font-bold"
                  >
                    선택
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
