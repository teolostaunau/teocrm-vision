/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Productivity Agenda™
 * -----------------------------------------------------------------------------
 */

import type { Productivity } from "../../../domain";

export function renderProductivityAgenda(
  productivity: Productivity,
): string {

  const items = productivity.agenda
    .map(
      (item) => `
        <li class="gc-agenda__item">

          <div class="gc-agenda__time">
            ${item.time}
          </div>

          <div class="gc-agenda__content">

            <strong>
              ${item.title}
            </strong>

            ${
              item.description
                ? `
                  <p>
                    ${item.description}
                  </p>
                `
                : ""
            }

            ${
              item.assignee
                ? `
                  <span class="gc-agenda__assignee">
                    Responsable: ${item.assignee}
                  </span>
                `
                : ""
            }

            <span class="gc-priority gc-priority--${item.priority}">
              ${item.priority}
            </span>

          </div>

        </li>
      `,
    )
    .join("");

  return `
    <article class="gc-card gc-card--agenda">

      <header class="gc-card__header">

        <span class="gc-card__eyebrow">
          Productivity™
        </span>

        <h2 class="gc-card__title">
          Today's Agenda
        </h2>

      </header>

      <ul class="gc-agenda">

        ${items}

      </ul>

    </article>
  `;
}