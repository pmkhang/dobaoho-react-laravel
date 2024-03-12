import React from "react";

const Checkbox = ({ type = "checkbox", id, label, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <input type={type} {...props} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;
