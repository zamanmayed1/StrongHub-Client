import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Addareview = () => {
    const [user] = useAuthState(auth)

    const addReview = (e) => {
        e.preventDefault()
        const userName = e.target.username.value
        const ratingCount = e.target.ratingCount.value
        const review = e.target.text.value
        const data = { userName, ratingCount, review }

        // /addreview
        const url = 'https://stronghub.herokuapp.com/addreview'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Added SuccessFull')
                    e.target.reset()
                }
            })

    }

    return (
        <div>
            <p className='text-xl font-bold text-center'>Add a review</p>
            <form onSubmit={addReview} className='md:w-2/4 mx-auto my-3'>
                <span className="label-text">Your Name</span>
                <input name='username' value={user?.displayName} type="text" className="input block input-bordered my-2 font-bold  w-full  " disabled />
                <span className="label-text">Rating Number</span>
                <input name='ratingCount' type="number" className="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " placeholder='out of 5' max={5} required />

                <span className="label-text">Your Review</span>
                <textarea required name='text' className="textarea h-52 my-2 w-full  block textarea-accent" placeholder="your Review"></textarea>




                <input className='btn btn-secondary mt-3' type="submit" value={'Add Now'} />
            </form>
            <ToastContainer />
        </div>
    );
};

export default Addareview;