import { sendRequest } from "../request";
const BASE_URL = '/api/users';


export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}

export function signUp(userData){
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    return sendRequest(BASE_URL, "POST", userData, 'Invalid Sign Up')
}


export function login(credentials) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    return sendRequest(`${BASE_URL}/login`, "POST", credentials, 'Invalid Credentials')
}


