
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    const [name,setName] = useState("");
    const history = useHistory();
  
  
    useEffect(()=>{
      if(localStorage.getItem('user-Info')){
        history.push("/login")
      }
   
    },[])
   async function signup(){
    let installs = {"fcm_token":"dfsfads543fdsfdasd","device_token":"dsadsadsadsa9900"}
     let signup = {
       login: email,
       password: password,
       first_name:name,
       installs: installs
     }
     console.log(email,password,name);
     let item ={email,password,name};
     let result =await fetch("http://api-select.jetzyapp.com:4000/api/v1.0/sign-in",{
       method:'POST',
       headers:{
         'Content-Type':'application/json',
         'Accept':'application/json'
       },
       body: JSON.stringify(signup)
     });
     result = await result.json();
     console.warn(result)
    }
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="First Name" type="text" onChange={(e)=>setName(e.target.value)} />
                </InputGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Last Name" type="text" onChange={(e)=>setName(e.target.value)} />
                </InputGroup>
                
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email" onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-right" xs="12">
          <Button
                color="info"
                href="#pablo" to="/auth/login" tag={Link}
              >
                  <small> Sign In </small> 
                 </Button>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Register;
