import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Img from "./Components/Img";
import Description from "./Components/Description";
import Price from "./Components/Price";
import Name from "./Components/Name";

function App() {
  let data = "https://aws-tiqets-cdn.imgix.net/images/reviews/2b28413472424e4eb6755498984eb36c.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=a8e6a602e695586f5913b146116c45e6"
  let firstName =false;
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Img />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            <Price />
          </Button>
          {firstName ? <h1></h1> : <img src={data}></img>}
        </Card.Body>
      </Card>
      

    </div>
  );
}

export default App;
