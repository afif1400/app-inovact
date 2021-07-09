import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

interface IUserInfo {
    step: number,
    // step 1
	type: string
    // step 2
	name: string,
    ph: string,
	uni: string
    // step 3
    profession: string,
    education: string,
    field: string,
	years: number    
}

const Form: React.FC = () => {
    const [userInfo, setUserInfo] = useState<IUserInfo>(
        { 
            step: 1,
            type: "",
            name: "",
            ph: "",
            uni: "",
            profession: "",
            education: "",
            field: "",
            years: 0
        }
    )    

    const nextStep = () => {
        const curStep = userInfo.step;
        setUserInfo(prevState => ({
            ...prevState,
            step: curStep+1
        }));
    }

    const prevStep = () => {
        const curStep = userInfo.step;
        setUserInfo(prevState => ({
            ...prevState,
            step: curStep-1
        }));
    }

    const handleChange = (input : any) => (e : any) => {
        if(e.target.tagName === 'IMG') {
            setUserInfo(prevState => ({
                ...prevState,
                [input]: e.target.id
            }));
        } else {
            setUserInfo(prevState => ({
                ...prevState,
                [input]: e.target.value
            }));
        }
        console.log(e.target);
        console.log(userInfo);
    }

    const showStep = () => {
        if(userInfo.step === 1) {
            return <Step1
                typeChange = {handleChange}
                nextStep = {nextStep}
            />
        } else if(userInfo.step === 2) {
            return <Step2
                typeChange = {handleChange}
                nextStep = {nextStep}
            />
        } else if(userInfo.step === 3) {
            return <Step3
                typeChange = {handleChange}
                nextStep = {nextStep}
            />
        } 
    }
    
    return (
        <div className="user-detail">
            {showStep()}
        </div>
    );
};

export default Form;
