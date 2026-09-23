import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinod Vardaram",
  description:
    "Vinod Vardaram, software engineer in Bangalore. Backend systems and open source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
