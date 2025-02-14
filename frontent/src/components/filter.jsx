const Filter = ({handleSearch})=>{
    return(
      <div>
        <label htmlFor='search' >filter shown with</label> 
        <input onChange={handleSearch} id='search' />
      </div>
    )
  }

  export default Filter