import React, { useEffect, useState } from 'react';
import './App.css';
import { Reservation, RESERVATIONS, Status } from './reservations';
import styled from 'styled-components';
import ReservationCard from './components/ReservationCard';

const Container = styled.div`
  margin: 100px auto auto auto;
  max-width: 700px;
`;

const Header = styled.header`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const OptionsContainer = styled.div`
  margin: 16px 8px;
  box-shadow: rgb(51 51 51 / 10%) 0px 1px 4px;
  border: 1px lightgray solid;
  border-radius: 6px;

  div {
    margin: 20px 15px;
  }
`;

const SortFieldSelect = styled.select`
  margin-left: 10px;
  padding: 4px;
  border-radius: 4px;
`;

const FilterLabel = styled.label`
  margin: 0px 6px;
  font-size: 12px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;

  input {
    margin: 4px;
  }
`;

enum SortingFields {
  STARTS_AT = 'Starts at',
  GUEST_COUNT = 'Guest count',
  GUEST_FIRST_NAME = 'Guest first name',
  GUEST_LAST_NAME = 'Guest last name',
}

const getSortField = (field: SortingFields | undefined, reservation: Reservation) => {
  if (field === SortingFields.STARTS_AT) {
    return reservation.startsAt;
  }
  if (field === SortingFields.GUEST_COUNT) {
    return reservation.guestCount;
  }
  if (field === SortingFields.GUEST_FIRST_NAME) {
    return reservation.guest.firstName;
  }
  return reservation.guest.lastName;
};

function App() {
  const [sortField, setSortField] = useState<SortingFields>();
  const [sortedReservations, setSortedReservations] = useState<Reservation[]>([]);

  useEffect(() => setSortField(SortingFields.STARTS_AT), []);

  useEffect(() => {
    setSortedReservations(
      [...RESERVATIONS].sort((a, b) => {
        return getSortField(sortField, a) < getSortField(sortField, b) ? -1 : 1;
      })
    );
  }, [sortField]);

  return (
    <Container>
      <Header>Reservations List</Header>
      <OptionsContainer>
        <div>
          <label>
            <strong>Sort by</strong>:
          </label>
          <SortFieldSelect id="sortFieldSelector" onChange={(e) => setSortField(e.target.value as SortingFields)}>
            {Object.values(SortingFields).map((field) => (
              <option value={field}>{field}</option>
            ))}
          </SortFieldSelect>
        </div>
        <div>
          <strong>With status</strong>:
          {Object.values(Status).map((status) => (
            <FilterLabel>
              <input type="checkbox" value={status} checked={true} id={`checkbox_${status}`} />
              {status}
            </FilterLabel>
          ))}
        </div>
      </OptionsContainer>
      {sortedReservations.map((reservation, index) => {
        return <ReservationCard reservation={reservation} key={index} />;
      })}
    </Container>
  );
}

export default App;
