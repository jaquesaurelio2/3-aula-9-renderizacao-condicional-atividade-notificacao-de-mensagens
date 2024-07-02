import { render, screen, within } from "@testing-library/react";
import MessageNotification from "../components/MessageNotification";

describe("MessageNotification component", () => {
  it("should render the correctly text when unreadMessagesTotal === 0", async () => {
    render(<MessageNotification unreadMessagesTotal={0} />);

    const { getByText } = within(screen.getByTestId("MessageNotification"));

    expect(getByText("Você não tem novas mensagens")).toBeInTheDocument();
  });

  it("should render the correctly text when unreadMessagesTotal === 1", async () => {
    render(<MessageNotification unreadMessagesTotal={1} />);

    const { getByText } = within(screen.getByTestId("MessageNotification"));

    expect(getByText("Você tem 1 mensagem não lida")).toBeInTheDocument();
  });

  it("should render the correctly text when unreadMessagesTotal > 1", async () => {
    render(<MessageNotification unreadMessagesTotal={2} />);

    const { getByText } = within(screen.getByTestId("MessageNotification"));

    expect(getByText("Você tem 2 mensagens não lidas")).toBeInTheDocument();
  });
});
