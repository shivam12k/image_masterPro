import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "ImageMaster Pro+",
  description:
    "Your all-in-one solution for background removal, object removal, image upscaling, and object color manipulation with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Path file",process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", ibmPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
