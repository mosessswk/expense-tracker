function ConfirmationModal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-brand-secondary p-6 rounded-lg w-96 outline outline-2 outline-gray-500">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="mb-6">{message}</p>
                <div className="flex justify-end gap-4">
                    <button onClick={onCancel}>Cancel</button>
                    <button className="button-critical" onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;