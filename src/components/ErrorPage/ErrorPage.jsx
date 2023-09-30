import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>OOPPPSS!!!!</h1>
            <Link to='/'><button className="btn btn-primary">Home</button></Link>
        </div>
    );
};

export default ErrorPage;