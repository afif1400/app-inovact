import React, { useState } from "react";

interface IUserIntro {
    name: string;
    ph: string;
    uni: string;
}

type AppProps = {
    typeChange: any;
};

const Step2 = ({ typeChange }: AppProps) => {
    const [userIntro, setUserIntro] = useState<IUserIntro>({
        name: "",
        ph: "",
        uni: "",
    });

    const handleInputChange = (e: any) => {
        const property = e.target.id;
        setUserIntro((prev) => {
            return { ...prev, [property]: e.target.value };
        });
        // console.log(userIntro);
        typeChange(property);
    };
	
    return (
        <div className="user-detail__form">
            <h1 className="heading-login u-margin-bottom-medium">
                Fill the following details
            </h1>

            <input onChange={handleInputChange} id="name" autoFocus type="text" className="input-component" placeholder="Name" value={userIntro.name}></input>
            <input onChange={handleInputChange} id="ph" type="text" className="input-component" placeholder="Phone number" value={userIntro.ph}></input>
            <input onChange={handleInputChange} id="uni" type="text" className="input-component" placeholder="University / Institution" value={userIntro.uni}></input>
            <input id="empty" type="text" className="input-component" placeholder=""></input>

            <a href="/" className="button--blue">
                Button
            </a>
        </div>
    );
};

export default Step2;
