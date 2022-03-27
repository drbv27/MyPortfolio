import Layout from "../components/Layout";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const Custom404 = () => (
    <Layout>
        <div className="container text-center mt-5 text-info">
            <h1>404</h1>
            <h4>This page does not exist!!!</h4>
            <p>
            <Link href="/">
            <a className="text-info">Home <FontAwesomeIcon icon={faHouse} /></a>
          </Link>
            </p>
        </div>
    </Layout>
)
 
export default Custom404;