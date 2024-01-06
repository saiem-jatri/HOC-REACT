/* eslint-disable react/prop-types */
import withConter from './WithCounter.jsx'

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onMouseEnter={incrementCount}>
                Hover {count} times
            </button>
        </div>
    );
};

export default withConter(HoverCounter);