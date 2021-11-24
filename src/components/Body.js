import Button from './Button';
import BodyContent from './BodyContent';

const Body = ({ people, index, next, prev }) => {
    return (
        <div className="section-center">
            <BodyContent people={ people } index={ index }/>
            <Button next={ next } prev={ prev }/>
        </div>
    );
}
 
export default Body;