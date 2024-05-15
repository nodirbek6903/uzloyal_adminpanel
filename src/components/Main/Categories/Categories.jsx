import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  addCategory,
  removeCategory,
} from "./CategorySlice/CategorySlice";
import "./Categories.css";
const Categories = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
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

  //category qo'shish uchun
  const handleAddCategory = () => {
    const newCategory = { name, description };
    dispatch(addCategory(newCategory));
    setName("");
    setDescription("");
    setIsOpenModal(false);
  };

  // delete category uchun
  const deleteCategory = (id) => {
    dispatch(removeCategory(id));
  };

  // search category uchun
  const filteredCategory = categoryData.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="categories-container">
      <div className="category-search-add">
        <div className="category-search">
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search categories"
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="add-btns">
          <button className="add-btn" onClick={() => setIsOpenModal(true)}>
            Add+
          </button>
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
            {filteredCategory.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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
          </tbody>
        </table>
      </div>
      {isOpenModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsOpenModal(false)}>
              X
            </span>
            <h2>Add Category</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAddCategory}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
