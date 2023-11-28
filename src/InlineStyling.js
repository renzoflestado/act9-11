import './App.css';
import logo from './facebook.svg';
import logo1 from './google.svg';
import logo2 from './discord.svg';

function InlineStyling() {
  return (
    <div style={{width: "auto",}}>
      <div style={{width: "400px", margin: "auto", fontFamily: "Kufam"}}>
        <div style={{margin: "10px", textAlign: "Center",}}>
          <h3>Inline Styling</h3>
        </div>
        <div style={{borderRadius: "50px", boxShadow: "24px 24px 48px #b0b0b0, -24px -24px 48px #eeeeee", background: "#cfcfcf", padding: "6% 0 0",height: "500px", width: "400px",}}>
          <div style={{height: "10%", textAlign: "Center",}}>
            <h3>Login Form</h3>
          </div>
          <div>
            <div style={{margin: "10%"}}>
              <form>
                  <input style={{boxSizing: "border-box",width: "100%", marginBottom: "20px", fontSize: "14px", padding: "15px",}} type="email" placeholder="Email Address" />
                  <input style={{boxSizing: "border-box",width: "100%",marginBottom: "20px",fontSize: "14px", padding: "15px",}} type="password" placeholder="Password" />
                  <button style={{width: "100%", padding: "10px", borderRadius:"10px" ,backgroundColor: "black", color: "white", border: "0", cursor: "pointer"}}>LOGIN</button>
              </form>
              <div style={{marginTop: "15px", marginBottom: "15px", display: "flex", alignItems: "Center", justifyContent: "Center",}}>
                <div style={{width: "100%"}}>
                  <hr></hr>
                </div>
                <div>
                  <p style={{opacity: "0.6"}}>OR</p>
                </div>
                <div style={{width: "100%"}}>
                  <hr></hr>
                </div>
              </div>
              <div style={{display: "flex", alignItems: "Center", justifyContent: "space-evenly",}}>
                <a href="#"><img style={{width: "40px", height: "40px", cursor: "pointer",}} src={logo}></img></a>
                <a href="#"><img style={{width: "40px", height: "40px", cursor: "pointer",}} src={logo1}></img></a>
                <a href="#"><img style={{width: "40px", height: "40px", cursor: "pointer",}} src={logo2}></img></a>
              </div>
              <div style={{textAlign: "Center", margin: "45px", opacity: "0.8"}}>
                <p>New user? Sign up <a href = "#">here!</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InlineStyling;
