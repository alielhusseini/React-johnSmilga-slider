import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Button = ({ next, prev }) => {
    return (
        <>
            <button className="prev" onClick={ () => prev() }>
            <FiChevronLeft />
            </button>
            <button className="next" onClick={ () => next() }>
                <FiChevronRight />
            </button>
        </>
    );
}
 
export default Button;