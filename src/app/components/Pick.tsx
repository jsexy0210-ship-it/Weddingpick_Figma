import { useEffect, useState } from "react";
import { ArrowUpDown, BarChart2, CheckCircle2, Heart, Link2, MapPin, Minus, Star, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

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
    tags: ["자연광", "야외촬영"],
    badge: "인기",
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
    tags: ["필름감성"],
    badge: null,
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
    tags: ["인더스트리얼", "넓은공간"],
    badge: null,
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
    tags: ["당일메이크업"],
    badge: "인기",
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  studio: "스튜디오",
  makeup: "메이크업",
  dress: "드레스",
  hall: "웨딩홀",
};

type Vendor = (typeof SAVED_VENDORS)[0];

/* ── CompareScreen ──────────────────────────────────────────────────────────── */

const LABEL_W = 80;   // px, sticky left column
const COL_W   = 148;  // px, per vendor column

const SECTION_ROWS: Array<
  | { type: "section"; label: string }
  | { type: "row"; label: string; key: keyof Vendor | "tags" | "badge" }
> = [
  { type: "section", label: "가격 정보" },
  { type: "row", label: "가격대", key: "price" },
  { type: "section", label: "평가" },
  { type: "row", label: "평점", key: "rating" },
  { type: "row", label: "리뷰 수", key: "reviews" },
  { type: "row", label: "저장 수", key: "picks" },
  { type: "section", label: "상세" },
  { type: "row", label: "위치", key: "location" },
  { type: "row", label: "태그", key: "tags" },
  { type: "row", label: "뱃지", key: "badge" },
];

function CompareScreen({
  vendors,
  confirmedIds,
  onConfirm,
  onRemove,
  onClose,
}: {
  vendors: Vendor[];
  confirmedIds: number[];
  onConfirm: (id: number) => void;
  onRemove: (id: number) => void;
  onClose: () => void;
}) {
  const navigate = useNavigate();

  const bestPriceMin = Math.min(...vendors.map((v) => v.priceMin));
  const bestRating   = Math.max(...vendors.map((v) => v.rating));
  const bestPicks    = Math.max(...vendors.map((v) => v.picks));
  const bestReviews  = Math.max(...vendors.map((v) => v.reviews));

  const isBest = (v: Vendor, key: string) => {
    if (key === "price")   return v.priceMin === bestPriceMin;
    if (key === "rating")  return v.rating   === bestRating;
    if (key === "picks")   return v.picks    === bestPicks;
    if (key === "reviews") return v.reviews  === bestReviews;
    return false;
  };

  const tableMinWidth = LABEL_W + vendors.length * COL_W;

  const renderCell = (v: Vendor, key: string) => {
    switch (key) {
      case "price":
        return (
          <span className="font-mono text-sm font-bold text-foreground">{v.price}</span>
        );
      case "rating":
        return (
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-foreground">{v.rating}</span>
          </span>
        );
      case "reviews":
        return <span className="text-sm font-semibold text-foreground">{v.reviews.toLocaleString()}건</span>;
      case "picks":
        return <span className="text-sm font-semibold text-foreground">{v.picks.toLocaleString()}명</span>;
      case "location":
        return (
          <span className="inline-flex items-center gap-1 text-sm text-foreground">
            <MapPin className="h-3 w-3 text-muted-foreground" />
            {v.location}
          </span>
        );
      case "tags":
        return (
          <div className="flex flex-wrap justify-center gap-1">
            {v.tags.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                #{t}
              </span>
            ))}
          </div>
        );
      case "badge":
        return v.badge ? (
          <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-bold text-white">{v.badge}</span>
        ) : (
          <Minus className="h-3.5 w-3.5 text-muted-foreground/30" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* ── Header ── */}
      <div className="flex flex-none items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
          <h2 className="text-base font-bold text-foreground">비교함</h2>
          <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-bold text-white">
            {vendors.length}건
          </span>
          <span className="text-xs text-muted-foreground">최대 5건</span>
        </div>
        <button
          onClick={onClose}
          className="grid h-9 w-9 place-items-center rounded-full bg-secondary"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* ── Scroll hint ── */}
      {vendors.length > 2 && (
        <div className="flex flex-none items-center gap-1.5 border-b border-border/50 bg-secondary/40 px-5 py-2">
          <ArrowUpDown className="h-3 w-3 rotate-90 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">좌우로 밀어 더 보기</span>
        </div>
      )}

      {/* ── Compare table (single scroll container for sticky to work) ── */}
      <div
        className="flex-1 overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div style={{ minWidth: tableMinWidth }}>

          {/* ── Vendor photo header row ── */}
          <div className="flex border-b border-border bg-background">
            {/* Sticky label spacer */}
            <div
              className="sticky left-0 z-10 flex-none bg-background"
              style={{ width: LABEL_W }}
            />
            {vendors.map((v) => (
              <div
                key={v.id}
                className="flex-none px-3 py-4"
                style={{ width: COL_W }}
              >
                <div className="relative">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-[104px] w-full rounded-2xl object-cover"
                  />
                  {v.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-foreground px-2 py-0.5 text-[9px] font-bold text-white">
                      {v.badge}
                    </span>
                  )}
                  {/* Remove from compare */}
                  <button
                    onClick={() => onRemove(v.id)}
                    className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-black/40 text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  {confirmedIds.includes(v.id) && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/25">
                      <CheckCircle2 className="h-7 w-7 text-white drop-shadow" />
                    </div>
                  )}
                </div>
                <p className="mt-2.5 text-center text-[13px] font-bold leading-snug text-foreground">
                  {v.name}
                </p>
                <p className="mt-0.5 text-center text-[11px] text-muted-foreground">
                  {v.categoryLabel}
                </p>
              </div>
            ))}
          </div>

          {/* ── Data rows ── */}
          {SECTION_ROWS.map((item, idx) => {
            if (item.type === "section") {
              return (
                <div
                  key={`section-${idx}`}
                  className="flex border-b border-border bg-secondary/50"
                >
                  <div
                    className="sticky left-0 z-10 flex-none bg-secondary/50 px-4 py-2"
                    style={{ width: LABEL_W }}
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>
              );
            }

            const { label, key } = item;
            const rowKey = key as string;

            return (
              <div
                key={rowKey}
                className="flex border-b border-border"
              >
                {/* Sticky label column */}
                <div
                  className="sticky left-0 z-10 flex flex-none items-center bg-background px-4 py-4"
                  style={{ width: LABEL_W }}
                >
                  <span className="text-[11px] font-semibold text-muted-foreground leading-tight">
                    {label}
                  </span>
                </div>

                {/* Vendor cells */}
                {vendors.map((v) => {
                  const highlight = isBest(v, rowKey);
                  return (
                    <div
                      key={v.id}
                      className={`flex flex-none items-center justify-center px-3 py-4 ${
                        highlight ? "bg-primary/6" : ""
                      }`}
                      style={{ width: COL_W }}
                    >
                      <div className="flex flex-col items-center gap-1.5">
                        {renderCell(v, rowKey)}
                        {highlight && (
                          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold text-primary">
                            BEST
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* ── CTA row ── */}
          <div className="flex bg-background px-0 py-5">
            <div
              className="sticky left-0 z-10 flex-none bg-background"
              style={{ width: LABEL_W }}
            />
            {vendors.map((v) => (
              <div key={v.id} className="flex-none px-3" style={{ width: COL_W }}>
                {confirmedIds.includes(v.id) ? (
                  <button
                    onClick={() => navigate(`/vendor/${v.id}/consult`)}
                    className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white"
                  >
                    상담하기
                  </button>
                ) : (
                  <button
                    onClick={() => onConfirm(v.id)}
                    className="w-full rounded-xl bg-foreground py-3.5 text-sm font-bold text-white"
                  >
                    Pick
                  </button>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Pick ───────────────────────────────────────────────────────────────────── */

export function Pick() {
  const navigate = useNavigate();
  const location = useLocation();
  const [vendors, setVendors] = useState(SAVED_VENDORS);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [confirmedIds, setConfirmedIds] = useState<number[]>([]);
  const [animId, setAnimId] = useState<number | null>(null);

  useEffect(() => {
    if ((location.state as { openCompare?: boolean } | null)?.openCompare) {
      const ids = SAVED_VENDORS.slice(0, 5).map((v) => v.id);
      setCompareIds(ids);
      setShowCompare(true);
    }
  }, []);

  const categories = ["all", ...Array.from(new Set(vendors.map((v) => v.category)))];
  const filtered = activeCategory === "all" ? vendors : vendors.filter((v) => v.category === activeCategory);

  const toggleCompare = (id: number) =>
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 5 ? [...prev, id] : prev
    );

  const removePick = (id: number) => {
    setVendors((prev) => prev.filter((v) => v.id !== id));
    setCompareIds((prev) => prev.filter((x) => x !== id));
  };

  const removeFromCompare = (id: number) => {
    setCompareIds((prev) => {
      const next = prev.filter((x) => x !== id);
      if (next.length < 2) setShowCompare(false);
      return next;
    });
  };

  const confirmVendor = (id: number) => {
    const isAdding = !confirmedIds.includes(id);
    setConfirmedIds((prev) => isAdding ? [...prev, id] : prev.filter((x) => x !== id));
    if (isAdding) {
      setAnimId(id);
      window.setTimeout(() => setAnimId(null), 800);
    }
  };

  const compareVendors = vendors.filter((v) => compareIds.includes(v.id));

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="px-5 pb-5 pt-6">
        <div className="mb-1 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold tracking-tight">Pick</h1>
          <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold text-white">{vendors.length}개 저장</span>
        </div>
        <p className="text-sm text-muted-foreground">마음에 든 업체를 모아뒀어요. 하나씩 비교해봐요.</p>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-[11px] font-bold text-white ring-2 ring-secondary">지</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-muted-foreground text-[11px] font-bold text-white ring-2 ring-secondary">준</span>
            </div>
            <p className="text-xs font-semibold text-foreground">준혁님과 함께 보고 있어요</p>
          </div>
          <button onClick={() => navigate("/contract-verify")} className="flex items-center gap-1 text-xs font-bold text-primary">
            <Link2 className="h-3.5 w-3.5" />가격 제보
          </button>
        </div>
      </div>

      {/* Compare banner */}
      {compareIds.length >= 2 && (
        <div className="mx-5 mb-4 flex items-center justify-between rounded-2xl bg-foreground px-4 py-3.5">
          <div>
            <p className="text-sm font-bold text-white">{compareIds.length}개 선택됨</p>
            <p className="mt-0.5 text-xs text-white/50">가격과 조건을 한눈에 볼 수 있어요</p>
          </div>
          <button
            onClick={() => setShowCompare(true)}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white"
          >
            <BarChart2 className="h-4 w-4" />전체 비교하기
          </button>
        </div>
      )}

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto px-5 pb-4" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-none rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeCategory === cat ? "bg-foreground text-white" : "bg-secondary text-muted-foreground"
            }`}
          >
            {cat === "all" ? "전체" : CATEGORY_LABELS[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Vendor list */}
      <div className="space-y-3 px-5">
        {filtered.map((v) => {
          const isComparing = compareIds.includes(v.id);
          const isConfirmed = confirmedIds.includes(v.id);
          return (
            <div
              key={v.id}
              className={`overflow-hidden rounded-2xl border bg-card shadow-sm transition-all ${
                isConfirmed ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {/* Card body */}
              <div
                className="flex cursor-pointer gap-0"
                onClick={() => navigate(`/vendor/${v.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(`/vendor/${v.id}`)}
              >
                {/* Thumbnail */}
                <div className="relative w-32 flex-none">
                  <img src={v.image} alt={v.name} className="h-36 w-32 bg-muted object-cover" />
                  {v.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-bold text-white">
                      {v.badge}
                    </span>
                  )}
                  {isConfirmed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <CheckCircle2 className="h-7 w-7 text-white drop-shadow" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between p-3.5">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {v.categoryLabel}
                        </span>
                        <p className="mt-0.5 font-bold leading-snug text-foreground">{v.name}</p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); removePick(v.id); }}
                        aria-label={`${v.name} 삭제`}
                        className="flex-none rounded-full p-1 text-muted-foreground/40 hover:bg-secondary hover:text-muted-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-1.5 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{v.location}</span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {v.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-foreground">{v.price}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold text-foreground">{v.rating}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">저장 {v.picks}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA strip */}
              <div className="relative flex gap-2 border-t border-border px-3 py-2.5">
                {animId === v.id && (
                  <Heart className="pointer-events-none absolute -top-8 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce fill-primary text-primary" />
                )}

                {isConfirmed ? (
                  <>
                    <button
                      onClick={() => confirmVendor(v.id)}
                      className="h-10 flex-none rounded-xl border border-border bg-secondary px-4 text-xs font-bold text-muted-foreground"
                    >
                      상담취소
                    </button>
                    <button
                      onClick={() => navigate(`/vendor/${v.id}/consult`)}
                      className="h-10 flex-1 rounded-xl bg-primary text-xs font-bold text-white"
                    >
                      상담하기
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => toggleCompare(v.id)}
                      disabled={!isComparing && compareIds.length >= 5}
                      className={`h-10 flex-1 rounded-xl border text-xs font-bold transition-colors ${
                        isComparing
                          ? "border-foreground bg-foreground text-white"
                          : compareIds.length >= 5
                          ? "cursor-not-allowed border-border bg-secondary text-muted-foreground opacity-40"
                          : "border-border bg-secondary text-foreground"
                      }`}
                    >
                      {isComparing ? "비교 중" : "비교하기"}
                    </button>
                    <button
                      onClick={() => confirmVendor(v.id)}
                      className="h-10 flex-1 rounded-xl bg-primary text-xs font-bold text-white"
                    >
                      Pick하기
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}

        {vendors.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-secondary">
              <Heart className="h-8 w-8 text-muted-foreground/30" />
            </span>
            <div>
              <p className="font-bold text-foreground">아직 Pick한 업체가 없어요</p>
              <p className="mt-1 text-sm text-muted-foreground">검색에서 마음에 드는 업체를 저장해봐요</p>
            </div>
            <button onClick={() => navigate("/explore")} className="mt-1 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-white">
              업체 탐색하기
            </button>
          </div>
        )}
      </div>

      {/* Compare detail screen */}
      {showCompare && (
        <CompareScreen
          vendors={compareVendors}
          confirmedIds={confirmedIds}
          onConfirm={(id) => confirmVendor(id)}
          onRemove={removeFromCompare}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
