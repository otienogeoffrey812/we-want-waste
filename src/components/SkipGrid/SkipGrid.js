import { Row, Col, Spinner, Alert, Container } from 'react-bootstrap';
import SkipCard from '../SkipCard/SkipCard';

const SkipGrid = ({ skips, loading, error, selected, onSelect }) => {
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        Failed to load skips.
      </Alert>
    );
  }

  return (
    <Row xs={1} sm={2} md={3} lg={3} className="g-4">
      {skips.map(skip => (
        <Col key={skip.id}>
          <SkipCard
            {...skip}
            selected={selected === skip.id}
            onSelect={() => onSelect(skip.id)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default SkipGrid;
