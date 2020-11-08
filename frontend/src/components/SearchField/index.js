import React, { useState, useRef, useEffect } from "react";
import searchIcon from "../../assets/ic_Search.png";
import history from "../../history";
import './styles.scss'

const SearchField = ({ ...props }) => {
  const buttonRef = useRef(null);
  //   const termStore = useSelector((store) => store.products.term);
  const [term, setTerm] = useState();
  //const dispatch = useDispatch();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") buttonRef.current && buttonRef.current.click();
  };

  const handleSearch = () => {
    history.push(`/items?q=${encodeURIComponent(term)}`);
    //dispatch(searchRequest(term));
  };

  // useEffect(() => {
  //     setTerm(termStore)
  // }, [termStore, setTerm])

  return (
    <section className="search-field">
      <input
        className="search-field-input"
        placeholder="Nunca deixe de buscar"
        type="text"
        value={term}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        {...props}
      />
      <button
        ref={buttonRef}
        onClick={handleSearch}
        className="search-field-button"
      >
        <img src={searchIcon} alt="Buscar produto" title="Buscar produto" />
      </button>
    </section>
  );
};

// SearchField.propTypes = {
//     value: PropTypes.string,
// }

// SearchField.defaultValue = {
//     value: "",
// }

export default SearchField;
