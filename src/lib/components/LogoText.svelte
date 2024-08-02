<script lang="ts">

    export let textSize: string = "large";

</script>

<a href="/">
    {#if textSize === 'large'}
        <div class="flex flex-row justify-center mb-2">
            <span class="text-slate-700 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">Survey</span>
            <span class="text-amber-400 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">Plus</span>
        </div>
    {:else if textSize === 'small'}
        <div class="flex flex-row justify-center mb-2">
            <span class="text-slate-700 font-extrabold text-1xl sm:text-1xl lg:text-1xl tracking-tight dark:text-white">Survey</span>
            <span class="text-amber-400 font-extrabold text-1xl sm:text-1xl lg:text-1xl tracking-tight dark:text-white">Plus</span>
        </div>
    {/if}
</a>