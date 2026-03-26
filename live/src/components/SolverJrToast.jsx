import { createSignal, onMount, Show } from "solid-js";
import { t } from "../data/content";
import "./SolverJrToast.css";

const TOAST_STORAGE_KEY = "solv3d-solver-jr-toast-dismissed";

export default function SolverJrToast() {
  const [open, setOpen] = createSignal(false);

  onMount(() => {
    const dismissed = typeof localStorage !== "undefined" && localStorage.getItem(TOAST_STORAGE_KEY) === "true";
    if (!dismissed) {
      window.setTimeout(() => setOpen(true), 320);
    }
  });

  function dismiss() {
    setOpen(false);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(TOAST_STORAGE_KEY, "true");
    }
  }

  return (
    <Show when={open()}>
      <aside class="solver-toast" aria-live="polite">
        <button
          type="button"
          class="solver-toast-close"
          aria-label={t().diagnostic.dismiss}
          onClick={dismiss}
        >
          <span>&times;</span>
        </button>
        <span class="solver-toast-kicker">{t().diagnostic.eyebrow}</span>
        <p class="solver-toast-body">{t().diagnostic.bannerBody}</p>
        <a class="solver-toast-link" href="#ask" onClick={dismiss}>
          {t().diagnostic.cta}
        </a>
      </aside>
    </Show>
  );
}
