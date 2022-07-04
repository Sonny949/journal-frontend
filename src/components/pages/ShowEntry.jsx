function ShowEntry({ entry }) {
  return entry ? (
    <>
      <h5>{entry.entry}</h5>
      <p>Posted in {entry.category}</p>
    </>
  ) : (
    <>
    <h2>Loading...</h2>
    </>
  )
}

export default ShowEntry;
