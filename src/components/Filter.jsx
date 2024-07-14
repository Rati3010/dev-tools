import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const Filter = ({filter, setFilter}) => {
  const handleFilterChange = (event, newFilter) => {
    setFilter(newFilter);
  };
  return (
    <ToggleButtonGroup
      value={filter}
      onChange={handleFilterChange}
      aria-label="Filter by"
      style={{ marginTop: "20px", display: "flex", justifyContent: "center", marginBottom: "20px"}}
    >
      <ToggleButton
        value="All"
        style={{ color: "white", borderColor: "white" }}
      >
        All
      </ToggleButton>
      <ToggleButton
        value="Doc"
        style={{ color: "white", borderColor: "white" }}
      >
        Doc
      </ToggleButton>
      <ToggleButton
        value="XHR"
        style={{ color: "white", borderColor: "white" }}
      >
        XHR
      </ToggleButton>
      <ToggleButton value="JS" style={{ color: "white", borderColor: "white" }}>
        JS
      </ToggleButton>
      <ToggleButton
        value="CSS"
        style={{ color: "white", borderColor: "white" }}
      >
        CSS
      </ToggleButton>
      <ToggleButton
        value="Font"
        style={{ color: "white", borderColor: "white" }}
      >
        Font
      </ToggleButton>
      <ToggleButton
        value="Img"
        style={{ color: "white", borderColor: "white" }}
      >
        Img
      </ToggleButton>
      <ToggleButton
        value="Media"
        style={{ color: "white", borderColor: "white" }}
      >
        Media
      </ToggleButton>
      <ToggleButton
        value="Manifest"
        style={{ color: "white", borderColor: "white" }}
      >
        Manifest
      </ToggleButton>
      <ToggleButton value="WS" style={{ color: "white", borderColor: "white" }}>
        WS
      </ToggleButton>
      <ToggleButton
        value="Wasm"
        style={{ color: "white", borderColor: "white" }}
      >
        Wasm
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
