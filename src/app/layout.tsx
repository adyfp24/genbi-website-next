import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";
import { Suspense } from "react";

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
      <head>
        <title>GenBI Jember</title>
        <meta name="description" content="GenBI Jember" />
        <link rel="icon" href="/images/GenBI-logo.png" type="image/png"/>
      </head>
      <body
        className={`${manrope.variable} antialiased`}
      >
        <AppProvider>
          {/* <Suspense fallback={<>Loading...</>}> */}
            {children}
          {/* </Suspense> */}
        </AppProvider>
      </body>
    </html>
  );
}
