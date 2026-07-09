/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Business Pulse™
 *
 * Executive summary of the business health.
 *
 * Product Rule:
 * Never render more than five metrics.
 * -----------------------------------------------------------------------------
 */

import type { BusinessPulse } from "../../../domain";

export function renderBusinessPulse(
  business: BusinessPulse,
): string {

  const metrics = business.metrics
    .slice(0, 5)
    .map(
      (metric) => `
        <li class="gc-metric">

          <span class="gc-metric__label">
            ${metric.label}
          </span>

          <strong class="gc-metric__value">
            ${metric.value}
          </strong>

          <span class="gc-trend gc-trend--${metric.trend}">
            ${metric.trend}
          </span>

        </li>
      `,
    )
    .join("");

  return `
    <article class="gc-card gc-card--business">

      <header class="gc-card__header">

        <span class="gc-card__eyebrow">
          Business Pulse™
        </span>

        <h2 class="gc-card__title">
        Business Pulse™
        </h2>

      </header>

      <p class="gc-card__summary">
        ${business.summary}
      </p>

      <ul class="gc-metrics">

        ${metrics}

      </ul>

    </article>
  `;
}