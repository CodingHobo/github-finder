function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>GitHub Finder</h1>
      <p className='mb-4 text-xl text-white font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Tech Stack:
        <span
          className='text-white'> React | Tailwind + Daisy UI | GitHub API
        </span>
      </p>
    </>
  )
}
export default About