import React, { useState } from "react";
import { makePost } from "./api";
import reactRouterDom,{useHistory} from "react-router-dom";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const history = useHistory();

  const handleSubmit = async () =>{
      const passingPost = await makePost(title,description,price,willDeliver);
      setTitle("");
      setDescription("");
      setPrice("");
      setWillDeliver(false);
      console.log(passingPost);
      history.push("/");
  }  

  return (
    <div className="postform">
      <label htmlFor="Title">Title</label>
      <br></br>
      <input value = {title} onChange={(event) => setTitle(event.target.value)} required />
      <br></br>
      <label htmlFor="Description">Description</label>
      <br></br>
      <textarea value = {description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <br></br>
      <label htmlFor="Price">Price</label>
      <br></br>
      <input value = {price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />
      <br></br>
      <label htmlFor="willDeliver">Will Deliver</label>
      <input checked = {willDeliver} type="checkbox" name= "WillDeliver"  onChange={(event) => setWillDeliver(event.target.checked)} required />
      <br></br>
      <br></br>
      <button
        type="button"
        onClick={handleSubmit}>Post
      </button>
    </div>
  );
};

export default PostForm;