import tokenService from "./tokenService";

const BASE_URL = "/api/posts";

export function create(post) {
    return fetch(BASE_URL, {
        method: "POST",
        body: post,
        headers: {
            'Authorization': "Bearer " + tokenService.getToken(),
        },
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            console.log(response)
            throw new Error('Bad Credentials, Check server terminal for more info.');
        });
    });
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
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

export function showPost(postId) {
    return fetch(BASE_URL + '/' + postId, {
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken()
        }
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            console.log(response)
            throw new Error(response.err);
        });
    });
}

export function deletePost(postId) {
    return fetch(BASE_URL + '/' + postId, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken(),
        },
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            console.log(response)
            throw new Error(response.err)
        })
    });
}