import { CATEGORIES } from '../constants/categories';
import Modal from './Modal';
import * as S from './Modal.styles';

export default function AddRestaurantModal({ onAddRestaurant, onClose }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onAddRestaurant({
      id: Date.now(),
      name: formData.get('name'),
      description: formData.get('description'),
      category: formData.get('category'),
    });
  }

  return (
    <Modal title="새로운 음식점" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        {/*카테고리*/}
        <S.RequiredFormItem>
          <label htmlFor="category">카테고리</label>
          <select name="category" id="category" required>
            <option value="">선택해 주세요</option>
            {Object.keys(CATEGORIES).map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
        </S.RequiredFormItem>
        {/*음식점이름*/}
        <S.RequiredFormItem>
          <label htmlFor="name">이름</label>
          <input type="text" name="name" id="name" required />
        </S.RequiredFormItem>
        {/*설명*/}
        <S.FormItem>
          <label htmlFor="description">설명</label>
          <textarea name="description" id="description" cols="30" rows="5"></textarea>
          <S.HelpText>메뉴 등 추가 정보를 입력해 주세요.</S.HelpText>
        </S.FormItem>
        {/*추가버튼*/}
        <S.ButtonContainer>
          <S.PrimaryButton type="submit">추가하기</S.PrimaryButton>
        </S.ButtonContainer>
      </form>
    </Modal>
  );
}
