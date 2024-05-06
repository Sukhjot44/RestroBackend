import React from 'react';
const Review = () => {
    const reviews = [
        {
            content: "A delightful dining experience! The menu offers a great variety, and the flavors are fantastic. The staff is attentive, and the prices are reasonable. I'd definitely recommend their seafood dishes!",
            image: "c1.png",
            name: "David Jones"
        },
        {
            content: "A solid choice for a family dinner. The portions are generous, and the prices are reasonable. The atmosphere is welcoming. I love their pasta dishes, and my kids adore the pizza.",
            image: "c2.jpg",
            name: "Martin Thomas"
        },
        {
            content: "This restaurant is my happy place. It's perfect for a cozy dinner with friends. The staff is friendly, and the cocktails are amazing. You can't go wrong with their chef's specials",
            image: "c3.jpg",
            name: "Luke Jobs"
        }
    ];

    return (
        <div className="testimonial-area">
            <div className="container">
                <div className="section-header text-center">
                    <h1 style={{ fontWeight: 700 }}>Our Customers <span style={{ color: '#CC3333' }}>Reviews</span></h1>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        {reviews.map((review, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="content text-center">
                                    <p>{review.content}</p>
                                    <div className="person"><img alt={review.name} src={review.image} /></div>
                                    <h5>{review.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
