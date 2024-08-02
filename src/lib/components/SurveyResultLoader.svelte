<script lang="ts">
    import {Alert, Spinner} from "flowbite-svelte";
    import SurveyResultViewer from "$lib/components/SurveyResultViewer.svelte";

    export let dataUrl : String;

    async function fetchData(): Promise<SurveyResult> {
        const response = await fetch(`${dataUrl}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    }

    let dataPromise: Promise<SurveyResult> = fetchData();
</script>

{#await dataPromise}
    <div class="flex align-center justify-center w-full">
        <Spinner/>
    </div>
{:then dataEntry}
    <SurveyResultViewer surveyResult={dataEntry}/>
{:catch error}
    <Alert color="red">
        <span class="font-bold">Error: </span>
        <span>{error}</span>
    </Alert>
{/await}


<style>


</style>