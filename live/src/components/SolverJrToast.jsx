import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { t } from "../data/content";
import "./SolverJrToast.css";

const TOAST_STORAGE_KEY = "solv3d-solver-jr-toast-dismissed";
const SOLVER_JR_TOAST_EVENT = "solver-jr-toast";

function buildLaunchToast() {
  return {
    persistDismissal: true,
    kicker: t().diagnostic.eyebrow,
    body: t().diagnostic.bannerBody,
    linkHref: "#ask",
    linkLabel: t().diagnostic.cta,
  };
}

export default function SolverJrToast() {
  const [open, setOpen] = createSignal(false);
  const [toast, setToast] = createSignal(buildLaunchToast());

  onMount(() => {
    const dismissed = typeof localStorage !== "undefined" && localStorage.getItem(TOAST_STORAGE_KEY) === "true";
    if (!dismissed) {
      window.setTimeout(() => {
        setToast(buildLaunchToast());
        setOpen(true);
      }, 320);
    }

    const handleToastEvent = (event) => {
      if (!event?.detail) return;
      setToast({
        persistDismissal: false,
        ...event.detail,
      });
      setOpen(true);
    };

    window.addEventListener(SOLVER_JR_TOAST_EVENT, handleToastEvent);
    onCleanup(() => {
      window.removeEventListener(SOLVER_JR_TOAST_EVENT, handleToastEvent);
    });
  });

  function dismiss() {
    setOpen(false);
    if (toast().persistDismissal && typeof localStorage !== "undefined") {
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
        <span class="solver-toast-kicker">{toast().kicker}</span>
        <p class="solver-toast-body">{toast().body}</p>
        <Show when={toast().linkHref && toast().linkLabel}>
          <a class="solver-toast-link" href={toast().linkHref} onClick={dismiss}>
            {toast().linkLabel}
          </a>
        </Show>
      </aside>
    </Show>
  );
}
