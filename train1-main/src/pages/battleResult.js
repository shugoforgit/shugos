import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Content from "../components/Content.js";
import RepoCard from "../components/Card.js";

const { Button } = ReactBootstrap;
export default class BattleResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { win: {}, loser: {} };
  }

  async componentDidMount() {
    const value1 =
      this.props.match.params.name.split("&") &&
      this.props.match.params.name.split("&")[0];
    const value2 =
      this.props.match.params.name.split("&") &&
      this.props.match.params.name.split("&")[1];
    const res1 = await axios.get(`https://api.github.com/users/${value1}`);
    const res2 = await axios.get(`https://api.github.com/users/${value2}`);

    if (res1.data.id >= res2.data.id) {
      this.setState({ win: res1.data, loser: res2.data });
    } else {
      this.setState({ win: res2.data, loser: res1.data });
    }
  }

  render() {
    const { win, loser } = this.state;

    return (
      <Content>
        <ul className="text-left">
          <li align="left">
            <Link to="/">popular</Link>
          </li>
          <li align="left">
            <Link to="/battle">battle</Link>
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <RepoCard
            no="win"
            img={win.avatar_url}
            title={win.login}
            author={win.author}
            stars={win.id}
            forks={win.forks}
            issues={win.issues}
            url={win.url}
          />
          <RepoCard
            no="loser"
            img={loser.avatar_url}
            title={loser.login}
            author={loser.author}
            stars={loser.id}
            forks={loser.forks}
            issues={loser.issues}
            url={loser.url}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <Button style={{ width: "120px", height: "40px" }}>Battle</Button>
        </div>
      </Content>
    );
  }
}
