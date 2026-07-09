/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Executive Insight™
 *
 * Highlights the single most valuable recommendation for today.
 * -----------------------------------------------------------------------------
 */

import type { ExecutiveInsight } from "../../../domain";

export function renderExecutiveInsight(
  insight: ExecutiveInsight,
): string {
  return `
    <article class="gc-card gc-card--insight">

      <header class="gc-card__header">

        <span class="gc-card__eyebrow">
          Executive Insight™
        </span>

        <h2 class="gc-card__title">
          ${insight.title}
        </h2>

      </header>

      <p class="gc-card__description">
        ${insight.description}
      </p>

      <p class="gc-card__reason">
        ${insight.reason}
      </p>

      <footer class="gc-card__footer">

        <span class="gc-priority gc-priority--${insight.priority}">
          Prioridad: ${insight.priority}
        </span>

        <span class="gc-confidence">
          Confianza ${insight.confidence}%
        </span>

        <button
          class="gc-button gc-button--primary"
          type="button"
        >
          ${insight.action.label}
        </button>

      </footer>

    </article>
  `;
}