import { Outlet, NavLink, useLocation } from "react-router";
import { Home, Heart, Calendar, User, MessageCircle } from "lucide-react";
import { Toaster } from "sonner";

const NAV_ITEMS = [
  { path: "/", label: "홈", Icon: Home, exact: true },
  { path: "/our-wedding", label: "우리웨딩", Icon: Calendar, exact: false },
  { path: "/pick", label: "Pick", Icon: Heart, exact: false },
  { path: "/community", label: "커뮤니티", Icon: MessageCircle, exact: false },
  { path: "/my", label: "MY", Icon: User, exact: false },
];

export function Root() {
  const location = useLocation();
  const isFlowPage = ["/login", "/onboarding", "/search", "/explore", "/contract-verify"].includes(location.pathname) || location.pathname.startsWith("/vendor/");

  return (
    <div className="min-h-screen bg-muted flex justify-center items-start">
      <div className="relative w-full max-w-[430px] min-h-screen bg-background flex flex-col shadow-2xl">
        <Toaster position="top-center" richColors />
        <main className="flex-1 overflow-y-auto overflow-x-hidden" style={{ height: isFlowPage ? "100dvh" : "calc(100dvh - 72px)", scrollbarWidth: "none" }}>
          <Outlet />
        </main>

        {!isFlowPage && <nav className="fixed bottom-0 inset-x-0 max-w-[430px] mx-auto bg-card border-t border-border h-[72px] flex items-center px-2 z-50">
          {NAV_ITEMS.map(({ path, label, Icon, exact }) => {
            const isActive = exact
              ? location.pathname === "/"
              : location.pathname.startsWith(path);
            const isPickTab = path === "/pick";

            if (isPickTab) {
              return (
                <NavLink
                  key={path}
                  to={path}
                  className="flex-1 flex flex-col items-center justify-center gap-1"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-primary shadow-lg shadow-primary/30"
                        : "bg-secondary"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isActive ? "text-primary-foreground fill-primary-foreground" : "text-muted-foreground"
                      }`}
                    />
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
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </NavLink>
            );
          })}
        </nav>}
      </div>
    </div>
  );
}
