import { CATEGORIES } from "../../data/categories";
import { useRef } from "react";
import Modal from "../modal/Modal";
import styled, { css } from "styled-components";

const ModalTitle = styled.h2`
  margin-bottom: 36px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;  

  label{
    color:var(--grey-400);
    font-size:14px;
  }

  ${({ $required }) =>
    $required &&
    css`
      label::after{
      padding-left: 4px;

      color: var(--primary-color);
      content: "*";
      }
  `}
`;

const FormItemHelpText = styled.span`
  color: var(--grey-300);
`;

const FormItemInput = styled.input`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;

  &[name="name"],
  &[name="link"]{
    height: 44px;
  }
`;

const FormItemTextArea = styled.textarea`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;
  
  resize: none;
`;

const FormItemSelect = styled.select`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;

  height: 44px;

  padding: 8px;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  color: var(--grey-300);
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const PrimaryButtonItem = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);

  color: var(--grey-100);
`;


function AddRestaurantModal({ onCloseAddModal, onAddRestaurant }) {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newRestaurant = {
      id: 'a' + Date.now(),
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value
    };
    onAddRestaurant(newRestaurant);
    onCloseAddModal();
  }

  return (
    <Modal onClose={onCloseAddModal}>
      <ModalTitle className="text-title">새로운 음식점</ModalTitle>
      <form onSubmit={handleSubmit}>
        <FormItem $required>
          <label htmlFor="category">카테고리</label>
          <FormItemSelect name="category" id="category" ref={categoryRef} required>
            <option value="">선택해 주세요</option>
            {CATEGORIES.map((category) => (
              <option key={category}>
                {category}
              </option>
            ))}
          </FormItemSelect>
        </FormItem>
        <FormItem $required>
          <label htmlFor="name" className="text-caption">이름</label>
          <FormItemInput type="text" name="name" id="name" ref={nameRef} required />
        </FormItem>
        <FormItem>
          <label htmlFor="description" className="text-caption">설명</label>
          <FormItemTextArea name="description" id="description" ref={descriptionRef} cols="30" rows="5"></FormItemTextArea>
          <FormItemHelpText className="text-caption">메뉴 등 추가 정보를 입력해 주세요.</FormItemHelpText>
        </FormItem>
        <ButtonContainer>
          <PrimaryButtonItem type="submit" className="text-caption">추가하기</PrimaryButtonItem>
        </ButtonContainer>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal
