import { render, fireEvent } from "@testing-library/react";
import CalcNumber from "../../components/CalcNumber";

describe("CalcNumber component", () => {
  const onClickMock = jest.fn(console.log("clicked"));

  it("should renders correctly", () => {
    const { container } = render(
      <CalcNumber number={2} handleClick={onClickMock} />
    );
    expect(container).toMatchSnapshot();
  });

  it("click event calls the provided function", () => {
    const { getByRole } = render(
      <CalcNumber number={2} handleClick={onClickMock} />
    );

    const element = getByRole("button");
    fireEvent.click(element);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
