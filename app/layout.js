import { GlobalContextProvider } from "@/context/globalContext";
import "../styles/globals.css";

export const metadata = {
  title: "OSRS GE Tracker",
  description: "Track items on the Grand Exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-800">
        <main className="container min-h-screen flex flex-col justify-center items-center ">
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </main>
      </body>
    </html>
  );
}
