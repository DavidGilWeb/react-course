import { useEffect, useState } from "react";

const ToggleButton = () => {
const [isActive, setIsActive] = useState(false);

useEffect(() => {
    console.log(`Button is ${isActive ? 'active' : 'inactive'}`);
});

return (
    <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Active' :'Inactiive'}</button>
);
}
export default ToggleButton;