// Button styles shared by every page. Pink (the primary button) marks the one main action, and
// the secondary button's edge reaches 3:1 (--control-border), so people can find it.
/** The pink fill has a deep rose edge in light mode, where pastel pink alone is 1.4:1 on a panel. */
export const primaryButton =
	'inline-flex items-center rounded-full border border-accent-edge bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-85';
export const secondaryButton =
	'inline-flex items-center rounded-full border border-control-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface';

// A section's heading: a real heading in sentence case, a clear size step above the text under it.
export const sectionHeading = 'text-3xl font-bold tracking-tight text-balance sm:text-4xl';
// Two buttons stacked full width on phones, where neither label fits half the width.
export const buttonStack = 'flex flex-col gap-3 sm:flex-row [&>a]:justify-center';
