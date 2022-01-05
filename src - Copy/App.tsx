import { useState } from 'react';
import './App.css';
import Form from './Component/Fields/Form';
import Home from './Component/Pages/Home';
import Page1 from './Component/Pages/Page1';
import Page2 from './Component/Pages/Page2';
import Page3 from './Component/Pages/Page3';

interface dtls {
  name: string;
  email: string;
  address: string;
  dob: string;
  phone: string
}

const initialDetails: dtls = {
  name: '',
  email: '',
  address: '',
  dob: '',
  phone: '',
}

function App() {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState(initialDetails);
  let content: string | React.ReactElement = '';

  const nextHandler = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  const prevHandler = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  const updateNameEmail = (newName: string, newEmail: string) => {
    setDetails({ ...details, name: newName, email: newEmail });
  }

  const updateAddress = (newAddress: string) => {
    setDetails({ ...details, address: newAddress });
  }

  switch (step) {
    case 1:
      content = <Page1 nextHandler={nextHandler} prevHandler={prevHandler} updateNameEmail={updateNameEmail} curName={details.name} curEmail={details.email} />
      break;
    case 2:
      content = <Page2 nextHandler={nextHandler} prevHandler={prevHandler} updateAddress={updateAddress} curAddress={details.address} />
      break;
    case 3:
      content = <Page3 prevHandler={prevHandler} curDetails={details} />
      break;
    default:
  }

  return (
    <div className="App">
      <Form>
        {step === 0 ? <Home nextHandler={nextHandler} /> : content}
      </Form>
    </div>
  );
}

export default App;
