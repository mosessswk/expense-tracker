import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import ConfirmationModal from "./ConfirmationModal";

describe("ConfirmationModal", () => {
    test("renders", () => {
        render(
            <ConfirmationModal
                title="Confirm action"
                onConfirm={() => {}}
                onCancel={() => {}}
                message="Are you sure?"
            />
        );

        expect(screen.getByText(/confirm action/i)).toBeInTheDocument();
        expect(screen.getByText(/are you sure\?/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /confirm/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    });

    test("calls the confirm callback when confirmed", async () => {
        const user = userEvent.setup();
        const handleConfirm = vi.fn();
        render(
            <ConfirmationModal
                title="Confirm action"
                onConfirm={handleConfirm}
                onCancel={() => {}}
                message="Are you sure?"
            />
        );
        await user.click(screen.getByRole("button", { name: /confirm/i }));
        expect(handleConfirm).toHaveBeenCalledTimes(1);
    });

    test("calls the close callback when canceled", async () => {
        const user = userEvent.setup();
        const handleCancel = vi.fn();
        render(
            <ConfirmationModal
                title="Confirm action"
                onConfirm={() => {}}
                onCancel={handleCancel}
                message="Are you sure?"
            />
        );
        await user.click(screen.getByRole("button", { name: /cancel/i }));
        expect(handleCancel).toHaveBeenCalledTimes(1);
    });
});