import { useEffect, useState } from "react";
import { useHistory ,Link } from "react-router-dom";
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
const Login = () => {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(""); 
  const history = useHistory();


  useEffect(()=>{
    if(localStorage.getItem('user-Info')){
      history.push("/admin")
    }
 
  },[])
 async function login(){
  let installs = {"fcm_token":"dfsfads543fdsfdasd","device_token":"dsadsadsadsa9900"}
   let signin = {
     login: email,
     password: password,
     installs: installs
   }
   console.log(email,password);
   let item ={email,password};
   let result =await fetch("http://api-select.jetzyapp.com:4000/api/v1.0/sign-in",{
     method:'POST',
     headers:{
       'Content-Type':'application/json',
       'Accept':'application/json'
     },
     body: JSON.stringify(signin)
   });
   result = await result.json();
   console.warn(result)
   const token =  result.ResponseData.usersettings.jwt
   const userId = result.ResponseData.userId
   console.log(userId) 
   console.log(token)
   localStorage.setItem("user-info",token);
   localStorage.setItem("userid",userId);
   window.location.href = "/admin";
}
const onFormSubmit = e => {
  e.preventDefault();
  const { email, password } = this.state;

}

  return (
    <>
       <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">  
            <div className="text-center text-muted mb-4">
              <small> sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={onFormSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit" onClick={login}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
          <Button
                color="info"
                href="#pablo" to="/auth/register" tag={Link}
              >
                  <small> Froget Password </small> 
                 </Button>
          </Col>
          <Col className="text-right" xs="6">
          <Button
                color="info"
                href="#pablo" to="/auth/register" tag={Link}
              >
                  <small> Create Account </small> 
                 </Button>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
