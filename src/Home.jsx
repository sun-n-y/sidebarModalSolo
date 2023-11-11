import { FaBars } from 'react-icons/fa';
import { useCustomHook } from './context';

const Home = () => {
  const { openSidebar, openModal } = useCustomHook();
  return (
    <main>
      <button className="sidebar-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="modal-btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};
export default Home;
