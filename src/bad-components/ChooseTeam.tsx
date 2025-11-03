import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    function addMember(newMember: string): void {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam(): void {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    addMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    <ul>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                    </ul>
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
// Original code
// export function ChooseTeam(): React.JSX.Element {
//     const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
//     const [team, setTeam] = useState<string[]>([]);

//     function chooseMember() {
//         /*
//         if (!team.includes(newMember)) {
//             team.push(newMember);
//         }
//         */
//     }

//     function clearTeam() {
//         /*
//         team = [];
//         */
//     }

//     return (
//         <div>
//             <h3>Choose Team</h3>
//             <Row>
//                 <Col>
//                     {allOptions.map((option: string) => (
//                         <div key={option} style={{ marginBottom: "4px" }}>
//                             Add{" "}
//                             <Button onClick={chooseMember} size="sm">
//                                 {option}
//                             </Button>
//                         </div>
//                     ))}
//                 </Col>
//                 <Col>
//                     <strong>Team:</strong>
//                     {team.map((member: string) => (
//                         <li key={member}>{member}</li>
//                     ))}
//                     <Button onClick={clearTeam}>Clear Team</Button>
//                 </Col>
//             </Row>
//         </div>
//     );
// }
