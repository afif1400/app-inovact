import { useSpring, animated } from 'react-spring';

type AppProps = {
	typeChange: any,
    nextStep: any
};

const Step3 = ({typeChange, nextStep}: AppProps) => {
    const continueStep = (e: any) => {
        e.preventDefault();
        nextStep();
	}
    const styles = useSpring({
        loop:false,
        from: { x: -90 },
        to: { x: 0 },
      })
    
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
			<animated.div style={{ borderRadius: 16, ...styles}}>
				<div className="user-detail__input-container">
					<input onChange={typeChange('profession')} id="profession" autoFocus type="text" className="input-component__userInput" placeholder="Profession"></input>
					<input onChange={typeChange('education')} id="education" type="text" className="input-component__userInput"  placeholder="Education"></input>
					<input onChange={typeChange('field')} id="field" type="text" className="input-component__userInput"  placeholder="Field"></input>
					<input onChange={typeChange('years')} id="years" type="number" className="input-component__userInput"  placeholder="Years"></input>
				</div>
			</animated.div> 

			<a href="/" className="button--blue--round button--blue" onClick={continueStep}></a>
		</div> );
};

export default Step3;
