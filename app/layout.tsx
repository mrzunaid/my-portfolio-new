import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/header";
import Footer from "../components/footer";
import CustomCursor from "../components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description:
    "Personal portfolio showcasing my work and skills as a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
            <CustomCursor />
            <Header />
            <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
              <div className="snap-container">{children}</div>
            </main>

            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
