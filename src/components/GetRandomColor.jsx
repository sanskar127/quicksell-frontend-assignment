import { useState, useEffect } from "react";

const GetRandomHexColor = () => {
    const [color, setColor] = useState("");

    useEffect(() => {
        generateRandomColor();
    }, []); // Empty dependency array ensures the effect runs once on component mount

    const generateRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    };

    return color;
};

export default GetRandomHexColor;
