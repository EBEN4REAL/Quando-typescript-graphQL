import { reservationStatuses } from "../Constants";
import * as Styled from "../components/StyledComponents/Reservations.styled";

interface Props {
    onChangeStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReservationStatuses = ({
    onChangeStatus
}: Props) => {
  const renderStatuses = (): JSX.Element[] => {
    return reservationStatuses.map((status) => (
      <Styled.FilterLabel key={status.id}>
        <input
          type="checkbox"
          value={status.value}
          checked={status.checked}
          id={status.id}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeStatus(event)
          }
        />
        {status.value}
      </Styled.FilterLabel>
    ));
  };

  return <>{renderStatuses()}</>;
};

export default ReservationStatuses;
