import { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const POINTER_FILL_COLOR = 'rgba(236, 74, 10, 0.2)';
const POINTER_HOVER_FILL_COLOR = 'rgba(236, 74, 10, 0.5)';

const HideDefaultCursor = createGlobalStyle`
  * {
    cursor: none !important;
  }
`;

const CLICKABLE_SELECTOR =
  'a, button, select, input, textarea, label, [role="button"]';

function CustomPointer() {
  const pointerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const pointer = pointerRef.current;
      if (!pointer) return;
      pointer.style.left = `${event.clientX}px`;
      pointer.style.top = `${event.clientY}px`;
      pointer.style.visibility = 'visible';

      const isClickable =
        event.target instanceof Element &&
        event.target.closest(CLICKABLE_SELECTOR) !== null;
      pointer.dataset.clickable = String(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <HideDefaultCursor />
      <Pointer ref={pointerRef} />
    </>
  );
}

const Pointer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  visibility: hidden;

  width: 16px;
  height: 16px;

  border: 2px solid var(--primary-color);
  border-radius: 50%;
  background: ${POINTER_FILL_COLOR};

  pointer-events: none;
  z-index: 9999;

  transition:
    transform 0.15s,
    background 0.15s;

  &[data-clickable='true'] {
    transform: translate(-50%, -50%) scale(1.6);
    background: ${POINTER_HOVER_FILL_COLOR};
  }
`;

export default CustomPointer;
