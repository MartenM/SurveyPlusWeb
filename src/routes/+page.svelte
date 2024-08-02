
<script lang="ts">

import {Button} from "flowbite-svelte";
import {AngleRightOutline, FileOutline} from "flowbite-svelte-icons";

</script>

<div class="landing">
    <div class="container">
        <div class="row center-xs">
            <div class="col-xs-6">
                <div class="flex flex-col bg-slate-100 rounded-xl dark:bg-amber-800 py-8 justify-center">
                    <div class="flex flex-row justify-center mb-2">
                        <span class="text-slate-700 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">Survey</span>
                        <span class="text-amber-400 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">Plus</span>
                    </div>

                    <div class="text-slate-400 font-extrabold">Online result viewer</div>

                    <div class="flex flex-row px-10 justify-center mt-8">
                        <a href="https://www.spigotmc.org/resources/49496/"><Button class="bg-amber-500"> Resource Page <FileOutline class="w-4 h-4 ml-2"/></Button></a>
                        <div class="w-4"></div>
                        <a href="/view/demo"><Button color="light">Demo <AngleRightOutline class="w-4 h-4 ml-2" /></Button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .landing {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>