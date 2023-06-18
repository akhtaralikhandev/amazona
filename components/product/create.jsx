"use client";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import PopupAlert from "../alert/alert";
import axios from "axios";
const CreateProductComp = () => {
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
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
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

    if (file && title && price && quantity) {
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

        const post = await axios.post("/api/product/product", {
          title: title,
          description: description,
          price: price,
          img: data.secure_url,
          category: category,
          quantity: quantity,
        });
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
          message="make sure that you have selected price image and quantity of the product"
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
        <div
          onSubmit={(e) => handleSubmit(e, user)}
          className="bg-white p-6 rounded shadow"
        >
          <h2 className="text-xl mb-2">add title</h2>
          <div className="mb-4">
            <input
              value={title}
              placeholder="write the name of product"
              onChange={(e) => settitle(e.target.value)}
              className="w-full resize-none outline-blue-600 border-gray-300 border rounded p-2 mt-1"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-5"
          >
            <option disabled>choose category</option>
            <option value="men shoes">Men Shoes</option>
            <option value="lady shoes">Lady Shoes</option>
            <option value="gents clothes">Gents Clothes</option>
            <option value="women clothes">Women Clothes</option>
            <option value="mobiles">Mobiles</option>
            <option value="electronics">Electronics</option>
            <option value="home appliances">Home Appliances</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
            <option value="sports equipment">Sports Equipment</option>
            <option value="beauty and personal care">
              Beauty and Personal Care
            </option>
            <option value="toys and games">Toys and Games</option>
            <option value="jewelry and accessories">
              Jewelry and Accessories
            </option>
            <option value="health and wellness products">
              Health and Wellness Products
            </option>
            <option value="automotive parts and accessories">
              Automotive Parts and Accessories
            </option>
            <option value="pet supplies">Pet Supplies</option>
            <option value="office supplies">Office Supplies</option>
            <option value="music and entertainment">
              Music and Entertainment
            </option>
            <option value="home decor">Home Decor</option>
            <option value="kitchenware and appliances">
              Kitchenware and Appliances
            </option>
          </select>
          <div className="mb-4">
            <textarea
              id="description"
              name="description"
              value={description}
              placeholder="write description here"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-none outline-blue-600 border-gray-300 border rounded p-2 mt-1"
              rows={4}
            />
          </div>
          <h2 className="text-xl  mb-2">add price </h2>
          <div className="mb-4">
            <input
              value={price}
              placeholder="write price here"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full resize-none outline-blue-600 border-gray-300 border rounded p-2 mt-1"
            />
          </div>
          <h2 className="text-xl mb-2">add quantity of the product</h2>
          <div className="mb-4">
            <input
              value={quantity}
              placeholder="write the quantity of product"
              onChange={(e) => setQuantity(e.target.value)}
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

export default CreateProductComp;
