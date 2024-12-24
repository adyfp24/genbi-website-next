import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";

const manrope = localFont({
  src: "./fonts/manrope/Manrope-Regular.ttf",
  variable: "--font-manrope",
});

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
