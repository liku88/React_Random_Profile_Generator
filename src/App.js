import React , {useState  , useEffect} from 'react';
import {Container, Col , Row} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from "axios"
import Mycard from './MyCard'
function App() {
  const [details, setDetails] = useState({})

  const FetchDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/");
    console.log("Response :", data);
    const details = data.results[0];
    setDetails(details);
    console.log("Response1 :", details.location.city);
  }
  useEffect(()=>{
    FetchDetails()
  }, [])
  
  return(
   <Container fluid className = "p-4 bg-primary App">
   <Row>
   <Col md= {4} className="offset-md-4 mt-4" ></Col>
   <Mycard details = {details} />
   </Row>
   </Container>
  )
}

export default App;
