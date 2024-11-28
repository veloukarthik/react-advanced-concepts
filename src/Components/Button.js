import Button from "./Reusable/Button";

function Buttons() {
    return (
        <>
            <Button variant="primary" onClick={() => alert("Primary Button Clicked!")}>
                Primary Button
            </Button>

            {/* Secondary Button */}
            <Button variant="secondary" onClick={() => alert("Secondary Button Clicked!")}>
                Secondary Button
            </Button>

            {/* Danger Button */}
            <Button variant="danger" onClick={() => console.log("handleDangerClick")}>
                Danger Button
            </Button>

            {/* Success Button */}
            <Button variant="success" onClick={() => console.log("Success Button Clicked!")}>
                Success Button
            </Button>

            {/* Disabled Button */}
            <Button variant="primary" disabled onClick={() => console.log("This won't fire!")}>
                Disabled Button
            </Button>
        </>
    );
}

export default Buttons;