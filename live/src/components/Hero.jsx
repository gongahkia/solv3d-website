import { createSignal, onMount, onCleanup, For } from "solid-js";
import { t } from "../data/content";
import "./Hero.css";

export default function Hero() {
  let sectionRef;
  const [phase, setPhase] = createSignal(0);
  const [cycle, setCycle] = createSignal(0);
  let timer;
  onMount(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } },
      { threshold: 0.15 }
    );
    if (sectionRef) obs.observe(sectionRef);
    const runCycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 800);
      setTimeout(() => setPhase(2), 2200);
      setTimeout(() => {
        setPhase(3);
        setTimeout(() => { setCycle(c => c + 1); runCycle(); }, 3000);
      }, 3600);
    };
    timer = setTimeout(runCycle, 600);
  });
  onCleanup(() => clearTimeout(timer));

  return (
    <section class="hero section" ref={sectionRef}>
      <div class="shell hero-grid reveal" ref={sectionRef}>
        <div class="hero-copy">
          <p class="hero-kicker">{t().hero.eyebrow}</p>
          <h1>{t().hero.title}</h1>
          <p class="hero-body">{t().hero.body}</p>
        </div>
        <div class="hero-window" aria-hidden="true">
          <div class="hw-chrome">
            <div class="hw-dots"><span /><span /><span /></div>
            <div class="hw-tabs">
              <span class="hw-tab is-active">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                Board
              </span>
              <span class="hw-tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                List
              </span>
              <span class="hw-tab">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg>
                Timeline
              </span>
            </div>
          </div>
          <div class="hw-board">
            <div class="hw-col">
              <div class="hw-col-header">
                <span class="hw-status hw-status-red" />
                <span class="hw-col-title">{t().hero.columns[0].label}</span>
                <span class="hw-col-count">{t().hero.columns[0].items.length}</span>
              </div>
              <div class="hw-col-cards">
                <For each={t().hero.columns[0].items}>
                  {(item, i) => (
                    <div class="board-card" classList={{ "is-fading-out": phase() >= 1 }} style={{ "--move-delay": `${i() * 0.15}s` }}>
                      <div class="board-card-inner">
                        <span class="board-card-text">{item}</span>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
            <div class="hw-col">
              <div class="hw-col-header">
                <span class="hw-status hw-status-amber" />
                <span class="hw-col-title">{t().hero.columns[1].label}</span>
                <span class="hw-col-count" classList={{ "is-counting": phase() >= 1 }}>{phase() >= 1 ? t().hero.columns[1].items.length : 0}</span>
              </div>
              <div class="hw-col-cards">
                <For each={t().hero.columns[1].items}>
                  {(item, i) => (
                    <div class="board-card" classList={{ "is-arriving": phase() >= 1, "is-shifting": phase() >= 2 }} style={{ "--move-delay": `${i() * 0.18}s` }}>
                      <div class="board-card-inner board-card-lever">
                        <span class="board-card-text">{item}</span>
                        <span class="board-card-arrow">&rarr;</span>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
            <div class="hw-col">
              <div class="hw-col-header">
                <span class="hw-status hw-status-green" />
                <span class="hw-col-title">{t().hero.columns[2].label}</span>
                <span class="hw-col-count" classList={{ "is-counting": phase() >= 2 }}>{phase() >= 2 ? t().hero.columns[2].items.length : 0}</span>
              </div>
              <div class="hw-col-cards">
                <For each={t().hero.columns[2].items}>
                  {(item, i) => (
                    <div class="board-card" classList={{ "is-arriving": phase() >= 2, "is-complete": phase() >= 3 }} style={{ "--move-delay": `${i() * 0.18}s` }}>
                      <div class="board-card-inner board-card-outcome">
                        <span class="board-card-check">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span class="board-card-text">{item}</span>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
          <div class="hw-progress">
            <div class="hw-progress-bar" classList={{ "phase-1": phase() >= 1, "phase-2": phase() >= 2, "phase-3": phase() >= 3 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
