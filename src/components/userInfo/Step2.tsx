import { useSpring, animated } from 'react-spring';
type AppProps = {
    typeChange: any,
    nextStep: any
};

const Step2 = ({ typeChange, nextStep }: AppProps) => {	
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
                    <input onChange={typeChange('name')} id="name" autoFocus type="text" className="input-component__userInput" placeholder="Name"></input>
                    <input onChange={typeChange('ph')} id="ph" type="text" className="input-component__userInput" placeholder="Phone number"></input>
                    <input onChange={typeChange('uni')} id="uni" type="text" className="input-component__userInput" placeholder="University / Institution"></input>
                    <input id="empty" type="text" className="input-component__userInput" placeholder=""></input>
                </div>
            </animated.div> 
       

        <a href="/" className="button--blue--round button--blue" onClick={continueStep}></a>
        </div>
    );
};

export default Step2;
