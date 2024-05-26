import "./styles/globals.css";

export const metadata = {
  title: "OSRS GE Tracker",
  description: "Track items on the Grand Exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
