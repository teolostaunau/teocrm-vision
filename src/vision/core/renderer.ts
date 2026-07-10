/**
 * ============================================================================
 * Teo Growth™ Vision UI
 * Executive Renderer™
 * ----------------------------------------------------------------------------
 * Common HTML shell used by every Executive Workspace.
 * ============================================================================
 */

export interface RenderPageOptions {
  readonly title: string;
  readonly workspace: string;
  readonly content: string;
}

export function renderPage(options: RenderPageOptions): string {
  const {
    title,
    workspace,
    content,
  } = options;

  return `
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">

<title>${title}</title>

<link
    rel="stylesheet"
    href="./src/vision/styles/index.css">

</head>

<body>

<div class="vision-shell">

<header class="vision-header">

    <div class="vision-brand">

        <span class="vision-logo">
            Teo Growth™
        </span>

        <span class="vision-workspace">
            ${workspace}
        </span>

    </div>

</header>

<main class="vision-main">

${content}

</main>

</div>

</body>

</html>
`;
}