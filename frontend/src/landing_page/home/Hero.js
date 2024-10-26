import React from "react";

function Hero() {
    const handleSignUp = () => {
        alert("Sign up for free clicked!");
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                    <img
                        src="/media/images/HomeHero.png"
                        alt="An illustration depicting investment opportunities"
                        className="img-fluid w-100 w-md-75 mb-4"
                    />
                    <h1 className="display-4 fw-bold mb-3">Invest in Everything</h1>
                    <p className="lead mb-4">
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button className="btn btn-primary fw-bolder px-4 py-2" onClick={handleSignUp}>
                        Sign Up for Free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
