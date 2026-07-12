function SvgIcon({ children, className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function KitchenTrendsIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <path d="M10 25h44v28H10z" />
      <path d="M15 25v28M32 25v28M49 25v28" />
      <path d="M18 34h8M36 34h8M18 44h8M36 44h8" />
      <path d="M18 16v9M46 16v9" />
      <path d="M14 13h9M41 13h9" />
      <path d="M26 12c0 4 3 5 6 5s6-1 6-5" />
      <path d="M28 21h8" />
    </SvgIcon>
  );
}

export function InteriorIdeasIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <path d="M15 33c0-5 3-8 8-8h18c5 0 8 3 8 8v10H15z" />
      <path d="M12 43h40v9H12z" />
      <path d="M19 52v4M45 52v4" />
      <path d="M22 43v-7h20v7" />
      <path d="M50 21h8" />
      <path d="M54 21v22" />
      <path d="M49 16h10l-2 5H51z" />
    </SvgIcon>
  );
}

export function SpaceOptimizationIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <path d="M12 12h40v40H12z" />
      <path d="M12 30h17V12" />
      <path d="M29 30h23" />
      <path d="M37 30v22" />
      <path d="M20 22h4" />
      <path d="M42 21h4" />
      <path d="M20 42h4" />
      <path d="M44 42h4" />
      <path d="M29 41h8" />
    </SvgIcon>
  );
}

export function MaterialGuidesIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <path d="M32 9 12 19l20 10 20-10z" />
      <path d="M16 29 32 37l16-8" />
      <path d="M16 39 32 47l16-8" />
      <path d="M16 49 32 57l16-8" />
    </SvgIcon>
  );
}

export function InternationalDesignIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <circle cx="32" cy="32" r="22" />
      <path d="M10 32h44" />
      <path d="M32 10c7 6 10 13 10 22S39 48 32 54" />
      <path d="M32 10c-7 6-10 13-10 22s3 16 10 22" />
      <path d="M16 20c4 3 10 5 16 5s12-2 16-5" />
      <path d="M16 44c4-3 10-5 16-5s12 2 16 5" />
    </SvgIcon>
  );
}

const iconMap = {
  kitchen: KitchenTrendsIcon,
  interior: InteriorIdeasIcon,
  space: SpaceOptimizationIcon,
  material: MaterialGuidesIcon,
  international: InternationalDesignIcon,
};

export function getBlogCategoryIcon(iconName, title = "") {
  if (iconMap[iconName]) return iconMap[iconName];

  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("kitchen")) return KitchenTrendsIcon;
  if (normalizedTitle.includes("interior")) return InteriorIdeasIcon;
  if (normalizedTitle.includes("space")) return SpaceOptimizationIcon;
  if (normalizedTitle.includes("material")) return MaterialGuidesIcon;
  if (normalizedTitle.includes("international")) return InternationalDesignIcon;

  return KitchenTrendsIcon;
}
