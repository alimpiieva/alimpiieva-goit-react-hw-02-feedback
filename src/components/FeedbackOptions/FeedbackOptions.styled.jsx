import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
    border: 2px solid blue;
    border-radius: 4px;
    padding: 8px 16px;
    margin: 4px; 
    background-color: transparent; 
    color: blue;
    font-size: 16px; 
    cursor: pointer; 
    transition: border-color 0.3s ease;

    &:hover {
        border-color: red; 
        color: red;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;
