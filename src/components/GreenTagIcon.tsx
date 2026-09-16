import type { JSX } from 'react';

interface GreenTagIconProps {
  className?: string;
  size?: number;
}

export default function GreenTagIcon({ className = '', size = 38 }: GreenTagIconProps): JSX.Element {
  return (
    <img
      src="/discount.png"
      width={size}
      height={size}
      className={className}
      alt="Promotion discount tag"
      style={{ display: 'block', flexShrink: 0, objectFit: 'contain' }}
    />
  );
}
