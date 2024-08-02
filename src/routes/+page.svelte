
<script lang="ts">

import {Button} from "flowbite-svelte";
import {AngleRightOutline, FileOutline} from "flowbite-svelte-icons";
import LogoText from "$lib/components/LogoText.svelte";

</script>

<div class="landing">
    <div class="container">
        <div class="row center-xs">
            <div class="col-xs-6">
                <div class="flex flex-col bg-slate-200 rounded-xl dark:bg-amber-800 py-8 justify-center">
                    <LogoText/>

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