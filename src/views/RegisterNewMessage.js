import React, { useState, useEffect } from "react";
import { post } from "../services/MessageService";
import { get } from "../services/CategoriesService";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function RegisterNewMessage({fetchLogHistoryData}) {
  const [categoryList, setCategoryList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("SelectAnOption");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      message: message,
      category: selectedCategory,
    };
    const result = await post("messages", data);
    fetchLogHistoryData()
    console.log(result);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const result = await get("categories");
      setCategoryList(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>New message</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={handleMessageChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <select value={selectedCategory} onChange={handleSelectChange}>
            <option value="SelectAnOption" key="key">
              Select an option
            </option>
            {categoryList.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default RegisterNewMessage;
