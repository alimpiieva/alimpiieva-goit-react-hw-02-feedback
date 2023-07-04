import React from "react";
import {
    FeedbackButton,
    ButtonContainer,
} from "./FeedbackOptions.styled";
import PropTypes from "prop-types";


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

FeedbackOptions.protoTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;