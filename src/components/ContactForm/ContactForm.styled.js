import styled from 'styled-components';

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const LabelContactForm = styled.label`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputContactForm = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 2px solid green;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const ButtonSubmit = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  background: #79ed7a;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;
