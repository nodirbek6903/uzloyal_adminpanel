import { useEffect, useState } from "react";
import "./Blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, AddBlogs, removeBlogs } from "./BlogSlice/BlogSlice";
const Blogs = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [title_en, setTitle_en] = useState("");
  const [title_ru, setTitle_ru] = useState("");
  const [title_uz, setTitle_uz] = useState("");
  const [title_tr, setTitle_tr] = useState("");
  const [title_zh, setTitle_zh] = useState("");
  const [text_en, setText_en] = useState("");
  const [text_ru, setText_ru] = useState("");
  const [text_uz, setText_uz] = useState("");
  const [text_tr, setText_tr] = useState("");
  const [text_zh, setText_zh] = useState("");
  const [author, setAuthor] = useState("");
  const [images, setImages] = useState([]);
  const [editTitle_en, setEditTitle_en] = useState("");
  const [editTitle_ru, setEditTitle_ru] = useState("");
  const [editTitle_uz, setEditTitle_uz] = useState("");
  const [editTitle_tr, setEditTitle_tr] = useState("");
  const [editTitle_zh, setEditTitle_zh] = useState("");
  const [editText_en, setEditText_en] = useState("");
  const [editText_ru, setEditText_ru] = useState("");
  const [editText_uz, setEditText_uz] = useState("");
  const [editText_tr, setEditText_tr] = useState("");
  const [editText_zh, setEditText_zh] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editImages, setEditImages] = useState([]);
  const dispatch = useDispatch();
  const { blogsData, error, loading } = useSelector((state) => state.blogs);

  const openEditModal = (id) => {
    if (id) {
      setIsEdit(true);
      setIsOpenModal(true);
    } else {
      setIsOpenModal(true);
      setIsEdit(false);
    }
  };

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddBlogs = () => {
    const newBlogs = {
      title_en,
      title_ru,
      title_uz,
      title_tr,
      title_zh,
      text_en,
      text_ru,
      text_uz,
      text_tr,
      text_zh,
      author,
      images,
    };
    dispatch(AddBlogs(newBlogs));
    setTitle_en("");
    setTitle_ru("");
    setTitle_uz("");
    setTitle_tr("");
    setTitle_zh("");
    setText_en("");
    setText_ru("");
    setText_uz("");
    setText_tr("");
    setText_zh("");
    setAuthor("");
    setImages(null);
    setIsOpenModal(false);
  };

  const deleteBlogs = (id) => {
    dispatch(removeBlogs(id));
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
            {blogsData.map((blog, index) => (
              <tr key={index}>
                <td>{blog.title_en}</td>
                <td>{blog.title_ru}</td>
                <td>{blog.title_uz}</td>
                <td>{blog.title_tr}</td>
                <td>{blog.title_zh}</td>
                <td>{blog.text_en}</td>
                <td>{blog.text_ru}</td>
                <td>{blog.text_uz}</td>
                <td>{blog.text_tr}</td>
                <td>{blog.text_zh}</td>
                <td>{blog.author}</td>
                <td>image</td>
                <td className="actions-td blog-action-td">
                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(blog.id)}
                  >
                    Edit
                  </button>
                  <button className="delete-btn" onClick={deleteBlogs(blog.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* <tbody>
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
          </tbody> */}
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
              <input
                type="text"
                value={isEdit ? editTitle_en : title_en}
                onChange={(e) =>
                  isEdit
                    ? setEditTitle_en(e.target.value)
                    : setTitle_en(e.target.value)
                }
                placeholder="Title_EN"
              />
              <input
                type="text"
                value={isEdit ? editTitle_ru : title_ru}
                onChange={(e) =>
                  isEdit
                    ? setEditTitle_ru(e.target.value)
                    : setTitle_ru(e.target.value)
                }
                placeholder="Title_RU"
              />
              <input
                type="text"
                value={isEdit ? editTitle_uz : title_uz}
                onChange={(e) =>
                  isEdit
                    ? setEditTitle_uz(e.target.value)
                    : setTitle_uz(e.target.value)
                }
                placeholder="Title_UZ"
              />
              <input
                type="text"
                value={isEdit ? editTitle_tr : title_tr}
                onChange={(e) =>
                  isEdit
                    ? setEditTitle_tr(e.target.value)
                    : setTitle_tr(e.target.value)
                }
                placeholder="Title_TR"
              />
              <input
                type="text"
                value={isEdit ? editTitle_zh : title_zh}
                onChange={(e) =>
                  isEdit
                    ? setEditTitle_zh(e.target.value)
                    : setTitle_zh(e.target.value)
                }
                placeholder="Title_ZH"
              />
              <input
                type="text"
                value={isEdit ? editText_en : text_en}
                onChange={(e) =>
                  isEdit
                    ? setEditText_en(e.target.value)
                    : setText_en(e.target.value)
                }
                placeholder="Text_EN"
              />
              <input
                type="text"
                value={isEdit ? editText_ru : text_ru}
                onChange={(e) =>
                  isEdit
                    ? setEditText_ru(e.target.value)
                    : setText_ru(e.target.value)
                }
                placeholder="Text_RU"
              />
              <input
                type="text"
                value={isEdit ? editText_uz : text_uz}
                onChange={(e) =>
                  isEdit
                    ? setEditText_uz(e.target.value)
                    : setText_uz(e.target.value)
                }
                placeholder="Text_UZ"
              />
              <input
                type="text"
                value={isEdit ? editText_tr : text_tr}
                onChange={(e) =>
                  isEdit
                    ? setEditText_tr(e.target.value)
                    : setText_tr(e.target.value)
                }
                placeholder="Text_TR"
              />
              <input
                type="text"
                value={isEdit ? editText_zh : text_zh}
                onChange={(e) =>
                  isEdit
                    ? setEditText_zh(e.target.value)
                    : setText_zh(e.target.value)
                }
                placeholder="Text_ZH"
              />
              <input
                type="text"
                value={isEdit ? editAuthor : author}
                onChange={(e) =>
                  isEdit
                    ? setEditAuthor(e.target.value)
                    : setAuthor(e.target.value)
                }
                placeholder="Authors"
              />
              <input
                type="file"
                placeholder="Images"
                onChange={(e) => setImages(e.target.files)}
              />
            </div>
            <button onClick={handleAddBlogs}>{isEdit ? "Save" : "Add"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
