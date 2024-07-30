import React from "react";
import { Routes, Route } from "react-router-dom";
import {
ManagerInfoForm
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
            
                <Route path="/inf" element={<ManagerInfoForm {...props} title={'Information Form Layout'} />} />
        </Routes>
    )

};

export default Component;