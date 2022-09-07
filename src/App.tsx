import React, { useEffect, useState, useMemo } from "react";
import "./App.css";

import { getReservations } from "./Services/reservations";
import { ReservationStatus, Reservation } from "./Types";
import { LoadingIcon } from "./Loader";
import { reservationStatuses } from "./Constants";
import { getSortField } from "./utils";
import ReservationCard from "./components/ReservationCard";
import * as Styled from "./components/StyledComponents/Reservations.styled";
import ReservationStatuses from "./components/ReservationStatuses";
import SortFields from "./components/sortFields";

function App() {
  const [sortField, setSortField] = useState<string>("Starts at");
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [statuses, setStatus] = useState<ReservationStatus[]>(reservationStatuses);

  useEffect(() => {
    getReservations().then((reservations) => {
      setReservations(reservations);
      setLoader(false);
    });
  }, []);

  const filteredReservationList = useMemo(() => {
    const clonedReservations = [...reservations];
    const clonedStatuses = [...statuses]

    let filteredReservations: Reservation[] = [];
    clonedStatuses.forEach((status) => {
      filteredReservations.push(
        ...clonedReservations.filter((reservation) => {
          if (status.checked) {
            return reservation.status === status.value;
          }
        })
      );
    });

    let sortableReservations =
      filteredReservations.length > 0
        ? filteredReservations
        : clonedReservations;

    const computedReservations = sortableReservations.sort((a, b) =>
      getSortField(sortField, a) < getSortField(sortField, b) ? -1 : 1
    );

    return computedReservations

  }, [reservations, sortField, statuses]);


  const renderReservations = (): JSX.Element[] => {
    return filteredReservationList.map((reservation: Reservation) => {
      return <ReservationCard key={reservation.id} reservation={reservation} />;
    });
  };

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const clonedStatusArr = [...statuses];
    const statusIndex = clonedStatusArr.findIndex(
      (status) => status.value === target.value
    );
    clonedStatusArr[statusIndex].checked =
      !clonedStatusArr[statusIndex].checked;

    setStatus(clonedStatusArr);
  };

  return (
    <Styled.Container>
      <Styled.Header>Reservations List</Styled.Header>
      <Styled.OptionsContainer>
        <div>
          <label>
            <strong>Sort by</strong>:
          </label>
          <SortFields onSortFieldChange={(e) => setSortField(e.target.value)} />
        </div>
        <div>
          <strong>With status</strong>:
          <ReservationStatuses onChangeStatus={changeStatus} />
        </div>
      </Styled.OptionsContainer>

      {!loader && renderReservations()}

      {loader && <LoadingIcon />}
    </Styled.Container>
  );
}

export default App;
