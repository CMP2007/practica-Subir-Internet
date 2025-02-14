const PersonForm = ({handleEvents, newData})=>{
    return(
      <form onSubmit={handleEvents[0]}>
          <div>
            <label htmlFor="name">name:</label> <input id='name' onChange={handleEvents[1]} value={newData[0]} required/>
          </div>
          <div>
            <label htmlFor="number">Telefone:</label> <input id='number' type="number" onChange={handleEvents[2]} value={newData[1]} required />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

  export default PersonForm