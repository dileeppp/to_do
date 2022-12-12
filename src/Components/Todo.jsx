import {
  Container,
  FormControl,
  Button,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { Component } from "react";
import { Delete } from "@mui/icons-material";

class Todo extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todoList: ["learn react"],
      isEditing: false,
      editingIndex: null,
      completedTaskArr: [],
    };
  }


 

  render() {
    return (
      <Container sx={{ margin: "20px auto" }}>
        <div>
        
          <FormControl>
            <InputLabel>Enter To Do</InputLabel>
            <OutlinedInput
              name="Enter TO do"
              label="Enter to do"
              type="password"
              size="large"
              sx={{width:'400px'}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="add">
                    <Delete />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </Container>
    );
  }
}

export default Todo;
