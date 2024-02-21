import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Session = () => {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(()=> {
    //         setIsLoading(false);
    //     } , 1100); 
    // }, []);

    return (
        <>
            {/* {isLoading && <CustomLoader />} */}

            <div style={{ marginTop: "-6% ", height: "94vh" }}>
                <InlineWidget className="calendly-block-1" url="https://calendly.com/pavanthakur/30min" styles={{ height: "94vh", width: "100%" }}></InlineWidget>
            </div>
        </>
    );
}

export default Session