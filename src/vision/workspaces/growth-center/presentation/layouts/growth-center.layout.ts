/**
 * -----------------------------------------------------------------------------
 * TeoCRM Vision UI
 * Growth Center™
 * -----------------------------------------------------------------------------
 * Presentation - Layout
 *
 * Defines the visual composition of the Executive Workspace.
 * This layout is framework-agnostic and returns plain HTML.
 * -----------------------------------------------------------------------------
 */

export function renderGrowthCenterLayout(): string {
  return `
    <main class="gc-workspace">

      <section class="gc-section gc-section--narrative">
        {{executive-narrative}}
      </section>

      <section class="gc-section gc-section--insight">
        {{executive-insight}}
      </section>

      <section class="gc-section gc-section--focus">
        {{adaptive-focus}}
      </section>

      <section class="gc-section gc-section--business">
        {{business-pulse}}
      </section>

      <section class="gc-section gc-section--productivity">
        {{productivity}}
      </section>

      <section class="gc-section gc-section--awareness">
        {{business-awareness}}
      </section>

    </main>
  `;
}