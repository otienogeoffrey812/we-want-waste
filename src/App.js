import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectSkip from './pages/SelectSkip';
import Stepper from './components/ProgressBar/ProgressBar';

function App() {
  const [currentStep] = useState(2);

  return (
    <div className="bg-light min-vh-100">
      <div className="d-flex justify-content-center">
        <Stepper currentStep={currentStep} />
      </div>
      <div className="p-3">
        <SelectSkip />
      </div>
    </div>
  );
}

export default App;
