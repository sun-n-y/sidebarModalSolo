import { FaTimes } from 'react-icons/fa';
import { useCustomHook } from './context';

const Modal = () => {
  const { isModalOpen, closeModal } = useCustomHook();
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <h2>modal content</h2>
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
