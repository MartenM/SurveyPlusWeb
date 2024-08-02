<script lang="ts">
    import PieQuestionViewer from "$lib/components/QuestionTypes/PieQuestionViewer.svelte";
    import BarQuestionViewer from "$lib/components/QuestionTypes/BarQuestionViewer.svelte";

    export let answers: NormalAnswers;
    export let questionType: String;

</script>

<div class="flex flex-col w-full items-center align-center p-6">
    {#if questionType ==="CLOSED" || questionType ==="SELECT"}
        <div style="width: 40%" class="min-h-56">
            <PieQuestionViewer answers={answers} questionType={questionType}/>
        </div>
    {:else}
        <BarQuestionViewer answers={answers} questionType={questionType}/>
    {/if}

</div>
