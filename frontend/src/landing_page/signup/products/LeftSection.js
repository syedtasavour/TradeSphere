import React from "react";
import { company_icon } from "../home/features";

function LeftSection({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <img src={imgUrl} alt={productName} />
        </div>
        <div className="col-lg-2 col-0"></div>
        <div className="col-lg-4 col-12 text-start mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex fw-bold  ">
         { tryDemo && (<a href={tryDemo} className="mb-4 me-5  text-decoration-none mb-2">
            Try Demo {company_icon}
          </a>)}
          {learnMore &&(<a href={learnMore} className="text-decoration-none mb-2">
            Learn More {company_icon}
          </a>)}
          </div>
          <div className="">
            {googlePlay && (
              <a href={googlePlay} className="me-2">
                <img
                  src="/media/images/googlePlayBadge.svg"
                  alt="Google Play"
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img src="/media/images/appstoreBadge.svg" alt="App Store" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
