import type { AdaptiveFocus } from "../../../domain";

export function renderAdaptiveFocusCard(
  focus: AdaptiveFocus,
): string {

  return `
    <article class="gc-card gc-card--focus">

      <header class="gc-card__header">

        <span class="gc-card__eyebrow">
          🎯 Adaptive Focus™
        </span>

        <h2 class="gc-card__title">
          ${focus.title}
        </h2>

      </header>

      <section class="gc-focus">

        <div class="gc-focus__score">

          <span class="gc-focus__score-value">
            ${focus.priority}
          </span>

          <span class="gc-focus__score-label">
            Prioridad actual
          </span>

        </div>

        <div class="gc-focus__message">

          <p class="gc-card__summary">
            Esta es la acción que tendrá mayor impacto en tu crecimiento si la realizas hoy.
          </p>

        </div>

      </section>

      <section class="gc-focus__details">

        <div class="gc-focus__item">

          <span class="gc-focus__label">
            Tipo
          </span>

          <strong>
            ${focus.type}
          </strong>

        </div>

        <div class="gc-focus__item">

          <span class="gc-focus__label">
            Responsable
          </span>

          <strong>
            ${focus.assignee}
          </strong>

        </div>

      </section>

      <footer class="gc-card__footer">

        <button
          class="gc-button gc-button--primary"
          type="button">

          Ejecutar acción

        </button>

      </footer>

    </article>
  `;
}