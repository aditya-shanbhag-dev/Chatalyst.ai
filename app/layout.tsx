import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chatalyst.ai",
  description: "Talk to your data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadcn
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className="h-screen flex flex-col mx-auto">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
