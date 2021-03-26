import { Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

function Preview(props) {
  return(
    <div className="text-center">
    <h1 >Preview</h1>
    <h3>{props.fname} {props.lname}</h3>
    <p><strong>{props.university}</strong> {props.graduationDate}</p>
    <p><strong>{props.companyName}</strong> {props.role}</p>
    </div>

  )
}


export default Preview;