import Image from "next/image";
import Link from "next/link";
import { StoreButtons } from "@/components/store-buttons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand--footer" href="/">
            <Image
              src="/images/app-store/keepyeet-icon.webp"
              alt=""
              width={48}
              height={48}
            />
            <span>KeepYeet</span>
          </Link>
          <p>
            The swipe photo cleaner for a calmer camera roll or gallery. Keep
            what matters. Yeet the clutter.
          </p>
          <StoreButtons compact />
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li><Link href="/#how-it-works">How it works</Link></li>
            <li><Link href="/#screenshots">Screenshots</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/guides/">All guides</Link></li>
          </ul>
        </div>
        <div>
          <h2>Popular guides</h2>
          <ul>
            <li><Link href="/guides/swipe-delete-photos/">Swipe delete photos</Link></li>
            <li><Link href="/guides/clean-up-camera-roll/">Clean up camera roll</Link></li>
            <li><Link href="/guides/free-up-phone-storage/">Free up phone storage</Link></li>
            <li><Link href="/guides/private-photo-cleaner/">Private photo cleaner</Link></li>
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul>
            <li><Link href="/privacy/">Privacy policy</Link></li>
            <li><Link href="/terms/">Terms of use</Link></li>
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Omer Yom Tov. All rights reserved.</p>
        <p>Apple and Google Play are trademarks of their respective owners.</p>
      </div>
    </footer>
  );
}
