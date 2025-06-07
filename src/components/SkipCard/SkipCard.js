import { Card, Button, Badge } from "react-bootstrap";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import "./SkipCard.css";

const SkipCard = ({
  size, price_before_vat, hire_period_days, allows_heavy_waste, allowed_on_road, selected, onSelect,
}) => {
  const warnings = [];

  if (!allows_heavy_waste) {
    warnings.push({ text: "Not Suitable for Heavy Waste", variant: "danger" });
  }

  if (!allowed_on_road) {
    warnings.push({ text: "Not Allowed On The Road", variant: "warning" });
  }

  const isDisabled = warnings.length > 0;

  return (
    <Card
      className={`h-100 d-flex flex-column shadow-sm ${
        selected ? "border-primary" : "border-light"
      } ${isDisabled ? "opacity-50" : ""}`}
      role="button"
      aria-pressed={selected}
    >
      <div
        style={{ height: "200px", overflow: "hidden" }}
        className="rounded-top"
      >
        <Card.Img
          variant="top"
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`}
          alt={`${size} Yard Skip`}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-semibold">{size} Yard Skip</Card.Title>

        <Card.Text className="text-muted mb-2 small">
          {hire_period_days} day hire period
          <br />
          <span className="text-dark h6">£{price_before_vat}</span>
        </Card.Text>

        <div className="mb-2">
          {warnings.map((warn, i) => (
            <Badge
              key={i}
              bg={warn.variant}
              className="me-1 text-light small py-1 px-2"
              aria-label={warn.text}
            >
              <ExclamationTriangleFill
                className="me-1"
                style={{ fontSize: "0.75rem" }}
              />
              {warn.text}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          <Button
            variant={selected ? "primary" : "outline-primary"}
            className="w-100"
            onClick={!isDisabled ? onSelect : undefined}
            disabled={isDisabled}
            aria-label={
              isDisabled
                ? "Selection disabled due to restrictions"
                : selected
                ? "Skip selected"
                : "Select this skip"
            }
          >
            {selected ? "Selected" : "Select This Skip"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SkipCard;