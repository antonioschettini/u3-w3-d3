import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getJobAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  // const favouritesLength = useSelector((state) => state.favourites.list.length);
  const dispatch = useDispatch();

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const favouritesLength = useSelector((state) => state.favourites.list.length);
  const jobs = useSelector((state) => state.jobs.results);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError);

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getJobAction(query));

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button
            variant="outline-primary"
            onClick={() => navigate("/favourites")}
          >
            Preferiti: {favouritesLength}
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {/* Indicatore di caricamento ed errore */}
          {isLoading && (
            <Spinner animation="border" variant="primary" className="mt-3" />
          )}
          {isError && (
            <Alert variant="danger" className="mt-3">
              Si è verificato un errore!
            </Alert>
          )}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
