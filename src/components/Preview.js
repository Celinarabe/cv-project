function Preview(props) {
  return(
    <div>
    <h1>Preview</h1>
    <h3>{props.fname} {props.lname}</h3>
    <p>{props.university} Expected graduation date: {props.graduationDate}</p>
    </div>

  )
}


export default Preview;