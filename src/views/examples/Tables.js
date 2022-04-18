import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import React,{useEffect,useState} from 'react'
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import User from "./Userprofile";
  
 
const Tables = () => {
//   componentDidMount=()=> {
//     const { userId } = this.props.match.params
//     axios.get(`/api/v3/product/${usertId}`, {
//         params: {
//             pageNumber: 1,
//             pageSize: 2,
//         }
//     })
// }

  const [users,setUser]=useState([])
  useEffect(()=>{
    fetchComments()
  },[])

  const fetchComments =()=>{
    fetch("http://api-select.jetzyapp.com:4000/api/v1.0/guest/nearby-users?page=1 ").then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        setUser(resp.ResponseData.data)
      })
    })
  }
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Status</th>
                    <th scope="col">Image</th>
                    <th scope="col" />
                  </tr>
                </thead>
                {/* {
          users.map((item,{i})=> */}
                <tbody>
                  { users.map((item,{i},users)=>

  

                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          
                        >
                          {/* <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/bootstrap.jpg")
                                .default
                            } */}
                          {/* /> */}
                        </a>
                        <Media>
                          <span className="mb-0 text-sm" >
                            {/* Argon Design System */}
                             {item.firstName ? item.firstName :" - - - - -"} 
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>{item.lastName ? item.lastName : "- - - - -"}</td>
                    <td>
                    {item.isActive ? "Active":"Inactive"}       
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip742438047"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                    </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem to="/admin/userprofile" tag={Link}>
                            {/* <i className="ni ni-single-02" /> */}
                            <span>User Profile</span>
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                  </tr>
                
                  )
                  }
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
       );
    };
export default Tables;

