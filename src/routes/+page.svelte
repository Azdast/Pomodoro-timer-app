<script lang="ts">
    import { btnRestart, isRunning } from "../lib/stores/states.js";
    import Timer from "../lib/timer.svelte";
</script>

<div class="container">
    <div class="circle">
        <Timer />
        <div class="main_buttons">
            <button
                class:paused={!$isRunning}
                onclick={() => isRunning.update((value) => !value)}
            >
                {$isRunning ? "Pause" : "Start"}
            </button>
        </div>
    </div>

    <div class="second_buttons">
        <button onclick={() => btnRestart.set(true)}> Restart</button>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 550px;
        gap: 10px;
    }

    .main_buttons button {
        color: white;
        background-color: #ff6347;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        margin-top: 30px;

        transition: all 0.4s ease;
    }
    .main_buttons button:hover {
        transform: scale(1.05);
    }
    .second_buttons button {
        color: white;
        background-color: #102614;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
    }
    .second_buttons button:hover {
        transform: scale(1.05);
    }
    .circle {
        width: 300px;
        height: 300px;
        border: 5px solid coral;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
