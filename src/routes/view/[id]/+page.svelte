<script lang="ts">
    import SurveyResultViewer from "$lib/components/SurveyResultLoader.svelte";
    import { page } from '$app/stores';

    $: id = $page.params.id;
    $: route = `https://bytebin.lucko.me/${id}`;
</script>

<SurveyResultViewer dataUrl={route}/>