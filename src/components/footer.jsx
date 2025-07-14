import { FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import ".././css/footer.css"

function Footer(){
    return(
        <div className="footer-content">
           <table>
            <tr>
                <th>Develop By</th>
                <th className="mid">Social</th>
                <th>Other Project</th>
            </tr>
            <tr>
                <td>John Philip Baylon</td>
                <td className="icon-container"> 
                    <a href="https://www.facebook.com/johnphilip.baylon.5"><FaFacebook size={30}></FaFacebook></a>
                    <a href="mailto:johnphilipbaylon3@gmail.com"> <MdOutlineMailOutline size={30}></MdOutlineMailOutline> </a>
                    <a href="https://www.linkedin.com/in/john-philip-baylon-0b90b0373/"><FaLinkedin size={30} /></a>
                </td>
                <td>
                    <p>Jump Jump</p>
                    <p>Bat Flap</p>
                    <p><h5>Work with me</h5></p>
                    <p> <a href="mailto:johnphilipbaylon3@gmail.com">Get in touch</a></p>
                </td>
            </tr>
            
            </table> 


        </div>
    )
}
export default Footer