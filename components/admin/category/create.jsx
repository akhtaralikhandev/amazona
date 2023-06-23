"use client";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import PopupAlert from "../../alert/alert";
import axios from "axios";
const CreateCategoryComp = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    previewImage: null,
  });

  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  //   product detail
  const [title, settitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          image: selectedImage,
          previewImage: reader.result,
        });
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("profile-image-input");
    const file = fileInput.files[0];

    if (file && title) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "aafl5vm4");
      setLoading(true);

      try {
        // Make a request to Cloudinary to upload the image
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dzumurjj4/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setProfileImage(data.secure_url);
        setPreviewImage(null);
        setLoading(false);

        // Save the profile image URL in local storage
        const post = await axios.post("/api/admin/category/category", {
          title: title,
          img: data.secure_url,
        });

        // Clear the state
        settitle("");
        setProfileImage(null);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        setLoading(false);
      }
    } else {
      setShowAlert(true);
    }
  };

  // show alert and hide alert functions
  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      {showAlert && (
        <PopupAlert
          message="make sure that you have selected name and image for category"
          onClose={handleAlertClose}
        />
      )}
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-2">add title</h2>
          <div className="mb-4">
            <input
              value={title}
              placeholder="write the name of product"
              onChange={(e) => settitle(e.target.value)}
              className="w-full resize-none outline-blue-600 border-gray-300 border rounded p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="text-gray-700">
              Image
            </label>
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className=" object-cover "
              />
            )}
            <form onSubmit={(e) => handleImagePreview(e)}>
              <input
                type="file"
                accept="image/*"
                id="profile-image-input"
                onChange={handleImagePreview}
              />
            </form>
          </div>
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateCategoryComp;
