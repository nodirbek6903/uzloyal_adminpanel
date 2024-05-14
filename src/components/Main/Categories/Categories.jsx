import { FaSearch } from "react-icons/fa";
import "./Categories.css";
import { useEffect, useState } from "react";
const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // get uchun
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.dezinfeksiyatashkent.uz/api/categories",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.data);
      setCategoryData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // post uchun
  const addCategory = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    try {
      await fetch("https://api.dezinfeksiyatashkent.uz/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // delete uchun
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(
        `https://api.dezinfeksiyatashkent.uz/api/categories/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

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
