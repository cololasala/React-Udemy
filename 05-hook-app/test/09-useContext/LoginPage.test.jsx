import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/components/09-useContext/LoginPage";
import { UserContext } from "../../src/components/09-useContext/context/UserContext";

describe("Pruebas sobre el componente <LoginPage />", () => {
  const setUserMock = jest.fn();
  const user = {
    id: 1,
    name: "Luciano",
    lastName: "Lasala",
  };

  test("debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
  });

  test("debe llamar setUser cuando hago click en el boton", () => {
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole("button", {
      name: "Establecer usuario",
    });
    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: "Luciano",
      lastname: "Lasala",
    });
  });
});
