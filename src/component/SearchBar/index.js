// import { withRouter } from "react-router-dom";
// Formik
import { Formik } from "formik";

const SearchBar = ({ history }) => {
  const submit = (values, actions) => {
    // Actions when values submiting
    const query = `?${Object.keys(values)
      .map((k) => `${k}=${values[k]}`)
      .join("")}`;
    history.push({
      pathname: "/search",
      search: query,
      state: values,
    });
  };

  return (
    <>
      <div className="searchbar">
        <Formik onSubmit={submit} initialValues={{ query: "" }}>
          {({ handleChange, handleSubmit, handleBlur, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="query"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button type="submit" disabled={isSubmitting}>
                go
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SearchBar;
// export default withRouter(SearchBar);
