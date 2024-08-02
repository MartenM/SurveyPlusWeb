<script lang="ts">
    import QuestionViewer from "$lib/components/QuestionViewer.svelte";
    import LogoText from "$lib/components/LogoText.svelte";

    export let surveyResult: SurveyResult;

    function formatSeconds(totalSeconds: number): string {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        if (minutes > 0) {
            return `${minutes} minutes`;
        } else {
            return `${seconds} seconds`;
        }
    }

    let generalStats = [
        {
            name: "Responses",
            value: surveyResult.participants
        },
        {
            name: "Avg. Time",
            value: formatSeconds(surveyResult.averageTime)
        },
        {
            name: "Questions",
            value: surveyResult.questions.length
        },
    ]
</script>

<div class="flex flex-col bg-slate-100 border-slate-200 border-2 rounded-xl dark:bg-amber-800 py-8 justify-center mb-4">
    <div class="flex flex-col justify-center mb-2">
        <h1 class="text-slate-700 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">{surveyResult.meta.name}</h1>
        <p class="mt-5 font-light">{surveyResult.meta.description}</p>
    </div>
</div>

<div class="flex flex-col bg-slate-100 border-slate-200 border-2 rounded-xl dark:bg-amber-800 py-4 justify-center mb-4">
    <div class="flex flex-col justify-center">
        <div class="flex flex-row justify-around w-full">
            {#each generalStats as stat}
                <div class="flex flex-col">
                    <div class="font-bold text-slate-600 text-2xl">{stat.name}</div>
                    <div class="font-bold text-slate-700 text-4xl whitespace-pre-wrap">{stat.value}</div>
                </div>
            {/each}
        </div>
    </div>
</div>

{#each surveyResult.questions as question, i}
    <div class="flex flex-col bg-slate-100 border-slate-200 border-2 rounded-xl dark:bg-amber-800 py-4 mb-4">
        <QuestionViewer questionIndex={i} question={question}/>
    </div>
{/each}

<hr/>
<LogoText textSize="small"/>

<style>

</style>
