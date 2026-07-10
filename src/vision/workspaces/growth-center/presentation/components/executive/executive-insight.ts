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
        <section class="gc-card gc-opportunity">

            <div class="gc-opportunity__badge">

                🎯 TU MEJOR OPORTUNIDAD

            </div>

            <h2 class="gc-opportunity__title">

                ${insight.title}

            </h2>

            <p class="gc-opportunity__summary">

                ${insight.summary}

            </p>

            <div class="gc-opportunity__recommendation">

                ${insight.recommendation}

            </div>

            <button class="gc-button gc-button--primary">

                Llamar ahora →

            </button>

        </section>
    `;

}