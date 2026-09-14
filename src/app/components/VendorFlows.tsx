import { useState } from "react";
import {
  ArrowLeft, BadgeCheck, CalendarDays, Check, ChevronRight,
  Clock3, Heart, MapPin, MessageCircle, Minus, Phone, Plus,
  Send, Share2, Star, Users,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

// ── shared ──────────────────────────────────────────────────────────────────

function PageHeader({ title, fallback, right }: { title: string; fallback: string; right?: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center border-b border-border/60 bg-background/95 px-4 backdrop-blur">
      <button
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate(fallback))}
        aria-label="이전"
        className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <p className="flex-1 pr-10 text-center text-sm font-bold">{title}</p>
      {right && <div className="absolute right-4">{right}</div>}
    </header>
  );
}

function StarRow({ score, size = "sm" }: { score: number; size?: "sm" | "xs" }) {
  const cls = size === "xs" ? "h-3 w-3" : "h-3.5 w-3.5";
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`${cls} ${s <= score ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
      ))}
    </span>
  );
}

// ── data ────────────────────────────────────────────────────────────────────

const STUDIO = {
  name: "블루밍 스튜디오",
  category: "스튜디오",
  location: "서울 강남구 청담로 12길 8",
  priceRange: "80–150만원",
  rating: 4.9,
  reviewCount: 198,
  picks: 1247,
  verified: true,
  heroImage:
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&h=640&fit=crop&auto=format",
  gallery: [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&auto=format",
  ],
  tags: ["자연광", "야외촬영", "필름감성", "커플샷", "강남역 10분"],
  description:
    "창가에서 쏟아지는 자연광으로 유명한 강남구의 프리미엄 웨딩 스튜디오예요. 10년 이상의 경력을 가진 전문 작가진이 여러분의 가장 빛나는 순간을 담아드립니다.",
  phone: "02-555-1234",
  hours: "화–일 10:00–19:00 (월요일 정기휴무)",
  packages: [
    {
      name: "베이직",
      price: "850,000",
      duration: "3시간",
      shots: "200컷 이상",
      edited: "60장 보정",
      description: "자연스러운 커플샷 위주의 기본 패키지",
      popular: false,
    },
    {
      name: "프리미엄",
      price: "1,200,000",
      duration: "5시간",
      shots: "400컷 이상",
      edited: "100장 보정",
      description: "야외+실내 촬영을 모두 담는 인기 패키지",
      popular: true,
    },
    {
      name: "올인클루시브",
      price: "1,800,000",
      duration: "전일",
      shots: "무제한",
      edited: "200장 보정",
      description: "최대한 많은 컨셉과 의상을 소화하는 프리미엄 패키지",
      popular: false,
    },
  ],
  reviews: [
    {
      id: "1",
      author: "수아와 도윤",
      mark: "수",
      rating: 5,
      date: "2026년 9월 12일",
      time: "2시간 전",
      verified: true,
      summary: "자연광이 정말 예뻤어요.",
      text: "자연광이 예쁜 곳을 찾고 있었는데, 상담 때부터 저희가 원하는 무드를 잘 이해해 주셨어요. 촬영 당일도 긴장하지 않도록 편하게 이끌어 주셔서 결과물이 더 마음에 듭니다.",
      image:
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop&auto=format",
      likes: 42,
    },
    {
      id: "2",
      author: "하린과 우진",
      mark: "하",
      rating: 5,
      date: "2026년 9월 09일",
      time: "3일 전",
      verified: true,
      summary: "작가분이 긴장을 잘 풀어주셨어요.",
      text: "작가분이 긴장 잘 풀어주셔서 자연스러운 사진이 많이 나왔어요. 결과물도 너무 만족스러워요.",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=600&fit=crop&auto=format",
      likes: 29,
    },
    {
      id: "3",
      author: "지은과 민준",
      mark: "지",
      rating: 4,
      date: "2026년 9월 05일",
      time: "1주 전",
      verified: false,
      summary: "전반적으로 만족했어요.",
      text: "예약부터 결과물 수령까지 전반적으로 좋았어요. 다만 대기 시간이 조금 있었어요.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop&auto=format",
      likes: 11,
    },
  ],
  ratingBreakdown: [
    { label: "분위기", score: 5.0 },
    { label: "친절도", score: 4.9 },
    { label: "결과물", score: 4.9 },
    { label: "가격 만족", score: 4.7 },
  ],
  faq: [
    {
      q: "예약 취소는 언제까지 가능한가요?",
      a: "촬영일 7일 전까지 전액 환불이 가능해요. 3일 전까지는 50% 환불, 그 이후는 환불이 어렵습니다.",
    },
    {
      q: "의상은 몇 벌까지 가능한가요?",
      a: "패키지에 따라 다르며, 베이직 2벌, 프리미엄 3벌, 올인클루시브 5벌까지 가능해요.",
    },
    {
      q: "헤어&메이크업도 제공하나요?",
      a: "기본 헤어&메이크업이 패키지에 포함되어 있어요. 추가 옵션은 별도 문의 주세요.",
    },
    {
      q: "주차는 가능한가요?",
      a: "건물 지하 2시간 무료 주차가 가능해요. 이후 10분당 1,000원이에요.",
    },
  ],
};

type Tab = "소개" | "패키지" | "후기" | "정보";
const TABS: Tab[] = ["소개", "패키지", "후기", "정보"];

// ── VendorDetailPage ─────────────────────────────────────────────────────────

export function VendorDetailPage() {
  const navigate = useNavigate();
  const { id = "1" } = useParams();
  const [picked, setPicked] = useState(false);
  const [tab, setTab] = useState<Tab>("소개");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handlePick = () => {
    const wasOff = !picked;
    setPicked(wasOff);
    toast.success(wasOff ? "Pick 목록에 담겼어요." : "Pick에서 제거했어요.");
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-14 items-center border-b border-border/60 bg-background/95 px-4 backdrop-blur">
        <button
          onClick={() => navigate("/explore")}
          aria-label="이전"
          className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <p className="flex-1 pr-10 text-center text-sm font-bold">{STUDIO.name}</p>
        <button
          onClick={() => toast("링크가 복사됐어요.")}
          aria-label="공유"
          className="absolute right-4 grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </header>

      {/* Hero */}
      <div className="relative">
        <img
          src={STUDIO.heroImage}
          alt={`${STUDIO.name} 촬영 공간`}
          className="h-72 w-full bg-muted object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <div className="mb-1.5 flex items-center gap-2">
            {STUDIO.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
                <BadgeCheck className="h-2.5 w-2.5" />인증
              </span>
            )}
            <span className="text-xs font-bold tracking-wide text-white/70">{STUDIO.category}</span>
          </div>
          <h1 className="font-display text-[32px] font-bold leading-tight tracking-[-0.02em] text-white">
            {STUDIO.name}
          </h1>
        </div>
      </div>

      {/* Quick stats */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-3 text-sm">
        <span className="inline-flex items-center gap-1 font-bold">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {STUDIO.rating}
        </span>
        <span className="text-muted-foreground">가격 제보 {STUDIO.reviewCount}건</span>
        <span className="text-muted-foreground">·</span>
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />강남구
        </span>
        <span className="ml-auto font-mono text-sm font-bold">{STUDIO.priceRange}</span>
      </div>

      {/* Tab nav */}
      <div className="sticky top-14 z-20 border-b border-border bg-background">
        <div className="flex px-5">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-sm font-bold transition-colors border-b-2 ${
                tab === t ? "border-foreground text-foreground" : "border-transparent text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ── 소개 tab ── */}
      {tab === "소개" && (
        <div className="space-y-7 px-5 pt-6">
          {/* Gallery strip */}
          <section>
            <h2 className="mb-3 text-sm font-bold">포트폴리오</h2>
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              {STUDIO.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`포트폴리오 ${i + 1}`}
                  className="h-36 w-36 flex-none rounded-lg bg-muted object-cover"
                />
              ))}
            </div>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {STUDIO.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3.5 py-2 text-xs font-semibold text-foreground">
                #{tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm leading-7 text-foreground">{STUDIO.description}</p>

          {/* Verified price */}
          <section className="rounded-2xl bg-foreground p-5 text-white">
            <p className="font-mono text-[10px] tracking-[0.15em] text-white/45">VERIFIED PRICE RANGE</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="font-mono text-2xl font-medium">{STUDIO.priceRange}</p>
              <span className="text-xs text-white/65">최근 30일 24건</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/55">
              실제 가격 제보와 업체 공식 견적을 함께 반영했어요.
            </p>
          </section>

          {/* Why recommended */}
          <section className="border-t border-border pt-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold">우리 조건에 맞는 이유</h2>
              <span className="text-[11px] text-muted-foreground">내 조건 기준</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["강남 30분 이내", "자연광 취향", "예산 안쪽"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 rounded-xl bg-secondary px-2 py-3">
                  <Check className="h-3 w-3 flex-none text-foreground" />
                  <span className="text-[11px] font-semibold leading-4 text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pb-2 pt-6">
            <h2 className="mb-4 text-sm font-bold">자주 묻는 질문</h2>
            <div className="space-y-2">
              {STUDIO.faq.map((item, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold">{item.q}</span>
                    {openFaq === i ? (
                      <Minus className="h-4 w-4 flex-none text-muted-foreground" />
                    ) : (
                      <Plus className="h-4 w-4 flex-none text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="border-t border-border px-4 py-3.5">
                      <p className="text-sm leading-6 text-muted-foreground">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ── 패키지 tab ── */}
      {tab === "패키지" && (
        <div className="space-y-4 px-5 pt-6">
          <p className="text-xs text-muted-foreground">모든 가격은 VAT 포함이에요. 최종 금액은 상담 후 확정돼요.</p>
          {STUDIO.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`overflow-hidden rounded-2xl border bg-card ${
                pkg.popular ? "border-foreground shadow-md" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="bg-foreground px-4 py-2 text-xs font-bold text-white">
                  커플들이 가장 많이 선택해요
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                      {pkg.name.toUpperCase()} PACKAGE
                    </p>
                    <p className="mt-1 font-mono text-2xl font-medium">{pkg.price}원</p>
                  </div>
                  {pkg.popular && <BadgeCheck className="mt-1 h-5 w-5 text-foreground" />}
                </div>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{pkg.description}</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "촬영 시간", value: pkg.duration },
                    { label: "촬영 컷", value: pkg.shots },
                    { label: "보정본", value: pkg.edited },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-secondary px-2 py-3 text-center">
                      <p className="text-[10px] text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-xs font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate(`/vendor/${id}/consult`)}
                  className={`mt-4 h-11 w-full rounded-xl text-sm font-bold transition-colors ${
                    pkg.popular
                      ? "bg-primary text-white"
                      : "border border-border bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  이 패키지로 상담 예약
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── 후기 tab ── */}
      {tab === "후기" && (
        <div className="pt-6">
          {/* Rating summary */}
          <div className="mx-5 mb-6 flex items-center gap-6 rounded-2xl border border-border bg-card p-5">
            <div className="shrink-0 text-center">
              <p className="font-display text-[52px] font-bold leading-none">{STUDIO.rating}</p>
              <StarRow score={5} size="sm" />
              <p className="mt-1.5 font-mono text-[10px] text-muted-foreground">{STUDIO.reviewCount}개 후기</p>
            </div>
            <div className="flex-1 space-y-2.5">
              {STUDIO.ratingBreakdown.map((r) => (
                <div key={r.label} className="flex items-center gap-2">
                  <span className="w-16 text-[10px] text-muted-foreground">{r.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-foreground"
                      style={{ width: `${(r.score / 5) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-[10px] font-bold w-7 text-right">{r.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review list */}
          <div className="border-t border-border">
            {STUDIO.reviews.map((review, i) => (
              <article key={i} className="border-b border-border px-5 py-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-sm font-bold">
                    {review.mark}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold">{review.author}</p>
                      {review.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-foreground">
                          <BadgeCheck className="h-3 w-3" />가격 제보
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 flex items-center gap-2">
                      <StarRow score={review.rating} size="xs" />
                      <span className="text-[10px] text-muted-foreground">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="mb-3 text-sm leading-6 text-foreground">{review.text}</p>
                <button
                  onClick={() => navigate(`/vendor/${id}/reviews/${review.id}`)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground"
                >
                  자세히 보기 <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}

            <div className="px-5 py-4">
              <button
                onClick={() => navigate(`/vendor/${id}/reviews/1`)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card text-sm font-bold text-foreground hover:bg-secondary"
              >
                전체 후기 보기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 정보 tab ── */}
      {tab === "정보" && (
        <div className="space-y-3 px-5 pt-6">
          {[
            { Icon: MapPin, label: "주소", value: STUDIO.location },
            { Icon: Clock3, label: "운영 시간", value: STUDIO.hours },
            { Icon: Phone, label: "전화", value: STUDIO.phone },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
              <Icon className="mt-0.5 h-5 w-5 flex-none text-muted-foreground" />
              <div>
                <p className="text-[10px] font-bold tracking-wide text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-6">{value}</p>
              </div>
            </div>
          ))}
          <div className="flex h-48 items-center justify-center rounded-2xl border border-border bg-secondary">
            <p className="text-sm text-muted-foreground">지도 준비 중이에요</p>
          </div>
          <p className="pb-2 text-center text-[11px] text-muted-foreground">
            정확한 위치는 상담 예약 후 안내드려요.
          </p>
        </div>
      )}

      {/* Fixed CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[430px] border-t border-border bg-background/95 p-4 backdrop-blur">
        <div className="flex gap-2">
          <button
            onClick={handlePick}
            aria-label="Pick 저장"
            className={`h-14 w-14 flex-none rounded-2xl border transition-all ${
              picked ? "border-foreground bg-foreground text-white" : "border-border bg-card text-foreground"
            }`}
          >
            <Heart className={`mx-auto h-5 w-5 ${picked ? "fill-current" : ""}`} />
          </button>
          <button
            onClick={() => navigate(`/vendor/${id}/consult`)}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-white"
          >
            <CalendarDays className="h-4 w-4" />상담 일정 잡기
          </button>
        </div>
      </div>
    </div>
  );
}

// ── ConsultPage (상담 예약) ────────────────────────────────────────────────────

const CONSULT_DATES = [
  { day: 18, weekday: "금" },
  { day: 19, weekday: "토" },
  { day: 20, weekday: "일" },
  { day: 22, weekday: "화" },
  { day: 23, weekday: "수" },
  { day: 25, weekday: "금" },
  { day: 26, weekday: "토" },
];

const CONSULT_TIMES = ["오전 10:00", "오전 11:30", "오후 1:00", "오후 2:00", "오후 3:30", "오후 5:00"];

export function ConsultPage() {
  const navigate = useNavigate();
  const { id = "1" } = useParams();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const canConfirm = selectedDay !== null && selectedTime !== null;

  const confirm = () => {
    if (!canConfirm) return;
    toast.success("상담 일정을 등록했어요.");
    navigate("/our-wedding");
  };

  return (
    <div className="min-h-[100dvh] bg-background pb-28">
      <PageHeader title="상담 예약" fallback={`/vendor/${id}`} />

      <main className="px-5 pt-7">
        <p className="font-mono text-[10px] tracking-[0.17em] text-muted-foreground">BLOOMING STUDIO</p>
        <h1 className="mt-2 font-display text-[30px] font-bold leading-tight tracking-[-0.02em]">
          우리에게 편한 시간으로<br />상담을 예약해요.
        </h1>

        {/* Consultant card */}
        <div className="mt-7 flex gap-4 rounded-2xl border border-border bg-card p-4">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format"
            alt="담당 작가 김소연"
            className="h-16 w-16 flex-none rounded-lg bg-muted object-cover"
          />
          <div>
            <p className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">YOUR CONSULTANT</p>
            <p className="mt-1 text-sm font-bold">김소연 작가</p>
            <div className="mt-1 flex items-center gap-1.5">
              <StarRow score={5} size="xs" />
              <span className="text-[10px] text-muted-foreground">10년 경력 · 자연광 전문</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">평균 응답 30분 이내</p>
          </div>
        </div>

        {/* Date selection */}
        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-foreground" />
              <h2 className="text-sm font-bold">날짜 선택</h2>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">2026년 9월</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {CONSULT_DATES.map((d) => (
              <button
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`flex flex-none flex-col items-center gap-1 rounded-2xl border px-5 py-3 transition-all ${
                  selectedDay === d.day
                    ? "border-foreground bg-foreground text-white"
                    : "border-border bg-card hover:bg-secondary"
                }`}
              >
                <span className={`text-[10px] font-medium ${selectedDay === d.day ? "text-white/60" : "text-muted-foreground"}`}>
                  {d.weekday}
                </span>
                <span className="text-base font-bold">{d.day}일</span>
              </button>
            ))}
          </div>
        </section>

        {/* Time selection */}
        <section className="mt-8 border-t border-border pt-6">
          <div className="mb-3 flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-foreground" />
            <h2 className="text-sm font-bold">시간 선택</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {CONSULT_TIMES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`h-12 rounded-xl border text-sm font-bold transition-all ${
                  selectedTime === t
                    ? "border-foreground bg-foreground text-white"
                    : "border-border bg-card hover:bg-secondary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mt-8 border-t border-border pt-6">
          <h2 className="mb-3 text-sm font-bold">남기고 싶은 말 <span className="font-normal text-muted-foreground">(선택)</span></h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="원하는 스타일, 특별한 요청이 있으면 남겨주세요."
            className="h-24 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
          />
        </section>

        {/* Couple sync info */}
        <section className="mt-5 rounded-2xl bg-secondary p-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-foreground" />
            <p className="text-sm font-bold">커플 캘린더에 자동으로 공유돼요</p>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            지윤 · 준혁 두 분의 우리웨딩 캘린더에 상담 일정이 공유됩니다.
          </p>
        </section>
      </main>

      {/* Fixed CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[430px] border-t border-border bg-background/95 p-4 backdrop-blur">
        {canConfirm ? (
          <button
            onClick={confirm}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-white"
          >
            <Check className="h-4 w-4" />
            9월 {selectedDay}일 · {selectedTime} 예약하기
          </button>
        ) : (
          <button disabled className="h-14 w-full cursor-not-allowed rounded-2xl bg-secondary text-sm font-bold text-muted-foreground">
            날짜와 시간을 선택해주세요
          </button>
        )}
      </div>
    </div>
  );
}

export { ConsultPage as BookingPage };

// ── ReviewDetailPage ─────────────────────────────────────────────────────────

const REVIEW_COMMENTS = [
  { mark: "하", author: "하린과 우진", text: "사진 분위기가 정말 예뻐요! 후기 참고할게요.", time: "1시간 전" },
  { mark: "민", author: "민지와 태호", text: "저희도 여기 가려고 생각 중이었는데 확신이 생겼어요!", time: "3시간 전" },
  { mark: "서", author: "서연과 지호", text: "어떤 패키지로 하셨어요? 혹시 여쭤봐도 될까요?", time: "5시간 전" },
  { mark: "유", author: "유진과 재원", text: "결과물 너무 예쁘네요 ❤ 정보 감사해요", time: "1일 전" },
];

const REVIEW_RATINGS = [
  { label: "분위기", score: 5 },
  { label: "친절도", score: 5 },
  { label: "결과물", score: 5 },
  { label: "가격", score: 4 },
];

export function ReviewDetailPage() {
  const navigate = useNavigate();
  const { id = "1", reviewId = "1" } = useParams();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  const review = STUDIO.reviews.find((r) => r.id === reviewId) ?? STUDIO.reviews[0];

  const sendComment = () => {
    if (!comment.trim()) return;
    setComment("");
    toast.success("댓글을 남겼어요.");
  };

  return (
    <div className="min-h-[100dvh] bg-background pb-24">
      <PageHeader title="리얼 후기" fallback={`/vendor/${id}`} />

      <main>
        {/* Author — 업체 상세 후기 탭과 동일한 구조 */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-sm font-bold">
            {review.mark}
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-bold">{review.author}</p>
              {review.verified && (
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-foreground">
                  <BadgeCheck className="h-3 w-3" />계약 인증
                </span>
              )}
            </div>
            <div className="mt-0.5 flex items-center gap-2">
              <StarRow score={review.rating} size="xs" />
              <span className="text-[10px] text-muted-foreground">{review.time}</span>
            </div>
          </div>
        </div>

        {/* Main photo */}
        <img
          src={review.image}
          alt={`${review.author} 후기 사진`}
          className="h-[320px] w-full bg-muted object-cover"
        />

        <div className="px-5 py-5">
          {/* Actions */}
          <div className="mb-4 flex items-center gap-4">
            <button
              onClick={() => { if (!liked) toast.success("Pick 목록에 담겼어요."); setLiked((v) => !v); }}
              aria-label="좋아요"
              className="inline-flex items-center gap-1.5 text-sm font-bold"
            >
              <Heart className={`h-6 w-6 ${liked ? "fill-primary text-primary" : ""}`} />
              {liked ? review.likes + 1 : review.likes}
            </button>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold">
              <MessageCircle className="h-5 w-5" />
              {REVIEW_COMMENTS.length}
            </span>
          </div>

          {/* Rating breakdown */}
          <div className="mb-5 grid grid-cols-4 gap-2">
            {REVIEW_RATINGS.map((r) => (
              <div key={r.label} className="rounded-xl bg-secondary px-2 py-3 text-center">
                <p className="text-[10px] text-muted-foreground">{r.label}</p>
                <p className="mt-1 font-mono text-xs font-bold">{r.score}.0</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`h-2 w-2 ${s <= r.score ? "fill-amber-400 text-amber-400" : "text-muted-foreground/20"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Review text */}
          <p className="text-sm leading-7 text-foreground">{review.text}</p>

          {/* CTA to booking */}
          <button
            onClick={() => navigate(`/vendor/${id}/consult`)}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-white"
          >
            <CalendarDays className="h-4 w-4" />이 업체 상담 예약하기
          </button>
        </div>

        {/* Comments */}
        <section className="border-t border-border px-5 py-5">
          <h2 className="mb-5 text-sm font-bold">댓글 {REVIEW_COMMENTS.length}개</h2>
          <div className="space-y-5">
            {REVIEW_COMMENTS.map((c, i) => (
              <div key={i} className="flex gap-3">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-secondary text-[10px] font-bold">
                  {c.mark}
                </span>
                <div>
                  <p className="text-xs font-bold">
                    {c.author}{" "}
                    <span className="ml-1 font-normal text-muted-foreground">{c.time}</span>
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Comment input */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-[430px] gap-2 border-t border-border bg-background p-3">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendComment()}
          placeholder="댓글을 남겨보세요"
          className="h-11 min-w-0 flex-1 rounded-xl bg-secondary px-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          onClick={sendComment}
          aria-label="댓글 등록"
          className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-white"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
