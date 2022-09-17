import { reservationStatuses } from "../Constants";
import * as Styled from "../components/StyledComponents/Reservations.styled";
import { useTranslation } from "react-i18next";

interface Props {
  onChangeStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReservationStatuses = ({ onChangeStatus }: Props) => {
  const { t } = useTranslation()
  
  const renderStatuses = (): JSX.Element[] => {
    return reservationStatuses.map((status) => (
      <Styled.FilterLabel key={status.id}>
        <input
          data-testid="reservation-status"
          type="checkbox"
          value={status.value}
          checked={status.checked}
          id={status.id}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeStatus(event)
          }
        />
        {t(status.value)}
      </Styled.FilterLabel>
    ));
  };

  return <div data-testid="reservation-statuses">{renderStatuses()}</div>;
};

export default ReservationStatuses;
