import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import ReservationCard from "./components/ReservationCard";
import mockedReservations from "../public/mockReservations.json";
import { Reservation } from "./Types";
import ReservationStatuses from "./components/ReservationStatuses";
import SortFields from "./components/sortFields";
import { getReservations } from "./Services/reservations";

jest.mock("axios");

// const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderStatuses = () => {
  const defaultProps = {
    onChangeStatus: jest.fn(),
  };
  return render(<ReservationStatuses {...defaultProps} />);
};

const renderSortFields = () => {
  const defaultProps = {
    onSortFieldChange: jest.fn(),
  };

  return render(<SortFields {...defaultProps} />);
};

describe("App component", () => {
  test("renders the App component", () => {
    render(<App />);
    const reservationHeader = screen.getByText(/Reservations List/i);
    expect(reservationHeader).toBeInTheDocument();
  });

  it("Renders reservation cards", () => {
    const sampleReservation: Reservation<number, string> = {
      id: "28e4dd4e-0204-415c-bc31-3777cd886f36",
      guest: {
        id: "20c77eca-6739-40a6-b39e-a34d8a329ba5",
        firstName: "Paige",
        lastName: "Turner",
        email: "turner@gmail.com",
      },
      startsAt: "2022-09-05T13:15:00",
      endsAt: "2022-09-05T13:45:00",
      guestCount: 2,
      status: "Upcoming",
      table: {
        id: "dd86f79b-8ff4-430f-abbf-aa67aaf9876a",
        name: "01",
      },
    };
    render(<ReservationCard reservation={sampleReservation} />);
  });

  it("displays a card for each restaurant", async () => {
    jest.mock("axios");
    const axios = require("axios");
    const mockResponse = { data: mockedReservations };
    axios.get.mockImplementation(() => Promise.resolve(mockResponse));
  
    const res = await (getReservations("/mockReservations.json")); 
    expect(res).toMatchObject(mockedReservations);
  });
});

describe("Reservation statuses", () => {
  it("Renders reservation statuses wrapper", async () => {
    await renderStatuses();
    const reservationStatuses = await screen.findByTestId(
      "reservation-statuses"
    );
    expect(reservationStatuses).toBeInTheDocument();
  });

  it("Renders reservation statuses list", async () => {
    await renderStatuses();
    const reservationStatusList = await screen.findAllByTestId(
      "reservation-status"
    );
    const listLength = Array.from(reservationStatusList).length;
    expect(listLength).toBeGreaterThan(1);
  });
});

describe("Sort Fields", () => {
  it("Renders the sort fields Wrapper", async () => {
    await renderSortFields();
    const sortFields = await screen.findByTestId("reservation-sortfields");
    expect(sortFields).toBeInTheDocument();
  });

  it("List reservation sort fields list", async () => {
    await renderSortFields();
    const sortFields = await screen.findAllByTestId("sort-field");
    expect(sortFields).toHaveLength(4);
  });
});
