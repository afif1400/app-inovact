import mentor from '../../assets/images/login/mentorIcon.png';
import student from '../../assets/images/login/studentIcon.png';
import entrepreneur from '../../assets/images/login/entrIcon.png';
import { useSpring, animated } from 'react-spring';

type AppProps = {
    typeChange: any,
    nextStep: any
};

const Step1 = ({typeChange, nextStep}: AppProps) => {

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

                <div className="user-detail__type">
                <h1 className="heading-user u-margin-bottom-small">Select the type of user</h1>
                    <img src={mentor} id="mentor" alt="" className="user-detail__form__img" onClick={typeChange('type')}></img>
                    <img src={student} id="student" alt="" className="user-detail__form__img" onClick={typeChange('type')}></img>
                    <img src={entrepreneur} id="entrepreneur" alt="" className="user-detail__form__img" onClick={typeChange('type')}></img>
                </div>
                <a href="/" className="button--blue--round button--blue" onClick={continueStep}></a>
            </div> 
    
    );
    
               
};

export default Step1;
