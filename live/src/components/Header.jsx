import { createSignal } from "solid-js";
import { t, CONTACT_EMAIL } from "../data/content";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = createSignal(false);
  const toggle = () => setOpen(!open());
  const close = () => setOpen(false);
  return (
    <header class="site-header">
      <div class="shell header-row">
        <a class="brand" href="#top" aria-label="Solv3d home">
          <span class="brand-text">
            <img class="brand-logo" src="/logo.png" alt="Solv3d" />
            <span>{t().brand.tagline}</span>
          </span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a href="#team">{t().nav.us}</a>
          <a href="#projects">{t().nav.projects}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} class="nav-cta">{t().nav.contact}</a>
        </nav>
        <button class="mobile-toggle" onClick={toggle} aria-label="Menu" classList={{ "is-open": open() }}>
          <span /><span /><span />
        </button>
      </div>
      <div class="mobile-menu" classList={{ "is-open": open() }}>
        <a href="#team" onClick={close}>{t().nav.us}</a>
        <a href="#projects" onClick={close}>{t().nav.projects}</a>
        <a href={`mailto:${CONTACT_EMAIL}`} onClick={close}>{t().nav.contact}</a>
      </div>
    </header>
  );
}
