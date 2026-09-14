import { useState } from "react";
import {
  IconSignoutRegular,
  IconLockRegular,
  IconHelpcenterRegular,
  IconFileRegular,
  IconNotificationRegular,
  IconChevronRightRegular,
  IconInviteFriendRegular,
  IconHeartRegular,
  IconBookmarkListRegular,
  IconInfoRegular,
  IconMoneyWonRegular,
  IconListCheckRegular,
  IconCalendarRegular,
} from "@seed-design/icon";
import { toast } from "sonner";

const MAIN_ITEMS = [
  { Icon: IconHeartRegular, label: "관심 업체", count: "7" },
  { Icon: IconBookmarkListRegular, label: "저장한 웨딩 콘텐츠", count: "3" },
];

const SETTING_ITEMS = [
  { Icon: IconNotificationRegular, label: "앱 알림", toggle: true },
  { Icon: IconLockRegular, label: "개인정보 보호" },
  { Icon: IconFileRegular, label: "계정 설정" },
  { Icon: IconFileRegular, label: "서비스 이용약관" },
  { Icon: IconHelpcenterRegular, label: "고객센터" },
  { Icon: IconInfoRegular, label: "정보 제보하기" },
];

export function My() {
  const [notifOn, setNotifOn] = useState(true);

  return (
    <div className="pb-10">
      <div className="h-6" />

      {/* Header */}
      <header className="px-5 pb-5">
        <h1
          className="text-[26px] font-bold tracking-tight text-foreground"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          MY
        </h1>
      </header>

      {/* Profile Card */}
      <div className="mx-5 mb-4 rounded-[22px] border border-border bg-card p-5">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 ring-3 ring-background">
              <span className="text-xl font-bold text-primary">지</span>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 ring-3 ring-background">
              <span className="text-xl font-bold text-accent">준</span>
            </div>
          </div>
          <div>
            <p className="text-base font-bold text-foreground">김지수 & 이준혁</p>
            <p className="mt-0.5 text-sm text-muted-foreground">2027년 1월 15일 결혼 예정</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">함께 준비 중</span>
            </div>
          </div>
        </div>

        {/* Core Stats */}
        <div className="mt-4 grid grid-cols-3 divide-x divide-border border-t border-border pt-4 text-center">
          <div className="flex flex-col items-center gap-1 pr-2">
            <IconCalendarRegular size={14} className="text-muted-foreground" />
            <p className="text-lg font-bold leading-none text-foreground">D-127</p>
            <p className="text-[11px] font-medium text-muted-foreground">결혼 D-DAY</p>
          </div>
          <div className="flex flex-col items-center gap-1 px-2">
            <IconMoneyWonRegular size={14} className="text-muted-foreground" />
            <p className="text-lg font-bold leading-none text-foreground">2,100만</p>
            <p className="text-[11px] font-medium text-muted-foreground">예산 잔액</p>
          </div>
          <div className="flex flex-col items-center gap-1 pl-2">
            <IconListCheckRegular size={14} className="text-muted-foreground" />
            <p className="text-lg font-bold leading-none text-foreground">1 / 4</p>
            <p className="text-[11px] font-medium text-muted-foreground">업체 확정</p>
          </div>
        </div>
      </div>

      {/* Couple Invite */}
      <div className="mx-5 mb-4 rounded-[22px] border border-border bg-secondary p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">함께 준비하기</p>
            <p className="mt-0.5 text-xs text-muted-foreground">배우자를 초대해 같이 준비해요</p>
          </div>
          <button
            onClick={() => toast.success("초대 링크를 복사했어요.")}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-white"
          >
            <IconInviteFriendRegular size={14} />
            초대
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
            <span className="text-xs font-bold text-primary">지</span>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20">
            <span className="text-xs font-bold text-accent">준</span>
          </div>
          <span className="text-xs text-muted-foreground">이준혁 초대됨 · 2024.12.01</span>
        </div>
      </div>

      {/* 나의 활동 */}
      <div className="mx-5 mb-4">
        <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          나의 활동
        </p>
        <div className="overflow-hidden rounded-[22px] border border-border bg-card">
          {MAIN_ITEMS.map((item, idx) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-secondary/60 ${
                idx < MAIN_ITEMS.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <item.Icon size={16} className="flex-none text-muted-foreground" />
              <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
              <span className="mr-1 text-xs font-bold text-primary">{item.count}</span>
              <IconChevronRightRegular size={16} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>

      {/* 설정 (previously in gear bottom sheet) */}
      <div className="mx-5 mb-4">
        <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          설정
        </p>
        <div className="overflow-hidden rounded-[22px] border border-border bg-card">
          {SETTING_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className={`flex w-full items-center gap-3 px-4 py-3.5 ${
                idx < SETTING_ITEMS.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <item.Icon size={16} className="flex-none text-muted-foreground" />
              <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
              {item.toggle ? (
                <button
                  onClick={() => setNotifOn((v) => !v)}
                  className={`relative h-6 w-12 flex-none rounded-full transition-colors ${
                    notifOn ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${
                      notifOn ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              ) : (
                <IconChevronRightRegular size={16} className="text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 앱 정보 + 로그아웃 */}
      <div className="mx-5">
        <div className="overflow-hidden rounded-[22px] border border-border bg-card">
          <div className="flex items-center px-4 py-3.5 border-b border-border/50">
            <span className="flex-1 text-sm font-medium text-muted-foreground">앱 버전</span>
            <span className="font-mono text-xs text-muted-foreground">1.0.0</span>
          </div>
          <button
            onClick={() => toast.error("로그아웃 됐어요.")}
            className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-red-50"
          >
            <IconSignoutRegular size={16} className="flex-none text-red-500" />
            <span className="text-sm font-medium text-red-500">로그아웃</span>
          </button>
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          웨딩픽 · 결혼 준비의 시작
        </p>
      </div>
    </div>
  );
}
