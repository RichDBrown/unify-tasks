import '../styles/signInCard.css'

function SignInCard() {
  return (
    <div id="sign-in-card">
      <span className="sign-in-card-title">Sign In</span>
      <input type="text" placeholder="Email" className="sign-in-up-input"/>
      <input type="text" placeholder="Password" className="sign-in-up-input"/>
      <button className="sign-in-up-button">Sign In</button>
      <hr id='sign-in-card-divider'/>
      <span className="sign-in-card-title">Sign Up</span>
      <input type="text" placeholder="Email" className="sign-in-up-input"/>
      <input type="text" placeholder="Password" className="sign-in-up-input"/>
      <button className="sign-in-up-button">Sign Up</button>
    </div>
  )
}

export default SignInCard