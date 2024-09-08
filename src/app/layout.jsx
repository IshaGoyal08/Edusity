import "./globals.css";

export const metadata = {
  title: "Edusity",
  description: "UI/UX of Landing page of University website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
