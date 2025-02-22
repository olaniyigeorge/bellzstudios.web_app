import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
          variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
          variant === "outline" &&
            "border border-gray-300 text-white hover:bg-white hover:text-black",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
