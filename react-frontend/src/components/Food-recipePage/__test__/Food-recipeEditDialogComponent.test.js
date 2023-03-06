import React from "react";
import { render, screen } from "@testing-library/react";

import Food-recipeEditDialogComponent from "../Food-recipeEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders food-recipe edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Food-recipeEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("food-recipe-edit-dialog-component")).toBeInTheDocument();
});
