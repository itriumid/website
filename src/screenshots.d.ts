// Screenshots are imported with their widths first, as `…webp?w=400;800&enhanced`, so the widths
// can be listed: the image plugin's own declaration only matches paths that end in `?enhanced`.
declare module '*&enhanced' {
	import type { Picture } from '@sveltejs/enhanced-img';

	const value: Picture;
	export default value;
}
