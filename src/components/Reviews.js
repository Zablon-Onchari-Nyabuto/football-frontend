import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import "../Reviews.css";

function Reviews({ onUpdateReview, onDelete, user }) {
    // const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        // if (localStorage.getItem("me")) {
        //     navigate("/")
        // } else {
        //     navigate("/reviews")
        // }

        fetch(`http://127.0.0.1:3000/reviews`)
            .then((r) => r.json())
            .then((reviews) => setReviews(reviews));
    }, []);
    console.log(reviews)

    // function handleDelete(e) {
    //     e.preventDefault()
    //     fetch("http://127.0.0.1:3000/reviews", {
    //       method: "DELETE",
    //     })
    //     .then((r) => r.json())
    //     .then((reviews) => onDelete(reviews));
    //   }
    // function handleUpdate() {
    //     fetch("http://127.0.0.1:3000/reviews/id", {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ reviews }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedReview) => {
    //         onUpdateReview(updatedReview);
    //       });
    //   }

    return (
        <div className='reviews-parent' >
            <div className='reviews-secondary' >
                <div className='reviews-card' >
                    {Object.keys(reviews).length > 0 && reviews.map((review) => (
                        <>
                            <h4>Username: {`${review.username}`}</h4>
                            <h4>Match: {`${review.match}`}</h4>
                            <h4>Date: {`${review.date}`}</h4>
                            <h4>Description: {`${review.description}`}</h4>
                            {/* <button className='update-button' onClick={handleUpdate} >Update</button> */}
                            {/* <button className='delete-button' onClick={handleDelete} >X</button> */}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews;
