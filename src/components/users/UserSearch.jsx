import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function UserSearch() {
  const [ text, setText ] = useState('')

  const { users, searchUsers, clearSearch } = useContext(GithubContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      alert('Please enter a search term/name')
    } else {
      searchUsers(text)

      setText('')
    }
  }

  return (
    <div className='
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-2
      xl:grid-cols-2
      gap-8
      mb-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="from-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search- enter any search term or username"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                  Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={clearSearch}
            className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}
export default UserSearch