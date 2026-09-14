import { type FC } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import {
  IconHomeRegular,
  IconHomeFill,
  IconCalendarRegular,
  IconCalendarFill,
  IconHeartRegular,
  IconHeartFill,
  IconCommunityRegular,
  IconCommunityFill,
  IconProfileRegular,
  IconProfileFill,
} from "@seed-design/icon";
import { Toaster } from "sonner";

type NavItem = {
  path: string;
  label: string;
  IconInactive: FC<{ size?: number; className?: string }>;
  IconActive: FC<{ size?: number; className?: string }>;
  exact: boolean;
  isPick?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "홈", IconInactive: IconHomeRegular, IconActive: IconHomeFill, exact: true },
  { path: "/our-wedding", label: "웨딩노트", IconInactive: IconCalendarRegular, IconActive: IconCalendarFill, exact: false },
  { path: "/pick", label: "Pick", IconInactive: IconHeartRegular, IconActive: IconHeartFill, exact: false, isPick: true },
  { path: "/community", label: "라운지", IconInactive: IconCommunityRegular, IconActive: IconCommunityFill, exact: false },
  { path: "/my", label: "MY", IconInactive: IconProfileRegular, IconActive: IconProfileFill, exact: false },
];

export function Root() {
  const location = useLocation();
  const isFlowPage =
    ["/login", "/onboarding", "/search", "/explore", "/contract-verify"].includes(location.pathname) ||
    location.pathname.startsWith("/vendor/");

  return (
    <div className="min-h-screen bg-muted flex justify-center items-start">
      <div className="relative w-full max-w-[430px] min-h-screen bg-background flex flex-col shadow-2xl">
        <Toaster position="top-center" richColors />
        <main
          className="flex-1 overflow-y-auto overflow-x-hidden"
          style={{ height: isFlowPage ? "100dvh" : "calc(100dvh - 72px)", scrollbarWidth: "none" }}
        >
          <Outlet />
        </main>

        {!isFlowPage && (
          <nav className="fixed bottom-0 inset-x-0 max-w-[430px] mx-auto bg-card border-t border-border h-[72px] flex items-center px-2 z-50">
            {NAV_ITEMS.map(({ path, label, IconInactive, IconActive, exact, isPick }) => {
              const isActive = exact
                ? location.pathname === "/"
                : location.pathname.startsWith(path);

              if (isPick) {
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className="flex-1 flex flex-col items-center justify-center gap-1"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        isActive ? "bg-primary shadow-lg shadow-primary/30" : "bg-secondary"
                      }`}
                    >
                      {isActive
                        ? <IconActive size={20} className="text-white" />
                        : <IconInactive size={20} className="text-muted-foreground" />
                      }
                    </div>
                    <span
                      className={`text-[10px] font-semibold tracking-wide transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </NavLink>
                );
              }

              return (
                <NavLink
                  key={path}
                  to={path}
                  end={exact}
                  className="flex-1 flex flex-col items-center justify-center gap-1 py-2"
                >
                  {isActive
                    ? <IconActive size={20} className="text-foreground" />
                    : <IconInactive size={20} className="text-muted-foreground" />
                  }
                  <span
                    className={`text-[10px] font-medium transition-colors ${
                      isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </NavLink>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}
