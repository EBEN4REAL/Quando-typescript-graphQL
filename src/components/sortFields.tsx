import { sortFields } from "../Constants";
import { SortField } from "../Types";

import * as Styled from "../components/StyledComponents/Reservations.styled";

interface Props {
  onSortFieldChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortFields = ({ onSortFieldChange }: Props) => {
  const renderSortFields = (): JSX.Element[] => {
    return sortFields.map((sortField: SortField) => (
      <option value={sortField.value} key={sortField.id}>
        {sortField.value}
      </option>
    ));
  };

  return (
    <>
      <Styled.SortFieldSelect
        id="sortFieldSelector"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          onSortFieldChange(e)
        }
      >
        {renderSortFields()}
      </Styled.SortFieldSelect>
    </>
  );
};

export default SortFields;
