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
        {/* Choose a more semantic tag */}
        {/* Kolla onödiga utility klasser */}
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
