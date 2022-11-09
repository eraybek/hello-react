import React, { useState } from "react";
// import Header from "./components/Header"
// import Login from "./components/Login"
import User from "./components/User"
import Counter from "./components/Counter"
import Colors from "./components/Colors"
import Form from "./components/Form"


// const isLoggedIn = false;
// const name = "Eray"; 
// let surname = "Aybek";
// const fullName = "Eray Aybek"


function App() {

  const [isVisible, setIsVisible] = useState(true)
  return (
 
    <div>
      
      {isVisible && <Counter/>}
      <button onClick={() => setIsVisible(!isVisible)}>
      Göster/Gizle
      </button>
      
      {/* <Form/> */}
      {/* <Colors/> */}
      {/* <User/> */}
      {/* <User 
        // name = "Eray"
        // city = "İstanbul"
        // age = {23}

        // title = "Başlık"
        // data={{  
        //   name: 'Eray Aybek',
        //   city: 'İstanbul',
        //   age: 23,
        //   }} 
        //   friends = {["Ahmet", "Mehmet", "Ayşe"]}
      />  */}
    </div>
    
  );

}

export default App;



      {/*  
      <div>{ isLoggedIn ? <div>Hoşgeldin {fullName}</div> : <Login /> }</div>
      
      <div>
        { isLoggedIn && <div>Hoşgeldin {fullName} </div> }
        { !isLoggedIn && <a href="#/">Giriş Yapın</a>}
      </div>


      <div>{name} {surname}</div>
       
      
      <div>
        <p>
          test
        </p>
      </div>

      <label htmlFor="test">Test</label>
      {/* <Header /> */} 