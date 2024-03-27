import React, { useState } from 'react';

function InputComponent({ type, label, value, onChange }) {
  switch (type) {
    case 'text':
      return (
        <div>
          <label>{label}</label>
          <input type="text" value={value} onChange={onChange} />
        </div>
      );
    case 'checkbox':
      return (
        <div>
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'email':
      return (
        <div>
          <label>
            <input type="email" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'number':
      return (
        <div>
          <label>
            <input type="number" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'password':
      return (
        <div>
          <label>
            <input type="password" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'date':
      return (
        <div>
          <label>
            <input type="date" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'time':
      return (
        <div>
          <label>
            <input type="time" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'url':
      return (
        <div>
          <label>
            <input type="url" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'file':
      return (
        <div>
          <label>
            <input type="file" value={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
      case 'radio':
      return (
        <div>
          <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
          </label>
        </div>
      );
    default:
      return null;
  }
}

function App() {
  const [components, setComponents] = useState([]);

  const addComponent = (type) => {
    setComponents([...components, { type, label: '', value: '' }]);
  };

  const handleChange = (index, event) => {
    const updatedComponents = [...components];
    updatedComponents[index] = {
      ...updatedComponents[index],
      [event.target.name]: event.target.value,
    };
    setComponents(updatedComponents);
  };

  return (
    <div>
      {components.map((component, index) => (
        <InputComponent
          key={index}
          type={component.type}
          label={component.label}
          value={component.value}
          onChange={(event) => handleChange(index, event)}
        />
      ))}
      <button onClick={() => addComponent('text')}>Add Text Input</button>
      <button onClick={() => addComponent('checkbox')}>Add Checkbox</button>
      <button onClick={() => addComponent('number')}>Add Number</button>
      <button onClick={() => addComponent('email')}>Add Email</button>
      <button onClick={() => addComponent('radio')}>Add Radio</button>
      <button onClick={() => addComponent('date')}>Add Date</button>
      <button onClick={() => addComponent('time')}>Add Time</button>
      <button onClick={() => addComponent('url')}>Add Url</button>
      <button onClick={() => addComponent('file')}>Add File</button>
      <button onClick={() => addComponent('password')}>Add Password</button>
    </div>
  );
}

export default App;
