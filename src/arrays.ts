/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
// OG code:
// export function bookEndList(numbers: number[]): number[] {
//     return numbers;
// }
// Self made 1:
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) return [];
    if (numbers.length === 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
// OG code:
// export function tripleNumbers(numbers: number[]): number[] {
//     return numbers;
// }
// Self made 2:
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
// OG CODE:
// export function stringsToIntegers(numbers: string[]): number[] {
//     return [];
// }
// Self made3 :
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((s: string) => {
        const num = parseInt(s);
        return isNaN(num) ? 0 : num;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
// OG code:
// export const removeDollars = (amounts: string[]): number[] => {
//     return [];
// };
//self made 4:

export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str: string): number => {
        const cleaned = str.startsWith("$") ? str.slice(1) : str;
        const num = parseInt(cleaned, 10);
        return isNaN(num) ? 0 : num;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */

// OG code:

// export const shoutIfExclaiming = (messages: string[]): string[] => {
//     return [];
// };

// Self made 5:
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((msg: string): boolean => !msg.endsWith("?"))
        .map((msg: string): string =>
            msg.endsWith("!") ? msg.toUpperCase() : msg,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
// OG code:
// export function countShortWords(words: string[]): number {
//     return 0;
// }

// Self made 6:

export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
// OG code:
// export function allRGB(colors: string[]): boolean {
//     return false;
// }

// Self made 7:
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (c: string) => c === "red" || c === "green" || c === "blue",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */

// OG code:

// export function makeMath(addends: number[]): string {
//     return "";
// }

// Self made 8:

export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const sum = addends.reduce((a, b) => a + b, 0);
    return `${sum}=${addends.join("+")}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

// OG code:

// export function injectPositive(values: number[]): number[] {
//     return [];
// }

// Self made 9:

export function injectPositive(values: number[]): number[] {
    const index = values.findIndex((n: number) => n < 0);
    if (index === -1) {
        return [...values, values.reduce((a, b) => a + b, 0)];
    } else {
        const prefixSum = values.slice(0, index).reduce((a, b) => a + b, 0);
        return [
            ...values.slice(0, index + 1),
            prefixSum,
            ...values.slice(index + 1),
        ];
    }
}
