import { onMount, For } from "solid-js";
import { CONTENT } from "../data/content";
import "./Team.css";

export default function Team() {
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
    <section class="section" id="team" ref={sectionRef}>
      <div class="shell section-shell">
        <div class="section-heading reveal">
          <h2>{CONTENT.team.title}</h2>
          <p>{CONTENT.team.intro}</p>
        </div>
        <div class="team-grid">
          <For each={CONTENT.team.members}>
            {(member, i) => (
              <div class="team-card reveal" style={{ "--reveal-delay": `${i() * 0.12}s` }}>
                <div class="team-portrait">
                  <img src={member.portrait} alt={member.name} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p class="team-role">{member.role}</p>
                <div class="team-tags">
                  <For each={member.tags}>{(tag) => <span>{tag}</span>}</For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
