import { render, screen, waitFor } from "@testing-library/react";
import FetchMessage from "./FetchMessage";
import axios from "axios";

jest.mock("axios");

test("shows API message", async () => {
  axios.get.mockResolvedValue({
    data: { message: "Hello from mock" },
  });

  render(<FetchMessage />);

  const textElement = await waitFor(() => screen.getByTestId("msg"));

  expect(textElement.textContent).toBe("Hello from mock");
});
