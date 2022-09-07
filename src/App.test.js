import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import React from "react";

test("initial text is change to blue", () => {
    render(<App />)
    const buttonElement = screen.getByRole("button", { name: "change to blue" })
    expect(buttonElement).toHaveStyle({ backgroundColor: "red" })

    fireEvent.click(buttonElement)

    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" })
    expect(buttonElement.textContent).toBe("change to red");

})
test("iniially button is enabled", () => {
    render(<App />)
    const enable = screen.getByRole("button", { name: "change to blue" })
    expect(enable).toBeEnabled();
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).not.toBeChecked();
})

test("button is enabled or disabled by clicking checkbox",()=>{
    render(<App/>)
    const enable=screen.getByRole("button")
    const checkbox=screen.getByRole("checkbox")

    fireEvent.click(checkbox)
    expect(enable).toBeDisabled()

    fireEvent.click(checkbox);
    expect(enable).toBeEnabled()

})