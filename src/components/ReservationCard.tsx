import { Reservation } from '../Types';
import { format } from "date-fns";
import { getBadgeColor } from "../utils";
import * as Styled from "./StyledComponents/ReservationCard.styled";

interface Props {
  reservation: Reservation;
}

const ReservationCard = ({
  reservation
}: Props) => {
  const { background, text } = getBadgeColor(reservation.status);

  return (
    <Styled.Card>
      <Styled.DetailsContainer>
        <div>
          Starts at:{" "}
          <strong>
            {format(new Date(reservation.startsAt), "d MMM, HH:mm")}
          </strong>
        </div>
        <div>
          Guest count: <strong>{reservation.guestCount}</strong>
        </div>
      </Styled.DetailsContainer>
      <Styled.GuestName>{`${reservation.guest.firstName} ${reservation.guest.lastName}`}</Styled.GuestName>
      <Styled.StatusContainer backgroundColor={background} textColor={text}>
        {reservation.status}
      </Styled.StatusContainer>
    </Styled.Card>
  );
};

export default ReservationCard;
