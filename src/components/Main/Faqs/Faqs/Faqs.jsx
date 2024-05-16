import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useState } from "react";
import "./Faqs.css";

export const Faqs = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  const [value, setValue] = useState("");

  const {
    data: faqs,
    isLoading,
    isError,
    refetch,
  } = useQuery("faqs", async () => {
    const response = await axios.get(
      "https://api.dezinfeksiyatashkent.uz/api/faqs"
    );
    return response.data;
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.dezinfeksiyatashkent.uz/api/faqs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      refetch();
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  const filteredFaqs = faqs?.data.filter(
    (item) =>
      item.text_uz.toLowerCase().trim().includes(value.toLowerCase().trim()) ||
      item.text_ru.toLowerCase().trim().includes(value.toLowerCase().trim()) ||
      item.title_uz.toLowerCase().trim().includes(value.toLowerCase().trim()) ||
      item.title_ru.toLowerCase().trim().includes(value.toLowerCase().trim())
  );

  if (isLoading) {
    return (
      <div className="loader-container flex justify-center items-center h-[50vh]">
        <Oval
          height={80}
          width={80}
          color="#3498DB"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#07F8AF"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  const handleNavigate = () => {
    navigate("post");
  };

  return (
    <div className="faqs-container">
      <div className="faqs-search-add">
        <div className="faqs-search">
          <input
            type="text"
            className="faqs-input"
            placeholder="Search faqs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <FaSearch className="faqs-icon" />
        </div>
        <div className="add-btns">
          <button className="add-btn" onClick={handleNavigate}>
            Add+
          </button>
        </div>
      </div>
      <div className="faqs-table">
        {isError ? (
          <div>Error fetching data</div>
        ) : (
          <table className="faqs">
            <thead className="faqs-thead">
              <tr>
                <th>№</th>
                <th>Name uz</th>
                <th>Name ru</th>
                <th>Title uz</th>
                <th>Title ru</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFaqs.length === 0 ? (
                <tr>
                  <td colSpan={6}>
                    <h2 className="uppercase text-red-600">No data found</h2>
                  </td>
                </tr>
              ) : (
                filteredFaqs.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.text_uz}</td>
                    <td>{item.text_ru}</td>
                    <td>{item.title_uz}</td>
                    <td>{item.title_ru}</td>
                    <td className="actions-td">
                      <button
                        className="edit-btn"
                        onClick={() => navigate(`/faqs/${item.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
