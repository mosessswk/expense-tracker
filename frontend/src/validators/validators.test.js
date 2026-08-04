import { describe, test, expect } from 'vitest';
import { expenseValidator } from './expenseValidator';
import { registerValidator } from './registerValidator';

const expenseValidInput = { title: "Lunch", amount: "100", category: "Food", date: "2026-01-01" };
const expenseMissingTitle = { title: "", amount: "100", category: "Food", date: "2026-01-01" };
const expenseMissingAmount = { title: "Lunch", amount: "", category: "Food", date: "2026-01-01" };
const expenseNegativeAmount = { title: "Lunch", amount: "-100", category: "Food", date: "2026-01-01" };
const expenseInvalidAmount1 = { title: "Lunch", amount: "abc", category: "Food", date: "2026-01-01" };
const expenseInvalidAmount2 = { title: "Lunch", amount: "1234567654321", category: "Food", date: "2026-01-01" };
const expenseInvalidAmount3 = { title: "Lunch", amount: "100.999", category: "Food", date: "2026-01-01" };
const expenseInvalidAmount4 = { title: "Lunch", amount: "100.1.0", category: "Food", date: "2026-01-01" };
const expenseMissingCategory = { title: "Lunch", amount: "100", category: "", date: "2026-01-01" };
const expenseMissingDate = { title: "Lunch", amount: "100", category: "Food", date: "" };
const expenseInvalidDate1 = { title: "Lunch", amount: "100", category: "Food", date: "2026-01-1" };
const expenseInvalidDate2 = { title: "Lunch", amount: "100", category: "Food", date: "026-01-01" };
const expenseMultipleErrors = { title: "", amount: "abc", category: "", date: "2026-01-1" };

const registerValidInput1 = { username: "user", password: "12345678", confirmPassword: "12345678" };
const registerValidInput2 = { username: "user", password: "12345678", confirmPassword: "12345678", displayName: "User" };
const registerEmptyUsername = { username: "", password: "12345678", confirmPassword: "12345678" };
const registerMissingPassword = { username: "user", password: "", confirmPassword: "" };
const registerShortPassword = { username: "user", password: "1234567", confirmPassword: "1234567" };
const registerMissingConfirmPassword = { username: "user", password: "12345678", confirmPassword: "" };
const registerMismatchedPasswords = { username: "user", password: "12345678", confirmPassword: "12345668" };
const registerMultipleErrors = { username: "", password: "1234567", confirmPassword: "1234568" };

describe('expenseValidator', () => {
    test("valid expense", () => {
        const errors = expenseValidator(expenseValidInput);
        expect(errors).toEqual({});
    });

    test("missing title", () => {
        const errors = expenseValidator(expenseMissingTitle);
        expect(errors).toEqual({ title: "Title is required" });
    });

    test("missing amount", () => {
        const errors = expenseValidator(expenseMissingAmount);
        expect(errors).toEqual({ amount: "Amount must be a valid number" });
    });

    test("negative amount", () => {
        const errors = expenseValidator(expenseNegativeAmount);
        expect(errors).toEqual({ amount: "Amount must not be negative" });
    });

    test("amount with alphabetic characters", () => {
        const errors = expenseValidator(expenseInvalidAmount1);
        expect(errors).toEqual({ amount: "Amount must be a valid number" });
    });

    test("amount with too many digits", () => {
        const errors = expenseValidator(expenseInvalidAmount2);
        expect(errors).toEqual({ amount: "Amount must not exceed 10 digits" });
    });

    test("amount with too many decimal places", () => {
        const errors = expenseValidator(expenseInvalidAmount3);
        expect(errors).toEqual({ amount: "Amount at most 2 decimal places" });
    });

    test("amount with two decimal points", () => {
        const errors = expenseValidator(expenseInvalidAmount4);
        expect(errors).toEqual({ amount: "Amount must be a valid number" });
    });

    test("missing category", () => {
        const errors = expenseValidator(expenseMissingCategory);
        expect(errors).toEqual({ category: "Category is required" });
    });

    test("missing date", () => {
        const errors = expenseValidator(expenseMissingDate);
        expect(errors).toEqual({ date: "Date must be in YYYY-MM-DD format" });
    });

    test("invalid date format", () => {
        const errors = expenseValidator(expenseInvalidDate1);
        expect(errors).toEqual({ date: "Date must be in YYYY-MM-DD format" });
    });

    test("invalid date value", () => {
        const errors = expenseValidator(expenseInvalidDate2);
        expect(errors).toEqual({ date: "Date must be in YYYY-MM-DD format" });
    });

    test("multiple errors", () => {
        const errors = expenseValidator(expenseMultipleErrors);
        expect(errors).toEqual({
            title: "Title is required",
            amount: "Amount must be a valid number",
            category: "Category is required",
            date: "Date must be in YYYY-MM-DD format",
        });
    });
});

describe('registerValidator', () => {
    test("valid input", () => {
        const errors = registerValidator(registerValidInput1);
        expect(errors).toEqual({});
    });

    test("valid input with display name", () => {
        const errors = registerValidator(registerValidInput2);
        expect(errors).toEqual({});
    });
    
    test("missing username", () => {
        const errors = registerValidator(registerEmptyUsername);
        expect(errors).toEqual({ username: "Username is required" });
    });

    test("missing password", () => {
        const errors = registerValidator(registerMissingPassword);
        expect(errors).toEqual({ password: "Password is required", confirmPassword: "Please confirm your password" });
    });

    test("short password", () => {
        const errors = registerValidator(registerShortPassword);
        expect(errors).toEqual({ password: "Password at least 8 characters long" });
    });

    test("missing confirm password", () => {
        const errors = registerValidator(registerMissingConfirmPassword);
        expect(errors).toEqual({ confirmPassword: "Please confirm your password" });
    });

    test("mismatched passwords", () => {
        const errors = registerValidator(registerMismatchedPasswords);
        expect(errors).toEqual({ confirmPassword: "Passwords do not match" });
    });

    test("multiple errors", () => {
        const errors = registerValidator(registerMultipleErrors);
        expect(errors).toEqual({
            username: "Username is required",
            password: "Password at least 8 characters long",
            confirmPassword: "Passwords do not match",
        });
    });
});