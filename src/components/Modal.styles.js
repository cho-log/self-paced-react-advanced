import styled from 'styled-components';

/* 음식점 정보/추가 모달 *****************************************/
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

export const ModalTitle = styled.h2`
  margin-bottom: 36px;
  //기존 text-title에 있던 부분
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;

  input[name='name'],
  input[name='link'] {
    height: 44px;
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;

    border: 1px solid var(--grey-200);
    border-radius: 8px;

    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  select {
    height: 44px;
    color: var(--grey-300);
  }

  label {
    color: var(--grey-400);
    font-size: 14px;
  }
`;

export const RequiredFormItem = styled(FormItem)`
  label::after {
    padding-left: 4px;

    color: var(--primary-color);
    content: '*';
  }
`;

export const HelpText = styled.span`
  color: var(--grey-300);
  /*기존 text-caption에 있던 부분*/
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const PrimaryButton = styled(Button)`
  background: var(--primary-color);

  color: var(--grey-100);
  /*기존 text-caption에 있던 부분*/
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid var(--grey-300);
  background: transparent;

  color: var(--grey-300);
`;

export const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

export const RestaurantInfoDescription = styled.p`
  /*기존 text-body에 있던 부분*/
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
