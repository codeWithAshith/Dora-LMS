import { Manrope } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar.component";
import FooterComponent from "@/components/Footer.component";
import { SessionWrapper } from "./auth/sessionWrapper";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dora LMS",
  description: "Dora Learning Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <SessionWrapper>
          <NavbarComponent />
          <main className="pt-10 min-h-screen">{children}</main>
          <FooterComponent />
        </SessionWrapper>
      </body>
    </html>
  );
}
