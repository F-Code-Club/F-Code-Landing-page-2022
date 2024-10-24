import Axios from 'axios';
import objectAssign from 'object-assign';

import { API_URL } from '../config/index';

export const request = (endpoint, method, headers = {}, params = {}, body = {}) => {
    return Axios({
        url: 'http://127.0.0.1:8080/api/v1' + endpoint,
        method: method,
        headers: objectAssign({}, headers),
        params: objectAssign(params),
        data: body,
    });
};

export const get = (endpoint, params = {}, headers = {}) => {
    return request(endpoint, 'GET', headers, params);
};

export const post = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'POST', headers, params, body);
};

export const put = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'PUT', headers, params, body);
};

export const remove = (endpoint, body = {}, params = {}, headers = {}) => {
    return request(endpoint, 'DELETE', headers, params, body);
};
