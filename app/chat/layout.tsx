import { DeployButton } from "@/components/deploy-button";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
          <Navbar />
      <div className="flex-1 w-full flex flex-col gap-20 max-w-5xl items-center">
        <div className="flex-1 flex flex-col max-w-5xl justify-center">
          {children}
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Built by{" "}
            <a
              href="https://ahmadaroyehun.netlify.app"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Ahmad Aroyehun
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
