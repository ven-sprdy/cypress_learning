class EmployeeListPage {

    constructor() {
        this.url = "/web/index.php/pim/viewEmployeeList";
    }

    visitEmployeeList() {
        cy.visit(this.url);
    }

    clickEmployeeListLink() {
        cy.contains('PIM').click();
    }

}
const employeeListPage = new EmployeeListPage();
export default employeeListPage;