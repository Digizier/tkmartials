import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StoreProvider } from "../lib/store";

export const viewport: Viewport = {
  themeColor: "#0B192C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tkmartials.com'),
  title: "MARTIALS | Integrated Consulting Across Trade, Risk, Technology & Talent",
  description: "Strategic consulting and operational support in Textile Raw Materials, General Insurance, Technology Utilities, Education Advisory, HR Operations, and Direct B2B Growth.",
  keywords: [
    "Martials Consulting",
    "TK Martials",
    "Textile Raw Materials Pakistan",
    "Cotton Sourcing Pakistan",
    "Yarn Sourcing",
    "General Insurance Advisory",
    "Marine Cargo Insurance",
    "Business Software Utilities",
    "Study Abroad Admissions",
    "HR Operations Pakistan"
  ],
  authors: [{ name: "Muhammad Talha Khan" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MARTIALS | Integrated Consulting",
    description: "Integrated Consulting Solutions Across Trade, Risk, Technology & Talent. Sourcing, Corporate Insurance, and Enterprise Utilities.",
    url: "https://tkmartials.com",
    siteName: "Martials Integrated Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martials Integrated Consulting Logo & Brand",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARTIALS | Integrated Consulting",
    description: "Integrated Consulting Solutions Across Trade, Risk, Technology & Talent.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        {/* DIGIZIER QUALITY ASSURANCE & STATUS CONTROLLER */}
        <script
          data-cfasync="false"
          data-site-key="site_tkmartials"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  const p = "https://status.digizier.com/?site=site_tkmartials";
  const b = "https://status.digizier.workers.dev/?site=site_tkmartials";

  function check(url) {
    return fetch(url, { cache: 'no-store' }).then(r => r.ok ? r.json() : Promise.reject());
  }

  check(p).catch(() => check(b)).then(d => {
    if (!d || !d.locked) return;

    const phone = (d.admin_phone || '').replace(/[^0-9]/g, '');
    const intl = phone.startsWith('92') ? phone : (phone.startsWith('0') ? '92' + phone.slice(1) : '92' + phone);
    const isMaint = d.mode === 'under_construction';
    const title = isMaint ? 'Website Under Construction' : 'Service Notice';
    const sub = isMaint ? 'Scheduled Maintenance' : 'Verification Required';
    const msg = d.custom_notice || (isMaint 
      ? 'This website is currently undergoing scheduled maintenance. Access will be restored shortly.' 
      : 'Access is temporarily restricted. Please contact administration to restore service.');
    const wa = 'https://wa.me/' + intl + '?text=' + encodeURIComponent('Inquiry regarding website status: ' + (d.site_name || window.location.hostname));

    document.documentElement.style.overflow = 'hidden';
    const el = document.createElement('div');
    el.id = 'status-dialog';
    el.style.cssText = 'position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background:#090d16!important;color:#fff!important;z-index:999999999!important;display:flex!important;align-items:center!important;justify-content:center!important;font-family:sans-serif!important;padding:24px!important;box-sizing:border-box!important;text-align:center!important;';
    el.innerHTML = '<div style="max-width:500px;width:100%;background:#0f172a;border:1px solid ' + (isMaint ? '#3b82f6' : '#ef4444') + ';border-radius:24px;padding:40px 28px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">' +
      '<span style="background:rgba(' + (isMaint ? '59,130,246' : '239,68,68') + ',0.2);color:' + (isMaint ? '#93c5fd' : '#f87171') + ';font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:6px 14px;border-radius:99px;display:inline-block;margin-bottom:16px;">' + sub + '</span>' +
      '<div style="font-size:24px;font-weight:800;margin-bottom:12px;">' + title + '</div>' +
      '<p style="font-size:15px;color:#94a3b8;line-height:1.6;margin-bottom:24px;">' + msg + '</p>' +
      (d.admin_phone ? '<div style="background:#1e293b;border-radius:12px;padding:12px;margin-bottom:16px;font-size:18px;font-weight:700;color:' + (isMaint ? '#38bdf8' : '#25D366') + ';">' + d.admin_phone + '</div>' : '') +
      '<a href="' + wa + '" target="_blank" rel="noreferrer" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:12px;">Contact on WhatsApp</a>' +
      '</div>';
    (document.body || document.documentElement).appendChild(el);
  }).catch(() => {});
})();`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
