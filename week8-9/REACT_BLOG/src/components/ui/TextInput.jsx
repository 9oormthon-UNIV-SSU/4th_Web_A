import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
    margin: 0 auto;
    margin-bottom: 8px;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
    height: 150px;
    resize: vertical;
    margin: 0 auto;
    margin-bottom: 8px;
`;


function TextInput({ value, onChange, placeholder, multiline = false }) {
    return multiline ? (
    <StyledTextarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
    ) : (
    <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
    );
}

export default TextInput;
