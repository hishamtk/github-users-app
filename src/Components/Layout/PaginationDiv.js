import Pagination from "@material-ui/lab/Pagination";

const PaginationDiv = ({ pages, currPage, setCurrPage, total }) => {
  const handleChange = (event, value) => {
    setCurrPage(value);
  };

  return <Pagination count={pages} page={currPage} onChange={handleChange} />;
};

export default PaginationDiv;
