import { createSignal, onMount, For } from "solid-js";
import { t } from "../data/content";
import "./Faq.css";

function FaqItem(props) {
  const [open, setOpen] = createSignal(false);
  return (
    <article class="faq-card" classList={{ "is-open": open() }}>
      <button class="faq-trigger" onClick={() => setOpen(!open())}>
        <h3>{props.question}</h3>
        <span class="faq-chevron">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      <div class="faq-body">
        <p>{props.answer}</p>
      </div>
    </article>
  );
}

export default function Faq() {
  let sectionRef;
  onMount(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    sectionRef?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  });
  return (
    <section class="section" id="faq" ref={sectionRef}>
      <div class="shell section-shell">
        <div class="section-heading reveal">
          <p class="faq-eyebrow">{t().faq.eyebrow}</p>
          <h2>{t().faq.title}</h2>
          <p>{t().faq.intro}</p>
        </div>
        <div class="faq-grid reveal">
          <For each={t().faq.items}>
            {(item) => <FaqItem question={item.question} answer={item.answer} />}
          </For>
        </div>
      </div>
    </section>
  );
}
