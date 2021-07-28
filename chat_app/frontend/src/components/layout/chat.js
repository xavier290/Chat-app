import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    boxShadow: "none",
  },
});

export class Chat extends Component {
  state = {
    messages: [],
    value: "",
    name: "",
    room: "vacad",
  };

  client = new W3CWebSocket(
    "ws://" + window.location.host + "/ws/chat/" + this.state.room + "/"
  );

  onButtonClicked = (e) => {
    this.client.send(
      JSON.stringify({
        type: "message",
        message: this.state.value,
        name: this.state.name,
      })
    );
    this.state.value = "";
    e.preventDefault();
  };

  componentDidMount() {
    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply! ");
      if (dataFromServer) {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              msg: dataFromServer.message,
              name: dataFromServer.name,
            },
          ],
        }));
      }
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="chat">
        Room Name: {this.state.room}
        <Paper
          style={{
            height: 500,
            maxHeight: 500,
            overflow: "auto",
            boxShadow: "none",
          }}
        >
          {this.state.messages.map((message) => (
            <>
              <Card className={classes.root}>
                <CardHeader
                  avatar={<Avatar className={classes.avatar}>R</Avatar>}
                  title={message.name}
                  subheader={message.msg}
                />
              </Card>
            </>
          ))}
        </Paper>
        <form
          className={classes.form}
          noValidate
          onSubmit={this.onButtonClicked}
        >
          <TextField
            id="outlined-helperText"
            label="Make a comment"
            defaultValue="Default Value"
            variant="outlined"
            value={this.state.value}
            fullWidth
            onChange={(e) => {
              this.setState({ value: e.target.value });
              this.value = this.state.value;
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send message
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(Chat);
