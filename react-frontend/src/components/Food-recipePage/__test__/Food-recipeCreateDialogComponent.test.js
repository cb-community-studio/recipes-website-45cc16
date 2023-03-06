import React from "react";
import { render, screen } from "@testing-library/react";

import Food-recipeCreateDialogComponent from "../Food-recipeCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders food-recipe create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Food-recipeCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("food-recipe-create-dialog-component")).toBeInTheDocument();
});
