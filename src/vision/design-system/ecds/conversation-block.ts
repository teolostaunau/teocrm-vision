export interface ConversationBlockProps {

    eyebrow: string;

    title: string;

    message: string;

    recommendation?: string;

    actionLabel?: string;

}

export function renderConversationBlock(
    props: ConversationBlockProps,
): string {

    return `
        <article class="gc-card">

            <header class="gc-card__header">

                <span class="gc-card__eyebrow">
                    ${props.eyebrow}
                </span>

                <h2 class="gc-card__title">
                    ${props.title}
                </h2>

            </header>

            <div class="gc-card__content">

                <p class="gc-card__summary">
                    ${props.message}
                </p>

                ${
                    props.recommendation
                        ? `
                            <div class="gc-briefing">

                                ${props.recommendation}

                            </div>
                        `
                        : ""
                }

            </div>

            ${
                props.actionLabel
                    ? `
                        <footer class="gc-card__footer">

                            <button
                                class="gc-button gc-button--primary">

                                ${props.actionLabel}

                            </button>

                        </footer>
                    `
                    : ""
            }

        </article>
    `;
}