<script lang="ts">
  export let data
  $: ({ protocolSlug } = data)
</script>

<h1>{protocolSlug}</h1>
