import mentor from '../../assets/images/login/mentorIcon.png';
import student from '../../assets/images/login/studentIcon.png';
import entrepreneur from '../../assets/images/login/entrIcon.png';

type AppProps = {
    typeChange: any
};

const Step1 = ({typeChange}: AppProps) => {
	return (
    <div className="login-page__form">			
        <img src={mentor} id="mentor" alt="" className="login-page__form__social-icons__img" onClick={typeChange('type')}></img>
        <img src={student} id="student" alt="" className="login-page__form__social-icons__img" onClick={typeChange('type')}></img>
        <img src={entrepreneur} id="entrepreneur" alt="" className="login-page__form__social-icons__img" onClick={typeChange('type')}></img>

        <a href="/" className="button--blue--round button--blue"></a>
    </div> );
};

export default Step1;
