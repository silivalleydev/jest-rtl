import { describe, expect, test } from "@jest/globals";
import { isPositiveNumber, isValidEmail } from "../../util/util";

describe('Email Validation Function', () => {
    test('Valid Email true', () => {
        expect(isValidEmail('abc@gmail.com')).toBe(true); 
    })
})

describe('isPositiveNumber Function Test', () => {
    test('Positive Number true', () => {
        expect(isPositiveNumber(12)).toBe(true);
    })
    test('Zero false', () => {
        expect(isPositiveNumber(0)).toBe(false);
    })
})