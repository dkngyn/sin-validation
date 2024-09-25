import {describe, it, expect} from 'vitest'
import {sinValidator} from './sin_validator.ts'

describe('sinValidator', () => {
    it('given valid input, should return true', () => {
        const validInput = '046454286'
        expect(sinValidator(validInput)).toBe(true)
    })

    it('given invalid input with 9-digit, should return false', () => {
        const invalidInput = '123456789'
        expect(sinValidator(invalidInput)).toBe(false)
    })

    it('given invalid input with less than 9-digit, should return false', () => {
        const shortInput = '12345678'
        expect(sinValidator(shortInput)).toBe(false)
    })

    it('given invalid input with more than 9-digit, should return false', () => {
        const longInput = '1234567890'
        expect(sinValidator(longInput)).toBe(false)
    })

    it('given valid 9-digit input with spaces, should return true', () => {
        const validWithSpaces = '046 454 286'
        expect(sinValidator(validWithSpaces)).toBe(true)
    })

    it('given invalid 9-digit input with spaces, should return true', () => {
        const invalidWithSpaces = ' 123 456 78 9 ' // Invalid with spaces
        expect(sinValidator(invalidWithSpaces)).toBe(false)
    })

    it('given non-digit input, should return false', () => {
        const nonDigitInput = 'abc mno xyz'
        expect(sinValidator(nonDigitInput)).toBe(false)
    })

    it('given mixed character and digit input, should return false', () => {
        const mixedInput = '12340abcd'
        expect(sinValidator(mixedInput)).toBe(false)
    })
})
