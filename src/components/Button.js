import React from 'react';
import { ArrowRightIcon } from "phosphor-react";

function Button({ label }) {
  return (
    <button className="btn btn-primary flex items-center">
      {label}
      <ArrowRightIcon size={24} className="ml-2" />
    </button>
  );
}

export default Button;
