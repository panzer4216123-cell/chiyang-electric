import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteDock } from "@/components/site-dock";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `住宅加梯｜${SITE.name}` },
      {
        name: "description",
        content: "舊透天、空間窄、地板不能大挖。電梯不好裝，啟揚就來裝；不好養，啟揚就來養。",
      },
      { name: "theme-color", content: "#f3eee4" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="zh-Hant-TW" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <a className="skip-link" href="#main">
            跳至主要內容
          </a>
          <SiteHeader />
          <Outlet />
          <SiteFooter />
          <SiteDock />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
