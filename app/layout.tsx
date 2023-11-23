import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";

export const metadata = {
  title: "rurge",
  description: "Generated by create next app",
};

const bebas = localFont({
  src: [
    {
      path: "../public/fonts/bebasneueregular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/bebasneueregular.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${bebas.variable} font-sans`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
