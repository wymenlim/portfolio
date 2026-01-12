import Link from "next/link"
import { ArrowLeft } from "lucide-react";

type GlassButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function GlassButton({ children, href }: GlassButtonProps) {
    const classes = "inline-flex relative overflow-hidden rounded-xl overflow-hidden text-white backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-700 hover:before:opacity-100 hover:before:translate-x-[100%] px-3 py-4 md:px-10 py-4 active:translate-y-0.5 active:shadow-md active:scale-[0.97]";
    const circle_glass =
    "inline-flex items-center justify-center relative overflow-hidden w-9 h-9 min-w-9 min-h-9 rounded-full aspect-square flex-shrink-0 text-white backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0.5 active:shadow-md active:scale-[0.97] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:translate-x-[-100%] before:transition-all before:duration-700 hover:before:opacity-100 hover:before:translate-x-[100%]";    
    

    if (href) {
        if (typeof children === "string" && children === "⬅")
        {
            return (
            <Link href={href} className={circle_glass}>
                {children}
            </Link>
            );
        }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}>
      {children}
    </button>
  );
}