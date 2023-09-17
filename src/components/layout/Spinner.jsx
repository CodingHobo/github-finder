function Spinner() {
  return (
    <div className='w-100 mt-20'>
      {/* <img
        width={120}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...' /> */}
      <span className="loading loading-ring loading-lg text-secondary"></span>
    </div>
  )
}
export default Spinner