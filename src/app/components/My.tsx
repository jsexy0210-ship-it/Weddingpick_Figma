import { useState } from "react";
import { ChevronRight, Bell, Shield, FileText, HelpCircle, LogOut, Heart, Star, UserPlus, Settings } from "lucide-react";
import { useNavigate } from "react-router";

const MENU_SECTIONS = [
  {
    title: "활동",
    items: [
      { icon: Heart, label: "저장한 웨딩 콘텐츠", count: "3", path: "" },
      { icon: Star, label: "관심 업체", count: "7", path: "" },
    ],
  },
  {
    title: "설정",
    items: [
      { icon: Bell, label: "알림 설정", count: null, path: "" },
      { icon: Shield, label: "개인정보 보호", count: null, path: "" },
      { icon: Settings, label: "계정 설정", count: null, path: "" },
    ],
  },
  {
    title: "정보",
    items: [
      { icon: FileText, label: "정보 제보하기", count: null, path: "" },
      { icon: HelpCircle, label: "고객센터", count: null, path: "" },
      { icon: FileText, label: "서비스 이용약관", count: null, path: "" },
    ],
  },
];

export function My() {
  const [notifOn, setNotifOn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="pb-4">
      <div className="h-14" />

      {/* Header */}
      <div className="px-5 pb-5">
        <h1
          className="text-2xl font-bold text-foreground tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          MY
        </h1>
      </div>

      {/* Profile Card */}
      <div className="mx-5 mb-5 bg-card rounded-2xl border border-border p-5">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center ring-3 ring-background">
              <span className="text-xl font-bold text-primary">지</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center ring-3 ring-background">
              <span className="text-xl font-bold text-accent">준</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-foreground text-base">김지수 & 이준혁</p>
            <p className="text-sm text-muted-foreground mt-0.5">2027년 1월 15일 결혼 예정</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">함께 준비 중</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-2 text-center">
          {[
            { label: "D-DAY", value: "D-127" },
            { label: "Pick", value: "4" },
            { label: "완료 항목", value: "12" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-foreground text-lg leading-none">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Couple Invite */}
      <div className="mx-5 mb-5 p-4 rounded-2xl bg-secondary border border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">함께 준비하기</p>
            <p className="text-xs text-muted-foreground mt-0.5">배우자를 초대해 같이 준비해요</p>
          </div>
          <button className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-full">
            <UserPlus className="w-3.5 h-3.5" />
            초대
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">지</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-xs font-bold text-accent">준</span>
          </div>
          <span className="text-xs text-muted-foreground">이준혁 초대됨 · 2024.12.01</span>
        </div>
      </div>

      <button onClick={() => navigate("/community")} className="mx-5 mb-5 flex w-[calc(100%-2.5rem)] items-center justify-between rounded-2xl bg-foreground p-4 text-left text-white">
        <div><p className="text-sm font-bold">함께 준비하는 사람들의 기록</p><p className="mt-0.5 text-xs text-white/55">예산, 드레스, 일정에 도움되는 콘텐츠를 모았어요</p></div><ChevronRight className="h-5 w-5 text-[#E4B0A3]" />
      </button>

      {/* Quick Notif Toggle */}
      <div className="mx-5 mb-5 p-4 rounded-2xl bg-card border border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="w-4 h-4 text-foreground" />
          <div>
            <p className="text-sm font-semibold text-foreground">앱 알림</p>
            <p className="text-xs text-muted-foreground mt-0.5">새 콘텐츠, 프로모션, 일정 알림</p>
          </div>
        </div>
        <button
          onClick={() => setNotifOn((v) => !v)}
          className={`w-12 h-6 rounded-full relative transition-colors ${
            notifOn ? "bg-primary" : "bg-muted"
          }`}
        >
          <span
            className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${
              notifOn ? "left-7" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* Menu Sections */}
      <div className="px-5 space-y-4">
        {MENU_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">
              {section.title}
            </p>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {section.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-secondary/60 transition-colors text-left ${
                      idx < section.items.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground flex-none" />
                    <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                    {item.count && (
                      <span className="text-xs font-bold text-primary mr-1">{item.count}</span>
                    )}
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* App version + logout */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <button className="w-full flex items-center gap-3 px-4 py-3.5 text-left border-b border-border/50">
            <span className="flex-1 text-sm font-medium text-muted-foreground">앱 버전</span>
            <span className="text-xs font-mono text-muted-foreground">1.0.0</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-red-50 transition-colors text-left">
            <LogOut className="w-4 h-4 text-red-500 flex-none" />
            <span className="text-sm font-medium text-red-500">로그아웃</span>
          </button>
        </div>

        <p className="text-center text-[11px] text-muted-foreground pb-2">
          웨딩픽 · 결혼 준비의 시작
        </p>
      </div>
    </div>
  );
}
