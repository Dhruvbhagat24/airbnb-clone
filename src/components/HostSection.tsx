import mirashyaAvatar from '../assets/mirashya_avatar.png';
import type { HostInfo } from '../types/listing';
import './HostSection.css';

interface HostSectionProps {
  host: HostInfo;
}

export default function HostSection({ host }: HostSectionProps) {
  return (
    <div className="host-section">
      <img
        src={mirashyaAvatar}
        alt={host.name}
        className="host-avatar"
      />
      <div className="host-info">
        <h3 className="host-name">Hosted by {host.name}</h3>
        <p className="host-meta">{host.yearsHosting} years hosting</p>
      </div>
    </div>
  );
}

