import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { leftProducts,rightProducts } from "./data";

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imgUrl={leftProducts[0].imgUrl}
                productName={leftProducts[0].productName}
                productDescription={leftProducts[0].productDescription}
                tryDemo={leftProducts[0].tryDemo}
                learnMore={leftProducts[0].learnMore}
                googlePlay={leftProducts[0].googlePlay}
                
            />
            <RightSection
                imgUrl={rightProducts[0].imgUrl}
                productName={rightProducts[0].productName}
                productDescription={rightProducts[0].productDescription}
                learnMore={rightProducts[0].learnMore}
                
            />
            <LeftSection
                imgUrl={leftProducts[1].imgUrl}
                productName={leftProducts[1].productName}
                productDescription={leftProducts[1].productDescription}
                tryDemo={leftProducts[1].tryDemo}
                googlePlay={leftProducts[1].googlePlay}
                
            />
            <RightSection
                imgUrl={rightProducts[1].imgUrl}
                productName={rightProducts[1].productName}
                productDescription={rightProducts[1].productDescription}
                learnMore={rightProducts[1].learnMore}
                
            />
            <LeftSection
                imgUrl={leftProducts[2].imgUrl}
                productName={leftProducts[2].productName}
                productDescription={leftProducts[2].productDescription}
                
                googlePlay={leftProducts[2].googlePlay}
                
            />
            
            <Universe />
        </>
    );
}

export default ProductPage;
