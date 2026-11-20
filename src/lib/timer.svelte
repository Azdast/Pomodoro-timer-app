<script>
    import { isRunning, btnRestart } from "./stores/states.js";

    let minutes = $state(25);
    let seconds = $state(0);
    let pandoraNums = $state(0);

    let isWorkingTime = $state(true);

    $effect(() => {
        if (!$isRunning) return;

        const timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (isWorkingTime == true) {
                    minutes = 5;
                    seconds = 0;
                    pandoraNums++;
                    isWorkingTime = false;
                } else {
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

        $isRunning = false
        isWorkingTime = true;
        minutes = 25;
        seconds = 0;
        pandoraNums = 0;
        $btnRestart = false;
    });
</script>

<div class="timer_display">
    <h1>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </h1>

    <h4>
        {isWorkingTime ? "Working Time" : "Break Time"}
    </h4>
    <h3>
        {pandoraNums}
    </h3>
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
    }
    .timer_display h3 {
        margin: 0;
        margin-bottom: 10px;
        color: white;   }
</style>
