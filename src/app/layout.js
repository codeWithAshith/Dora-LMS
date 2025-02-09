import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dora LMS",
  description: "Dora Learning Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bricolageGrotesque.className}>
      <body>{children}</body>
    </html>
  );
}
