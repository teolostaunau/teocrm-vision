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
    <main class="gc-layout">

    <section class="gc-hero">

      <div class="gc-hero__content">

        <span class="gc-hero__eyebrow">

          TEO GROWTH™

        </span>

        <h1 class="gc-hero__title">

          ☀️ Buenos días, Teo.

        </h1>

        <p class="gc-hero__lead">

          Mientras tomabas tu café...

          yo estuve trabajando.

        </p>

        <p class="gc-hero__message">

          Revisé tus conversaciones, tus oportunidades
          y el estado de tu negocio.

          <br><br>

          <strong>
            Encontré dos oportunidades que pueden ayudarte
            a crecer hoy.
          </strong>

        </p>

        <div class="gc-hero__actions">

          <button class="gc-button gc-button--primary">

            🚀 Empezar mi día

          </button>

          <span class="gc-hero__hint">

            Toma menos de 2 minutos.

          </span>

        </div>

      </div>

    </section>

      {{executive-narrative}}

      {{executive-insight}}

      {{adaptive-focus}}

      {{business-pulse}}

      {{productivity}}

      {{business-awareness}}

    </main>
  `;
}