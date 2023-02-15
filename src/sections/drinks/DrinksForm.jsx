import { useState } from "react";
// react-bootstrap
import { Button, Col, Form, Row, Alert } from "react-bootstrap";
// hooks
import useCategories from "../../hooks/useCategories";
import useDrinks from "../../hooks/useDrinks";

// ----------------------------------------------------------------------

const DrinksForm = () => {
  const { categories } = useCategories();
  const { getDrinks } = useDrinks();
  const [alert, setAlert] = useState("");
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("All fields are required!");
      return;
    }

    setAlert("");
    getDrinks(search);
  };

  return (
    <Form
      className="my-5 w-75 mx-auto border border-3 rounded-4 border-primary py-2 px-4"
      onSubmit={handleSubmit}
    >
      <Row className="align-items-end">
        <Col xs={12} sm={4} className="py-2">
          <Form.Group as={Col} controlId="name">
            <Form.Label className="text-muted">Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Ex: tequila, vodka, etc..."
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={4} className="py-2">
          <Form.Group as={Col} controlId="category">
            <Form.Label className="text-muted">Category</Form.Label>
            <Form.Select
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>...</option>
              {categories.map(({ strCategory }) => (
                <option key={strCategory} value={strCategory}>
                  {strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} sm={4} className="py-2">
          <Button
            size="lg"
            type="submit"
            variant="secondary"
            className="w-100 border-0 rounded-3"
          >
            Search
          </Button>
        </Col>
      </Row>
      {alert && (
        <Alert variant="danger" className="text-center mt-3">
          {alert}
        </Alert>
      )}
    </Form>
  );
};

export default DrinksForm;
