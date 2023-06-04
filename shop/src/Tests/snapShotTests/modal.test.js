import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "../../components/Modal";
import { modalReducer } from "../../redux/reducers/modal";
import { modalTypes } from "../../redux/types";
import { useSelector } from "react-redux";
import { Provider } from 'react-redux';
import { store } from "../../redux/store";


test("Modal title test", ()=>{
    render(<Provider store={store}><Modal tittle={"Test title"}/></Provider>);
    const title = screen.getByText("Test title");
    expect(title).toBeInTheDocument();
})
