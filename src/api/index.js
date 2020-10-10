import request from '../utils/request'
export function fetchList(params) {
    return request({
        url: "/articles",
        method: "get",
        params
    });
}


export function fetchArticle(id, params) {
    return request({
        url: `/articles/${id}`,
        method: "get",
        params
    });
}

export function fetchArticlebytype(type, params) {
    return request({
        url: `/${type}`,
        method: "get",
        params
    });
}

export function createArticle(data) {
    return request({
        url: `/articles`,
        method: "post",
        data
    });
}

export function editArticle(id, data) {
    return request({
        url: `/articles/${id}`,
        method: "put",
        data
    });
}

export function deleteArticle(id) {
    return request({
        url: `/articles/${id}`,
        method: "delete"
    });
}

export function uploadImage(data) {
    return request({
        url: `/upload`,
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data
    });
}