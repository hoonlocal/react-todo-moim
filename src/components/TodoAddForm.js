import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TodoAddForm extends Component {
  state = {
    todoList: [],
  };

  render() {
    const inputTextBring = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const {
          target: { value },
        } = e;
        // this.setState({ todoList: e.target.value });
        this.setState(
          (state) => ({
            todoList: [...state.todoList, value],
          }),
          () => {
            localStorage.setItem(
              "todoList",
              JSON.stringify(this.state.todoList)
            );
          }
        );
        console.log(e.target.value);
        e.target.value = "";
      }
    };

    const stateGap = () => {
      console.log(this.state.todoList);
    };

    return (
      <form>
        <TextField name="todoText" label="할 일" onKeyPress={inputTextBring} />
        <Button
          variant="contained"
          color="primary"
          className="btnPos"
          onClick={stateGap}
        >
          Confirm
        </Button>
      </form>
    );
  }
}

export default TodoAddForm;
