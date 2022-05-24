import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UserAPI() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await axios.get('/api/users')
        console.log(res)
    }

    useEffect(() => {
        getUsers()
    }, [])



    return {
        users: [users, setUsers]
    }
}
