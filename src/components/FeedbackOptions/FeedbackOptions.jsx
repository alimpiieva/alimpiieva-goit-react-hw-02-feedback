import React from "react";
import {
    FeedbackButton,
    ButtonContainer,
} from "./FeedbackOptions.styled";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonContainer>
            {options.map(option => (
                <FeedbackButton key={option}
                onClick={() => onLeaveFeedback(option)}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </FeedbackButton>
            ))}
            
        </ButtonContainer>
    );
};

export default FeedbackOptions;