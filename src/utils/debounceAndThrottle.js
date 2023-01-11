let debounceTimeout = null;
let throttleInterval = null;
let throttleTimeout = null;

function clearThrottleIntervalAndTimeout() {
    clearInterval(throttleInterval);
    clearTimeout(throttleTimeout);

    throttleInterval = null;
    throttleTimeout = null;
}

export function debounce(callback, delay = 150) {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(callback, delay);
}

export function throttle(callback, delay = 150) {
    if (throttleInterval === null) {
        throttleInterval = setInterval(callback, delay);
    }

    clearTimeout(throttleTimeout);
    throttleTimeout = setTimeout(clearThrottleIntervalAndTimeout, 1000);
}
