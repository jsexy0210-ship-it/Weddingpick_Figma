import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, BadgeCheck, CalendarDays, Camera, Check, CheckCircle2,
  ChevronRight, FileText, Heart, MapPin, MessageCircle, PenLine,
  Send, Share2, Star, Ticket, Upload, X,
} from "lucide-react";
import { motion } from "motion/react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { toast } from "sonner";

const vendorHero = "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&h=640&fit=crop&auto=format";

function BackHeader({ title, fallback = "/" }: { title: string; fallback?: string }) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center border-b border-border/70 bg-background/95 px-4 backdrop-blur">
      <button
        onClick={() => (window.history.length > 1 ? navigate(-1) : navigate(fallback))}
        aria-label="이전 화면으로"
        className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <p className="flex-1 pr-10 text-center text-sm font-bold">{title}</p>
    </header>
  );
}

// ── Login ─────────────────────────────────────────────────────────────────────

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100dvh] bg-background px-6 pb-8 pt-16">
      <p className="font-mono text-[10px] tracking-[0.24em] text-primary">WEDDING, LESS OVERWHELMING</p>
      <h1 className="mt-5 font-display text-[42px] font-bold leading-[1.06] tracking-[-0.025em]">
        결정은 가볍게,<br />준비는 단단하게.
      </h1>
      <p className="mt-5 max-w-[300px] text-[15px] leading-7 text-muted-foreground">
        흩어진 웨딩 정보를 한곳에 모아, 우리에게 맞는 선택만 남겨드릴게요.
      </p>
      <div className="mt-12 rounded-[28px] border border-primary/15 bg-primary/[0.06] p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-lg text-white">✦</span>
          <div>
            <p className="text-sm font-bold">나에게 맞는 순서부터</p>
            <p className="mt-0.5 text-xs text-muted-foreground">예산, 지역, 날짜를 기준으로 시작해요</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <button
          onClick={() => navigate("/onboarding")}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] text-[15px] font-bold text-[#191600] transition-transform active:scale-[0.98]"
        >
          <span className="grid h-5 w-5 place-items-center rounded-md bg-[#191600] text-[10px] font-black text-[#FEE500]">k</span>
          카카오로 3초 만에 시작하기
        </button>
        <p className="mt-4 text-center text-[11px] leading-5 text-muted-foreground">
          시작하면 웨딩픽 이용약관과 개인정보 처리방침에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}

// ── Onboarding ────────────────────────────────────────────────────────────────

const steps = [
  { eyebrow: "01 / 03", title: "결혼 예정일이 있나요?", sub: "아직 정하지 않았어도 괜찮아요.", choices: ["2027년 1월 15일", "2027년 상반기", "아직 미정"] },
  { eyebrow: "02 / 03", title: "어디에서 준비할까요?", sub: "업체 거리와 실제 견적을 더 정확히 보여드려요.", choices: ["서울", "경기·인천", "다른 지역"] },
  { eyebrow: "03 / 03", title: "무엇이 가장 중요해요?", sub: "추천 순서를 조정할 때만 사용할게요.", choices: ["예산 안에서", "취향이 뚜렷하게", "정보가 충분하게"] },
];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const current = steps[step];
  const next = () => step === steps.length - 1 ? navigate("/") : (setStep(step + 1), setSelected(0));
  return (
    <div className="min-h-[100dvh] bg-background px-6 pb-8 pt-8">
      <div className="flex items-center justify-between">
        <button onClick={() => step ? setStep(step - 1) : navigate("/login")} className="text-sm text-muted-foreground">
          {step ? "이전" : "나중에"}
        </button>
        <span className="font-mono text-xs text-muted-foreground">{current.eyebrow}</span>
      </div>
      <div className="mt-5 flex gap-1.5">
        {steps.map((_, i) => <span key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-secondary"}`} />)}
      </div>
      <div className="pt-20">
        <p className="font-mono text-[10px] tracking-[0.22em] text-primary">JUST FOR YOU</p>
        <h1 className="mt-4 font-display text-[38px] font-bold leading-[1.18] tracking-[-0.025em]">{current.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{current.sub}</p>
        <div className="mt-10 space-y-3">
          {current.choices.map((choice, i) => (
            <button
              key={choice}
              onClick={() => setSelected(i)}
              className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left text-[15px] font-bold transition-colors ${
                selected === i ? "border-primary bg-primary/[0.07] text-primary" : "border-border bg-card"
              }`}
            >
              <span>{choice}</span>
              {selected === i && <Check className="h-5 w-5" />}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={next}
        className="mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-foreground text-sm font-bold text-white"
      >
        {step === 2 ? "나만의 준비 시작하기" : "다음"}
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// ── ContractVerify ────────────────────────────────────────────────────────────

export function ContractVerify() {
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState<"idle" | "reading" | "done">("idle");

  const handleFile = (file?: File) => {
    if (!file) return;
    setFileName(file.name);
    setStatus("reading");
    window.setTimeout(() => setStatus("done"), 900);
  };

  const handleCamera = () => {
    // 카메라 입력 트리거 — 실제 환경에서는 capture="environment" input 호출
    setStatus("reading");
    window.setTimeout(() => setStatus("done"), 900);
  };

  return (
    <div className="min-h-[100dvh] bg-background">
      <BackHeader title="가격 제보" fallback="/pick" />
      <main className="px-5 pb-10 pt-7">
        <p className="font-mono text-[10px] tracking-[0.2em] text-primary">VERIFY THE FACTS</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em]">영수증 또는 계약서를 인증해주세요</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          금액과 업체 정보를 자동으로 읽어 Pick과 예산에 반영해요.
        </p>

        {/* ── 카메라 주 CTA ── */}
        {status === "idle" && (
          <button
            onClick={handleCamera}
            className="mt-7 flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-foreground py-12 text-white active:opacity-90"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10">
              <Camera className="h-8 w-8 text-white" />
            </span>
            <div className="text-center">
              <p className="text-base font-bold">카메라로 촬영하기</p>
              <p className="mt-1 text-xs text-white/55">선명하게 찍을수록 정확해요</p>
            </div>
          </button>
        )}

        {status === "reading" && (
          <div className="mt-7 flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-foreground py-12 text-white">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/10">
              <Upload className="h-8 w-8 animate-bounce text-white" />
            </span>
            <div className="text-center">
              <p className="text-base font-bold">내용을 읽고 있어요</p>
              <p className="mt-1 text-xs text-white/55">잠시만 기다려주세요</p>
            </div>
          </div>
        )}

        {status === "done" && (
          <div className="mt-7 flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-primary py-12 text-white">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </span>
            <div className="text-center">
              <p className="text-base font-bold">계약 내용을 찾았어요</p>
              <p className="mt-1 max-w-[200px] truncate text-xs text-white/65">{fileName || "촬영한 사진"}</p>
            </div>
          </div>
        )}

        {/* ── 보조: 파일로 올리기 ── */}
        {status === "idle" && (
          <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-border bg-card py-4 transition-colors hover:bg-secondary">
            <input
              type="file"
              accept="image/*,.pdf"
              className="sr-only"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">파일로 올리기</span>
            <span className="text-xs text-muted-foreground">JPG · PNG · PDF</span>
          </label>
        )}

        {/* ── 추출 결과 ── */}
        {status === "done" && (
          <section className="mt-5 rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <p className="text-sm font-bold">추출된 계약 정보</p>
              <span className="ml-auto rounded-full bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">검토 필요</span>
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">업체</dt><dd className="font-bold">블루밍 스튜디오</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">계약 금액</dt><dd className="font-mono font-bold">1,280,000원</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">계약일</dt><dd className="font-mono font-bold">2026.09.13</dd></div>
            </dl>
            <div className="mt-5 flex gap-2">
              <button onClick={() => setStatus("idle")} className="h-12 flex-none rounded-xl border border-border bg-card px-4 text-sm font-bold text-foreground">
                다시 찍기
              </button>
              <button className="h-12 flex-1 rounded-xl bg-primary text-sm font-bold text-white">
                확인 후 반영하기
              </button>
            </div>
          </section>
        )}

        <p className="mt-6 text-center text-[11px] leading-5 text-muted-foreground">
          인증 자료는 계약 확인 목적으로만 사용되며, 반영 전 내용을 직접 확인할 수 있어요.
        </p>
      </main>
    </div>
  );
}

// ── CommunityFeed ─────────────────────────────────────────────────────────────

export function CommunityFeed() {
  const [liked, setLiked] = useState(false);
  const [params, setParams] = useSearchParams();
  const [tab, setTab] = useState(() =>
    params.get("tab") === "feed" ? "웨딩피드" : params.get("tab") === "fair" ? "박람회" : "리얼후기"
  );
  const selectTab = (item: string) => {
    setTab(item);
    setParams(item === "웨딩피드" ? { tab: "feed" } : item === "박람회" ? { tab: "fair" } : {});
  };
  return (
    <div className="pb-5">
      {/* Header — 우측 아이콘 제거 */}
      <header className="sticky top-0 z-20 flex h-14 items-center border-b border-border/70 bg-background/95 px-5 backdrop-blur">
        <p className="font-display text-2xl font-bold tracking-[-0.03em]">커뮤니티</p>
      </header>

      <main>
        <nav className="mx-5 mt-4 grid grid-cols-3 rounded-2xl bg-secondary p-1">
          {["리얼후기", "웨딩피드", "박람회"].map((item) => (
            <button
              key={item}
              onClick={() => selectTab(item)}
              className={`h-10 rounded-xl text-xs font-bold transition-colors ${
                tab === item ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        {tab === "박람회" ? <ExpoContent /> : tab === "리얼후기" ? <ReviewContent liked={liked} setLiked={setLiked} /> : <FeedContent liked={liked} setLiked={setLiked} />}
      </main>
    </div>
  );
}

// ── CategoryRail + FAB ────────────────────────────────────────────────────────

function CategoryRail() {
  const [mineOpen, setMineOpen] = useState(false);
  const fabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (mineOpen && fabRef.current && !fabRef.current.contains(e.target as Node)) setMineOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [mineOpen]);

  const posts = [
    { category: "드레스 피팅", title: "첫 피팅 전 챙긴 것들을 정리했어요", meta: "좋아요 18 · 댓글 4", date: "9월 08일", mark: "D" },
    { category: "웨딩홀", title: "계약 전, 주차와 식대는 꼭 확인하세요", meta: "좋아요 32 · 댓글 7", date: "8월 29일", mark: "H" },
  ];

  return (
    <>
      <section className="border-b border-border px-5 py-4">
        <p className="mb-3 text-xs font-bold text-foreground">카테고리</p>
        <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {[
            { name: "웨딩홀", icon: "⌂", tone: "bg-[#eee0da]" },
            { name: "드레스", icon: "♢", tone: "bg-[#e8dfe8]" },
            { name: "예산", icon: "₩", tone: "bg-[#e6e8d9]" },
            { name: "신혼여행", icon: "✈", tone: "bg-[#dce9e8]" },
          ].map((item) => (
            <button key={item.name} className="flex w-16 flex-none flex-col items-center gap-1.5">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${item.tone} text-lg text-foreground`}>{item.icon}</span>
              <span className="text-[10px] font-medium text-muted-foreground">{item.name}</span>
            </button>
          ))}
        </div>
      </section>

      <div ref={fabRef} className="fixed bottom-[88px] right-5 z-40 flex flex-col items-end gap-3">
        <motion.div
          initial={false}
          animate={{ opacity: mineOpen ? 1 : 0, y: mineOpen ? 0 : 12, scale: mineOpen ? 1 : 0.96 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={`w-[min(320px,calc(100vw-40px))] overflow-hidden rounded-[22px] border border-border/80 bg-card shadow-[0_18px_42px_rgba(55,27,52,0.18)] ${mineOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!mineOpen}
        >
          <div className="flex items-center justify-between border-b border-border bg-secondary/55 px-4 py-3">
            <div>
              <p className="text-sm font-bold">내가 쓴 글</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">후기와 커뮤니티 글 2개</p>
            </div>
            <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">MY NOTES</span>
          </div>
          <button className="flex w-full items-center gap-3 border-b border-border px-4 py-3.5 text-left transition-colors hover:bg-secondary" onClick={() => setMineOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-sm shadow-primary/25"><PenLine className="h-4 w-4" /></span>
            <span>
              <span className="block text-sm font-bold">후기 쓰기</span>
              <span className="mt-0.5 block text-[11px] text-muted-foreground">나만의 준비 이야기를 남겨보세요</span>
            </span>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
          </button>
          <div className="max-h-[186px] overflow-y-auto py-1.5">
            {posts.map((post) => (
              <button key={post.title} className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary font-mono text-[11px] font-bold text-foreground">{post.mark}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold text-muted-foreground">{post.category}</span>
                  <span className="mt-0.5 block truncate text-xs font-bold text-foreground">{post.title}</span>
                  <span className="mt-1 block text-[10px] text-muted-foreground">{post.meta}</span>
                </span>
                <span className="self-start pt-0.5 text-[10px] text-muted-foreground">{post.date}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.button
          type="button"
          aria-label={mineOpen ? "닫기" : "내가 쓴 글"}
          aria-expanded={mineOpen}
          onClick={() => setMineOpen((o) => !o)}
          whileTap={{ scale: 0.94 }}
          className={`grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_12px_28px_rgba(238,92,81,0.38)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
            mineOpen ? "bg-foreground" : "bg-primary hover:bg-[#d94f46]"
          }`}
        >
          <motion.span animate={{ rotate: mineOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {mineOpen ? <X className="h-5 w-5" /> : <PenLine className="h-5 w-5" />}
          </motion.span>
        </motion.button>
      </div>
    </>
  );
}

// ── StarRating ────────────────────────────────────────────────────────────────

function StarRating({ score }: { score: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`h-3 w-3 ${s <= score ? "fill-amber-400 text-amber-400" : "text-muted-foreground/20"}`} />
      ))}
    </span>
  );
}

// ── ReviewContent ─────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    id: "1",
    mark: "수",
    author: "수아와 도윤",
    vendor: "블루밍 스튜디오",
    vendorCategory: "스튜디오",
    rating: 5,
    contractVerified: true,
    time: "2시간",
    text: "세 곳을 비교하고 최종 결정했어요. 최종 견적도 웨딩픽에서 본 범위 안이었습니다.",
    image: vendorHero,
    likes: 42,
    comments: 8,
  },
  {
    id: "2",
    mark: "하",
    author: "하린과 우진",
    vendor: "그레이스 드레스",
    vendorCategory: "드레스",
    rating: 5,
    contractVerified: false,
    time: "1일",
    text: "피팅 전에는 원하는 실루엣 세 장만 정해 갔어요. 아이디어가 명확할수록 작업이 빨랐어요.",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=600&h=400&fit=crop&auto=format",
    likes: 29,
    comments: 4,
  },
];

function ReviewContent({ liked, setLiked }: { liked: boolean; setLiked: (v: boolean) => void }) {
  const navigate = useNavigate();
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const toggle = (id: string) => {
    const isAdding = !likedIds.includes(id);
    setLikedIds((p) => isAdding ? [...p, id] : p.filter((x) => x !== id));
    if (isAdding) toast.success("Pick 목록에 담겼어요.");
  };

  return (
    <>
      <CategoryRail />
      <div className="divide-y divide-border">
        {REVIEWS.map((r) => {
          const isLiked = likedIds.includes(r.id);
          return (
            <article key={r.id} className="bg-card">
              {/* Author */}
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-secondary text-sm font-bold">
                  {r.mark}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <p className="text-sm font-bold">{r.author}</p>
                    {/* 상태 배지 */}
                    {r.contractVerified && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-foreground/8 px-2 py-0.5 text-[10px] font-bold text-foreground">
                        <BadgeCheck className="h-2.5 w-2.5" />가격 제보
                      </span>
                    )}
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {r.vendorCategory}
                    </span>
                  </div>
                  {/* 별점 */}
                  <div className="mt-1 flex items-center gap-2">
                    <StarRating score={r.rating} />
                    <span className="text-[10px] text-muted-foreground">{r.vendor} · {r.time} 전</span>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <img src={r.image} alt={`${r.author} 후기`} className="h-72 w-full object-cover" />

              {/* Actions + text */}
              <div className="px-5 py-4">
                <div className="mb-3 flex items-center gap-4">
                  <button
                    onClick={() => toggle(r.id)}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold ${isLiked ? "text-primary" : "text-foreground"}`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                    {isLiked ? r.likes + 1 : r.likes}
                  </button>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground">
                    <MessageCircle className="h-5 w-5" />{r.comments}
                  </span>
                </div>
                <p className="text-sm leading-6 text-foreground">
                  <span className="mr-1 font-bold">{r.author}</span>{r.text}
                </p>
                <button
                  onClick={() => navigate(`/vendor/1/reviews/${r.id}`)}
                  className="mt-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  댓글 {r.comments}개 모두 보기
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

// ── FeedContent ───────────────────────────────────────────────────────────────

const FEED_GUIDES = [
  { id: "1", category: "드레스", title: "첫 피팅 전, 스타일리스트에게 꼭 물어볼 6가지", meta: "웨딩픽 가이드 · 4분", tone: "bg-[#e8d9d1]", mark: "01" },
  { id: "2", category: "예산", title: "예상 밖 추가금을 줄이는 계약서 체크 포인트", meta: "웨딩픽 가이드 · 5분", tone: "bg-[#d7e1d6]", mark: "02" },
  { id: "3", category: "일정", title: "본식 4개월 전: 청첩장과 신혼여행의 순서", meta: "준비 캘린더 · 3분", tone: "bg-[#e9dfcf]", mark: "03" },
];

function FeedContent({ liked, setLiked }: { liked: boolean; setLiked: (v: boolean) => void }) {
  const navigate = useNavigate();
  return (
    <>
      <CategoryRail />
      <div className="px-5 py-5">
        {FEED_GUIDES.map((guide) => (
          <article
            key={guide.id}
            onClick={() => navigate(`/community/feed/${guide.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/community/feed/${guide.id}`)}
            className="-mx-2 flex cursor-pointer gap-4 rounded-xl border-b border-border py-4 px-2 first:pt-0 last:border-0 transition-colors hover:bg-secondary/50"
          >
            <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl ${guide.tone}`}>
              <span className="font-display text-2xl italic text-foreground/65">{guide.mark}</span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="text-[10px] font-bold tracking-[0.12em] text-primary">{guide.category}</p>
              <h3 className="mt-1 text-sm font-bold leading-5 text-foreground">{guide.title}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">{guide.meta}</p>
            </div>
            <ChevronRight className="my-auto h-4 w-4 flex-none text-muted-foreground" />
          </article>
        ))}
      </div>

      <article className="mx-5 mb-4 overflow-hidden rounded-2xl bg-foreground p-5 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-white/50">TODAY"S PICK</p>
            <p className="mt-2 text-base font-bold">예산을 정리할 시간이에요.</p>
            <p className="mt-1 text-xs text-white/60">지난주 저장한 3개 업체를 비교해봐요.</p>
          </div>
          <button onClick={() => { if (!liked) toast.success("Pick 목록에 담겼어요."); setLiked(!liked); }} aria-label="좋아요" className={liked ? "text-[#efc8bc]" : "text-white"}>
            <Heart className={`h-6 w-6 ${liked ? "fill-current" : ""}`} />
          </button>
        </div>
        <button className="mt-5 flex w-full items-center justify-between border-t border-white/15 pt-4 text-xs font-bold text-[#efc8bc]">
          Pick에서 비교하기 <ChevronRight className="h-4 w-4" />
        </button>
      </article>
    </>
  );
}

// ── ExpoContent ───────────────────────────────────────────────────────────────

function ExpoContent() {
  return (
    <div className="px-5 py-5">
      <div className="rounded-2xl bg-secondary p-5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-primary">UPCOMING FAIR</p>
        <h2 className="mt-2 text-xl font-bold text-foreground">이번 주말, 한 번에 비교해요</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">웨딩홀부터 스드메까지, 예비부부를 위한 박람회 정보를 모았어요.</p>
      </div>
      <div className="mt-5 space-y-3">
        {[
          { title: "2026 코엑스 웨딩박람회", date: "9.19 토 — 9.20 일", place: "서울 코엑스 D홀", tag: "사전 예약 혜택" },
          { title: "더현대 서울 웨딩 위크", date: "9.26 토 — 9.27 일", place: "더현대 서울 6F", tag: "드레스 쇼케이스" },
        ].map((expo) => (
          <article key={expo.title} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                  <Ticket className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{expo.title}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />{expo.date}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />{expo.place}
                  </p>
                </div>
              </div>
              <span className="whitespace-nowrap rounded-full bg-secondary px-2 py-1 text-[10px] font-bold text-foreground">{expo.tag}</span>
            </div>
            <button className="mt-4 h-10 w-full rounded-xl bg-foreground text-xs font-bold text-white">사전 예약하기</button>
          </article>
        ))}
      </div>
    </div>
  );
}

// ── FeedDetailPage ─────────────────────────────────────────────────────────────

const FEED_DETAIL: Record<string, {
  category: string; title: string; meta: string; readTime: string;
  heroTone: string; mark: string; intro: string;
  sections: { heading: string; body: string }[];
  tags: string[];
}> = {
  "1": {
    category: "드레스", title: "첫 피팅 전, 스타일리스트에게 꼭 물어볼 6가지",
    meta: "웨딩픽 에디터", readTime: "4분", heroTone: "bg-[#e8d9d1]", mark: "01",
    intro: "첫 드레스 피팅은 기대와 긴장이 공존하는 시간이에요. 준비 없이 가면 막상 무엇을 물어봐야 할지 막막할 수 있습니다. 이 질문들을 미리 챙겨 가세요.",
    sections: [
      { heading: "1. 원하는 실루엣 사진 3장을 먼저 보여주세요", body: "A라인, 볼가운, 슬림 등 실루엣 종류를 말로 설명하는 것보다 사진이 훨씬 효과적이에요. 핀터레스트나 인스타그램에서 미리 저장해 가세요." },
      { heading: "2. 피팅 기간과 횟수 제한이 있나요?", body: "피팅 횟수, 기간, 드레스 변경 가능 여부 등 계약 조건을 명확히 확인하세요. 업체마다 '무제한'의 기준이 다를 수 있어요." },
      { heading: "3. 추가금이 발생하는 조건은 무엇인가요?", body: "레이스 추가, 길이 조정, 사이즈 맞춤 등 기본 포함 범위 밖의 작업에는 추가 비용이 생길 수 있어요. 사전에 항목별로 확인하세요." },
      { heading: "4. 드레스 픽업 시기와 반납 기준은?", body: "본식 전 드레스를 언제 받을 수 있는지, 반납은 몇 시간 내에 해야 하는지 꼭 물어보세요. 일정에 따라 패키지 선택이 달라질 수 있어요." },
      { heading: "5. 헤어&메이크업 포함인가요?", body: "드레스 피팅에 헤어·메이크업이 포함된 업체도 있고, 별도인 곳도 있어요. 종합 견적을 계산할 때 반드시 포함 여부를 확인하세요." },
      { heading: "6. 가격 제보 후기를 볼 수 있나요?", body: "실제 계약 금액이 견적 범위 내에 있었는지, 추가금이 발생했는지 후기를 통해 미리 파악할 수 있어요." },
    ],
    tags: ["드레스피팅", "스드메", "웨딩준비"],
  },
  "2": {
    category: "예산", title: "예상 밖 추가금을 줄이는 계약서 체크 포인트",
    meta: "웨딩픽 에디터", readTime: "5분", heroTone: "bg-[#d7e1d6]", mark: "02",
    intro: "웨딩 계약에서 가장 많이 발생하는 분쟁은 추가금입니다. 계약서에 명시되지 않은 항목이 나중에 청구되는 경우를 막는 체크리스트예요.",
    sections: [
      { heading: "기본 포함 항목을 구체적으로 확인하세요", body: "견적서에 포함된다고 명시된 항목의 범위를 하나하나 확인하세요. '헤어 1회 포함'이 리허설인지 본식인지, 둘 다인지 꼭 물어보세요." },
      { heading: "추가 발생 조건을 미리 협의하세요", body: "추가 게스트, 촬영 시간 연장, 옵션 변경 시 단가 기준을 계약서에 포함시키면 나중에 분쟁을 줄일 수 있어요." },
      { heading: "취소·환불 정책은 날짜별로 확인", body: "대부분 업체는 본식 기준 D-30, D-14 등 날짜별로 환불율이 달라요. 달력에 표시해두고 일정 변경 리스크를 관리하세요." },
      { heading: "계약 전 인증 후기를 확인하세요", body: "실제 계약 금액이 견적 범위 내에 있었는지, 추가금이 발생했는지 후기를 통해 미리 파악할 수 있어요." },
    ],
    tags: ["예산관리", "계약서", "추가금방지"],
  },
  "3": {
    category: "일정", title: "본식 4개월 전: 청첩장과 신혼여행의 순서",
    meta: "준비 캘린더", readTime: "3분", heroTone: "bg-[#e9dfcf]", mark: "03",
    intro: "본식 4개월 전은 정보 수집에서 실행으로 넘어가는 변곡점이에요. 무엇을 먼저 해야 하는지 순서를 정리했어요.",
    sections: [
      { heading: "청첩장 먼저, 신혼여행 예약은 그 다음", body: "청첩장 발송 후 확정 게스트 수를 파악하고, 그 수에 맞게 식대와 신혼여행 예산을 조정하는 것이 효율적이에요." },
      { heading: "항공권은 최소 3개월 전에", body: "성수기라면 항공권과 호텔을 최소 4-5개월 전에 예약하는 것이 좋아요. 취소 가능한 상품으로 우선 예약해두세요." },
      { heading: "청첩장 디자인에는 2주를 잡으세요", body: "디자인 시안 확인, 수정, 최종 인쇄까지 보통 2주가 걸려요. 발송 시기를 역산해서 스케줄을 잡으세요." },
      { heading: "우리웨딩 캘린더에 바로 기록하세요", body: "웨딩픽 우리웨딩 캘린더에서 일정별 알림을 설정하면 놓치는 항목 없이 준비할 수 있어요." },
    ],
    tags: ["일정관리", "청첩장", "신혼여행"],
  },
};

export function FeedDetailPage() {
  const navigate = useNavigate();
  const { id = "1" } = useParams();
  const detail = FEED_DETAIL[id] ?? FEED_DETAIL["1"];
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-background pb-10">
      <BackHeader title={detail.category} fallback="/community" />

      <main>
        {/* Hero */}
        <div className={`flex h-52 items-center justify-center ${detail.heroTone}`}>
          <span className="font-display text-[80px] font-bold italic text-foreground/25">{detail.mark}</span>
        </div>

        <div className="px-5 pt-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary">{detail.category}</span>
            <span className="font-mono text-[10px] text-muted-foreground">읽는 시간 {detail.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="mt-3 font-display text-[26px] font-bold leading-snug tracking-[-0.02em]">{detail.title}</h1>

          {/* Author + actions */}
          <div className="mt-4 flex items-center justify-between border-b border-border pb-5">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-[11px] font-bold">W</span>
              <div>
                <p className="text-xs font-bold">{detail.meta}</p>
                <p className="text-[10px] text-muted-foreground">2026년 9월 10일</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => { if (!liked) toast.success("Pick 목록에 담겼어요."); setLiked((v) => !v); }}
                className={`inline-flex items-center gap-1 text-sm font-bold ${liked ? "text-primary" : "text-muted-foreground"}`}
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                {liked ? 128 : 127}
              </button>
              <button onClick={() => toast("링크가 복사됐어요.")} className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-muted-foreground">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Intro */}
          <p className="mt-6 text-[15px] leading-[1.85] text-foreground">{detail.intro}</p>

          {/* Sections */}
          <div className="mt-8 space-y-7">
            {detail.sections.map((sec) => (
              <section key={sec.heading} className="rounded-2xl bg-secondary/60 p-4">
                <h2 className="text-sm font-bold text-foreground">{sec.heading}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{sec.body}</p>
              </section>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
            {detail.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3.5 py-2 text-xs font-semibold text-foreground">#{tag}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 rounded-2xl bg-foreground p-5 text-white">
            <p className="font-mono text-[10px] tracking-[0.15em] text-white/45">RELATED</p>
            <p className="mt-2 text-sm font-bold">관련 업체를 찾아볼까요?</p>
            <p className="mt-1 text-xs text-white/60">가격 제보 후기와 실제 견적을 함께 확인해봐요.</p>
            <button
              onClick={() => navigate("/explore")}
              className="mt-4 flex w-full items-center justify-between border-t border-white/15 pt-4 text-xs font-bold text-[#efc8bc]"
            >
              업체 탐색하기 <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
