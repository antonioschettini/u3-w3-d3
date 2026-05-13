import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-4">Aziende Preferite</h1>
          <Button variant="outline-primary" onClick={() => navigate("/")}>Torna alla Home</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem
                key={i}
                className="d-flex justify-content-between align-items-center"
              >
                <Link to={`/${fav}`}>{fav}</Link>
                <Trash
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: fav })
                  }
                ></Trash>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
