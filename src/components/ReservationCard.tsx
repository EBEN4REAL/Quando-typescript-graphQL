import { Reservation } from '../reservations';
import styled from 'styled-components';
import { format } from 'date-fns';

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

const ReservationCard: React.FC<{ reservation: Reservation }> = ({ reservation }) => {
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

  const { background, text } = getBadgeColor(reservation.status);

  return (
    <Card>
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
};

export default ReservationCard;
