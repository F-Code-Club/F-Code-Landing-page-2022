import { post, get } from './ApiCaller';

export const getAllChallenge = () => {
    const url = `/challenge/all`;
    return get(url);
};
export const getLogin = () => {
    const url = `/login/student`;
    return get(url);
};

export const postRegister = () => {
    const url = `/register-challenge/new`;
    return post(url);
};
