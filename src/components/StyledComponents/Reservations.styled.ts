import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px auto auto auto;
    max-width: 700px;
`;

export const FilterLabel = styled.label`
    margin: 0px 6px;
    font-size: 12px;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;

    input {
        margin: 4px;
    }
`
export  const Header = styled.header`
    font-size: 28px;
    font-weight: bold;
`;

export const OptionsContainer = styled.div`
    margin: 16px 8px;
    box-shadow: rgb(51 51 51 / 10%) 0px 1px 4px;
    border: 1px lightgray solid;
    border-radius: 6px;

    div {
        margin: 20px 15px;
    }
`;

export const SortFieldSelect = styled.select`
    margin-left: 10px;
    padding: 4px;
    border-radius: 4px;
`;