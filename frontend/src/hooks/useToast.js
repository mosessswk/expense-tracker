import { useState } from 'react';

function useToast() {
    const [toast, setToast] = useState(null);

    function showSuccess(message) {
        setToast({ message, type: "success"});
    }
    function showError(message) {
        setToast({ message, type: "error"});
    }
    function showWarning(message) {
        setToast({ message, type: "warning"});
    }
    function showInfo(message) {
        setToast({ message, type: "info"});
    }
    function hideToast() {
        setToast(null);
    }

    return { toast, showSuccess, showError, showWarning, showInfo, hideToast };
}

export { useToast };