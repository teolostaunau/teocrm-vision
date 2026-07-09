/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Layout
 *
 * Defines the visual composition of the Executive Workspace.
 *
 * This component is intentionally "dumb":
 * - No business logic
 * - No domain access
 * - No state
 * - No effects
 * -----------------------------------------------------------------------------
 */

import type { ReactNode } from "react";

export type GrowthCenterLayoutProps = Readonly<{
  narrative: ReactNode;
  insight: ReactNode;
  focus: ReactNode;
  business: ReactNode;
  productivity: ReactNode;
  awareness: ReactNode;
}>;

export function GrowthCenterLayout({
  narrative,
  insight,
  focus,
  business,
  productivity,
  awareness,
}: GrowthCenterLayoutProps) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-6">
      <section aria-labelledby="executive-narrative">
        {narrative}
      </section>

      <section aria-labelledby="executive-insight">
        {insight}
      </section>

      <section aria-labelledby="adaptive-focus">
        {focus}
      </section>

      <section aria-labelledby="business-pulse">
        {business}
      </section>

      <section aria-labelledby="productivity">
        {productivity}
      </section>

      <section aria-labelledby="business-awareness">
        {awareness}
      </section>
    </main>
  );
}

export default GrowthCenterLayout;