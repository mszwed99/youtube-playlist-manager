import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small}px;
`;

export const CheckboxContainer = styled.input`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.grey};
	padding: 9px;
	border-radius: 3px;
	display: inline-block;
	position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: ${({ theme }) => theme.radii.medium};
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.5s ease;
  }

  &:checked {
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &:disabled {
    cursor: default;

    &::after {
      width: 50%;
      height: 2px;
      transform: translate(-50%, -50%) scale(1);
      background: ${({ theme }) => theme.colors.grey};
    }
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
      border-radius: 50px;
      border: 2px solid ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const Label = styled.p`
  margin-right: ${({ theme }) => theme.spacing.xSmall}px;
`;