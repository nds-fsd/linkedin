export const apiWrapper = (url, method, body = {},  headers = {}) => {
    const options = {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...headers,
        },
        body: JSON.stringify(body),
    }
    return fetch(`http:localhost:3001/${url}`, options)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return Promise.reject();
            }
        });
};