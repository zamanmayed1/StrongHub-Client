import React from 'react';

const Blog = () => {
    return (
        <div className='h-[80vh]'>
            <div tabIndex="0" className=" my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-primary">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <ul>
                        <ol> Lazy loading images in React.</ol>
                        <ol>collapseclassMemoizing React components to prevent unnecessary re-renders.</ol>
                        <ol>Keeping component state local where necessary</ol>
                        <ol>Code-splitting in React using dynamic import() </ol>
                        <ol>Windowing or list virtualization in React. </ol>

                    </ul>
                </div>
            </div>
            <div tabIndex="0" className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-primary">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                        There are four main types of state you need to properly manage in your React State <br />
                        1) Local state <br />
                        2)  Global state <br />
                        3)  Server state <br />
                        4) URL state <br />
                    </p>
                </div>
            </div>
            <div tabIndex="0" className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-primary">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>

                    </p>
                </div>
            </div>
            <div tabIndex="0" className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-primary">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content">
                    <p>
                        I should never set the state directly because of the following reasons:<br />
                        1) If I set it directly, calling the setState() afterward may just replace the set i made.<br />
                        2) When i directly set the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br />
                        3) I will lose control of the state across all components.
                    </p>
                </div>
            </div>
            <div tabIndex="0" className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-primary">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name ?
                </div>
                <div className="collapse-content">
                    <p>

                    </p>
                </div>
            </div>
            <div tabIndex="0" className="my-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium text-primary">
                    What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        Unit tests only test a single part of your implementation. A unit. No dependencies or integrations, no framework specifics. They're like a method that returns a link in a specific language:
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;