
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
  import { useState,useEffect } from "react";
  import TableHeader from "components/Headers/TableHeader";
  const User = () => {
  const [users,setUser]=useState([])
  const token = localStorage.getItem("user-info");
useEffect(()=>{
  fetchComments()
},[]) 

const fetchComments =()=>{
  fetch("http://api-select.jetzyapp.com:4000/api/v1.0/user-profile/00016bd6-6fb5-43b7-8904-0bf095cbbd07",{
     headers: {"Authorization" : `Bearer ${token}`

  }}).then((result)=>{
    result.json().then((resp)=>{
      console.log(resp)
      console.log(resp.ResponseData)
      setUser(resp.ResponseData)
    })
   })
}
    return( 
      <>
        <TableHeader/>  
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
                              value= {JSON.stringify(users.email)}
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
                             value={JSON.stringify(users.firstName)}
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
                              value={JSON.stringify(users.lastName)}
                            />
                          </FormGroup> 
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
  export default User;
