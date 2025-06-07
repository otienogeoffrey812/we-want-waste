import {
  GeoAltFill, TrashFill, Truck, ShieldFillCheck, CalendarFill, CreditCardFill, CheckCircleFill
} from 'react-bootstrap-icons';

const steps = [
  'Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'
];

const iconsMap = [
  GeoAltFill, TrashFill, Truck, ShieldFillCheck, CalendarFill, CreditCardFill
];

const ProgressBar = ({ currentStep }) => {
  return (
    <div
      className="w-100 px-3 pt-3"
      style={{
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        className="mx-auto"
        style={{
          display: 'flex',
          gap: '1rem',
          minWidth: 'max-content',
          width: 'fit-content',
        }}
      >
        {steps.map((label, index) => {
          const Icon = iconsMap[index] || CheckCircleFill;
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={index}
              className="d-flex flex-column align-items-center position-relative"
              style={{ minWidth: 100 }}
            >
              <div
                className="d-flex justify-content-center align-items-center rounded-circle mb-1"
                style={{
                  width: 40,
                  height: 40,
                  fontSize: 22,
                  backgroundColor: isCompleted
                    ? '#0d6efd'
                    : isActive
                    ? '#0dcaf0'
                    : '#6c757d',
                  color: 'white',
                  zIndex: 2,
                  flexShrink: 0,
                }}
              >
                {isCompleted ? <CheckCircleFill /> : <Icon />}
              </div>
              <div
                className="text-center"
                style={{
                  fontSize: 13,
                  maxWidth: 70,
                  color: isActive
                    ? '#0dcaf0'
                    : isCompleted
                    ? '#0d6efd'
                    : '#adb5bd',
                  fontWeight: isActive ? '600' : '400',
                }}
              >
                {label}
              </div>

             {index < steps.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  left: '50%',
                  right: '-50%',
                  height: 4,
                  backgroundColor:
                    index < currentStep ? '#0d6efd' : '#6c757d',
                  zIndex: 1,
                }}
              />
            )}

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;