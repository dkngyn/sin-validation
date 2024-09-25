export function sinValidator(input: string): boolean {
    return isNineDigits(input) && isValidLuhn(input)
}

function isNineDigits(input: string) {
    const digits = input.replace(/\s/g, '')
    const nineDigitsRegex = /^\d{9}$/

    return (digits.length === 9 && nineDigitsRegex.test(digits))
}

function isValidLuhn(input: string): boolean {
    const digits = input.replace(/\s/g, '')

    let sum = 0

    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits.charAt(i), 10)

        if (i % 2 !== 0) {
            digit *= 2
            if (digit > 9) {
                digit -= 9
            }
        }
        sum += digit
    }

    return sum % 10 === 0
}
