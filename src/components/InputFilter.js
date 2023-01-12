import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setSingleResult } from "../redux";

import TextField from "@mui/material/TextField";

const InputFilter = ({ setLoading }) => {
  const dispatch = useDispatch();
  const [errorFilter, setErrorFilter] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    if (filterValue > 0) {
      setLoading(true);
      fetch(`https://reqres.in/api/products/${filterValue}`)
        .then((response) => response.json())
        .then((actualData) => {
          actualData.data ? setErrorFilter(false) : setErrorFilter(true);
          dispatch(setSingleResult(actualData));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(setSingleResult({}));
          setLoading(false);
          setErrorFilter(true);
        });
      return () => {
        abortController.abort();
      };
    }
  }, [filterValue]);

  const handleChange = (e) => {
    if (e.target.value) {
      setFilterValue(parseInt(e.target.value));
    } else {
      dispatch(setSingleResult({}));
      setFilterValue("");
      setErrorFilter(false);
    }
  };

  return (
    <TextField
      error={errorFilter ? true : false}
      helperText={errorFilter ? "Can not find element with this ID" : " "}
      type="number"
      label="Find element by ID number"
      variant="standard"
      value={filterValue}
      onChange={handleChange}
      sx={{ width: "25vw" }}
    />
  );
};

export default InputFilter;
