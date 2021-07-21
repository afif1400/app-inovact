import React, { useState } from "react";
import topRight from '../../assets/images/background/topRight.png';
import topLeft from '../../assets/images/background/topLeft.png';
import top from  '../../assets/images/background/top.png';
import bottomRight from '../../assets/images/background/bottomRight.png';
import bottomLeft from  '../../assets/images/background/bottomLeft.png';
import Form from './StepForm';
const UserInfo: React.FC = () => {

    return (
        
            <div className="background">
                <img src={topRight} alt="one" className="background__topRight"/>
                <img src={topLeft} alt="one" className="background__topLeft"/>
                <img src={top} alt="one" className="background__top"/>
                <img src={bottomLeft} alt="one" className="background__bottomLeft"/>
                <img src={bottomRight} alt="one" className="background__bottomRight"/>
               <Form />
            </div>
       
       
    );
};

export default UserInfo;
