import { useState } from "react";
import {
  IconChevronRightRegular,
  IconSignoutRegular,
  IconLockRegular,
  IconHelpcenterRegular,
  IconFileRegular,
  IconNotificationRegular,
  IconInfoRegular,
  IconCheckFlowerRegular,
  IconBookmarkListRegular,
  IconWriteRegular,
  IconUserGroupRegular,
  IconReportRegular,
} from "@seed-design/icon";
import { toast } from "sonner";

type Row = {
  label: string;
  Icon: React.FC<{ size?: number; className?: string }>;
  count?: string;
  toggle?: boolean;
};

type Section = {
  title: string;
  rows: Row[];
};

export function My() {
  const [notifOn, setNotifOn] = useState(true);

  const SECTIONS: Section[] = [
    {
      title: "내 활동",
      rows: [
        { label: "Pick 인증 내역", Icon: IconCheckFlowerRegular },
        { label: "내가 쓴 후기", Icon: IconWriteRegular },
        { label: "저장한 웨딩 콘텐츠", Icon: IconBookmarkListRegular, count: "3" },
      ],
    },
    {
      title: "함께 준비하기",
      rows: [
        { label: "연결 관리", Icon: IconUserGroupRegular },
      ],
    },
    {
      title: "설정",
      rows: [
        { label: "알림 설정", Icon: IconNotificationRegular, toggle: true },
        { label: "개인정보 보호", Icon: IconLockRegular },
        { label: "계정 설정", Icon: IconFileRegular },
      ],
    },
    {
      title: "고객지원",
      rows: [
        { label: "정보 제보하기", Icon: IconInfoRegular },
        { label: "문의하기", Icon: IconHelpcenterRegular },
        { label: "신고 내역", Icon: IconReportRegular },
        { label: "업체 반론", Icon: IconFileRegular },
      ],
    },
    {
      title: "서비스",
      rows: [
        { label: "이용약관", Icon: IconFileRegular },
        { label: "개인정보처리방침", Icon: IconFileRegular },
      ],
    },
  ];

  return (
    <div className="pb-12">
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

      {/* 프로필 */}
      <div className="mx-5 mb-6">
        <div className="overflow-hidden rounded-[22px] border border-border bg-card">
          <div className="px-5 py-4">
            <p className="text-base font-bold text-foreground">김지수</p>
            <p className="mt-0.5 text-sm text-muted-foreground">2027년 1월 15일 결혼 예정</p>
          </div>
          <button className="flex w-full items-center gap-3 border-t border-border/60 px-5 py-3.5 text-left transition-colors hover:bg-secondary/60">
            <span className="flex-1 text-sm font-medium text-foreground">내 웨딩 설정</span>
            <IconChevronRightRegular size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Sections */}
      {SECTIONS.map((section) => (
        <div key={section.title} className="mx-5 mb-6">
          <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            {section.title}
          </p>
          <div className="overflow-hidden rounded-[22px] border border-border bg-card">
            {section.rows.map((row, idx) => (
              <div
                key={row.label}
                className={`flex items-center gap-3 px-4 py-3.5 ${
                  idx < section.rows.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <row.Icon size={16} className="flex-none text-muted-foreground" />
                <span className="flex-1 text-sm font-medium text-foreground">{row.label}</span>
                {row.count && (
                  <span className="mr-1 text-xs font-bold text-primary">{row.count}</span>
                )}
                {row.toggle ? (
                  <button
                    onClick={() => setNotifOn((v) => !v)}
                    aria-label={notifOn ? "알림 끄기" : "알림 켜기"}
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
      ))}

      {/* 앱 버전 */}
      <div className="mx-5 mb-2">
        <div className="overflow-hidden rounded-[22px] border border-border bg-card">
          <div className="flex items-center px-4 py-3.5">
            <span className="flex-1 text-sm text-muted-foreground">앱 버전</span>
            <span className="font-mono text-xs text-muted-foreground">1.0.0</span>
          </div>
        </div>
      </div>

      {/* 로그아웃 — 잘 안 보이게 */}
      <div className="mx-5 mt-3 flex justify-center">
        <button
          onClick={() => toast.error("로그아웃 됐어요.")}
          className="text-xs text-muted-foreground/60 underline underline-offset-2 transition-colors hover:text-muted-foreground"
        >
          <IconSignoutRegular size={12} className="mr-1 inline-block align-middle" />
          로그아웃
        </button>
      </div>
      <p className="mt-4 text-center text-[11px] text-muted-foreground/50">
        웨딩픽 · 결혼 준비의 시작
      </p>
    </div>
  );
}
