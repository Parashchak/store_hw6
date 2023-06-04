import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../components/Button";

describe("Button test", ()=>{
    test("render button with correct text", async()=>{
        const btnText = "Buy";
        render(<Button text={btnText}/>);
        const button = screen.getByText(btnText);
        expect(button).toBeInTheDocument();
    });
    test("call the onClick function", async()=>{
        const click = jest.fn();
        render (<Button onClick={click} text="test button"/>);
        const button = screen.getByText("test button");
        fireEvent.click(button);
        expect(click).toHaveBeenCalled();
    })
})