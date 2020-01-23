const StopWatch = () => {
    let startTime = 0;
    let stopTime = 0;
    let running = false;
    let duration = 0;
    let time = document.getElementsByClassName('time')[0];

    const start = () => {
        if (running === true) {
            alert(`The clock has already been started. Press 'stop' to stop or 'reset' to restart`);
            return;
        }
        startTime = new Date();
        running = true;
        alert('Timer started');
    };

    const stop = () => {
        if (running === false) {
            alert(`The clock has already been stopped or has not yet been started. Press 'start' to start again`);
            return;
        }
        stopTime = new Date();
        running = false;
        alert('Timer stopped');

        duration = (stopTime.getTime() - startTime.getTime()) / 1000;
        time.innerText = duration;
    };

    const reset = () => {
        startTime = 0;
        stopTime = 0;
        running = false;
        time.innerText = 0;
        alert(`Your clock has been reset. You can start it again`);
    };

    return {start, stop, reset};
}

const watch = StopWatch();

let startButton = document.getElementsByClassName("start")[0];
let stopButton = document.getElementsByClassName("stop")[0];
let resetButton = document.getElementsByClassName("reset")[0];


startButton.addEventListener('click', () => watch.start());
stopButton.addEventListener('click', () => watch.stop());
resetButton.addEventListener('click', () => watch.reset());



