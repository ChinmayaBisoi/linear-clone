import { cn } from "~/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { icon: 20, text: "text-sm" },
  md: { icon: 24, text: "text-base" },
  lg: { icon: 32, text: "text-lg" },
};

export function Logo({
  className,
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const { icon: iconSize, text } = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-violet-400"
        aria-hidden={showWordmark}
        role={showWordmark ? undefined : "img"}
      >
        <title>Linear</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4v20h14v2H6v-2V4H8Z"
          fill="currentColor"
        />
      </svg>
      {showWordmark && (
        <span
          className={cn("font-semibold tracking-tight text-zinc-100", text)}
        >
          Linear
        </span>
      )}
    </span>
  );
}
