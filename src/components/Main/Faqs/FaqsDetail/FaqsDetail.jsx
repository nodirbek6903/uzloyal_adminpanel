import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { HiArrowLeft } from "react-icons/hi2";
import "./FaqsDetail.css";

export const FaqDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [NameUz, SetNameUz] = useState();
  const [NameEn, SetNameEn] = useState();
  const [NameRu, SetNameRu] = useState();
  const [NameTr, SetNameTr] = useState();
  const [NameZh, SetNameZh] = useState();

  const [TittleUz, SetTittleUz] = useState();
  const [TittleEn, SetTittleEn] = useState();
  const [TittleRu, SetTittleRu] = useState();
  const [TittleTr, SetTittleTr] = useState();
  const [TittleZh, SetTittleZh] = useState();

  const mutation = useMutation(
    async (formData) => {
      const token = localStorage.getItem("access_token");
      const response = await axios.put(
        `https://api.dezinfeksiyatashkent.uz/api/faqs/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.data;
    },
    {
      onSuccess: () => {
        navigate("/faqs");
      },
      onError: (error) => {
        console.error("error:", error.message);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text_uz", NameUz);
    formData.append("text_en", NameEn);
    formData.append("text_ru", NameRu);
    formData.append("text_tr", NameTr);
    formData.append("text_zh", NameZh);
    formData.append("title_uz", TittleUz);
    formData.append("title_en", TittleEn);
    formData.append("title_ru", TittleRu);
    formData.append("title_tr", TittleTr);
    formData.append("title_zh", TittleZh);

    mutation.mutate(formData);
  };

  return (
    <>
      <button className="faqs-btn" onClick={() => navigate("/faqs")}>
        <span className="faqs-btn-icon">
          {" "}
          <HiArrowLeft />
        </span>
        Back
      </button>
      <form action="" onSubmit={handleSubmit}>
        <h2 className="faqs-edit">Edit Faqs</h2>
        <div className="faqs-inp-flex">
          <div className="faqs-inp-box">
            <p className="faqs-text">Name uz</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetNameUz(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">Name en</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetNameEn(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">Name ru</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetNameRu(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">text tr</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetNameTr(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">text zh</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetNameZh(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">title uz</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetTittleUz(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">title en</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetTittleEn(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">title ru</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetTittleRu(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">title tr </p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetTittleTr(e.target.value)}
              required
            />
          </div>

          <div className="faqs-inp-box">
            <p className="faqs-text">title zh</p>
            <input
              className="faqs-inp"
              type="text"
              onChange={(e) => SetTittleZh(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="faq-submit" type="submit">
          Save
        </button>
      </form>
    </>
  );
};
