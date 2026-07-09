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
          Executive Narrative™
        </span>

        <h1 class="gc-card__title">
          ${narrative.title}
        </h1>
      </header>

      <p class="gc-card__summary">
        ${narrative.summary}
      </p>

      <p class="gc-card__reason">
        ${narrative.reason}
      </p>

      <footer class="gc-card__footer">

        <span class="gc-impact gc-impact--${narrative.impact}">
          Impacto: ${narrative.impact}
        </span>

        <button
          class="gc-button gc-button--primary"
          type="button"
        >
          ${narrative.action.label}
        </button>

      </footer>

    </article>
  `;
}