import React, { useState } from 'react';

const Form = ({ fields, onSubmit, submitText = 'Submit' }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label className="form-label">{field.label}</label>
          {field.type === 'select' ? (
            <select 
              name={field.name}
              className="form-select"
              onChange={handleChange}
              required={field.required}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option, i) => (
                <option key={i} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              className="form-control"
              placeholder={field.placeholder}
              onChange={handleChange}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        {submitText}
      </button>
    </form>
  );
};

export default Form;