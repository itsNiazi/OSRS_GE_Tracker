import { GlobalContextProvider } from "@/context/globalContext";
import "../styles/globals.css";

export const metadata = {
  title: "OSRS GE Tracker",
  description: "Track items on the Grand Exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {/* Choose a more semantic tag */}
        <div className="container mx-auto">
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
