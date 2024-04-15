const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();
    if (!topic) {
      // toast.error("Please enter something to search for!");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
