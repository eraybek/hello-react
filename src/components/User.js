import React, {useState} from 'react'
import PropTypes from "prop-types"

function User() {

// const data = props.data
// const {data} = props
// const {name, age, city} = props.data
const [user, setUser] = useState({name:'Eray', surname: 'Aybek'})
  return (
    <div>
        <h2>User</h2>
        {user.name} {user.surname}

        <br/>
        <button onClick={() => setUser({...user, name: 'Ahmet'})}>
        {/* <button onClick={() => setUser(prev) => ({...prev, name: "Ahmet"})}> */}
          İsmi değiştir
          </button>
        <button onClick={() => setUser({...user, surname: 'Falan'})}>
          {/* <button onClick={() => setUser(prev) => ({...prev, surname: "Falan"})}> */}
          Soyismi değiştir
          </button>

        {/* <strong>{title}</strong>
        <div>İsim: {data.name}</div>
        <div>Yaş: {data.age}</div>
        <div>Şehir: {data.city}</div>
        
        <h3>Arkadaşları</h3>
        {
            friends.map((friend,i) => (
                <div key={i}>{friend}</div>
            ))
        }
        <hr /> */}
    </div>
  )
}


export default User;

//User.propTypes = {
    //     // name: PropTypes.string.isRequired,
    //     // age: PropTypes.number.isRequired,
    //     // city: PropTypes.string.isRequired,
    //     title: PropTypes.string,
    //     data: PropTypes.exact({
    //         name: PropTypes.string,
    //         age: PropTypes.number,
    //         city: PropTypes.string,
    //     }),
    //     friends: PropTypes.array,
    // }
    
    // User.defaultProps = {
    //     title: "Kişi",
    // }
// function User({data: {name, age, city}}) {
//     return (
//       <div>User
//           <div>İsim: {name}</div>
//           <div>Yaş: {age}</div>
//           <div>Şehir: {city}</div>
//           <hr />
//       </div>
//     )
//   }