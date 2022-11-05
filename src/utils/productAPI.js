import { post, get } from './ApiCaller';

export const getAllChallenge = () => {
    const url = `/challenge/all`;
    return get(url);
};

export const postRegister = () => {
    const url = `/register-challenge/new`;
    return post(url);
};
