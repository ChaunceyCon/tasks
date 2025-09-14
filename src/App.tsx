import React from "react";
import "./App.css";
// Added import button from chapter 2 Basic HTML and CSS. I also added on Container, Row, Col, And Image for bootstrap import process.
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import dogImage from "./assets/dog.jpg"; //Convert PNG to JPEG

function App(): React.JSX.Element {
    return (
        <div className="App">
            {/* Was <header className="App-header"> but had to change to h1 due to header test */}
            {/* <h1 className="App-header">
                UM COS420 with React Hooks and TypeScript
            </h1> */}
            {/* Trying to fix header issue */}
            <header className="App-header">
                <h1 role="heading">
                    UM COS420 with React Hooks and TypeScript
                </h1>
            </header>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Chauncey Hello World
                        </p>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>
                    <Col style={{ backgroundColor: "red" }}>
                        <p>Second column content.</p>
                        <Image src={dogImage} alt="My dog Marley" fluid />
                        <ul>
                            <li>Dog toy</li>
                            <li>Dog food</li>
                            <li>Dog borks</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

// Test code:

// Old code for reminding:

// import React from "react";
// // Added import button from chapter 2 Basic HTML and CSS. I also added on Container, Row, Col, And Image for bootstrap import process.
// import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import "./App.css";
// //  Used for styles and important for the dual Bootstrap and Two Column Layout
// import "bootstrap/dist/css/bootstrap.min.css";

// function App(): React.JSX.Element {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 {/* Adding Two Column Layout from CSS */}
//                 UM COS420 with React Hooks and TypeScript
//             </header>
//             <p>
//                 Edit <code>src/App.tsx</code> and save. This page will
//                 automatically reload. Chauncey Hello World
//             </p>
//             {/* Return for react-bootstrap */}
//             <Button
//                 onClick={() => {
//                     console.log("I am logged.");
//                 }}
//             >
//                 Log Hello World
//             </Button>
//         </div>
//     );
// }

// export default App;
