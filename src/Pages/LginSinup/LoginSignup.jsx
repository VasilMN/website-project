import Styles from "./loginsignup.module.scss"

export const LoginSignup = () => {


    const hedelSubmit = (event) => {
   
        event.preventDefault();
      
}



    return <div className={Styles.LoginSignup}>
        <div className={Styles.LoginSignup_conteiner}>
            <h1>Sing-Up</h1>

            <form onSubmit={hedelSubmit} className={Styles.LoginSignup_form}>
                <input type="text" placeholder="Your Name" name="name" id="" />
                <input type="text" placeholder="Email Addres" name="email" id="" />
                <input type="text" placeholder="Password" name="password" id="" />
                <button>contine</button>
                <p className={Styles.LoginSignup_login}>Already have an account? <span>Login here</span></p>
                 
            </form>
            <div className={Styles.LoginSignup_agree}> 
                       <input type="checkbox" name=" "  id=""/>
                       <p>By continuing. i agree to the treams of use & privacy policy </p>
                  </div>
        </div>

    </div>
}