import React from "react";
import { render, screen } from "@testing-library/react";

import Food-recipePage from "../Food-recipePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders food-recipe page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Food-recipePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("food-recipe-datatable")).toBeInTheDocument();
    expect(screen.getByRole("food-recipe-add-button")).toBeInTheDocument();
});
