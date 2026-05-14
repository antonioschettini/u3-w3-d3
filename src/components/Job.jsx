import { Row, Col } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  // controllo se l'azienda è già nella lista di preferiti
  const favourites = useSelector((state) => state.favourites.list);
  const isFav = favourites.includes(data.company_name);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        {isFav ? (
          <StarFill
            color="gold"
            className="me-2"
            onClick={() =>
              dispatch(removeFromFavouriteAction(data.company_name))
            }
          />
        ) : (
          <Star
            color="gold"
            className="me-2"
            onClick={() => dispatch(addToFavouriteAction(data.company_name))}
          />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
