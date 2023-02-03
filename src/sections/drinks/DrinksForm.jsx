// react-bootstrap
import { Button, Col, Form, Row } from "react-bootstrap";
// hooks
import useCategories from "../../hooks/useCategories";

// ----------------------------------------------------------------------

const DrinksForm = () => {
  const { categories } = useCategories();

  return (
    <Form className="my-5 w-75 mx-auto border border-3 rounded-4 border-primary py-2 px-4">
      <Row className="align-items-end">
        <Col xs={12} sm={4} className="py-2">
          <Form.Group as={Col} controlId="name">
            <Form.Label className="text-muted">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: tequila, vodka, etc..."
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={4} className="py-2">
          <Form.Group as={Col} controlId="category">
            <Form.Label className="text-muted">Category</Form.Label>
            <Form.Select defaultValue="...">
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
    </Form>
  );
};

export default DrinksForm;
