import { useState, useRef, type ChangeEvent, type ReactNode } from "react";
import {
  IconAddRegular,
  IconCalendarRegular,
  IconCheckRegular,
  IconChevronLeftRegular,
  IconChevronRightRegular,
  IconCloseRegular,
  IconEditRegular,
  IconTrashRegular,
  IconCheckFlowerFill,
  IconMicRegular,
  IconArrowRegular,
} from "@seed-design/icon";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type BudgetItem = { id: number; label: string; budget: number; spent: number };
type CalEvent = { id: number; day: number; label: string; time: string; done: boolean };
type Sheet =
  | { type: "event" | "budget"; id: number | "new" }
  | { type: "delete"; collection: "event" | "budget"; id: number; label: string }
  | null;

type ConsultStatus = "uploading" | "analyzing" | "done";
type ConsultAnalysis = {
  included?: string[];
  extras?: { item: string; amount: string }[];
  scheduleCondition?: string;
  changeCondition?: string;
  cancellation?: string;
  uncertain?: string[];
};
type ConsultItem = {
  id: number;
  vendorName: string;
  date: string;
  amount: number;
  status: ConsultStatus;
  confirmed: boolean;
  analysis?: ConsultAnalysis;
};

const MONTHS = [
  { label: "2026년 9월", value: "2026-09", days: 30, blank: 2 },
  { label: "2026년 10월", value: "2026-10", days: 31, blank: 4 },
  { label: "2026년 11월", value: "2026-11", days: 30, blank: 0 },
];

const STUB_ANALYSIS: ConsultAnalysis = {
  included: ["기본 촬영 6시간", "앨범 1권 (30p)", "원본 파일 전체", "메이크업 1회"],
  extras: [
    { item: "추가 앨범", amount: "20만원" },
    { item: "드레스 추가 컷", amount: "10만원/컷" },
  ],
  scheduleCondition: "예약금 30만원, 잔금 촬영 2주 전",
  changeCondition: "촬영 1개월 전까지 1회 변경 가능",
  cancellation: "촬영 1개월 전 취소 시 예약금 50% 환불",
  uncertain: ["메이크업 추가 비용 명시 없음"],
};

export function OurWedding() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"calendar" | "budget" | "consult">("calendar");
  const [monthIndex, setMonthIndex] = useState(0);
  const [day, setDay] = useState(12);
  const [sheet, setSheet] = useState<Sheet>(null);
  const [events, setEvents] = useState<CalEvent[]>([
    { id: 1, day: 12, label: "드레스 피팅", time: "14:00", done: false },
    { id: 2, day: 18, label: "스튜디오 상담", time: "11:30", done: false },
    { id: 3, day: 25, label: "청첩장 인쇄", time: "10:00", done: true },
  ]);
  const [budgets, setBudgets] = useState<BudgetItem[]>([
    { id: 1, label: "웨딩홀", budget: 1000, spent: 1000 },
    { id: 2, label: "스튜디오", budget: 200, spent: 0 },
    { id: 3, label: "드레스", budget: 400, spent: 0 },
    { id: 4, label: "메이크업", budget: 150, spent: 0 },
  ]);
  const [draft, setDraft] = useState({ label: "", time: "12:00", budget: "", spent: "" });

  // Consultation state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [consults, setConsults] = useState<ConsultItem[]>([
    {
      id: 1,
      vendorName: "블루밍 스튜디오",
      date: "9월 14일",
      amount: 180,
      status: "done",
      confirmed: false,
      analysis: {
        included: ["기본 촬영 6시간", "앨범 1권 (30p)", "원본 파일 전체", "메이크업 1회"],
        extras: [
          { item: "추가 앨범", amount: "20만원" },
          { item: "드레스 추가 컷", amount: "10만원/컷" },
        ],
        scheduleCondition: "예약금 30만원, 잔금 촬영 2주 전",
        changeCondition: "촬영 1개월 전까지 1회 변경 가능",
        cancellation: "촬영 1개월 전 취소 시 예약금 50% 환불",
        uncertain: ["메이크업 추가 비용 명시 없음"],
      },
    },
    {
      id: 2,
      vendorName: "그레이스 웨딩홀",
      date: "9월 10일",
      amount: 450,
      status: "done",
      confirmed: true,
      analysis: {
        included: ["식사 150인분", "기본 장식", "주차 무료"],
        extras: [{ item: "추가 인원", amount: "3만원/인" }],
        scheduleCondition: "계약금 100만원 선납",
        uncertain: ["음주 제공 여부 미확인"],
      },
    },
  ]);
  const [consultDetail, setConsultDetail] = useState<ConsultItem | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editDraft, setEditDraft] = useState({ vendorName: "", date: "", amount: "" });

  // ── Calendar helpers ──────────────────────────────────────────────────────
  const total = budgets.reduce((s, b) => s + b.budget, 0);
  const spentTotal = budgets.reduce((s, b) => s + b.spent, 0);
  const percentage = total ? Math.round((spentTotal / total) * 100) : 0;
  const month = MONTHS[monthIndex];
  const dayEvents = events.filter((e) => e.day === day);

  const openEventSheet = (event?: CalEvent) => {
    setDraft(
      event
        ? { label: event.label, time: event.time, budget: "", spent: "" }
        : { label: "", time: "12:00", budget: "", spent: "" }
    );
    setSheet({ type: "event", id: event?.id ?? "new" });
  };

  const openBudgetSheet = (item?: BudgetItem) => {
    setDraft(
      item
        ? { label: item.label, time: "", budget: String(item.budget), spent: String(item.spent) }
        : { label: "", time: "", budget: "", spent: "" }
    );
    setSheet({ type: "budget", id: item?.id ?? "new" });
  };

  const save = () => {
    if (!sheet || sheet.type === "delete" || !draft.label) return;
    const isNew = sheet.id === "new";
    if (sheet.type === "event") {
      setEvents((items) =>
        isNew
          ? [...items, { id: Date.now(), day, label: draft.label, time: draft.time, done: false }]
          : items.map((e) => (e.id === sheet.id ? { ...e, label: draft.label, time: draft.time } : e))
      );
    } else {
      setBudgets((items) =>
        isNew
          ? [
              ...items,
              {
                id: Date.now(),
                label: draft.label,
                budget: Number(draft.budget),
                spent: Number(draft.spent),
              },
            ]
          : items.map((b) =>
              b.id === sheet.id
                ? { ...b, label: draft.label, budget: Number(draft.budget), spent: Number(draft.spent) }
                : b
            )
      );
    }
    setSheet(null);
    toast.success(isNew ? "등록했어요." : "수정했어요.");
  };

  const remove = () => {
    if (sheet?.type !== "delete") return;
    if (sheet.collection === "event") setEvents((items) => items.filter((e) => e.id !== sheet.id));
    else setBudgets((items) => items.filter((b) => b.id !== sheet.id));
    setSheet(null);
    toast.success("삭제했어요.");
  };

  const toggleDone = (id: number) => {
    const event = events.find((e) => e.id === id);
    if (!event) return;
    setEvents((items) => items.map((e) => (e.id === id ? { ...e, done: !e.done } : e)));
    toast.success(event.done ? "완료를 취소했어요." : "완료했어요.");
  };

  const selectDate = (d: number) => {
    setDay(d);
    if (!events.some((e) => e.day === d)) openEventSheet();
  };

  // ── Consultation helpers ──────────────────────────────────────────────────
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const name = file.name.replace(/\.[^.]+$/, "").slice(0, 20) || "새 상담";
    const newItem: ConsultItem = {
      id: Date.now(),
      vendorName: name,
      date: "9월 14일",
      amount: 0,
      status: "uploading",
      confirmed: false,
    };
    setConsults((prev) => [newItem, ...prev]);
    setTimeout(() => {
      setConsults((prev) =>
        prev.map((c) => (c.id === newItem.id ? { ...c, status: "analyzing" } : c))
      );
    }, 1500);
    setTimeout(() => {
      setConsults((prev) =>
        prev.map((c) =>
          c.id === newItem.id ? { ...c, status: "done", amount: 180, analysis: STUB_ANALYSIS } : c
        )
      );
      toast.success("AI 분석이 완료됐어요.");
    }, 4000);
    e.target.value = "";
  };

  const openConsultDetail = (c: ConsultItem) => {
    setConsultDetail(c);
    setEditMode(false);
    setEditDraft({ vendorName: c.vendorName, date: c.date, amount: String(c.amount) });
  };

  const saveConsult = () => {
    if (!consultDetail) return;
    const updated: ConsultItem = {
      ...consultDetail,
      vendorName: editMode && editDraft.vendorName ? editDraft.vendorName : consultDetail.vendorName,
      date: editMode && editDraft.date ? editDraft.date : consultDetail.date,
      amount: editMode && editDraft.amount ? Number(editDraft.amount) : consultDetail.amount,
      confirmed: true,
    };
    setConsults((prev) => prev.map((c) => (c.id === consultDetail.id ? updated : c)));
    setConsultDetail(null);
    toast.success("저장했어요.");
  };

  const statusLabel = (c: ConsultItem) => {
    if (c.status === "uploading") return "업로드 중";
    if (c.status === "analyzing") return "AI 분석 중";
    return c.confirmed ? "저장됨" : "분석 완료";
  };

  // FAB action per tab
  const handleFAB = () => {
    if (tab === "calendar") openEventSheet();
    else if (tab === "budget") openBudgetSheet();
    else fileInputRef.current?.click();
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="px-5 pb-5 pt-6">
        <h1 className="font-display text-[28px] font-bold">웨딩노트</h1>
      </header>

      {/* Tab nav — 3 columns */}
      <nav className="mx-5 grid grid-cols-3 rounded-2xl bg-secondary p-1">
        {(["calendar", "budget", "consult"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`h-11 rounded-xl text-sm font-bold transition-colors ${
              tab === key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            {key === "calendar" ? "캘린더" : key === "budget" ? "예산현황" : "상담기록"}
          </button>
        ))}
      </nav>

      {/* ── Calendar ─────────────────────────────────────────────────────── */}
      {tab === "calendar" && (
        <section className="mx-5 mt-4 rounded-[26px] border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">OUR CALENDAR</p>
              <h2 className="mt-1 font-display text-2xl font-bold">{month.label}</h2>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setMonthIndex((i) => Math.max(0, i - 1))}
              disabled={monthIndex === 0}
              aria-label="이전 달"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary disabled:opacity-25"
            >
              <IconChevronLeftRegular size={20} />
            </button>
            <p className="text-[11px] text-muted-foreground">빈 날짜를 누르면 일정을 바로 추가해요</p>
            <button
              onClick={() => setMonthIndex((i) => Math.min(MONTHS.length - 1, i + 1))}
              disabled={monthIndex === MONTHS.length - 1}
              aria-label="다음 달"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary disabled:opacity-25"
            >
              <IconChevronRightRegular size={20} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 text-center text-[10px] font-semibold text-muted-foreground">
            {"일월화수목금토".split("").map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-7">
            {Array.from({ length: month.blank }, (_, i) => (
              <i key={`b${i}`} />
            ))}
            {Array.from({ length: month.days }, (_, i) => i + 1).map((d) => {
              const hasEvent = events.some((e) => e.day === d);
              const isSelected = d === day;
              return (
                <button
                  key={d}
                  onClick={() => selectDate(d)}
                  className={`relative mx-auto grid h-10 w-10 place-items-center rounded-full text-xs font-medium transition-colors ${
                    isSelected ? "bg-foreground text-white" : "hover:bg-secondary"
                  }`}
                >
                  {d}
                  {hasEvent && (
                    <span
                      className={`absolute bottom-1.5 block h-1 w-1 rounded-full ${
                        isSelected ? "bg-white" : "bg-foreground"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-5 border-t border-border pt-4">
            {dayEvents.length === 0 ? (
              <button
                onClick={() => openEventSheet()}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border/80 py-5 text-sm text-muted-foreground transition-colors hover:bg-secondary"
              >
                <IconCalendarRegular size={16} />
                이 날짜에 일정을 추가해요
              </button>
            ) : (
              <ul className="space-y-2">
                {dayEvents.map((event) => (
                  <li
                    key={event.id}
                    className={`flex items-center gap-3 rounded-2xl px-3.5 py-3 transition-colors ${
                      event.done ? "bg-muted/50" : "bg-secondary"
                    }`}
                  >
                    <button
                      onClick={() => toggleDone(event.id)}
                      aria-label={`${event.label} 완료`}
                      className={`grid h-6 w-6 flex-none place-items-center rounded-full border-2 transition-all ${
                        event.done ? "border-foreground bg-foreground" : "border-muted-foreground/40"
                      }`}
                    >
                      {event.done && <IconCheckRegular size={12} className="text-white" />}
                    </button>
                    <span
                      className={`min-w-0 flex-1 truncate text-sm font-semibold ${
                        event.done ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {event.label}
                    </span>
                    {event.done && (
                      <span className="flex-none rounded-full bg-foreground/8 px-2 py-0.5 text-[10px] font-bold text-foreground/50">
                        완료
                      </span>
                    )}
                    <span className="flex-none font-mono text-[11px] text-muted-foreground">
                      {event.time}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <button
                        onClick={() => openEventSheet(event)}
                        aria-label="수정"
                        className="grid h-8 w-8 place-items-center rounded-xl text-muted-foreground hover:bg-card"
                      >
                        <IconEditRegular size={14} />
                      </button>
                      <button
                        onClick={() =>
                          setSheet({
                            type: "delete",
                            collection: "event",
                            id: event.id,
                            label: event.label,
                          })
                        }
                        aria-label="삭제"
                        className="grid h-8 w-8 place-items-center rounded-xl text-muted-foreground hover:bg-card"
                      >
                        <IconTrashRegular size={14} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ── Budget ───────────────────────────────────────────────────────── */}
      {tab === "budget" && (
        <section className="mx-5 mt-4 rounded-[26px] border border-border bg-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">BUDGET OVERVIEW</p>
              <h2 className="mt-1 text-base font-bold">예산현황</h2>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <div
              className="h-28 w-28 flex-none rounded-full"
              style={{
                background: `conic-gradient(var(--foreground) ${percentage * 3.6}deg, var(--secondary) 0deg)`,
              }}
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-card">
                  <span className="font-mono text-[18px] font-bold leading-none">{percentage}%</span>
                  <span className="mt-0.5 text-[9px] text-muted-foreground">사용</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <p className="text-base font-bold text-foreground">총 예산 {total.toLocaleString()}만원</p>
              <p className="text-sm text-muted-foreground">{spentTotal.toLocaleString()}만원 사용</p>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="h-2 w-2 flex-none rounded-full border border-border bg-secondary" />
                <span className="text-xs text-muted-foreground">
                  잔여 {(total - spentTotal).toLocaleString()}만원
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-5 border-t border-border pt-5">
            {budgets.map((b) => {
              const pct = b.budget ? Math.min(100, Math.round((b.spent / b.budget) * 100)) : 0;
              return (
                <li key={b.id}>
                  <div className="mb-2 flex items-center gap-1">
                    <span className="flex-1 text-sm font-semibold text-foreground">{b.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {b.spent.toLocaleString()} / {b.budget.toLocaleString()}만
                    </span>
                    <button
                      onClick={() => openBudgetSheet(b)}
                      aria-label="수정"
                      className="ml-1 grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-secondary"
                    >
                      <IconEditRegular size={14} />
                    </button>
                    <button
                      onClick={() =>
                        setSheet({ type: "delete", collection: "budget", id: b.id, label: b.label })
                      }
                      aria-label="삭제"
                      className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-secondary"
                    >
                      <IconTrashRegular size={14} />
                    </button>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-foreground transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between">
                    <span className="text-[10px] text-muted-foreground">
                      {b.spent > 0 ? `${b.spent.toLocaleString()}만원 집행` : "미집행"}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-foreground">{pct}%</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* ── Consult ──────────────────────────────────────────────────────── */}
      {tab === "consult" && (
        <section className="mx-5 mt-4 rounded-[26px] border border-border bg-card p-5">
          <div>
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">CONSULTATION</p>
            <h2 className="mt-1 text-base font-bold">상담기록</h2>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*,.m4a,.mp3,.wav,.aac,.ogg"
            className="hidden"
            onChange={handleFileSelect}
          />

          {consults.length === 0 ? (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-5 flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border/80 py-8 text-muted-foreground transition-colors hover:bg-secondary"
            >
              <IconMicRegular size={20} />
              <span className="text-sm">녹음 파일을 선택해 주세요</span>
              <span className="text-xs">스마트폰 녹음앱에서 저장한 파일을 올릴 수 있어요</span>
            </button>
          ) : (
            <ul className="mt-1 border-t border-border">
              {consults.map((c) => (
                <li key={c.id} className="border-b border-border/50 last:border-0">
                  <button
                    onClick={() => (c.status === "done" ? openConsultDetail(c) : undefined)}
                    disabled={c.status !== "done"}
                    className="flex w-full items-center gap-3 py-4 text-left disabled:cursor-default"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">{c.vendorName}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {c.date}
                        {c.amount > 0 ? ` · ${c.amount.toLocaleString()}만원` : ""}
                      </p>
                    </div>
                    <span
                      className={`flex-none text-xs ${
                        c.confirmed
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {statusLabel(c)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── FAB ──────────────────────────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-x-0 bottom-[80px] z-40 mx-auto max-w-[430px]">
        <button
          onClick={handleFAB}
          className="pointer-events-auto absolute bottom-0 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25 transition-transform active:scale-95"
          aria-label={
            tab === "calendar" ? "일정 추가" : tab === "budget" ? "예산 추가" : "녹음 파일 추가"
          }
        >
          <IconAddRegular size={24} className="text-white" />
        </button>
      </div>

      {/* ── Analysis detail bottom sheet ─────────────────────────────────── */}
      {consultDetail && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-foreground/40"
          onClick={() => setConsultDetail(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex max-h-[88vh] w-full max-w-[430px] flex-col rounded-t-[30px] bg-background"
          >
            <div className="flex-none px-5 pb-2 pt-4">
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />

              {!consultDetail.confirmed && (
                <div className="mb-4 rounded-xl bg-secondary px-4 py-3">
                  <p className="text-xs text-muted-foreground">
                    AI가 상담 내용을 정리했어요. 확인 후 저장해 주세요.
                  </p>
                </div>
              )}

              {editMode ? (
                <div className="space-y-2">
                  <input
                    value={editDraft.vendorName}
                    onChange={(e) => setEditDraft({ ...editDraft, vendorName: e.target.value })}
                    placeholder="업체명"
                    className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      value={editDraft.date}
                      onChange={(e) => setEditDraft({ ...editDraft, date: e.target.value })}
                      placeholder="날짜 (예: 9월 14일)"
                      className="h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none placeholder:text-muted-foreground"
                    />
                    <div className="relative">
                      <input
                        type="number"
                        value={editDraft.amount}
                        onChange={(e) => setEditDraft({ ...editDraft, amount: e.target.value })}
                        placeholder="금액"
                        className="h-11 w-full rounded-xl border border-border bg-secondary px-4 pr-8 text-sm outline-none placeholder:text-muted-foreground"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        만원
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-lg font-bold">{consultDetail.vendorName}</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {consultDetail.date} · {consultDetail.amount.toLocaleString()}만원
                  </p>
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-2">
              {consultDetail.analysis && (
                <div className="space-y-4 pb-2">
                  {consultDetail.analysis.included && consultDetail.analysis.included.length > 0 && (
                    <AnalysisSection title="포함">
                      {consultDetail.analysis.included.map((item, i) => (
                        <p key={i} className="text-sm text-foreground">{item}</p>
                      ))}
                    </AnalysisSection>
                  )}
                  {consultDetail.analysis.extras && consultDetail.analysis.extras.length > 0 && (
                    <AnalysisSection title="추가 비용">
                      {consultDetail.analysis.extras.map((ex, i) => (
                        <div key={i} className="flex items-baseline justify-between">
                          <span className="text-sm text-foreground">{ex.item}</span>
                          <span className="font-mono text-xs text-muted-foreground">{ex.amount}</span>
                        </div>
                      ))}
                    </AnalysisSection>
                  )}
                  {(consultDetail.analysis.scheduleCondition || consultDetail.analysis.changeCondition) && (
                    <AnalysisSection title="상담 조건">
                      {consultDetail.analysis.scheduleCondition && (
                        <AnalysisRow label="일정·예약" value={consultDetail.analysis.scheduleCondition} />
                      )}
                      {consultDetail.analysis.changeCondition && (
                        <AnalysisRow label="변경" value={consultDetail.analysis.changeCondition} />
                      )}
                    </AnalysisSection>
                  )}
                  {consultDetail.analysis.cancellation && (
                    <AnalysisSection title="취소·환불">
                      <p className="text-sm text-foreground">{consultDetail.analysis.cancellation}</p>
                    </AnalysisSection>
                  )}
                  {consultDetail.analysis.uncertain && consultDetail.analysis.uncertain.length > 0 && (
                    <AnalysisSection title="확인 필요">
                      {consultDetail.analysis.uncertain.map((item, i) => (
                        <p key={i} className="text-sm text-foreground">{item}</p>
                      ))}
                    </AnalysisSection>
                  )}
                </div>
              )}
            </div>

            <div className="flex-none border-t border-border px-5 pb-10 pt-4">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setEditMode((v) => !v)}
                  className={`h-[52px] rounded-2xl border border-border text-sm font-bold transition-colors ${
                    editMode ? "bg-secondary" : "bg-card"
                  }`}
                >
                  수정
                </button>
                <button
                  onClick={saveConsult}
                  className="h-[52px] rounded-2xl bg-primary text-sm font-bold text-white"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Calendar / Budget bottom sheet ───────────────────────────────── */}
      {sheet && (
        <div className="fixed inset-0 z-50 flex items-end bg-foreground/40" onClick={() => setSheet(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto w-full max-w-[430px] rounded-t-[30px] bg-background px-5 pb-10 pt-4"
          >
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-border" />

            {sheet.type === "delete" ? (
              <>
                <h2 className="font-display text-2xl font-bold">삭제할까요?</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  "{sheet.label}" 항목을 삭제합니다.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSheet(null)}
                    className="h-[52px] rounded-2xl border border-border bg-card text-sm font-bold"
                  >
                    취소
                  </button>
                  <button
                    onClick={remove}
                    className="h-[52px] rounded-2xl bg-foreground text-sm font-bold text-white"
                  >
                    삭제하기
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold">
                    {sheet.id === "new"
                      ? sheet.type === "event"
                        ? "일정 추가"
                        : "예산 추가"
                      : "수정하기"}
                  </h2>
                  <button
                    onClick={() => setSheet(null)}
                    aria-label="닫기"
                    className="grid h-9 w-9 place-items-center rounded-full bg-secondary"
                  >
                    <IconCloseRegular size={16} />
                  </button>
                </div>

                {sheet.type === "budget" && sheet.id === "new" && (
                  <div className="mb-5 overflow-hidden rounded-2xl bg-foreground">
                    <div className="px-4 py-3.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-white/10">
                          <IconCheckFlowerFill size={16} className="text-white" />
                        </span>
                        <div className="flex-1">
                          <p className="text-[13px] font-bold text-white">실제 금액을 인증해볼까요?</p>
                          <p className="mt-0.5 text-[11px] leading-5 text-white/60">
                            영수증·계약서를 인증하면 가격 정보가 자동으로 반영돼요
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => { setSheet(null); navigate("/contract-verify"); }}
                        className="mt-3 flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white active:bg-white/20"
                      >
                        <span>가격 제보하기</span>
                        <IconArrowRegular size={14} className="text-white" />
                      </button>
                    </div>
                  </div>
                )}

                <input
                  value={draft.label}
                  onChange={(e) => setDraft({ ...draft, label: e.target.value })}
                  placeholder={sheet.type === "event" ? "일정 이름" : "항목 이름 (예: 드레스)"}
                  className="h-12 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none placeholder:text-muted-foreground"
                />

                {sheet.type === "event" ? (
                  <input
                    type="time"
                    value={draft.time}
                    onChange={(e) => setDraft({ ...draft, time: e.target.value })}
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none"
                  />
                ) : (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        type="number"
                        value={draft.budget}
                        onChange={(e) => setDraft({ ...draft, budget: e.target.value })}
                        placeholder="예산"
                        className="h-12 w-full rounded-xl border border-border bg-secondary px-4 pr-8 text-sm outline-none placeholder:text-muted-foreground"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">만</span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        value={draft.spent}
                        onChange={(e) => setDraft({ ...draft, spent: e.target.value })}
                        placeholder="사용액"
                        className="h-12 w-full rounded-xl border border-border bg-secondary px-4 pr-8 text-sm outline-none placeholder:text-muted-foreground"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">만</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={save}
                  className="mt-5 h-[52px] w-full rounded-2xl bg-primary text-sm font-bold text-white"
                >
                  {sheet.id === "new" ? "추가하기" : "저장하기"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Helper components ─────────────────────────────────────────────────────────

function AnalysisSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="space-y-2 rounded-2xl bg-secondary px-4 py-3">{children}</div>
    </div>
  );
}

function AnalysisRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="flex-none pt-0.5 text-xs text-muted-foreground">{label}</span>
      <span className="text-right text-sm text-foreground">{value}</span>
    </div>
  );
}
