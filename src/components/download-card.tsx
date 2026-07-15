import Image from "next/image";
import { StoreButtons } from "@/components/store-buttons";

type DownloadCardProps = {
  headingId: string;
  id?: string;
};

export function DownloadCard({ headingId, id }: DownloadCardProps) {
  return (
    <section className="section download-section" id={id} aria-labelledby={headingId}>
      <div className="shell download-card">
        <div className="download-icon-wrap">
          <Image
            src="/images/app-store/keepyeet-icon.webp"
            alt="KeepYeet app icon"
            width={164}
            height={164}
          />
        </div>
        <div className="download-copy">
          <p className="kicker">Download KeepYeet</p>
          <h2 id={headingId}>Your clean camera roll starts with one swipe.</h2>
          <p>
            Get KeepYeet on the App Store or Google Play, then turn photo and
            video clutter into a quick cleanup you can finish.
          </p>
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
