import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceSelect">
                <Form.Label>Choose your answer:</Form.Label>
                <Form.Select
                    value={selectedAnswer}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelectedAnswer(e.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

// OG code
// import React, { useState } from "react";

// export function MultipleChoiceQuestion({
//     options,
//     expectedAnswer,
// }: {
//     options: string[];
//     expectedAnswer: string;
// }): React.JSX.Element {
//     return (
//         <div>
//             <h3>Multiple Choice Question</h3>
//         </div>
//     );
// }
