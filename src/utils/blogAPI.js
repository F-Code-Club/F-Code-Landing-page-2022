import { get } from './ApiCaller';

export const getArticleByID = (id) => {
    const url = `/article/${id}`;
    return get(url);
};

export const getGenreByID = (id) => {
    const url = `/article/genre/${id}`;
    return get(url);
};

export const getArticlesByGenreID = (genreId) => {
    const url = `/article/genre`;
    return get(url, { genreId });
};
