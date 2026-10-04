import React from 'react';

interface BrandLogoProps {
  variant?: 'main' | 'white' | 'black' | 'badge' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'main',
  className = '',
  size = 'md',
}) => {
  // Dimensions helper
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
    custom: '',
  };

  // Horizontal variant for Header
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Circular Reduced Badge */}
        <div className="relative w-11 h-11 shrink-0 rounded-full bg-[#121316] border-2 border-[#c59a53] shadow-[0_0_15px_rgba(197,154,83,0.25)] flex items-center justify-center p-1 overflow-hidden group">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Outer concentric thin ring */}
            <circle cx="50" cy="50" r="46" fill="none" stroke="#c59a53" strokeWidth="1.5" opacity="0.6" />
            <circle cx="50" cy="50" r="43" fill="#14161a" stroke="#c59a53" strokeWidth="2.5" />
            {/* Stylized Straight Razor 'M' */}
            <g id="razor-m-reduced" transform="translate(0, -3)">
              {/* Left razor handle */}
              <path
                d="M 28 66 L 36 24 C 36.5 21 41 21 42 24 L 50 48"
                fill="none"
                stroke="#d4a750"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Right razor handle */}
              <path
                d="M 72 66 L 64 24 C 63.5 21 59 21 58 24 L 50 48"
                fill="none"
                stroke="#d4a750"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Brass rivet pins */}
              <circle cx="36" cy="28" r="2.2" fill="#fff" />
              <circle cx="64" cy="28" r="2.2" fill="#fff" />
              <circle cx="30" cy="62" r="1.8" fill="#e5c278" />
              <circle cx="70" cy="62" r="1.8" fill="#e5c278" />
            </g>
            {/* Small text O MARTINS */}
            <text
              x="50"
              y="82"
              textAnchor="middle"
              fill="#d4a750"
              fontSize="10"
              fontFamily="'Oswald', sans-serif"
              fontWeight="700"
              letterSpacing="1.5"
            >
              O MARTINS
            </text>
          </svg>
        </div>

        {/* Text Wordmark */}
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#c59a53] font-semibold">
            BARBEARIA
          </span>
          <span className="font-display font-black text-lg md:text-xl tracking-wider text-stone-100 uppercase leading-tight group-hover:text-amber-300 transition-colors">
            O MARTINS
          </span>
          <span className="text-[9px] tracking-widest text-stone-400 font-mono">
            FORTALEZA • DESDE 2024
          </span>
        </div>
      </div>
    );
  }

  // Circular Badge (Versão Reduzida - Ícone 'M' e 'O Martins')
  if (variant === 'badge') {
    return (
      <div
        className={`relative aspect-square rounded-full flex items-center justify-center ${
          size !== 'custom' ? sizeClasses[size] : ''
        } ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <circle cx="50" cy="50" r="48" fill="#0f1115" stroke="#c59a53" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="43" fill="#14161a" stroke="#d4a750" strokeWidth="3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#8e6a2b" strokeWidth="1" strokeDasharray="2 2" />

          {/* Razor 'M' */}
          <g transform="translate(0, -2)">
            <path
              d="M 28 64 L 37 24 C 37.5 21 42 21 43 24 L 50 46"
              fill="none"
              stroke="#d4a750"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 72 64 L 63 24 C 62.5 21 58 21 57 24 L 50 46"
              fill="none"
              stroke="#d4a750"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Brass Pins */}
            <circle cx="37" cy="27" r="2.2" fill="#fff" />
            <circle cx="63" cy="27" r="2.2" fill="#fff" />
            <circle cx="30" cy="60" r="2" fill="#e5c278" />
            <circle cx="70" cy="60" r="2" fill="#e5c278" />
          </g>

          {/* Curved or bottom label */}
          <text
            x="50"
            y="81"
            textAnchor="middle"
            fill="#d4a750"
            fontSize="10"
            fontFamily="'Oswald', sans-serif"
            fontWeight="700"
            letterSpacing="2"
          >
            O MARTINS
          </text>
        </svg>
      </div>
    );
  }

  // Versão Principal, Versão Negativa (Branco), Versão Monocromática (Preto)
  const isWhite = variant === 'white';
  const isBlack = variant === 'black';

  const primaryStroke = isWhite ? '#ffffff' : isBlack ? '#111111' : '#c59a53';
  const secondaryStroke = isWhite ? '#ffffff' : isBlack ? '#111111' : '#d4a750';
  const textFill = isWhite ? '#ffffff' : isBlack ? '#111111' : '#f5e9d3';
  const subTextFill = isWhite ? '#ffffff' : isBlack ? '#111111' : '#c59a53';
  const bgFill = isWhite ? '#14161b' : isBlack ? '#ffffff' : '#0d0f13';
  const crestFill = isWhite ? '#191c22' : isBlack ? '#ffffff' : '#14161b';

  return (
    <div
      className={`relative inline-block ${
        size !== 'custom' ? sizeClasses[size] : ''
      } ${className}`}
      title="Barbearia O Martins - Logotipo Oficial"
    >
      <svg viewBox="0 0 300 360" className="w-full h-full filter drop-shadow-xl" fill="none">
        <defs>
          {/* Subtle gradient for primary gold variation */}
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3dd9b" />
            <stop offset="50%" stopColor="#c59a53" />
            <stop offset="100%" stopColor="#7a5518" />
          </linearGradient>
          <linearGradient id="shield-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1c22" />
            <stop offset="100%" stopColor="#0e1014" />
          </linearGradient>
        </defs>

        {/* Outer Background (if not transparent) */}
        <rect width="300" height="360" rx="16" fill={bgFill} />

        {/* Vintage Barber Shield Crest Outline */}
        <path
          d="M 150 48
             C 175 48 200 40 220 54
             C 240 68 244 95 244 116
             C 244 135 258 152 264 170
             C 272 195 264 220 250 240
             C 230 270 190 304 150 330
             C 110 304 70 270 50 240
             C 36 220 28 195 36 170
             C 42 152 56 135 56 116
             C 56 95 60 68 80 54
             C 100 40 125 48 150 48 Z"
          fill={crestFill}
          stroke={isWhite || isBlack ? primaryStroke : 'url(#gold-grad)'}
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Inner Decorative Inset Border */}
        <path
          d="M 150 62
             C 172 62 194 56 210 68
             C 226 80 230 102 230 120
             C 230 138 244 154 248 170
             C 254 190 246 210 234 228
             C 216 254 180 286 150 310
             C 120 286 84 254 66 228
             C 54 210 46 190 52 170
             C 56 154 70 138 70 120
             C 70 102 74 80 90 68
             C 106 56 128 62 150 62 Z"
          fill="none"
          stroke={secondaryStroke}
          strokeWidth="2"
          opacity="0.75"
        />

        {/* Apex: Barber Pole */}
        <g id="barber-pole" transform="translate(136, 12)">
          {/* Top brass ball cap */}
          <circle cx="14" cy="6" r="6" fill={secondaryStroke} />
          {/* Upper mount plate */}
          <rect x="6" y="11" width="16" height="4" rx="2" fill={secondaryStroke} />

          {/* Cylinder Glass Body */}
          <rect x="8" y="15" width="12" height="34" rx="2" fill="#ffffff" stroke={secondaryStroke} strokeWidth="1.5" />
          {/* Spirals: Red & Blue stripes */}
          <clipPath id="pole-clip">
            <rect x="8" y="15" width="12" height="34" rx="2" />
          </clipPath>
          <g clipPath="url(#pole-clip)">
            {/* Red diagonal stripes */}
            <path d="M 0 16 L 28 32 L 28 26 L 0 10 Z" fill="#c93838" />
            <path d="M 0 28 L 28 44 L 28 38 L 0 22 Z" fill="#c93838" />
            <path d="M 0 40 L 28 56 L 28 50 L 0 34 Z" fill="#c93838" />
            {/* Blue diagonal stripes */}
            <path d="M 0 22 L 28 38 L 28 32 L 0 16 Z" fill="#2d6cb5" />
            <path d="M 0 34 L 28 50 L 28 44 L 0 28 Z" fill="#2d6cb5" />
          </g>
          {/* Lower mount base */}
          <rect x="6" y="49" width="16" height="4" rx="2" fill={secondaryStroke} />
          <circle cx="14" cy="54" r="3" fill={secondaryStroke} />
        </g>

        {/* Upper Flourish / Arched Text: BARBEARIA */}
        <path id="arch-text-path" d="M 75 105 Q 150 92 225 105" fill="none" />
        <text
          x="150"
          y="108"
          textAnchor="middle"
          fill={subTextFill}
          fontSize="14"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          letterSpacing="4"
        >
          BARBEARIA
        </text>

        {/* Central Brand Headline: O MARTINS */}
        <text
          x="150"
          y="158"
          textAnchor="middle"
          fill={textFill}
          fontSize="36"
          fontFamily="'Oswald', sans-serif"
          fontWeight="800"
          letterSpacing="2"
        >
          O MARTINS
        </text>

        {/* Divider lines below O MARTINS */}
        <line x1="78" y1="172" x2="222" y2="172" stroke={secondaryStroke} strokeWidth="1.5" opacity="0.6" />

        {/* Crossed Barber Comb & Scissors + Razor 'M' in Center */}
        <g id="crossed-tools" transform="translate(150, 222)">
          {/* Barber Comb (Angled Left) */}
          <g transform="rotate(-34)">
            {/* Comb Spine */}
            <rect x="-42" y="-3.5" width="84" height="7" rx="3" fill={secondaryStroke} opacity="0.85" />
            {/* Comb Teeth */}
            {[-36, -30, -24, -18, -12, -6, 0, 6, 12, 18, 24, 30, 36].map((tx) => (
              <line
                key={`comb-${tx}`}
                x1={tx}
                y1="3.5"
                x2={tx}
                y2="14"
                stroke={secondaryStroke}
                strokeWidth="2"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Barber Scissors / Shears (Angled Right) */}
          <g transform="rotate(34)">
            {/* Blade 1 */}
            <path d="M -38 -2 L 34 -2 L 40 0 L 34 2 L -38 2 Z" fill={secondaryStroke} opacity="0.9" />
            {/* Finger loop Left */}
            <circle cx="-42" cy="-6" r="6" fill="none" stroke={secondaryStroke} strokeWidth="2.5" />
            {/* Finger loop Right */}
            <circle cx="-42" cy="6" r="6" fill="none" stroke={secondaryStroke} strokeWidth="2.5" />
            {/* Pivot Screw */}
            <circle cx="4" cy="0" r="3" fill="#ffffff" />
          </g>

          {/* Central Razor Handles Forming the Iconic 'M' */}
          <g id="razor-m-center" transform="translate(0, -6)">
            {/* Left handle */}
            <path
              d="M -22 28 L -12 -16 C -11 -21 -4 -21 -3 -16 L 0 6"
              fill="none"
              stroke={isWhite || isBlack ? primaryStroke : '#e5c278'}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right handle */}
            <path
              d="M 22 28 L 12 -16 C 11 -21 4 -21 3 -16 L 0 6"
              fill="none"
              stroke={isWhite || isBlack ? primaryStroke : '#e5c278'}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Rivets on razor handles */}
            <circle cx="-12" cy="-12" r="2.2" fill="#ffffff" />
            <circle cx="12" cy="-12" r="2.2" fill="#ffffff" />
            <circle cx="-20" cy="24" r="1.8" fill={secondaryStroke} />
            <circle cx="20" cy="24" r="1.8" fill={secondaryStroke} />
          </g>
        </g>

        {/* Bottom Base: DESDE 2024 with flanking dashes and center dot */}
        <g id="desde-2024" transform="translate(150, 286)">
          <line x1="-55" y1="-4" x2="-36" y2="-4" stroke={secondaryStroke} strokeWidth="1.5" />
          <circle cx="-32" cy="-4" r="2" fill={secondaryStroke} />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill={subTextFill}
            fontSize="12"
            fontFamily="'Oswald', sans-serif"
            fontWeight="600"
            letterSpacing="2"
          >
            DESDE 2024
          </text>
          <circle cx="32" cy="-4" r="2" fill={secondaryStroke} />
          <line x1="36" y1="-4" x2="55" y2="-4" stroke={secondaryStroke} strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};
