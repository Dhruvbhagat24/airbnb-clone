import type { HighlightItem } from '../types/listing';
import './Highlights.css';

interface HighlightsProps {
  highlights: HighlightItem[];
}

function getHighlightIcon(iconType: string) {
  const iconProps = {
    viewBox: '0 0 32 32',
    className: 'highlight-icon-svg',
    'aria-hidden': true,
  } as const;

  switch (iconType) {
    case 'firepit':
    case 'outdoor':
    case 'grill':
    case 'utensils':
      return (
        <svg {...iconProps}>
          <path d="M9 19c-.5-3.9 1.5-7.3 5-11.5-.2 4 2.8 4.3 3 7.5 1.3-1.3 2.1-3.1 2.1-5 3.1 3.1 4.1 5.8 3.9 9" />
          <path d="M5 20h22v7H5zM3 27h26" />
        </svg>
      );
    case 'fan':
      return (
        <svg {...iconProps}>
          <circle cx="16" cy="16" r="2.2" />
          <path d="M14.8 13.9c-2.8-3.6-2.8-7.3-.2-9.2 2.5-1.8 4.8.3 3.9 3.1-.7 2.1-2.2 4.6-3.7 6.1zM18.1 14.9c3.6-2.8 7.3-2.8 9.2-.2 1.8 2.5-.3 4.8-3.1 3.9-2.1-.7-4.6-2.2-6.1-3.7zM17.2 18.1c2.8 3.6 2.8 7.3.2 9.2-2.5 1.8-4.8-.3-3.9-3.1.7-2.1 2.2-4.6 3.7-6.1zM13.9 17.2c-3.6 2.8-7.3 2.8-9.2.2-1.8-2.5.3-4.8 3.1-3.9 2.1.7 4.6 2.2 6.1 3.7z" />
        </svg>
      );
    case 'door':
    default:
      return (
        <svg {...iconProps}>
          <path d="M5 28h22M10 27V6h13v21M23 6h3v21M16 16h.1" />
        </svg>
      );
  }
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="highlights-section">
      {highlights.map((item) => (
        <div key={item.id} className="highlight-row">
          <div className="highlight-icon">{getHighlightIcon(item.icon)}</div>
          <div className="highlight-content">
            <h4 className="highlight-title">{item.title}</h4>
            <p className="highlight-subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

