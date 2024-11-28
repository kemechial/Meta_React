import logo from "./assets/logo.png"

function Header() {
    return (     
      <div>
         <h1>Hello World!</h1>
         <img src={logo} alt="Logo"
          height={200}
         />
     </div>

    );

  }

export default Header;