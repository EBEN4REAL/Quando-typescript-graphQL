import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { format } from 'date-fns';
import mockReservations from "./mockReservations.json";

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

const Card = styled.div`
  border: 1px slategrey solid;
  border-radius: 6px;
  margin: 16px 8px;
  box-shadow: rgb(51 51 51 / 10%) 0px 1px 4px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(247, 248, 250);
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;

const StatusContainer = styled.div<{ backgroundColor: string; textColor: string }>`
  margin-left: 24px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 6px;
  border-radius: 6px;
  font-size: 12px;
  align-self: self-start;
  text-transform: uppercase;
`;

const GuestName = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const getSortField = (field: any, reservation: any) => {
  if (field === 'Starts at') {
    return reservation.startsAt;
  }
  if (field === 'Guest count') {
    return reservation.guestCount;
  }
  if (field === 'Guest first name') {
    return reservation.guest.firstName;
  }
  return reservation.guest.lastName;
};

function App() {

  const [sortField, setSortField] = useState<any>();

  useEffect(() => setSortField('Starts at'), []);

  const getBadgeColor = (status: any): { background: string; text: string } => {
    switch (status) {
      case 'Checked-in':
        return { background: 'rgb(200, 250, 221)', text: 'rgb(0, 87, 96)' };
      case 'Cancelled':
        return { background: 'rgb(253, 222, 212)', text: 'rgb(130, 14, 61)' };
      default:
        return { background: 'rgb(207, 239, 252)', text: 'rgb(7, 45, 113)' };
    }
  };

  return (
    <Container>
      <Header>Reservations List</Header>
      <OptionsContainer>
        <div>
          <label>
            <strong>Sort by</strong>:
          </label>
          <SortFieldSelect id="sortFieldSelector" onChange={(e) => setSortField(e.target.value)}>
            <option value="Starts at">Starts at</option>
            <option value="Guest count">Guest count</option>
            <option value="Guest first name">Guest first name</option>
            <option value="Guest last name">Guest last name</option>
          </SortFieldSelect>
        </div>
        <div>
          <strong>With status</strong>:
          <FilterLabel>
            <input type="checkbox" value="Upcoming" checked={true} id="checkbox_Upcoming" />
            Upcoming
          </FilterLabel>
          <FilterLabel>
            <input type="checkbox" value="Cancelled" checked={true} id="checkbox_Cancelled" />
            Cancelled
          </FilterLabel>
          <FilterLabel>
            <input type="checkbox" value="Checked-in" checked={true} id="checkbox_Checked-in" />
            Checked-in
          </FilterLabel>
          <FilterLabel>
            <input type="checkbox" value="Checked-out" checked={true} id="checkbox_Checked-out" />
            Checked-out
          </FilterLabel>
        </div>
      </OptionsContainer>
      {[...mockReservations.reservations].sort((a, b) => getSortField(sortField, a) < getSortField(sortField, b) ? -1 : 1).map((reservation, index) => {
        const { background, text } = getBadgeColor(reservation.status);
        return (
          <Card key={index}>
            <DetailsContainer>
              <div>
                Starts at: <strong>{format(new Date(reservation.startsAt), 'd MMM, HH:mm')}</strong>
              </div>
              <div>
                Guest count: <strong>{reservation.guestCount}</strong>
              </div>
            </DetailsContainer>
            <GuestName>{`${reservation.guest.firstName} ${reservation.guest.lastName}`}</GuestName>
            <StatusContainer backgroundColor={background} textColor={text}>
              {reservation.status}
            </StatusContainer>
          </Card>
        );
      })}
    </Container>
  );
}

export default App;
