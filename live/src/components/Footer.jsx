import { t, CONTACT_EMAIL } from "../data/content";
import { lang, setLang } from "../data/lang";
import "./Footer.css";

const LANGUAGES = [
  { key: "en", label: "English" },
  { key: "zh", label: "中文" },
  { key: "ms", label: "Bahasa Melayu" },
  { key: "ta", label: "தமிழ்" },
];

export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-left">
          <a class="brand" href="#top" aria-label="Solv3d home">
            <span class="brand-mark">{t().brand.mark}</span>
            <span class="brand-text">
              <strong>{t().brand.name}</strong>
              <span>{t().brand.tagline}</span>
            </span>
          </a>
          <div class="footer-contact-row">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span class="footer-dot" />
            <span>{t().footer.location}</span>
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
          <p class="footer-copyright">{t().footer.copyright}</p>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-col">
            <h4>{t().footer.navigate}</h4>
            <a href="#top">{t().footer.home}</a>
            <a href="#team">{t().nav.us}</a>
            <a href="#projects">{t().nav.projects}</a>
            <a href="#faq">FAQ</a>
          </div>
          <div class="footer-nav-col">
            <h4>{t().footer.contact}</h4>
            <a href={`mailto:${CONTACT_EMAIL}`}>Email us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
