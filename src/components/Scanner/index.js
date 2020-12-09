const Scanner = ({ show }) => {
    return show ? (
        <div className={`diode`}>
            <div className={`laser`}></div>
        </div>
    ) : null;
};

export default Scanner;
