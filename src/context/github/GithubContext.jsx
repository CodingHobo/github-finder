import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GH_URL
const GITHUB_TOKEN = process.env.REACT_APP_GH_API_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get search results
  const searchUsers = async (text) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Clear users from search
  const clearSearch = () => dispatch({
    type: 'CLEAR_SEARCH'
  })

  // Set loading state
  const setLoading = () => dispatch({
    type: 'SET_LOADING'
  })

  return <GithubContext.Provider
    value={{
      users: state.users,
      isLoading: state.isLoading,
      searchUsers,
      clearSearch,
    }}>
      {children}
    </GithubContext.Provider>
};

export default GithubContext;