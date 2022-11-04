import { post, get } from './ApiCaller';

export const getAllChallenge = () => {
    const url = `/challenge/all`;
    return get(url);
};
