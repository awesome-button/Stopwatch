const StopWatch = () => {
    let startTime = 0;
    let stopTime = 0;
    let running = false;

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
            alert(`The clock has already been stopped or has not yet been started. Press 'start' to start again or 'duration' to see your time`);
            return;
        }
        stopTime = new Date();
        running = false;
        alert('Timer stopped');
    };

    const reset = () => {
        startTime = 0;
        stopTime = 0;
        running = false;
        alert(`Your clock has been reset. You can start it again`);
    };

    const duration = () => {
        if (running === true && stopTime === 0) {
            alert('Please stop the clock before you can see your time');
            return;
        }

        if (startTime === 0) {
            alert('Please start the timer first');
            return;
        }

        let seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        alert(seconds);
    };
    
    return {start, stop, reset, duration};
}

const watch = StopWatch();

let startButton = document.getElementsByClassName("start")[0];
let stopButton = document.getElementsByClassName("stop")[0];
let resetButton = document.getElementsByClassName("reset")[0];
let durationButton = document.getElementsByClassName("duration")[0];


startButton.addEventListener('click', () => watch.start());
stopButton.addEventListener('click', () => watch.stop());
resetButton.addEventListener('click', () => watch.reset());
durationButton.addEventListener('click', () => watch.duration());



