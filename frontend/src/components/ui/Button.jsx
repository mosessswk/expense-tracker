function Button({ className = "", variant = "primary", children, disabled = false, type = "button", onClick }) {
    const buttonClasses = {
        primary: "m-0.5 p-1 border border-gray-500 rounded text-neutral-600 bg-brand-primary",
        secondary: "m-0.5 p-1 border border-gray-500 rounded text-neutral-600 bg-brand-secondary",
        critical: "m-0.5 p-1 border border-gray-500 rounded text-black bg-red-500 outline outline-2 outline-red-500",
        disabled: "cursor-not-allowed opacity-50",
    };

    return (
        <button className={`${className} ${buttonClasses[variant]} ${disabled ? buttonClasses.disabled : ""}`} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;