import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Palette, Check } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const accents = [
  { name: "blue", color: "bg-[#007AFF]" },
  { name: "purple", color: "bg-[#8b5cf6]" },
  { name: "green", color: "bg-[#10b981]" },
  { name: "orange", color: "bg-[#f97316]" },
] as const;

export default function ThemeSwitcher() {
  const { theme, accent, setTheme, setAccent, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 mb-4 p-4 bg-background border border-border rounded-2xl shadow-2xl min-w-[200px]"
          >
            <div className="space-y-6">
              {/* Mode Toggle */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Appearance</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTheme("light")}
                    className={`flex items-center justify-center p-2 rounded-xl border transition-all ${
                      theme === "light" ? "bg-primary/10 border-primary text-primary" : "bg-muted border-transparent text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    <span className="text-xs font-medium">Light</span>
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex items-center justify-center p-2 rounded-xl border transition-all ${
                      theme === "dark" ? "bg-primary/10 border-primary text-primary" : "bg-muted border-transparent text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    <span className="text-xs font-medium">Dark</span>
                  </button>
                </div>
              </div>

              {/* Accent Selector */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Accent Color</p>
                <div className="grid grid-cols-4 gap-2">
                  {accents.map((a) => (
                    <button
                      key={a.name}
                      onClick={() => setAccent(a.name)}
                      className={`relative w-10 h-10 rounded-full ${a.color} flex items-center justify-center transition-transform hover:scale-110 active:scale-95`}
                    >
                      {accent === a.name && (
                        <motion.div layoutId="check" className="text-white">
                          <Check className="w-5 h-5" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:shadow-primary/20 transition-shadow"
      >
        {isOpen ? (
          <Palette className="w-6 h-6" />
        ) : (
          theme === "light" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
