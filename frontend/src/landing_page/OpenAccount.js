import React from "react";




function OpenAccount() {
    const handleSignUp = () => {
      
        alert("Sign up for free clicked!");};
    return(
        <div className="container mt-5">
            <div className="text-center">
            <h1>Open a Zerodha account</h1>
                    <p className="text-muted">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <button className="btn btn-primary fw-bolder" onClick={handleSignUp} >
                        Sign Up for Free
                    </button>
            </div>
        </div>
    );
}
export default OpenAccount;