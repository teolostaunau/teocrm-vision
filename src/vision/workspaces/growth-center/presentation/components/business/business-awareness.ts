/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Business Awareness™
 *
 * Renders contextual business observations that help the executive
 * understand situations requiring attention.
 * -----------------------------------------------------------------------------
 */

import type { BusinessAwareness } from "../../../domain";

export function renderBusinessAwareness(
  awareness: BusinessAwareness,
): string {
  const items = awareness.items
    .map(
      (item) => `
        <li class="gc-awareness__item">

          <span class="gc-awareness__level gc-awareness__level--${item.priority}">
            ${item.priority}
          </span>

          <div class="gc-awareness__content">

            <strong>
              ${item.title}
            </strong>

            <p>
              ${item.description}
            </p>

          </div>

        </li>
      `,
    )
    .join("");

  return `
    <article class="gc-card gc-card--awareness">

      <header class="gc-card__header">

        <span class="gc-card__eyebrow">
          Business Awareness™
        </span>

        <h2 class="gc-card__title">
          Business Awareness™
        </h2>

      </header>

      <ul class="gc-awareness">

        ${items}

      </ul>

    </article>
  `;
}