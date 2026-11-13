import { useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from './Modal';
import { ButtonContainer, PrimaryButton } from './Button';
import { CATEGORIES } from '../constants/categories';
import { textCaption } from '../styles/typography';

function AddRestaurantModal({ onAddRestaurant, onClose }) {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await onAddRestaurant({
        id: Date.now(),
        category,
        name,
        description,
      });
      onClose();
    } catch (error) {
      console.error('Error adding restaurant:', error);
      setErrorMessage(
        '음식점을 추가하지 못했습니다. 잠시 후 다시 시도해 주세요.',
      );
    }
  };

  return (
    <Modal title="새로운 음식점" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Label htmlFor="category" $required>
            카테고리
          </Label>
          <Select
            name="category"
            id="category"
            required
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">선택해 주세요</option>
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </FormItem>

        <FormItem>
          <Label htmlFor="name" $required>
            이름
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormItem>

        <FormItem>
          <Label htmlFor="description">설명</Label>
          <Textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <HelpText>메뉴 등 추가 정보를 입력해 주세요.</HelpText>
        </FormItem>

        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <ButtonContainer>
          <PrimaryButton type="submit">추가하기</PrimaryButton>
        </ButtonContainer>
      </form>
    </Modal>
  );
}

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;
`;

const Label = styled.label`
  ${textCaption}
  color: var(--grey-400);

  ${({ $required }) =>
    $required &&
    css`
      &::after {
        padding-left: 4px;
        color: var(--primary-color);
        content: '*';
      }
    `}
`;

// 입력칸 3개가 같이 쓰는 스타일
const fieldStyle = css`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid var(--grey-200);
  border-radius: 8px;

  font-size: 16px;
`;

const Input = styled.input`
  ${fieldStyle}
  height: 44px;
`;

const Select = styled.select`
  ${fieldStyle}
  height: 44px;
  color: var(--grey-300);
`;

const Textarea = styled.textarea`
  ${fieldStyle}
  resize: none;
`;

const HelpText = styled.span`
  ${textCaption}
  color: var(--grey-300);
`;

const ErrorText = styled.p`
  ${textCaption}
`;

export default AddRestaurantModal;
