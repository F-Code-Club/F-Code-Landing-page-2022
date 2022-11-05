import { post, get, put } from './ApiCaller';

export const getStep = () => {
    const url = `/auth/getStep`;
    return get(
        url,
        {},
        {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    );
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
export const getChallenge = () => {
    const url = `/api/challenges`;
    return get(url, {}, {});
};
