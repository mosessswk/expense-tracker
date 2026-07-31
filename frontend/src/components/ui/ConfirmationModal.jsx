import Button from "./Button";

function ConfirmationModal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-brand-secondary p-6 rounded-lg w-96 outline outline-2 outline-gray-500">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <p className="mb-6">{message}</p>
                <div className="flex justify-end gap-4">
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button variant="critical" onClick={onConfirm}>Confirm</Button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;