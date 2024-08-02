<script lang="ts">
    import {Button, Pagination, PaginationItem} from "flowbite-svelte";

    export let answers: OpenAnswers;
    import { writable } from 'svelte/store';
    import {ArrowLeftOutline, ArrowRightOutline} from "flowbite-svelte-icons";

    // Number of entries per page
    const entriesPerPage = 5;

    // Current page (0-indexed)
    let currentPage = writable(0);

    // Calculate the total number of pages
    $: totalPages = Math.ceil(answers.data.length / entriesPerPage);

    // Compute the entries to display based on the current page
    $: paginatedEntries = answers.data.slice(
        $currentPage * entriesPerPage,
        ($currentPage + 1) * entriesPerPage
    );

    // Function to change page
    function changePage(newPage: number) {
        if (newPage >= 0 && newPage < totalPages) {
            currentPage.set(newPage);
        }
    }

    function nextPage() {
        changePage($currentPage + 1);
    }

    function previousPage() {
        changePage($currentPage - 1);
    }
</script>

<!-- Pagination controls -->
<div class="flex flex-col items-center">

    <div class="flex space-x-3 rtl:space-x-reverse">
        <Button color="light" large class="flex items-center" on:click={() => previousPage()} disabled={$currentPage === 0}>
            <ArrowLeftOutline class="me-2 w-5 h-5" />
            Previous
        </Button>
        <div class="my-2">
            <span>Page</span> {$currentPage + 1} <span>of</span> {totalPages}
        </div>
        <Button color="light" large class="flex items-center" on:click={() => nextPage()} disabled={$currentPage === totalPages - 1}>
            Next
            <ArrowRightOutline class="ms-2 w-5 h-5" />
        </Button>
    </div>

</div>

<!-- Display the paginated entries -->
<div class="p-5">
    {#each paginatedEntries as entry, index}
        <div class="flex flex-col items-start m-5 bg-white rounded-xl">
            <div class="w-full p-4"><span class="mx-1 text-lg font-bold text-slate-400">“</span>{entry.answer}<span class="mx-1 text-lg font-bold text-slate-400">”</span></div>
            <div class="flex flex-row bg-blue-200 rounded-b-xl items-center w-full p-1" >
                <img class="avatar ml-4" src="https://mc-heads.net/avatar/{entry.uuid}" alt="avatar">
                <div class="ml-4 italic">{entry.user}</div>
            </div>
        </div>
    {/each}
</div>

<style>
    .avatar {
        height: 16px;
        width: 16px;
    }
</style>