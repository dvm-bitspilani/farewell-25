export const randInt = (max, min = 0) => Math.floor(Math.random()*(max - min) + min);

export const debouncedHandler = (callBack, period) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => callBack(), period);
    };
}