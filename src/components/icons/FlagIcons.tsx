import { SVGProps } from "react";

interface FlagIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * UK Flag Icon (Union Jack)
 */
export const UKFlag = ({ className, ...props }: FlagIconProps) => (
  <svg
    viewBox="0 0 60 30"
    className={className}
    role="img"
    aria-label="United Kingdom flag"
    {...props}
  >
    <clipPath id="uk-clip">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="uk-clip-2">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#uk-clip-2)"
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

/**
 * Greek Flag Icon
 */
export const GreekFlag = ({ className, ...props }: FlagIconProps) => (
  <svg
    viewBox="0 0 60 40"
    className={className}
    role="img"
    aria-label="Greek flag"
    {...props}
  >
    <rect width="60" height="40" fill="#0D5EAF" />
    <rect y="0" width="60" height="4.44" fill="#FFFFFF" />
    <rect y="8.88" width="60" height="4.44" fill="#FFFFFF" />
    <rect y="17.76" width="60" height="4.44" fill="#FFFFFF" />
    <rect y="26.64" width="60" height="4.44" fill="#FFFFFF" />
    <rect y="35.52" width="60" height="4.44" fill="#FFFFFF" />
    <rect width="22.2" height="22.2" fill="#0D5EAF" />
    <rect x="8.88" y="0" width="4.44" height="22.2" fill="#FFFFFF" />
    <rect x="0" y="8.88" width="22.2" height="4.44" fill="#FFFFFF" />
  </svg>
);

/**
 * Bulgarian Flag Icon
 */
export const BulgarianFlag = ({ className, ...props }: FlagIconProps) => (
  <svg
    viewBox="0 0 60 40"
    className={className}
    role="img"
    aria-label="Bulgarian flag"
    {...props}
  >
    <rect width="60" height="13.33" fill="#FFFFFF" />
    <rect y="13.33" width="60" height="13.33" fill="#00966E" />
    <rect y="26.66" width="60" height="13.33" fill="#D62612" />
  </svg>
);

/**
 * Generic flag icon component mapper
 */
export const FlagIcon = ({
  countryCode,
  className = "w-6 h-6",
  ...props
}: FlagIconProps & { countryCode: string }) => {
  const flags: Record<string, React.ComponentType<FlagIconProps>> = {
    en: UKFlag,
    el: GreekFlag,
    bg: BulgarianFlag,
  };

  const FlagComponent = flags[countryCode];

  if (!FlagComponent) {
    return (
      <div className={className} {...props}>
        🏳️
      </div>
    );
  }

  return <FlagComponent className={className} {...props} />;
};
