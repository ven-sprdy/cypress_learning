import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { employeeListPage } from "../../../pages/EmployeeList/EmployeeListPage.spec"

When("User clicks on employee list link from left hand menu", () => {
    employeeListPage.clickEmployeeListLink();
}) ;

Then("User should see the employee list page with {string} title", (title) => {
    cy.assertPageTitle(title);
});