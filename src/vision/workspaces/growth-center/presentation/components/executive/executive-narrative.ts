/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Executive Narrative™
 *
 * Renders the contextual welcome shown at the beginning
 * of the Executive Workspace.
 * -----------------------------------------------------------------------------
 */

import type { ExecutiveNarrative } from "../../../domain";

export function renderExecutiveNarrative(
  narrative: ExecutiveNarrative,
): string {

  return `
    <article class="gc-card gc-card--narrative">

      <header class="gc-card__header">
        <span class="gc-card__eyebrow">
          Executive Copilot™
        </span>

        <h2 class="gc-card__title">
          👋 ${narrative.title}
        </h2>
      </header>

      <div class="gc-card__content">
        <p class="gc-card__summary">
          Hoy identifiqué una oportunidad clara para impulsar tu crecimiento.
        </p>
        <p>
          ${narrative.summary}
        </p>
        <p>
          ${narrative.reason}
        </p>
        <p>
          Mi recomendación es comenzar por esta oportunidad antes de atender
          tareas de menor impacto.
        </p>
      </div>

      <footer class="gc-card__footer">
        <span class="gc-impact gc-impact--${narrative.impact}">
          Impacto ${narrative.impact}
        </span>
        <button
          class="gc-button gc-button--primary"
          type="button">
          Revisar agenda
        </button>
      </footer>

    </article>
  `;
}