function Preview(props) {
  return(
    <div>
    <h1>Preview</h1>
    <h3>{props.fname} {props.lname}</h3>
    <p><strong>{props.university}</strong> {props.graduationDate}</p>
    <p><strong>{props.companyName}</strong> {props.role}</p>
    </div>

  )
}


export default Preview;