import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value1: "", value2: "", value1Show: true, value2Show: true };
  }

  onchangValue1 = e => {
    console.log(e.target.value);
    this.setState({ value1: e.target.value });
  };

  onchangeValue1Show = e => {
    this.setState({ value1Show: e });
  };

  onchangValue2 = a => {
    console.log(a.target.value);
    this.setState({ value2: a.target.value });
  };

  onchangeValue2Show = a => {
    this.setState({ value2Show: a });
  };

  render() {
    const { value1Show, value1, value2Show, value2 } = this.state;

    return (
      <Container className="text-center">
        <ul className="text-left">
          <li align="left">
            {" "}
            <Link to="/">popular</Link>
          </li>
          <li align="left">
            <Link to="/battle">battle</Link>
          </li>
        </ul>
        <h3>GAME</h3>
        <Row>
          <Col>
            <p>Enter two Github users</p>
            <img
              src={pic1}
              style={{
                boxShadow: "0 0 5px 3px #00000042",
                width: "200px",
                height: "200px"
              }}
              alt=" "
            />
          </Col>
          <Col>
            <p>Battle</p>
            <img
              src={pic2}
              style={{
                boxShadow: "0 0 5px 3px #00000042",
                width: "200px",
                height: "200px"
              }}
              alt=" "
            />
          </Col>
          <Col>
            <p>See the winner</p>
            <img
              src={pic3}
              style={{
                boxShadow: "0 0 5px 3px #00000042",
                width: "200px",
                height: "200px"
              }}
              alt=" "
            />
          </Col>
        </Row>
        <br />
        <h3>Players</h3> <br />
        <Row>
          <Col>
            <p>Player One</p>
            {value1Show ? (
              <InputGroup
                onChange={e => {
                  this.onchangValue1(e);
                }}
              >
                <FormControl
                  placeholder="github username"
                  aria-label="github username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button
                    disabled={value1 === ""}
                    variant="outline-secondary"
                    onClick={() => {
                      this.onchangeValue1Show(false);
                    }}
                  >
                    SUBMIT
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            ) : (
              <div>
                <img
                  src={`https://github.com/${value1}.png?size=200`}
                  alt=" "
                />
                {value1}
                <Button
                  onClick={() => {
                    this.onchangeValue1Show(true);
                  }}
                >
                  ×
                </Button>
              </div>
            )}
          </Col>
          <Col>
            <p>Player Two</p>
            {value2Show ? (
              <InputGroup
                onChange={a => {
                  this.onchangValue2(a);
                }}
              >
                <FormControl
                  placeholder="github username"
                  aria-label="github username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button
                    disabled={value2 === ""}
                    variant="outline-secondary"
                    onClick={() => {
                      this.onchangeValue2Show(false);
                    }}
                  >
                    SUBMIT
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            ) : (
              <div>
                <img
                  src={`https://github.com/${value2}.png?size=200`}
                  alt=" "
                />
                {value2}{" "}
                <Button
                  onClick={() => {
                    this.onchangeValue2Show(true);
                  }}
                >
                  ×
                </Button>
              </div>
            )}
          </Col>
        </Row>
        {!value2Show && !value1Show && (
          <Link
            to={{
              pathname: `/battle/${value1}&${value2}`
            }}
          >
            battle
          </Link>
        )}
      </Container>
    );
  }
}
