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
    return fetch("http://localhost:3001/"+url, options)
    
    
    
        .then((response) => {
            console.log(body)
            console.log(response.status)
            console.log(url)

            if (response.status >= 200 && response.status < 300) {
                console.log("2")
                return response.json();
            } else {
                console.log("3")
                return Promise.reject();
            }
        });
};