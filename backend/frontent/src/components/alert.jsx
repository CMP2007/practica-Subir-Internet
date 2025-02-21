const Alert = ({ status }) => {
  switch(status.event){
    case "modified":
      return(
        <div className="ok">
          <h3>{status.name} was successfully modified</h3>     
        </div>
      )
    case "created":
      return(
        <div className="ok">
          <h3>{status.name} was added successfully</h3>     
        </div>
      )
      case "deleted":
        return(
          <div className="ok">
            <h3>{status.name} was successfully removed</h3>     
          </div>
        )
      case "error":
        return(
          <div className="error">
            <h3>{status.name}</h3>     
          </div>
        )
      case null:
        return null
  }
  return(
    <div className="ok">
      <h3>hola</h3>     
    </div>
  )
}

export default Alert 