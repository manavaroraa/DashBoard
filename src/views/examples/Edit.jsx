import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import EditHeader from "components/Headers/EditHeader";
  import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
  const Editing = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    useEffect(()=>{
      login()
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
       method:'PUT',
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
  }
    return( 
      <>
        <EditHeader />  
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                  </div>
                </CardHeader>
              
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                
                <CardBody>
                  <Form>
                  {/* { users.map((item,{i},users)=> */}

                    <div className="pl-lg-4">
                  
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Status
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Status"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              onChange={(e)=>setEmail(e.target.value)}
                              placeholder="jesse@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup> 
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup> 
                          <Button
                          color="info" style={{float:"right"}} to="/admin/user-profile" tag={Link} onClick={login}
                            >
                            Edit Profile
                            </Button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  export default Editing;