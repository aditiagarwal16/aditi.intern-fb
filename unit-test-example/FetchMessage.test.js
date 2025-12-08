// FetchMessage.test.js
import { render, screen, waitFor } from "@testing-library/react";
import FetchMessage from "./FetchMessage";
import axios from "axios";

// mock axios
jest.mock("axios");

test("shows the message returned by the API", async () => {
  // mock API response
  axios.get.mockResolvedValue({
    data: { message: "Hello from test" },
  });

  render(<FetchMessage />);

  const paragraph = await waitFor(() => screen.getByTestId("msg"));

  expect(paragraph.textContent).toBe("Hello from test");
});
