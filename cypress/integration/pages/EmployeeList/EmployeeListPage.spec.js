class EmployeeListPage {

    elements = {
        employeeListLink: () => cy.contains('PIM')
    }

    constructor() {
        this.url = "/web/index.php/pim/viewEmployeeList";
    }

    visitEmployeeList() {
        cy.visit(this.url);
    }

    clickEmployeeListLink() {
        this.elements.employeeListLink().click();
    }

}
export const employeeListPage = new EmployeeListPage();