import '../styles/signInCard.css'

function SignInCard() {
  return (
    <div id="sign-in-card">
      <span className="sign-in-card-title">Sign In</span>
      <input type="text" placeholder="Email" className="sign-in-input"/>
      <input type="text" placeholder="Password" className="sign-in-input"/>
      <button className="sign-in-button">Sign In</button>
      <hr id='sign-in-card-divider'/>
      <span className="sign-in-card-title">Sign Up</span>
      <input type="text" placeholder="Email" className="sign-in-input"/>
      <input type="text" placeholder="Password" className="sign-in-input"/>
      <button className="sign-in-button">Sign Up</button>
    </div>
  )
}

export default SignInCard