function originalAjax(params) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.status);
                }
            }
        };
        xhr.open(params.methods, params.url);
        xhr.send();
    });
}
function ajax(url, options) {
    return originalAjax({
        url,
        ...options,
    });
}
function generateAjaxFn(methods) {
    return function (url, options) {
        return originalAjax({
            url,
            ...options,
            methods,
        });
    };
}
ajax.get = generateAjaxFn("GET");
ajax.post = generateAjaxFn("POST");
