import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [ user, setUser ] = useState([])

    useEffect(function getUser() {

        axios.get('https://randomuser.me/api?results=10').then(
            response => setUser(response.data.results)
        ).catch(err => console.log(err))
    }, [])

    function showUser(user) {

        return (
            <div className="w-64 min-w-64 flex-1 flex-space-between" key={user.login.md5}>

                <div className="px-6 py-4">
                    <img className="object-none object-center bg-gray-400 w-24 h-24 rounded-full" src={user.picture.large} alt={user.name.last + 'photo'} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{user.name.first} {user.name.last}</div>
                    <p className="text-gray-700 text-base">
                        Email: {user.email}
                    </p>
                    <p className="text-gray-700 text-base">
                        Phone: {user.cell}
                    </p>
                </div>
            </div>
        )

    }

    return (
        <div className="inline-flex flex-wrap p-6">
            {user.map(p => showUser(p))}
        </div >
    )
}

export default Users