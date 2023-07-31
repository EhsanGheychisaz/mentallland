import {FaFacebookF , FaInstagram , FaLinkedinIn , FaWhatsapp , FaTwitter} from "react-icons/fa"
import css from  "./style.module.css"
const SocialIcons = ()=>{
    return (
                       <ul className={css.ul}>
                            <li className={css.li}><FaWhatsapp /></li>
                            <li className={css.li}><FaLinkedinIn /></li>
                            <li className={css.li}><FaInstagram /></li>
                            <li className={css.li}><FaFacebookF /></li>
                            <li className={css.li}><FaTwitter /></li>
                        </ul>
    )
}
export default SocialIcons;