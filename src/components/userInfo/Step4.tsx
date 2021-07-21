import avatar from '../../assets/images/login/avatar.png';
import { useSpring, animated } from 'react-spring';
type AppProps = {
	typeChange: any,
    nextStep: any
};

const Step4 = ({typeChange, nextStep}: AppProps) => {
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
		
			<h1 className="heading-login u-margin-bottom-small">
				We're Almost Done
			</h1>
			<animated.div style={{ borderRadius: 16, ...styles}}>
				<div className="user-detail__input-container">
					<img src={avatar} id="mentor" alt="" className="user-detail__form__img" onClick={typeChange('type')}></img>
					<input  type="file" id="image" hidden/>
					<label className="input-component__userInputFile" htmlFor="image">Upload</label>
					<a href="/feed" className="u-margin-top-small u-margin-bottom-small">Skip</a>
				</div>
			</animated.div>
		
			
			<a href="/feed" className="button--blue--round button--blue"></a>
		</div> );
};

export default Step4;
