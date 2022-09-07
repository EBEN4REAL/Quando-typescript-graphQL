import styled from 'styled-components';


export const Card = styled.div`
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

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
`;

export  const StatusContainer = styled.div<{ backgroundColor: string; textColor: string }>`
    margin-left: 24px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    padding: 6px;
    border-radius: 6px;
    font-size: 12px;
    align-self: self-start;
    text-transform: uppercase;
`;

export const GuestName = styled.p`
    font-weight: bold;
    font-size: 20px;
`;