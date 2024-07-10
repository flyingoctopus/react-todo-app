import axios from 'axios';

const CLIENT_ID = 'Ov23lipl9f3MC71be1EF';
const CLIENT_SECRET = 'c454f2d38dd99c9c1f8f966e163058ebb4b448fa';
const REDIRECT_URI = 'http://localhost:3000';

export const getGitHubAuthUrl = () => {
    return `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`;
};

export const getAccessToken = async (code) => {
    const response = await axios.post(
        `https://github.com/login/oauth/access_token`,
        {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
            redirect_uri: REDIRECT_URI,
        },
        {
            headers: {
                Accept: 'application/json'
            },
        }
    );
    return response.data.access_token;
}