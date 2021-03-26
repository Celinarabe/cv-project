import { Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


function Edit(props) {
  return (
    <div>
      <h1 className="text-center">Edit</h1>
      <Form>
      <h3>Personal Info</h3>
        <Form.Group controlId="fname">
          <Form.Label>First Name</Form.Label>
          <Form.Control name = "fname"onChange={props.onChange} type="text"/>
        </Form.Group>

        <Form.Group controlId="lname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name = "lname"onChange={props.onChange} type="text"/>
        </Form.Group>
        <h3>Education Info</h3>

        <Form.Group controlId="university">
          <Form.Label>University</Form.Label>
          <Form.Control name = "university"onChange={props.onChange} type="text"/>
        </Form.Group>

        <Form.Group controlId="graduationDate">
          <Form.Label>Graduation Date</Form.Label>
          <Form.Control name = "graduationDate"onChange={props.onChange} type="text"/>
        </Form.Group>

        <h3>Work Experience</h3>
        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control name = "companyName"onChange={props.onChange} type="text"/>
        </Form.Group>

        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control name ="role" onChange={props.onChange} as="textarea"/>
        </Form.Group>
      </Form>



      

          
          
          
          
    </div>
  );
}

export default Edit;
