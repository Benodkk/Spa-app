import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import FetchData from "./components/FetchData";
import InputFilter from "./components/InputFilter";
import Results from "./components/Results";
import SwitchPage from "./components/SwitchPage";
import Error from "./components/status/Error";
import Loading from "./components/status/Loading";

import {
  StyledContainer,
  StyledUpperContainer,
} from "./components/style/Container.style";

function App() {
  const { pageNr } = useParams();
  const store = useSelector((state) => state);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNr);

  useEffect(() => {
    if (!pageNr) setPage(1);
    navigate(`/${page}`);
    if (pageNr > store.actualPageData.total_pages) {
      setError(true);
      setTimeout(() => {
        setPage(1);
      }, 3000);
    }
  }, [page, store]);

  const results = store.singleResult.data
    ? [store.singleResult.data]
    : store.actualPageData.data;

  return (
    <StyledContainer>
      <StyledUpperContainer>
        <InputFilter setLoading={setLoading} />
        <FetchData page={page} setLoading={setLoading} setError={setError} />
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          results && <Results results={results} />
        )}
      </StyledUpperContainer>

      <SwitchPage page={page} setPage={setPage} />
    </StyledContainer>
  );
}

export default App;
