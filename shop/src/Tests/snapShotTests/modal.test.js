import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "../../components/Modal";
import { Provider } from 'react-redux';
import { store } from "../../redux/store";


test("Modal title test", ()=>{
    render(<Provider store={store}><Modal tittle={"Test title"}/></Provider>);
    const title = screen.getByText("Test title");
    expect(title).toBeInTheDocument();
})
