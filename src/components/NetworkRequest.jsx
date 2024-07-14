import React, { useState } from "react";
import { TextField, Button, Box, CssBaseline, Container, Typography, ToggleButtonGroup } from "@mui/material";
import Filter from "./Filter";
import RequestList from "./RequestList";
import { useSelector } from "react-redux";
import { setFilter } from "../redux/actions/requestActions";

const NetworkRequest = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const filter = useSelector(state => state.filter);
  
  const handleSearch = () => {
    console.log(url)
    onSubmit(url);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#212121', 
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>
          Network Requests
        </Typography>
        <TextField
          label="Enter URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          margin="dense"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '20px' }}
        >
          Search
        </Button>
      </Container>
      <Filter filter={filter} setFilter={(filter) => dispatch(setFilter(filter))}/>
      <RequestList/>
    </Box>
  );
};

export default NetworkRequest;
