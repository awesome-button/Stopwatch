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
    };

    const stop = () => {
        if (running === false) {
            alert(`The clock has already been stopped. Press 'start' to start again or 'duration' to see your time`);
            return;
        }
        stopTime = new Date();
        running = false;
    };

    const reset = () => {
        startTime = 0;
        stopTime = 0;
        running = false;
        alert(`Your clock has been reset. You can start it again`);
    };

    const duration = () => {
        let seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        return seconds;
    };

    return {start, stop, reset, duration, running, startTime};

}

