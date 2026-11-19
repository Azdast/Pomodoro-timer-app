<script>
    import { isRunning, btnRestart } from "./stores/states.js";

    let hours = $state(0);
    let minutes = $state(25);
    let seconds = $state(0);

    let isWorkingTime = $state(true);

    $effect(() => {
        if (!$isRunning) return;

        const timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                if (isWorkingTime == true) {
                    hours = 0;
                    minutes = 5;
                    seconds = 0;
                    isWorkingTime = false;
                } else {
                    hours = 0;
                    minutes = 25;
                    seconds = 0;
                    isWorkingTime = true;
                }
                console.log("Time's up!");
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    $effect(() => {
        if (!$btnRestart) return;

        $isRunning = false;
        hours = 0;
        minutes = 25;
        seconds = 0;
        $btnRestart = false;
    });
</script>

<div class="timer_display">
    <h1>
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
    </h1>

    <h4>
        {isWorkingTime ? "Working Time" : "Break Time"}
    </h4>
</div>

<style>
    .timer_display {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .timer_display h1 {
        margin: 0;
        color: white;
    }
    .timer_display h4 {
        margin: 0;
        color: white;
        margin-bottom: 20px;
    }
</style>
