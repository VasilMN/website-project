import Styles from "./newsletter.module.scss"

export const NewsLetter = () => {

    return <div className={Styles.newsletter}>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>

        <div>
            <input type="text" placeholder="Your Email id" name="" id="" />
            <button>Subscribe</button>
        </div>

    </div>

}