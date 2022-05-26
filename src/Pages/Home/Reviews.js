import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://stronghub.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center my-5'>Reviews</h2>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center '>
                {
                    reviews?.slice(0, 6).map(review => <div key={review?._id} className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/05/design-review.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.userName}</h2>
                            <p title={review.review}>{review.review} ...</p>
                            <p> Rating Count : <span className='text-yellow-500 font-bold'>{review.ratingCount} Starts</span> </p>
                        </div>
                    </div>)
                }

            </div>


        </div>
    );
};

export default Reviews;