function throttle(Fn, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;

        const later = () => {
            clearTimeout(timeout);
            timeout = null;
            Fn.apply(context, args);
        };

        if (!timeout) {
            timeout = setTimeout(later, delay);
        }
    };
}
