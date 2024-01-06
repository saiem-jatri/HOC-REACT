/* eslint-disable react/prop-types */
import withConter from './WithCounter.jsx'

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withConter(ClickCounter);