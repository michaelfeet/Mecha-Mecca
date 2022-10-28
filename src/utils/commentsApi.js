import tokenService from "./tokenService";

const BASE_URL = "/api/comments";

export function create(comment) {
    return fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokenService.getToken(),
        }),
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            console.log(response)
            throw new Error('Bad Credentials, Check server terminal for more info.');
        });
    });
}

export function getAll(postId) {
    return fetch(BASE_URL + '/' + postId, {
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + tokenService.getToken()
        }
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            console.log(response);
            throw new Error(response.err);
        });
    });
}