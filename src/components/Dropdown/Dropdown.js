import { useRef } from "react";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import threeDots from "../../assets/icons/threedots.png";
import './Dropdown.css'
import { useDispatch, useSelector } from "react-redux";
import { RemoveCategorie } from "../../Redux/actions/action";

const Dropdown = ({id}) => {
  const dispatch = useDispatch()
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const mainData = useSelector((state) => state.MainReducer.data);
  const onClick = () => setIsActive(!isActive);
  const handleDelete = () => {
     dispatch(RemoveCategorie(mainData,id))
     setIsActive(!isActive)
  }

  return (

    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <img
          className="dots"
          src={threeDots}
          alt="dots"
        />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <span onClick={handleDelete}>Delete</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dropdown;
