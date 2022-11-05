import { post, get, put } from './ApiCaller';

export const getAllChallenge = () => {
    const url = `/challenge/all`;
    return get(url);
};
export const getLogin = () => {
    const url = `/login/student`;
    return get(url);
};

export const postRegister = (form) => {
    const url = `/api/students`;
    return post(
        url,
        form,
        {},
        {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    );
};
