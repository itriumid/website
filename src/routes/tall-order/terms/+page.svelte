<script lang="ts">
	import Policy from '#lib/Policy.svelte';
	import { TALL_ORDER_TERMS } from '#lib/content.js';
</script>

<Policy
	policy={TALL_ORDER_TERMS}
	path="/tall-order/terms"
	other={{ label: 'Privacy', page: '/tall-order/privacy' }}
/>
