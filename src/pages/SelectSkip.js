import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSkips } from '../hooks/useSkips';
import SkipGrid from '../components/SkipGrid/SkipGrid';
import './SelectSkip.css';

const LOCAL_STORAGE_KEY = 'booking_flow_state';

const SelectSkip = () => {
  const { skips, loading, error } = useSkips();
  const [selected, setSelected] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.selectedSkip?.id) {
          setSelected(parsed.selectedSkip.id);
        }
      } catch (err) {
        console.error('Failed to parse local storage booking flow state:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (selected) {
      const timeout = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timeout);
    } else {
      setAnimate(false);
    }
  }, [selected]);

  const handleSelect = (skipId) => {
    const selectedSkip = skips.find((skip) => skip.id === skipId);
    const newSelected = selected === skipId ? null : skipId;

    setSelected(newSelected);

    const current = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

    const updated = {
      ...current,
      step: 3,
      selectedSkip: newSelected ? selectedSkip : null,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  const selectedSkip = skips.find((skip) => skip.id === selected);

  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">Choose Your Skip Size</h2>
        <SkipGrid
          skips={skips}
          loading={loading}
          error={error}
          selected={selected}
          onSelect={handleSelect}
          setSelected={setSelected}
        />
      </Container>

      {selectedSkip && (
        <footer className={`selected-footer ${animate ? 'animate-footer' : ''}`}>
          <div className="footer-inner container">
            <div className="skip-details">
              <div className="skip-size">{selectedSkip.size} Yard Skip</div>
              <div className="skip-price">£{selectedSkip.price_before_vat}</div>
              <div className="skip-period">{selectedSkip.hire_period_days} day hire</div>
            </div>
            <div className="footer-actions">
              <button className="btn btn-outline-secondary" onClick={() => console.log('Back')}>
                Back
              </button>
              <button className="btn btn-primary" onClick={() => console.log('Continue')}>
                Continue <span className="ms-1">&rarr;</span>
              </button>
            </div>
          </div>
        </footer>
      )}

    </>
  );
};

export default SelectSkip;