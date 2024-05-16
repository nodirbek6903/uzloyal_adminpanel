import { useState } from "react";
import "./Blogs.css";
const Blogs = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const openEditModal = (id) => {
    if (id) {
      setIsEdit(true);
      setIsOpenModal(true);
    } else {
      setIsOpenModal(true);
      setIsEdit(false);
    }
  };

  return (
    <div className="blogs-container">
      <div className="blog-add-btns">
        <button className="add-btn" onClick={() => setIsOpenModal(true)}>
          Add+
        </button>
      </div>
      <div className="category-table blog-table">
        <table className="categories">
          <thead className="category-thead">
            <tr>
              <th>№</th>
              <th>Title_EN</th>
              <th>Title_RU</th>
              <th>Title_UZ</th>
              <th>Title_TR</th>
              <th>Title_ZH</th>
              <th>Text_EN</th>
              <th>Text_RU</th>
              <th>Text_UZ</th>
              <th>Text_TR</th>
              <th>Text_ZH</th>
              <th>Author</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>title1</td>
              <td>title2</td>
              <td>title3</td>
              <td>title4</td>
              <td>title5</td>
              <td>text1</td>
              <td>text2</td>
              <td>text3</td>
              <td>text4</td>
              <td>text5</td>
              <td>Author</td>
              <td>Images</td>
              <td className="actions-td blog-action-td">
                <button
                  className="edit-btn"
                  onClick={() => openEditModal(1234)}
                >
                  Edit
                </button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isOpenModal && (
        <div className="modal blog-modal">
          <div className="modal-content blog-modal-content">
            <span
              className="close-btn"
              onClick={(id) => {
                if (id) {
                  setIsEdit(false);
                  setIsOpenModal(false);
                } else {
                  setIsOpenModal(false);
                }
              }}
            >
              X
            </span>
            <h2>{isEdit ? "Edit Category" : "Add Category"}</h2>
            <div className="blog-modal-inputs">
            <input type="text" placeholder="Title_EN" />
            <input type="text" placeholder="Title_RU" />
            <input type="text" placeholder="Title_UZ" />
            <input type="text" placeholder="Title_TR" />
            <input type="text" placeholder="Title_ZH" />
            <input type="text" placeholder="Text_EN" />
            <input type="text" placeholder="Text_RU" />
            <input type="text" placeholder="Text_UZ" />
            <input type="text" placeholder="Text_TR" />
            <input type="text" placeholder="Text_ZH" />
            <input type="text" placeholder="Authors" />
            <input type="file" placeholder="Images" />
            </div>
            <button>{isEdit ? "Save" : "Add"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
