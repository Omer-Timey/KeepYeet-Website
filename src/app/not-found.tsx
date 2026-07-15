import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow"><span /> 404</p>
      <h1>This page got yeeted.</h1>
      <p>The good news: your photos are exactly where you left them.</p>
      <Link className="outline-button" href="/">Back to KeepYeet</Link>
    </section>
  );
}
