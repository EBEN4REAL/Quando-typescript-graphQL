import { sortFields } from "../Constants";
import { SortField } from "../Types";

import * as Styled from "../components/StyledComponents/Reservations.styled";
import { useTranslation } from "react-i18next";


interface Props {
  onSortFieldChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}



const SortFields = ({ onSortFieldChange }: Props) => {
  const { t } = useTranslation()

  const renderSortFields = (): JSX.Element[] => {
    return sortFields.map((sortField: SortField) => (
      <option value={sortField.value} key={sortField.id} data-testid="sort-field">
        {t(sortField.value)}
      </option>
    ));
  };

  return (
    <div data-testid="reservation-sortfields">
      <Styled.SortFieldSelect
        id="sortFieldSelector"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onSortFieldChange(e)
        }
      >
        {renderSortFields()}
      </Styled.SortFieldSelect>
    </div>
  );
};

export default SortFields;
