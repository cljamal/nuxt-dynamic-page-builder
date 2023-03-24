<script setup>
	import {useAdminStore} from "~/stores/admin/useAdminStore";
</script>

<template>
	<div>
		<pre>{{ useAdminStore().getAvailableComponents() }}</pre>

		<h1>Index</h1>
		<p>HOME PAGE</p>
	</div>
</template>
