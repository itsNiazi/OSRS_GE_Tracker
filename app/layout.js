import { GlobalContextProvider } from "@/context/globalContext";
import "../styles/globals.css";

export const metadata = {
  title: "OSRS GE Tracker",
  description: "Track items on the Grand Exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
