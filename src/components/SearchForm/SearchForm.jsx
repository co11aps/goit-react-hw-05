import { BsSearch } from "react-icons/bs";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();
    if (!topic) {
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <BsSearch size={32} />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
