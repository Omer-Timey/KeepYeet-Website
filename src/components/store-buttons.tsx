import { site } from "@/data/site";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.7 12.7c0-2.8 2.3-4.2 2.4-4.3a5.2 5.2 0 0 0-4.1-2.2c-1.7-.2-3.4 1-4.2 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.4 1.4 11.2 1 1.4 2.1 2.9 3.6 2.8 1.4-.1 2-1 3.7-1s2.2 1 3.7 1c1.5 0 2.5-1.4 3.5-2.8a12 12 0 0 0 1.6-3.3 4.9 4.9 0 0 1-3.4-4.2ZM13.9 4.4A4.7 4.7 0 0 0 15 1a4.8 4.8 0 0 0-3.1 1.6 4.5 4.5 0 0 0-1.1 3.3 4 4 0 0 0 3.1-1.5Z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.4 2.8a1.8 1.8 0 0 0-.4 1.1v16.2c0 .4.1.8.4 1.1l9.3-9.2-9.3-9.2Z" />
      <path d="m13.9 10.8 2.5-2.5-9.9-5.6a2 2 0 0 0-1.4-.2l8.8 8.3Z" opacity=".78" />
      <path d="m13.9 13.2-8.8 8.3a2 2 0 0 0 1.4-.2l9.9-5.6-2.5-2.5Z" opacity=".62" />
      <path d="m18 9.2-2.9 2.8 2.9 2.8 2.7-1.5c.9-.5.9-2.1 0-2.6L18 9.2Z" opacity=".9" />
    </svg>
  );
}

type StoreButtonsProps = {
  className?: string;
  compact?: boolean;
};

export function StoreButtons({ className = "", compact = false }: StoreButtonsProps) {
  return (
    <div className={`store-buttons ${compact ? "store-buttons--compact" : ""} ${className}`.trim()}>
      <a
        className="store-button"
        href={site.appStoreUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Download KeepYeet on the App Store"
        data-store="app-store"
      >
        <AppleMark />
        <span>
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a
        className="store-button store-button--play"
        href={site.googlePlayUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Get KeepYeet on Google Play"
        data-store="google-play"
      >
        <PlayMark />
        <span>
          <small>Get it on</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  );
}
