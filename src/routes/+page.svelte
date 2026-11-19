<script lang="ts">
    import { btnRestart, isRunning } from "../lib/stores/states.js";
    import Timer from "../lib/timer.svelte";
</script>

<div class="container">
    <Timer />
    <div class="main_buttons">
        <button
            class:paused={!$isRunning}
            onclick={() => isRunning.update((value) => !value)}
        >
            {$isRunning ? "Pause" : "Start"}
        </button>
    </div>
    <div class="secend_buttons">
        <button onclick={() => btnRestart.set(true)}> Restart</button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 500px;
        gap: 10px;
    }

    .main_buttons button {
        color: white;
        background-color: #ff6347;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;

        transition: all 0.4s ease;
    }
    .main_buttons button:hover {
        padding: 12px 22px;
    }
    .secend_buttons button {
        color: white;
        background-color: #102614;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
    }
    .secend_buttons button:hover {
        padding: 9px 14px;
    }
</style>
