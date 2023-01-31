import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactText = styled.span`
  /* margin-top: 0;
  margin-bottom: 0; */
  /* margin-right: 10px; */
  font-size: 24px;

  &::before {
    content: '✔️';
    margin-right: 5px;

    font-size: 24px;
  }
`;
export const DeleteBtn = styled.button`
  padding: 8px 10px;
  font-size: 16px;
  font-weight: bold;
  background: #f7a9a3;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
