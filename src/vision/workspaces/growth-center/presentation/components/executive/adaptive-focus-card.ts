/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Adaptive Focus Card™
 *
 * Renders the primary business priority for the current day.
 * -----------------------------------------------------------------------------
 */

import type { AdaptiveFocus } from "../../../domain";

export function renderAdaptiveFocusCard(
  focus: AdaptiveFocus,
): string {
  return `
    <article class="gc-card gc-card--focus">

      <header class="gc-card__header">

        <span class="gc-card__eyebrow">
          Adaptive Focus™
        </span>

        <h2 class="gc-card__title">
          ${focus.title}
        </h2>

      </header>

      <p class="gc-card__description">
        ${focus.description}
      </p>

      <div class="gc-focus-meta">

        <span class="gc-priority gc-priority--${focus.priority}">
          Prioridad: ${focus.priority}
        </span>

        <span class="gc-focus-type">
          Tipo: ${focus.type}
        </span>

      </div>

      ${
        focus.assignee
          ? `
            <section class="gc-focus-assignee">

              <strong>Responsable asignado</strong>

              <p>${focus.assignee}</p>

            </section>
          `
          : ""
      }

      <footer class="gc-card__footer">

        <button
        class="gc-button gc-button--primary"
        type="button"
        >
        ${focus.primaryAction.label}
        </button>

      </footer>

    </article>
  `;
}