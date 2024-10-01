<script lang="ts">
    import {Button} from "flowbite-svelte";

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

    function handlePageChange(input: Event) {
        const target = input.target as HTMLInputElement;
        if (target.value === "") return;

        const newPage = target.valueAsNumber;
        if (newPage < 1) return;
        if (newPage > totalPages) return;

        currentPage.set(newPage - 1);
    }

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
            <span>Page</span>
            <input
                type="number" value={$currentPage + 1}
                on:input={handlePageChange} min="1" max="{totalPages}"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span>of</span>
            {totalPages}
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
        <div class="flex flex-col border-slate-200 border-2 items-start m-5 bg-white rounded-xl">
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