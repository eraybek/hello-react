import React from 'react'
import PropTypes from "prop-types"

function User({title, data, friends}) {

// const data = props.data
// const {data} = props
// const {name, age, city} = props.data

  return (
    <div>
        <strong>{title}</strong>
        <div>İsim: {data.name}</div>
        <div>Yaş: {data.age}</div>
        <div>Şehir: {data.city}</div>
        
        <h3>Arkadaşları</h3>
        {
            friends.map((friend,i) => (
                <div key={i}>{friend}</div>
            ))
        }
        <hr />
    </div>
  )
}

User.propTypes = {
    // name: PropTypes.string.isRequired,
    // age: PropTypes.number.isRequired,
    // city: PropTypes.string.isRequired,
    title: PropTypes.string,
    data: PropTypes.exact({
        name: PropTypes.string,
        age: PropTypes.number,
        city: PropTypes.string,
    }),
    friends: PropTypes.array,
}

User.defaultProps = {
    title: "Kişi",
}

export default User;

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