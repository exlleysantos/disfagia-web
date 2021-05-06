import styled from 'styled-components';

export const Container = styled.div`
    background: var(--bg-2);
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    padding: 16px 14px;
    min-height: fit-content;

    & ~ .__box {
        margin-top: 10px;
    }
`;