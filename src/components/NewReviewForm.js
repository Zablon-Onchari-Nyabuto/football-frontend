import { useState } from "react";

function NewReviewForm({ onAddReview }) {
  const [username, setUsername] = useState("");
  const [match, setMatch] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        match: match,
        date: date,
        description: description
      }),
    })
      .then((r) => r.json())
      .then((newReview) => onAddReview(newReview));
  }

  return (
    <div className="new-plant-form">
      <h2>New Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="match"
          placeholder="Match"
          value={match}
          onChange={(e) => setMatch(e.target.value)}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(parseFloat(e.target.value))}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
