import { useState } from "react";

const ToggleButton = () => {
const [isActive, setIsActive] = useState(false);

return (
    <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Active' :'Inactiive'}</button>
);
}
export default ToggleButton;