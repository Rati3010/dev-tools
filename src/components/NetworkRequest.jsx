import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const NetworkRequest = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(url);
  };

  return (
    <>
      <h1>Network Request</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <TextField
          label="Enter Website URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Fetch Requests
        </Button>
      </form>
    </>
  );
};

export default NetworkRequest;
