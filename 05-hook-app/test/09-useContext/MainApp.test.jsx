import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/components/09-useContext/MainApp";

describe("Pruebas en el componente <MainaPP/>", () => {

  test("debe mostrar el componente MainApp", () => {
    render(
      <MemoryRouter>  {/* nos permite hacer pruebas del router */}
        <MainApp />
      </MemoryRouter>
    );

    screen.debug();
    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("debe mostrar el componente LoginApp", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>  
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });

  test("debe mostrar el componente AboutPage", () => {
    render(
      <MemoryRouter initialEntries={['/about']}>  
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("AboutPage")).toBeTruthy();
  });
});
