import NavbarComponent from "./components/NavbarComponent";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        <main>{children}</main>
      </body>
    </html>
  );
}
