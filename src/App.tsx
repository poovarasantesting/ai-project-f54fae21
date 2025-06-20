import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatPage } from "@/pages/chat";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="chat-theme">
      <main className="min-h-screen">
        <ChatPage />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}