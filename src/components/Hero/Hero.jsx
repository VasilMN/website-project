import Styles from "./hero.module.scss"
import hand_icon from "../../assets/imges/hand_icon.png"
import arrow_icon from "../../assets/imges/arrow.png"
import hero_img from "../../assets/imges/hero_image.png"



export const Hero = () => {
    return <div className={Styles.hero}>
        <div className={Styles.hero_left}>
            <h2>NEEW ARRIVALS ONLY</h2>
            <div>
                <div className={Styles.hero_hand_icon}>
                    <p>new</p>
                    <img src={hand_icon} alt="hand_icon" />

                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className={Styles.hero_latest_btn}>
                <div>
                    Latest Collection
                </div>
                <img src={arrow_icon} alt="arrow_img" />
            </div>
        </div>
        <div className={Styles.hero_rigth}>
          <img src={hero_img} alt="hero_img" />
        </div>

    </div>
}