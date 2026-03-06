/**
 * OpenCapital Logo Symbol — Pixelated dot ring
 * Based on the official brand reference.
 * The symbol is a circular ring made of small dots in a grid pattern.
 */

/* Dot positions for the full ring symbol (Ecossistema).
   Each [row, col] pair maps to a 9×9 grid. Opacity varies by distance from ring center. */
const RING_DOTS: [number, number, number][] = [
  // [row, col, opacity]  — ring outer radius ~4, inner ~2
  // Top
  [0, 3, 0.3], [0, 4, 0.4], [0, 5, 0.3],
  // Row 1
  [1, 2, 0.3], [1, 3, 0.7], [1, 4, 0.8], [1, 5, 0.7], [1, 6, 0.3],
  // Row 2
  [2, 1, 0.3], [2, 2, 0.7], [2, 3, 0.9], [2, 5, 0.9], [2, 6, 0.7], [2, 7, 0.3],
  // Row 3
  [3, 0, 0.3], [3, 1, 0.7], [3, 2, 0.9], [3, 6, 0.9], [3, 7, 0.7], [3, 8, 0.3],
  // Row 4 (center)
  [4, 0, 0.4], [4, 1, 0.8], [4, 7, 0.8], [4, 8, 0.4],
  // Row 5
  [5, 0, 0.3], [5, 1, 0.7], [5, 2, 0.9], [5, 6, 0.9], [5, 7, 0.7], [5, 8, 0.3],
  // Row 6
  [6, 1, 0.3], [6, 2, 0.7], [6, 3, 0.9], [6, 5, 0.9], [6, 6, 0.7], [6, 7, 0.3],
  // Row 7
  [7, 2, 0.3], [7, 3, 0.7], [7, 4, 0.8], [7, 5, 0.7], [7, 6, 0.3],
  // Bottom
  [8, 3, 0.3], [8, 4, 0.4], [8, 5, 0.3],
];

/* Right-half dots for the "Inteligência" / reduced symbol (C shape) */
const HALF_DOTS = RING_DOTS.filter(([, col]) => col >= 4);

interface SymbolProps {
  size?: number;
  color?: string;
  className?: string;
  variant?: "full" | "half";
}

export function OCSymbol({ size = 32, color = "currentColor", className, variant = "full" }: SymbolProps) {
  const dots = variant === "full" ? RING_DOTS : HALF_DOTS;
  const cellSize = size / 9;
  const dotSize = cellSize * 0.7;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={className}>
      {dots.map(([row, col, opacity], i) => (
        <rect
          key={i}
          x={col * cellSize + (cellSize - dotSize) / 2}
          y={row * cellSize + (cellSize - dotSize) / 2}
          width={dotSize}
          height={dotSize}
          rx={dotSize * 0.15}
          fill={color}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
  variant?: "full" | "symbol" | "half";
  showText?: boolean;
}

const SIZES = { sm: { symbol: 20, text: "text-sm" }, md: { symbol: 28, text: "text-lg" }, lg: { symbol: 40, text: "text-2xl" } };

export function OCLogo({ size = "md", color = "currentColor", className, variant = "full", showText = true }: LogoProps) {
  const s = SIZES[size];

  if (variant === "symbol" || !showText) {
    return <OCSymbol size={s.symbol} color={color} className={className} variant="full" />;
  }

  if (variant === "half") {
    return <OCSymbol size={s.symbol} color={color} className={className} variant="half" />;
  }

  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <span className={`${s.text} font-semibold tracking-tight`} style={{ color }}>OpenCapital</span>
      <OCSymbol size={s.symbol * 0.85} color={color} />
    </span>
  );
}
