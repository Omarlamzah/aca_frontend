import React from 'react';
import './css.css';

const Switch = ({ text, checked, onChange }) => {
  return (
    <div className="btn-container">
      <label className="rocker rocker-small">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="switch-left">Yes</span>
        <span className="switch-right">No</span>
      </label>
    </div>
  );
};

export default Switch;