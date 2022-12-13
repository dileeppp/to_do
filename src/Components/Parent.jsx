import { Add, Delete, FormatStrikethrough } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

const Parent = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { todoName: "Dileep", strike: false },
  ]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAdd = (e) => {
    if (editingIndex === -1) {
      const result = [...output];
      result.push({ todoName: input, strike: false });
      setOutput(result);
      setInput("");
    } else {
      const result = [...output];
      result[editingIndex] = { todoName: input, strike: false };
      setOutput(result);
      setInput("");
      setEditingIndex(-1);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  const handleLine = (todo, index) => {
    const selectedTodo = output[index];
    setInput(selectedTodo.todoName);
    setEditingIndex(index);
  };
  const handleDelete = (_, index) => {
    const result = [...output];
    result.splice(index, 1);
    setOutput(result);
  };
  const handleStrike = (todo, i) => {
    const result = [...output];
    const selectedTodo = result[i];
    selectedTodo.strike = !selectedTodo.strike;
    setOutput(result);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel>Enter To Do</InputLabel>
        <OutlinedInput
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          sx={{
            width: "400px",
            border: "2px solid lightgreen",
            marginBottom: "20px",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                color="secondary"
                onClick={handleAdd}
                aria-label="delete"
                size="large"
              >
                <Delete fontSize="inherit" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {output.map((todo, index) => (
        <div
          style={{
            width: "400px",
            border: "2px solid lightyellow",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            background: "lightgrey",
            textDecoration: todo.strike ? "line-through" : "",
          }}
        >
          <h5>{todo.todoName}</h5>
          <div>
            <IconButton
              sx={{ color: "green" }}
              onClick={() => handleLine(todo, index)}
            >
              <Add />
            </IconButton>
            <IconButton
              sx={{ color: "red" }}
              onClick={() => handleDelete(todo, index)}
            >
              <Delete />
            </IconButton>
            <IconButton onClick={() => handleStrike(todo, index)}>
              <FormatStrikethrough />
            </IconButton>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default Parent;
