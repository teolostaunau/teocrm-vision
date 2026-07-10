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

          <p class="gc-card__subtitle">
              Jueves · 9 julio 2026
          </p>

      </header>

      <div class="gc-card__content">
          <p class="gc-card__summary">
              Hoy identifiqué una oportunidad clara para impulsar tu crecimiento.
          </p>

          <div class="gc-briefing">
              <strong>🎯 Recomendación del día</strong>
              <p>
                  ${narrative.summary}
              </p>

              <p>
                  ${narrative.reason}
              </p>
          </div>
      </div>
      <footer class="gc-card__footer">

          <button
              class="gc-button gc-button--primary"
              type="button">

              Revisar agenda

          </button>

      </footer>

    </article>
  `;
}