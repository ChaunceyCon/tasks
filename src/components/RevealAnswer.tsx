import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = (): void => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <span>42</span>}
        </div>
    );
}

// Old code:
// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// export function RevealAnswer(): React.JSX.Element {
//     return <div>Reveal Answer</div>;
// }
