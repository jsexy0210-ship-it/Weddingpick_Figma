import { useState } from "react";
import {
  ArrowRight, BadgeCheck, CalendarDays, Check, ChevronLeft, ChevronRight,
  Pencil, Plus, Trash2, X,
} from "lucide-react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type BudgetItem = { id: number; label: string; budget: number; spent: number };
type CalEvent = { id: number; day: number; label: string; time: string; done: boolean };
type Sheet =
  | { type: "event" | "budget"; id: number | "new" }
  | { type: "delete"; collection: "event" | "budget"; id: number; label: string }
  | null;

const MONTHS = [
  { label: "2026년 9월", value: "2026-09", days: 30, blank: 2 },
  { label: "2026년 10월", value: "2026-10", days: 31, blank: 4 },
  { label: "2026년 11월", value: "2026-11", days: 30, blank: 0 },
];

export function OurWedding() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"calendar" | "budget">("calendar");
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

  const total = budgets.reduce((s, b) => s + b.budget, 0);
  const spentTotal = budgets.reduce((s, b) => s + b.spent, 0);
  const percentage = total ? Math.round((spentTotal / total) * 100) : 0;
  const month = MONTHS[monthIndex];
  const dayEvents = events.filter((e) => e.day === day);

  const openEventSheet = (event?: CalEvent) => {
    setDraft(event
      ? { label: event.label, time: event.time, budget: "", spent: "" }
      : { label: "", time: "12:00", budget: "", spent: "" }
    );
    setSheet({ type: "event", id: event?.id ?? "new" });
  };

  const openBudgetSheet = (item?: BudgetItem) => {
    setDraft(item
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
          : items.map((e) => e.id === sheet.id ? { ...e, label: draft.label, time: draft.time } : e)
      );
    } else {
      setBudgets((items) =>
        isNew
          ? [...items, { id: Date.now(), label: draft.label, budget: Number(draft.budget), spent: Number(draft.spent) }]
          : items.map((b) => b.id === sheet.id ? { ...b, label: draft.label, budget: Number(draft.budget), spent: Number(draft.spent) } : b)
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
    setEvents((items) => items.map((e) => e.id === id ? { ...e, done: !e.done } : e));
    toast.success(event.done ? "완료를 취소했어요." : "완료했어요.");
  };

  const selectDate = (d: number) => {
    setDay(d);
    if (!events.some((e) => e.day === d)) openEventSheet();
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <header className="px-5 pb-5 pt-6">
        <h1 className="font-display text-[28px] font-bold">우리웨딩</h1>
      </header>

      {/* Tab nav */}
      <nav className="mx-5 grid grid-cols-2 rounded-2xl bg-secondary p-1">
        {(["calendar", "budget"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`h-11 rounded-xl text-sm font-bold transition-colors ${
              tab === key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            {key === "calendar" ? "캘린더" : "예산현황"}
          </button>
        ))}
      </nav>

      {/* ── Calendar ── */}
      {tab === "calendar" && (
        <section className="mx-5 mt-4 rounded-[26px] border border-border bg-card p-5">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">OUR CALENDAR</p>
              <h2 className="mt-1 font-display text-2xl font-bold">{month.label}</h2>
            </div>
            <button
              onClick={() => openEventSheet()}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-foreground px-4 text-xs font-bold text-white"
            >
              <Plus className="h-3.5 w-3.5" />일정 추가
            </button>
          </div>

          {/* Month nav */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setMonthIndex((i) => Math.max(0, i - 1))}
              disabled={monthIndex === 0}
              aria-label="이전 달"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary disabled:opacity-25"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="text-[11px] text-muted-foreground">빈 날짜를 누르면 일정을 바로 추가해요</p>
            <button
              onClick={() => setMonthIndex((i) => Math.min(MONTHS.length - 1, i + 1))}
              disabled={monthIndex === MONTHS.length - 1}
              aria-label="다음 달"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary disabled:opacity-25"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Weekday labels */}
          <div className="mt-4 grid grid-cols-7 text-center text-[10px] font-semibold text-muted-foreground">
            {"일월화수목금토".split("").map((l) => <span key={l}>{l}</span>)}
          </div>

          {/* Date grid */}
          <div className="mt-2 grid grid-cols-7">
            {Array.from({ length: month.blank }, (_, i) => <i key={`b${i}`} />)}
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
                        isSelected ? "bg-white" : "bg-primary"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Event list for selected day */}
          <div className="mt-5 border-t border-border pt-4">
            {dayEvents.length === 0 ? (
              <button
                onClick={() => openEventSheet()}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border/80 py-5 text-sm text-muted-foreground transition-colors hover:bg-secondary"
              >
                <CalendarDays className="h-4 w-4" />
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
                    {/* Check circle */}
                    <button
                      onClick={() => toggleDone(event.id)}
                      aria-label={`${event.label} 완료`}
                      className={`grid h-6 w-6 flex-none place-items-center rounded-full border-2 transition-all ${
                        event.done ? "border-foreground bg-foreground" : "border-muted-foreground/40"
                      }`}
                    >
                      {event.done && <Check className="h-3.5 w-3.5 text-white" />}
                    </button>

                    {/* Label */}
                    <span
                      className={`min-w-0 flex-1 truncate text-sm font-semibold ${
                        event.done ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {event.label}
                    </span>

                    {/* Done badge */}
                    {event.done && (
                      <span className="flex-none rounded-full bg-foreground/8 px-2 py-0.5 text-[10px] font-bold text-foreground/50">
                        완료
                      </span>
                    )}

                    {/* Time */}
                    <span className="flex-none font-mono text-[11px] text-muted-foreground">
                      {event.time}
                    </span>

                    {/* Actions */}
                    <div className="flex items-center gap-0.5">
                      <button
                        onClick={() => openEventSheet(event)}
                        aria-label="수정"
                        className="grid h-8 w-8 place-items-center rounded-xl text-muted-foreground hover:bg-card"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() =>
                          setSheet({ type: "delete", collection: "event", id: event.id, label: event.label })
                        }
                        aria-label="삭제"
                        className="grid h-8 w-8 place-items-center rounded-xl text-muted-foreground hover:bg-card"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ── Budget ── */}
      {tab === "budget" && (
        <section className="mx-5 mt-4 rounded-[26px] border border-border bg-card p-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground">BUDGET OVERVIEW</p>
              <h2 className="mt-1 text-base font-bold">예산현황</h2>
            </div>
            <button
              onClick={() => openBudgetSheet()}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-foreground px-4 text-xs font-bold text-white"
            >
              <Plus className="h-3.5 w-3.5" />예산추가
            </button>
          </div>

          {/* Donut + summary */}
          <div className="mt-6 flex items-center gap-5">
            {/* Donut chart — nested flex centers the inner circle */}
            <div
              className="h-28 w-28 flex-none rounded-full"
              style={{ background: `conic-gradient(var(--foreground) ${percentage * 3.6}deg, var(--secondary) 0deg)` }}
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-card">
                  <span className="font-mono text-[18px] font-bold leading-none">{percentage}%</span>
                  <span className="mt-0.5 text-[9px] text-muted-foreground">사용</span>
                </div>
              </div>
            </div>

            {/* Text summary */}
            <div className="space-y-1.5">
              <p className="text-base font-bold text-foreground">총 예산 {total.toLocaleString()}만원</p>
              <p className="text-sm text-muted-foreground">{spentTotal.toLocaleString()}만원 사용</p>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="h-2 w-2 flex-none rounded-full border border-border bg-secondary" />
                <span className="text-xs text-muted-foreground">잔여 {(total - spentTotal).toLocaleString()}만원</span>
              </div>
            </div>
          </div>

          {/* Budget rows */}
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
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() =>
                        setSheet({ type: "delete", collection: "budget", id: b.id, label: b.label })
                      }
                      aria-label="삭제"
                      className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-secondary"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
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

      {/* ── Bottom sheet ── */}
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
                <p className="mt-2 text-sm leading-6 text-muted-foreground">"{sheet.label}" 항목을 삭제합니다.</p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button onClick={() => setSheet(null)} className="h-[52px] rounded-2xl border border-border bg-card text-sm font-bold">취소</button>
                  <button onClick={remove} className="h-[52px] rounded-2xl bg-primary text-sm font-bold text-white">삭제하기</button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold">
                    {sheet.id === "new" ? (sheet.type === "event" ? "일정 추가" : "예산 추가") : "수정하기"}
                  </h2>
                  <button onClick={() => setSheet(null)} aria-label="닫기" className="grid h-9 w-9 place-items-center rounded-full bg-secondary">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* 가격 제보 배너 — 신규 예산 추가 시에만 표시 */}
                {sheet.type === "budget" && sheet.id === "new" && (
                  <div className="mb-5 overflow-hidden rounded-2xl bg-foreground">
                    <div className="px-4 py-3.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full bg-white/10">
                          <BadgeCheck className="h-4 w-4 text-white" />
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
                        <ArrowRight className="h-3.5 w-3.5" />
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

                <button onClick={save} className="mt-5 h-[52px] w-full rounded-2xl bg-primary text-sm font-bold text-white">
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
