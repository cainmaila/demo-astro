<script lang="ts">
  let { init = 0 } = $props();
  let count = $state(init);
</script>

<h2>計數器</h2>
<button onclick={() => (count += 1)}>
  點擊次數：{count}
</button>
