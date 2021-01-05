import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/bootstrap.min.css";

const { Container } = ReactBootstrap;
const { Nav } = ReactBootstrap;
const Header = props => {
  const menuItems = ["All", "Javascript", "Ruby", "Java", "Css", "Python"];

  return (
    <div>
      <Container>
        <Nav
          className="justify-content-center"
          variant="pills"
          activeKey={props.activeKey || "All"}
          onSelect={selectedKey => props.onClick(selectedKey)}
        >
          {menuItems.map((item, key) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={item}>{item}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default Header;
