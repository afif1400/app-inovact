type AppProps = {
    typeChange: any,
    nextStep: any
};

const Step2 = ({ typeChange, nextStep }: AppProps) => {	
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

            <input onChange={typeChange('name')} id="name" autoFocus type="text" className="input-component" placeholder="Name"></input>
            <input onChange={typeChange('ph')} id="ph" type="text" className="input-component" placeholder="Phone number"></input>
            <input onChange={typeChange('uni')} id="uni" type="text" className="input-component" placeholder="University / Institution"></input>

            <input id="empty" type="text" className="input-component" placeholder=""></input>

            <a href="/" className="button--blue" onClick={continueStep}>
                Button
            </a>
        </div>
    );
};

export default Step2;
