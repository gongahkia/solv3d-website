import { createSignal } from "solid-js";
import { CONTENT, CONTACT_EMAIL } from "../data/content";
import "./Footer.css";

const LANGUAGES = [
  { key: "en", label: "English" },
  { key: "zh", label: "中文" },
  { key: "ms", label: "Bahasa Melayu" },
  { key: "ta", label: "தமிழ்" },
];

export default function Footer() {
  const [lang, setLang] = createSignal("en");
  return (
    <footer class="site-footer">
      <div class="shell footer-grid">
        {/* left column: brand + language */}
        <div class="footer-left">
          <a class="brand" href="#top" aria-label="Solv3d home">
            <span class="brand-mark">{CONTENT.brand.mark}</span>
            <span class="brand-text">
              <strong>{CONTENT.brand.name}</strong>
              <span>{CONTENT.brand.tagline}</span>
            </span>
          </a>
          <div class="footer-contact-row">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span class="footer-dot" />
            <span>{CONTENT.footer.location}</span>
          </div>
          <div class="footer-language">
            <label class="language-picker" for="lang-select">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <select id="lang-select" value={lang()} onChange={(e) => setLang(e.target.value)}>
                {LANGUAGES.map((l) => (
                  <option value={l.key}>{l.label}</option>
                ))}
              </select>
            </label>
          </div>
          <p class="footer-copyright">&copy; {new Date().getFullYear()} Solv3d. All rights reserved.</p>
        </div>
        {/* right column: nav links */}
        <div class="footer-nav">
          <div class="footer-nav-col">
            <h4>Navigate</h4>
            <a href="#top">Home</a>
            <a href="#team">Us</a>
            <a href="#projects">Projects</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer-nav-col">
            <h4>Contact</h4>
            <a href={`mailto:${CONTACT_EMAIL}`}>Email us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
