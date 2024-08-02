<script lang="ts">
    import OtherQuestionViewer from "$lib/components/QuestionTypes/OtherQuestionViewer.svelte";
    import OpenQuestionViewer from "$lib/components/QuestionTypes/OpenQuestionViewer.svelte";

    export let questionIndex: any;
    export let question: Question;

    function getOpenAnswers() : OpenAnswers {
        return (question.answers as OpenAnswers);
    }

    function getOtherAnswers() : NormalAnswers {
        return (question.answers as NormalAnswers);
    }
</script>

<div class="flex flex-row justify-start items-center text-left px-4">
    <span class="text-2xl text-slate-700 font-bold">#{questionIndex} |</span>
    <div class="w-2"></div>
    <span class="text-slate-700">{question.text}</span>
</div>



{#if question.type === "OPEN"}
    <OpenQuestionViewer answers={getOpenAnswers()}/>
{:else}
    <OtherQuestionViewer answers={getOtherAnswers()} questionType={question.type} />
{/if}