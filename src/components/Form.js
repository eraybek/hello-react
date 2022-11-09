import React, {useState} from 'react'

function Form() {

    const [form, setForm] = useState({name: "", surname: "", gender: "0"})
    // const [name, setName] = useState("")
    // const [surname, setSurname] = useState("")
    // const [gender, setGender] = useState("0")

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <div>
            <div>İsim</div>
            <input 
                placeholder='İsim' 
                name="name" 
                value = {form.name} 
                onChange={handleChange}
            >
            </input>
            <input 
                placeholder='Soyisim' 
                name="surname" 
                value = {form.surname} 
                onChange={handleChange}
            >
            </input>
            {/* <input placeholder='İsim' value = {name} onChange={(event)=> setName(event.target.value)}></input>
            <input placeholder='Soyisim' value = {surname} onChange={(event)=> setSurname(event.target.value)}></input> */}
            <br/>
        </div>

        <br/>
        <div>
            <div>Cinsiyet</div>
            <select 
            value = {form.gender} 
            name = "gender"
            onChange={handleChange}
            >
                <option value = "0">
                    Erkek
                </option>
                <option value = "1">
                    Kadın
                </option>
            </select>
        </div>

        <hr/>

        <div>
            İsim:
            <strong>
                {form.name} {form.surname}
            </strong>
        </div>
        
        <div>
            Cinsiyet: 
            <strong>
                {form.gender === "0" ? "Erkek" : "Kadın"}
            </strong>
        </div>
        
    </div>


    
  )
}

export default Form;