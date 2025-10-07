import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
// OG Code 1:
// export function getPublishedQuestions(questions: Question[]): Question[] {
//     return [];
// }

export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question): boolean => q.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
// OG Code 2
// export function getNonEmptyQuestions(questions: Question[]): Question[] {
//     return [];
// }

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (q: Question): boolean =>
            !(q.body === "" && q.expected === "" && q.options.length === 0),
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
// OG Code 3
// export function findQuestion(
//     questions: Question[],
//     id: number,
// ): Question | null {
//     return null;
// }

export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((q: Question): boolean => q.id === id) || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
// OG Code 4
// export function removeQuestion(questions: Question[], id: number): Question[] {
//     return [];
// }

export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q: Question): boolean => q.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
// OG Code 5
// export function getNames(questions: Question[]): string[] {
//     return [];
// }

export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question): string => q.name);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
// OG Code 6
// export function makeAnswers(questions: Question[]): Answer[] {
//     return [];
// }

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
// OG Code 7
// export function publishAll(questions: Question[]): Question[] {
//     return [];
// }

export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (q: Question): Question => ({ ...q, published: true }),
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
// OG Code 8
// export function addNewQuestion(
//     questions: Question[],
//     id: number,
//     name: string,
//     type: QuestionType,
// ): Question[] {
//     return [];
// }

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
// OG Code 9
// export function renameQuestionById(
//     questions: Question[],
//     targetId: number,
//     newName: string,
// ): Question[] {
//     return [];
// }

export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : q,
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
// OG Code 10
// export function editOption(
//     questions: Question[],
//     targetId: number,
//     targetOptionIndex: number,
//     newOption: string,
// ): Question[] {
//     return [];
// }

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id !== targetId) {
            return q;
        }
        const newOptions = [...q.options];
        if (targetOptionIndex === -1) {
            newOptions.push(newOption);
        } else {
            newOptions[targetOptionIndex] = newOption;
        }
        return { ...q, options: newOptions };
    });
}
