import React, {useState} from "react";

interface IUserWork {
    profession: string,
    education: string,
    field: string,
	years: number    
}

type AppProps = {
	typeChange: any;
};

const Step3 = ({typeChange}: AppProps) => {
	const [userWork, setUserIntro] = useState<IUserWork>(
		{ 
            profession: "",
            education: "",
            field: "",
            years: 0    
        }
    )
	
	const handleInputChange = (e: any)  => {
		const property = e.target.id;
		setUserIntro((prev) => { 
            return { ...prev, [property]: e.target.value } 
		})
		// console.log(userWork);
	}

	return (
		<div className="user-detail__form">			
			<h1 className="heading-login u-margin-bottom-medium">
				Fill the following details
			</h1>

			<input onChange={handleInputChange} id="profession" autoFocus type="text" className="input-component" placeholder="Profession" value={userWork.profession}></input>
			<input onChange={handleInputChange} id="education" type="text" className="input-component" placeholder="Education" value={userWork.education}></input>
			<input onChange={handleInputChange} id="field" type="text" className="input-component" placeholder="Field" value={userWork.field}></input>
			<input onChange={handleInputChange} id="years" type="number" className="input-component" placeholder="Years" value={userWork.years}></input>

			<a href="/" className="button--blue">Button</a>
		</div> );
};

export default Step3;
