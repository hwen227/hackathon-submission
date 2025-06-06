"use client";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

export function ThemedButton() {
  // const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <Button variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")} />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")} />
    </Button>
  );
}
