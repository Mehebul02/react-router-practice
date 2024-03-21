import { Link, useRouteError } from "react-router-dom";

const ErrorPage =()=>{
    const error =useRouteError()
    return(
       
        <div>
            <p>{error.statusText || error.message}</p>
            
                {
                    error.status ===404 && <div>
                        <p>Page Not Found</p>
                        <p>Go to where back</p>
                        <Link to='/'><button className="btn">Home</button></Link>
                    </div>
                }
            
            <h1 className="text-2xl flex justify-center items-center mt-40">Opps!!!!</h1>
        </div>
    )
}
export default ErrorPage;