import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = {
        width: 120,
        height: 60,
        fontWeight: "bold",
        cursor: "pointer",
        backgroundColor: isSelected ? "pink" : "",
        margin: "auto",
        "border-radius": "9999px",
        border: "none",
        display: "block",
    }

    return (
        <>
            <button style={style} onClick={clickHandler}>ボタン</button>
            <div style={{ textAlign: "center" }} >{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
