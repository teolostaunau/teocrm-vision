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

    return `
        <section class="gc-card gc-snapshot">

            <div class="gc-snapshot__badge">

                📈 ASÍ AMANECE TU EMPRESA

            </div>

            <ul class="gc-snapshot__list">

                <li>

                    <span>🟢</span>

                    <span>
                        ${business.health}
                    </span>

                </li>

                <li>

                    <span>🟢</span>

                    <span>
                        ${business.opportunities}
                    </span>

                </li>

                <li>

                    <span>🟡</span>

                    <span>
                        ${business.pending}
                    </span>

                </li>

                <li>

                    <span>🔵</span>

                    <span>
                        ${business.agenda}
                    </span>

                </li>

            </ul>

        </section>
    `;

}