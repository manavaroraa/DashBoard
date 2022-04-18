// axios.post('http://api-select.jetzyapp.com:4000/api/v1.0/sign-in',data,{ headers: { Authorization:localStorage.getItem('jwt') } })
// .then(response=> console.log(response))
// .catch(error => console.log(error));
// }
// fetch("http://api-select.jetzyapp.com:4000/api/v1.0/sign-in", {
//     method: "Get",
//     headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer" + localStorage.getItem("jwt")
//     }
//       signin:function() {
//         axios.post('http://api-select.jetzyapp.com:4000/api/v1.0/sign-in',{
//             email: this.email,
//             password: this.password,
//         })
//         .then( (response) => {

// const { default: axios } = require("axios");
// const { default: Header } = require("components/Headers/Header");
// const { useState, useEffect } = require("react");

            
//             let token = response.data.access;
//             localStorage.setItem("SavedToken", 'Bearer ' + token);
//             axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//             (this.$router.push({name:'Header'}));
            
//             })
//             axios.get('http://api-select.jetzyapp.com:4000/api/v1.0/sign-in', { headers: { Authorization:localStorage.getItem('SavedToken') }})
//             .then(response =>{
//             })




 //  localStorage.setItem("jwt",)

  //  signin.post('http://api-select.jetzyapp.com:4000/api/v1.0/sign-in', function(req,res) {
  //   email.findOne({
  //  email: req.body.email
  //  }, function(err, user) {
  //  if(err) throw err;
   
  //  if(!user) {
  //    res.send({success: false, message: 'Authentication Failed, User not found.'});
  //  } else {
  //    password(req.body.password, user.password, function(err, isMatch) {
  //      if(isMatch && !err) {
  //        var token = signin(user,result.ResponseData.usersettings.jwt, {
  //          expiresIn: 1008000
  //        });
  //        res.json({success: true, jwtToken: "JWT "+token});
  //      } else {
  //        res.json({success: false, message: 'Authentication failed, wrong password buddy'});
   
  //         }
  //       });
  //      }
  //   });
  //  });


//   import ReactSession from 'react-client-session';
//   import Login from './Login';
//   var Login = (function() {
//     var email = "";
  
//     var Useremail = function() {
//       return email;    
//     };
  
//     var password = function(email) {
//       email = password;     
      
//     };
  
//     return {
//       Useremail: Useremail,
//       password: password
//     }
  
//   })();

//   Login.password("")
//   Login.email()

//   ReactSession.setStoreType("localStorage");
//   ReactSession.set("email", "Bob");
// ReactSession.get("email");

// jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
//     res.json({
//       token
//   });
//   localStorage.setItem('session',JSON.stringify(token));

// import Login from './Login'

// function isLoggedIn() {
//     if (localStorage.setItem("user-info",token)!== undefined) {
//     return true
//     }
//     return false
  
//   }
//   export default isLoggedIn;

// import React from "react";
// const AppContext = React.createContext();
// export default AppContext;
// const myInitObject = {}
// export default myInitObjectject = {}
// export default myInitObject

//   async function profile(){
//       let userId = localStorage.setItem("userid",userId);
//       let token =  localStorage.setItem("user-info",token);
//     let info = {
//       userId: userId,
//       jwt:token
//     }
//   let userinfo = await fetch("http://api-select.jetzyapp.com:4000/api/v1.0/user-profile", {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json'},
//     body: JSON.stringify(info)
// });
// userinfo = await userinfo.json();
// console.warn(userinfo);
// }
// const Profile = () => {
  // const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  // const { id } = useParams();
  // const navigate = useNavigate();

  // const EditAccount = () => {
  //   navigate("/edit-account");
  // };

  // const addCar = () => {
  //   navigate("/home");
  // };
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}users/${id}/`)
  //     .then((results) => {
  //       console.log("results", results);
  //       return results.json();
  //     })
  //     .then((data) => {
  //       setUserData(data);
  //     });
  // });

  // const Logout = () => {
  //   localStorage.clear();
  //   window.location.href = "/login";
  // };

  // const DeleteUser = async () => {
  //   fetch(`${process.env.REACT_APP_API_URL}users/${id}/`, {
  //     method: "delete",
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   navigate("/login");
  // };


// const [userData, setUserData] = useState({
//   username: "",
//   email: "",
//   password: "",
// });
// const { id } = useParams();
// const navigate = useNavigate();
// useEffect(()=>{
// //   (localStorage.getItem('user-Info'))
// //     

// },[])

// const UserCall = async () => {
//   fetch(`http://api-select.jetzyapp.com:4000/api/v1.0/user-profile/${id}/`, {
//     method: "GET",
//     headers: {
//       Authorization: `Token ${localStorage.setItem("user-info")}`,
//     },
//   });
// };

// const [users,setUser]=useState([])
// useEffect(()=>{
//   fetchComments()
// },[]) 
// const fetchComments =()=>{
//   fetch("http://api-select.jetzyapp.com:4000/api/v1.0/user-profile/000d7ae9-33f1-4a3b-8ddd-de520e0458ca",{
//    headers: {
//     Authorization: `${localStorage.getItem("user-info")}`,

//   }}).then((result)=>{
//     result.json().then((resp)=>{
//       console.log(resp)
//       setUser(resp.ResponseData)
//     })
//   })
// }
// alert(localStorage.getItem("user-info"));

//   const [users,setUser]=useState([])
  //   useEffect(()=>{
  //     fetchComments()
  //   },[])
  
  //   const fetchComments =()=>{
  //     fetch("http://api-select.jetzyapp.com:4000/api/v1.0/user-profile/00016bd6-6fb5-43b7-8904-0bf095cbbd07 ").then((result)=>{
  //       result.json().then((resp)=>{
  //         console.warn(resp)
  //         setUser(resp)
  //       })
  //     })
  //   }
  // const [users ,setUser]= useState([]);
  // useEffect(()=>{
  //   functions()
  // },[])
  // const functions =()=>{
  //   fetch("",{Header :{
  //     'Content-Type':'application/json'
  //   }}).then((result)=>{
  //     result.json().then((resp)=>{
  //       console.log(resp);
  //       setUser(resp);
  //     })
  //   })
  // }


    // const [users,setUser] =useState([]);
  // let api = "http://api-select.jetzyapp.com:4000/api/v1.0/user-profile/00016bd6-6fb5-43b7-8904-0bf095cbbd07";
  // const token = localStorage.getItem("user-info");
  // axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
  // .then(res => {
  // console.log(res.data)
  // setUser(res.data.ResponseData)
//  const [users,setUser ] = useState([]);
//  let api = ""
//  const token = localStorage.getItem("user-info");
//  const userid = localStorage.getItem("userid");
//  axios.get(api,{headers:{ "Authorization" : `Bearer ${token}`}}.then(resp=>{
//    console.log(resp.data)
//    setUser(resp.data.ResponseData)
//  }))