import { useEffect } from "react";

function Toast({ message, type, onClose }) {

    setTimeout(() => {
        onClose();
    }, 3000);

    const baseClasses = "px-3 py-1 rounded-full flex justify-center items-center outline"

    let classes = "";
    switch (type) {
        case "success":
            classes = "bg-green-500 outline-green-700 text-white";
            break;
        case "error":
            classes = "bg-red-500 outline-red-700 text-white";
            break;
        case "warning":
            classes = "bg-yellow-500 outline-yellow-700 text-black";
            break;
        case "info":
        default:
            classes = "bg-brand-primary outline-blue-400 text-black";
            break;
    }

    return (
        <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
            <div className={`${baseClasses} ${classes}`}>
                <span>{message}</span>
            </div>
        </div>
    );
}

export default Toast;