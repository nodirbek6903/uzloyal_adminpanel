import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./CategorySlice/CategorySlice";
import "./Categories.css";
const Categories = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { categoryData, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="categories-container">
      <div className="category-search-add">
        <div className="category-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search categories"
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="add-btns">
          <button className="add-btn">Add+</button>
        </div>
      </div>
      <div className="category-table">
        <table className="categories">
          <thead className="category-thead">
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Category 1</td>
              <td>Description 1</td>
              <td className="actions-td">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Category 2</td>
              <td>Description 2</td>
              <td className="actions-td">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
          {/* <tbody>
            {categoryData.map((category, index) => (
              <tr key={index}>
                <td>{idnex + 1}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="actions-td">
                  <button className="edit-btn">Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteCategory(category.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Categories;
