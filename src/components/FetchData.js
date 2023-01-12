import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setData } from "../redux";

const FetchData = ({ page, setLoading, setError }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    fetch(`https://reqres.in/api/products?page=${page}&per_page=5`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setData(data));
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(setData(""));
        setLoading(false);
        setError(true);
      });
    return () => {
      abortController.abort();
    };
  }, [page]);

  return <></>;
};

export default FetchData;
