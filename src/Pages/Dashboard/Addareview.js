import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';


const Addareview = () => {
    const [user] = useAuthState(auth)

    const addReview = (e) => {
        e.preventDefault()
        const userName = e.target.username.value
        const ratingCount = e.target.ratingCount.value
        const review = e.target.text.value
        const data = { userName, ratingCount, review }
        console.log(data);
        e.target.reset()
    }

    return (
        <div>
            <p className='text-xl font-bold text-center'>Add a review</p>
            <form onSubmit={addReview} className='md:w-2/4 mx-auto my-3'>
                <span class="label-text">Your Name</span>
                <input name='username' value={user?.displayName} type="text" class="input block input-bordered my-2 font-bold  w-full  " disabled />
                <span class="label-text">Rating Number</span>
                <input name='ratingCount' type="number" class="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " placeholder='out of 5' max={5} required />

                <span class="label-text">Your Review</span>
                <textarea required name='text' class="textarea h-52 my-2 w-full  block textarea-accent" placeholder="your Review"></textarea>




                <input className='btn btn-secondary mt-3' type="submit" value={'Add Now'} />
            </form>
        </div>
    );
};

export default Addareview;