import { useState } from "react";
import { ChevronDown, ChevronRight, Check, Plus, CalendarDays } from "lucide-react";
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const BUDGET_ITEMS = [
  { label: "웨딩홀", budget: 1000, spent: 1000, color: "var(--primary)" },
  { label: "스튜디오", budget: 200, spent: 0, color: "var(--accent)" },
  { label: "드레스", budget: 400, spent: 0, color: "#6B8F71" },
  { label: "메이크업", budget: 150, spent: 0, color: "#8B7BAD" },
  { label: "스냅", budget: 180, spent: 0, color: "#C9A96E" },
  { label: "기타", budget: 70, spent: 70, color: "#9A8680" },
];

const SCHEDULE = [
  { date: "1.12 (화)", label: "드레스 피팅", dDay: "D-3", urgent: true },
  { date: "1.18 (월)", label: "스튜디오 상담", dDay: "D-9", urgent: false },
  { date: "1.25 (월)", label: "청첩장 인쇄", dDay: "D-16", urgent: false },
  { date: "2.01 (일)", label: "메이크업 리허설", dDay: "D-23", urgent: false },
];

const CHECKLIST = [
  {
    category: "웨딩홀",
    emoji: "🏛️",
    items: [
      { label: "웨딩홀 예약", done: true },
      { label: "계약금 납부", done: true },
      { label: "식사 메뉴 확정", done: false },
      { label: "좌석 배치 계획", done: false },
    ],
  },
  {
    category: "스튜디오",
    emoji: "📷",
    items: [
      { label: "스튜디오 3곳 비교", done: true },
      { label: "스튜디오 예약 확정", done: false },
      { label: "의상 컨셉 협의", done: false },
    ],
  },
  {
    category: "드레스",
    emoji: "👗",
    items: [
      { label: "드레스 샵 방문 예약", done: true },
      { label: "드레스 1차 피팅", done: false },
      { label: "드레스 최종 선택", done: false },
      { label: "계약 및 결제", done: false },
    ],
  },
  {
    category: "청첩장",
    emoji: "✉️",
    items: [
      { label: "청첩장 디자인 선택", done: true },
      { label: "내용 교정", done: true },
      { label: "인쇄 발주", done: false },
    ],
  },
];

export function OurWedding() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["스튜디오"]);
  const [checkItems, setCheckItems] = useState(() =>
    CHECKLIST.flatMap((cat) =>
      cat.items.map((item) => ({ key: `${cat.category}-${item.label}`, done: item.done }))
    )
  );

  const totalBudget = BUDGET_ITEMS.reduce((a, b) => a + b.budget, 0);
  const totalSpent = BUDGET_ITEMS.reduce((a, b) => a + b.spent, 0);
  const budgetPct = Math.round((totalSpent / totalBudget) * 100);

  const allItems = CHECKLIST.flatMap((c) => c.items).length;
  const doneItems = checkItems.filter((i) => i.done).length;
  const checkPct = Math.round((doneItems / allItems) * 100);

  const toggleCategory = (cat: string) =>
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleCheck = (key: string) =>
    setCheckItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, done: !i.done } : i))
    );

  const isItemDone = (cat: string, label: string) =>
    checkItems.find((i) => i.key === `${cat}-${label}`)?.done ?? false;

  return (
    <div className="pb-4">
      <div className="h-14" />

      {/* Header */}
      <div className="px-5 pb-5">
        <h1
          className="text-2xl font-bold text-foreground tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          우리웨딩
        </h1>
      </div>

      {/* D-day + Date */}
      <div className="mx-5 mb-5 rounded-2xl bg-foreground p-5 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.04]" />
        <div className="flex items-center justify-between relative">
          <div>
            <p className="text-white/40 text-[10px] tracking-widest uppercase font-mono mb-1">
              Wedding Day
            </p>
            <span
              className="text-5xl font-bold text-white leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              D-127
            </span>
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm font-semibold">2027년 1월 15일</p>
            <p className="text-white/40 text-xs mt-0.5">금요일</p>
            <p className="text-white/40 text-xs mt-1">서울 그랜드 워커힐</p>
          </div>
        </div>
      </div>

      {/* Budget visualization */}
      <div className="mx-5 mb-5 bg-card rounded-2xl border border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground text-sm">예산 현황</h2>
          <span className="text-xs text-muted-foreground font-mono">
            {totalSpent.toLocaleString()}만 / {totalBudget.toLocaleString()}만원
          </span>
        </div>

        <div className="grid grid-cols-[120px_1fr] items-center gap-3">
          <div className="relative h-28"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={[{ name: "사용", value: totalSpent }, { name: "잔여", value: totalBudget - totalSpent }]} dataKey="value" innerRadius={35} outerRadius={50} startAngle={90} endAngle={-270} stroke="none"><Cell key="spent" fill="var(--primary)" /><Cell key="remaining" fill="var(--secondary)" /></Pie></PieChart></ResponsiveContainer><div className="absolute inset-0 grid place-items-center text-center"><span className="font-mono text-sm font-bold text-foreground">{budgetPct}%</span></div></div>
          <div><p className="text-sm font-bold text-foreground">{totalSpent.toLocaleString()}만원 사용</p><p className="mt-1 text-xs leading-5 text-muted-foreground">전체 예산의 {budgetPct}%를 사용했어요.<br />잔여 {(totalBudget - totalSpent).toLocaleString()}만원</p></div>
        </div>
        <div className="mt-4 h-[128px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={BUDGET_ITEMS} barGap={3}><XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} /><Tooltip cursor={{ fill: "var(--secondary)" }} contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} formatter={(value) => `${value}만원`} /><Bar dataKey="budget" fill="var(--secondary)" radius={[4, 4, 0, 0]} /><Bar dataKey="spent" fill="var(--primary)" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div>
        <div className="mt-2 flex items-center justify-end gap-3 text-[10px] text-muted-foreground"><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-secondary" />예산</span><span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-primary" />사용</span></div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {BUDGET_ITEMS.slice(0, 4).map((item) => <div key={item.label} className="rounded-xl bg-secondary/70 px-3 py-2"><p className="text-[10px] text-muted-foreground">{item.label}</p><p className="mt-0.5 font-mono text-xs font-medium text-foreground">{item.spent || 0} / {item.budget}만</p></div>)}
        </div>
      </div>

      {/* Schedule */}
      <div className="mx-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-foreground text-sm flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary" />
            다가오는 일정
          </h2>
          <button className="text-xs text-primary font-semibold flex items-center gap-0.5">
            전체보기 <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-2">
          {SCHEDULE.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 p-3.5 rounded-2xl border ${
                item.urgent
                  ? "bg-red-50 border-red-200/70"
                  : "bg-card border-border"
              }`}
            >
              <div
                className={`text-[10px] font-bold font-mono px-2.5 py-1.5 rounded-lg min-w-[44px] text-center ${
                  item.urgent ? "bg-red-500 text-white" : "bg-secondary text-muted-foreground"
                }`}
              >
                {item.dDay}
              </div>
              <div>
                <p className={`text-sm font-semibold ${item.urgent ? "text-red-900" : "text-foreground"}`}>
                  {item.label}
                </p>
                <p className={`text-xs mt-0.5 ${item.urgent ? "text-red-500" : "text-muted-foreground"}`}>
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="mx-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-foreground text-sm">체크리스트</h2>
          <span className="text-xs font-semibold text-primary">{doneItems}/{allItems} 완료 ({checkPct}%)</span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-secondary rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${checkPct}%` }}
          />
        </div>

        <div className="space-y-2">
          {CHECKLIST.map((cat) => {
            const isExpanded = expandedCategories.includes(cat.category);
            const catDone = cat.items.filter((item) => isItemDone(cat.category, item.label)).length;
            return (
              <div key={cat.category} className="bg-card rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => toggleCategory(cat.category)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{cat.emoji}</span>
                    <span className="font-semibold text-foreground text-sm">{cat.category}</span>
                    <span className="text-xs text-muted-foreground">
                      {catDone}/{cat.items.length}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="border-t border-border">
                    {cat.items.map((item) => {
                      const done = isItemDone(cat.category, item.label);
                      return (
                        <button
                          key={item.label}
                          onClick={() => toggleCheck(`${cat.category}-${item.label}`)}
                          className="w-full flex items-center gap-3 px-4 py-3 border-b border-border/50 last:border-0 hover:bg-secondary/50 transition-colors"
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-none transition-all ${
                              done
                                ? "bg-primary border-primary"
                                : "border-border"
                            }`}
                          >
                            {done && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span
                            className={`text-sm transition-colors ${
                              done ? "text-muted-foreground line-through" : "text-foreground"
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary transition-colors">
                      <Plus className="w-4 h-4" />
                      <span className="text-sm">항목 추가</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
