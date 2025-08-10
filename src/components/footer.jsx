import { FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import ".././css/footer.css"

function Footer(){
    return(
        <div className="footer-content">
           <table>
                <tfoot>
                    <tr>
                        <th>Develop By</th>
                        <th className="mid">Social</th>
                        <th>Other Project</th>
                    </tr>
                    <tr>
                        <td>John Philip Baylon</td>
                        <td className="icon-container"> 
                            <a href="https://www.facebook.com/johnphilip.baylon.5"><FaFacebook></FaFacebook></a>
                            <a href="mailto:johnphilipbaylon3@gmail.com"> <MdOutlineMailOutline ></MdOutlineMailOutline> </a>
                            <a href="https://www.linkedin.com/in/john-philip-baylon-0b90b0373/"><FaLinkedin  /></a>
                        </td>
                        <td>
                            <div>Jump Jump</div>
                            <div>Bat Flap</div>
                            <div><h5>Work with me</h5></div>
                            <div> <a href="mailto:johnphilipbaylon3@gmail.com">Get in touch</a></div>
                        </td>
                    </tr>
                </tfoot>
            </table> 
        </div>
    )
}
export default Footer