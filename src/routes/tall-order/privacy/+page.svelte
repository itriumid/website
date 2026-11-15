<script lang="ts">
	import Policy from '#lib/Policy.svelte';
	import { TALL_ORDER_PRIVACY } from '#lib/content.js';
</script>

<Policy
	policy={TALL_ORDER_PRIVACY}
	path="/tall-order/privacy"
	other={{ label: 'Terms', page: '/tall-order/terms' }}
/>
