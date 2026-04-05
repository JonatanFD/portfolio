import * as React from "react";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";

interface ThemeToggleProps extends React.ComponentProps<typeof Button> {}

export function ThemeToggle(props: ThemeToggleProps) {
    const [theme, setThemeState] = React.useState<
        "theme-light" | "dark" | "system"
    >("dark");

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setThemeState(isDarkMode ? "dark" : "theme-light");
    }, []);

    React.useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    return (
        <Button
            variant="outline"
            size="icon"
            {...props}
            onClick={() =>
                setThemeState((t) =>
                    t === "theme-light" ? "dark" : "theme-light",
                )
            }
        >
            <SunDimIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    );
}
