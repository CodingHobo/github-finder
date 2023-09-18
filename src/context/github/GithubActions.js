import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GH_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GH_API_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})

// Get search results
export const searchUsers = async (text) => {
  const response = await github.get(`/search/users?q=${text}`);
  return response.data.items;
};

// Get details for single user
export const getUserData = async (login) => {
  const [ user, repos ] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ]);
  
  return { user: user.data, repos: repos.data}
};

