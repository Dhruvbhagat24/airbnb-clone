import type { HostInfo } from '../types/listing';
import './MeetYourHost.css';

interface MeetYourHostProps {
  host?: HostInfo;
}

interface CoHostItem {
  name: string;
  avatar: string;
}

const CO_HOSTS: CoHostItem[] = [
  {
    name: 'Sharath',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/fc1006cc-0221-42d2-862e-987c817c5156.jpeg?im_w=120',
  },
  {
    name: 'Aman Dev Pahwa',
    avatar: 'https://a0.muscache.com/im/pictures/user/3e1481b6-60a2-4734-aa8a-3281f42c74a8.jpg?im_w=120',
  },
  {
    name: 'Maria Karen Priyanka',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/ce5e32ac-a948-4906-a1ce-09dd6692210e.jpeg?im_w=120',
  },
  {
    name: 'Simran',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/96348aed-8c72-4eff-8452-93967f9c4252.jpeg?im_w=120',
  },
  {
    name: 'Mirashya Homes',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/799b3a89-e6b7-49e0-8264-d2c030f066a7.jpeg?im_w=120',
  },
  {
    name: 'Sanyukta',
    avatar: 'https://a0.muscache.com/im/pictures/user/User/original/62280d0a-ec2a-465a-a16a-17f011d0e813.jpeg?im_w=120',
  },
  {
    name: 'Shruti',
    avatar: 'https://a0.muscache.com/im/Portrait/Avatars/v2/rausch?im_w=120&im_t=S&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=a21039&script=latin',
  },
  {
    name: 'Amisha',
    avatar: 'https://a0.muscache.com/im/Portrait/Avatars/v2/blue?im_w=120&im_t=A&im_s=43&im_f=AirbnbCerealLatinMedium.ttf&im_c=0d4daa&script=latin',
  },
];

export default function MeetYourHost({ host }: MeetYourHostProps) {
  return (
    <section className="meet-host-section" aria-label="Meet your host">
      <h2 className="meet-host-title">Meet your host</h2>

      <div className="meet-host-layout">
        {/* LEFT COLUMN: HOST CARD & PERSONAL FACTS */}
        <div className="meet-host-left-col">
          {/* HOST CARD */}
          <div className="host-profile-card">
            <div className="host-card-main">
              <div className="host-avatar-wrapper">
                {/* Mirashya Homes circular emblem */}
                <div className="host-emblem-avatar" aria-label="Mirashya Homes logo">
                  <span className="host-emblem-text">MIRASHYA</span>
                  <span className="host-emblem-sub">HOMES</span>
                </div>
                {/* Verification badge */}
                <div className="host-verified-badge" title="Identity verified">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 16, width: 16, fill: '#ffffff' }}>
                    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z" />
                  </svg>
                </div>
              </div>

              <h3 className="host-card-name">{host?.name || 'Mirashya Homes'}</h3>
              <span className="host-card-badge">Host</span>
            </div>

            <div className="host-card-stats">
              <div className="host-stat-item">
                <span className="host-stat-num">1550</span>
                <span className="host-stat-lbl">Reviews</span>
              </div>
              <div className="host-stat-divider" />
              <div className="host-stat-item">
                <span className="host-stat-num">
                  4.68<span className="host-stat-star">★</span>
                </span>
                <span className="host-stat-lbl">Rating</span>
              </div>
              <div className="host-stat-divider" />
              <div className="host-stat-item">
                <span className="host-stat-num">{host?.yearsHosting || 2}</span>
                <span className="host-stat-lbl">Years hosting</span>
              </div>
            </div>
          </div>

          {/* FACTS BELOW CARD */}
          <div className="host-personal-facts">
            <div className="host-fact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
                <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z" />
              </svg>
              <span>Born in the 80s</span>
            </div>
            <div className="host-fact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentColor' }}>
                <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z" />
              </svg>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CO-HOSTS, HOST DETAILS, PAYMENT SAFETY */}
        <div className="meet-host-right-col">
          <h3 className="cohosts-heading">Co-Hosts</h3>
          <ul className="cohosts-grid">
            {CO_HOSTS.map((cohost, idx) => (
              <li key={idx} className="cohost-item">
                <img src={cohost.avatar} alt={cohost.name} className="cohost-avatar" />
                <span className="cohost-name">{cohost.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="host-details-heading">Host details</h3>
          <p className="host-detail-line">Response rate: 100%</p>
          <p className="host-detail-line">Responds within an hour</p>

          <button type="button" className="message-host-btn">
            Message host
          </button>

          <div className="host-safety-divider" />

          <div className="host-safety-warning">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="host-safety-shield-svg">
              <g>
                <g stroke="none">
                  <path d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z" fillOpacity=".2" />
                  <path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z" />
                </g>
                <path d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z" fill="none" strokeWidth="2" />
              </g>
            </svg>
            <p className="host-safety-text">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
