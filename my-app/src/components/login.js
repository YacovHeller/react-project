import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Login({ updateUser }) {
    const [obj, setObj] = useState({})
    const [err, setErr] = useState('')
    const [allUsers, setAllUsers] = useState()
    let nav = useNavigate()

    const changeInput = e => {
        const { name, value } = e.target
        const newObj = { ...obj, [name]: value }
        setObj(newObj)
        console.log(obj);
    }
    const inputs = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'enter your user name'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'enter your password'
        }
    ]




    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setAllUsers(data))
    }, [])

    const enter = () => {
        const { name, password } = obj
        if (allUsers) {

            const user = allUsers.find(user => user.username == name)
            console.log(user);
            if (user) {
                if (password == user.address.geo.lat.slice(-4)) {
                    localStorage.setItem('user', JSON.stringify(user))
                    updateUser(user)
                    setErr('')
                    nav('/home')
                } else {
                    setErr('password error')
                }
            } else {
                setErr('user error')
            }

        } else {
            setErr('network error')
        }
        console.log(allUsers)
    }

    return (
        <div>
            <h1>Login page</h1>
            {inputs.map((item, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <label for={item.name}>{item.name}</label>
                        <input
                            id={item.name}
                            name={item.name}
                            value={obj[item.name]}
                            type={item.type}
                            onChange={changeInput} />
                        <br />
                    </React.Fragment>)
            }
            )}
            <button onClick={() => enter()}>Login</button>
            <h6>{err}</h6>
        </div>
    );
}

export default Login;