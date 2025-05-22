import React from "react";
import { Poppins} from "next/font/google";
import "./globals.css";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font",
  subsets: ["latin"],
});


export const metadata = {
  title: "Estudantes e Projetos API",
   icons: {
    icon: "/icons/favicon.ico",
  },

  description: "Para demonstrar o uso de uma API com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${font.variable}`}>
        {children}
      </body>
    </html>
  );
}
