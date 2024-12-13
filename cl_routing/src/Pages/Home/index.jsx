import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <>|
<header>
    <Link className="link" to="/">
    <p>home </p>
    </Link>
    <Link className="link" to="/contact">
    <p>contact </p>
    </Link>
    <Link className="link" to="/about">
    <p>about </p>
    </Link>
</header>

        <div>
            bu vebsite  Eyyub haqqinda melumatlar ucundu

            
        </div>
        
        </>
    )
}
export default Home