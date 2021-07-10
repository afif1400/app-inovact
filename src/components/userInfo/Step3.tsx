type AppProps = {
	typeChange: any,
    nextStep: any
};

const Step3 = ({typeChange, nextStep}: AppProps) => {
    const continueStep = (e: any) => {
        e.preventDefault();
        nextStep();
	}
	
	return (
		<div className="user-detail__form">	
			<div className="user-detail__step-container">
				<span className="user-detail__step"></span>
				<span className="user-detail__step"></span>
				<span className="user-detail__step"></span>
				<span className="user-detail__step"></span>
			</div>
		
			<h1 className="heading-login u-margin-bottom-medium">
				Fill the following details
			</h1>

			<input onChange={typeChange('profession')} id="profession" autoFocus type="text" className="input-component" placeholder="Profession"></input>
			<input onChange={typeChange('education')} id="education" type="text" className="input-component" placeholder="Education"></input>
			<input onChange={typeChange('field')} id="field" type="text" className="input-component" placeholder="Field"></input>
			<input onChange={typeChange('years')} id="years" type="number" className="input-component" placeholder="Years"></input>

			<a href="/" className="button--blue" onClick={continueStep}>Button</a>
		</div> );
};

export default Step3;
