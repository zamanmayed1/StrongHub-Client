import { useEffect, useState } from "react";

function useAdmin(user) {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const email = user?.email
        fetch(`https://stronghub.herokuapp.com/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')} `
            }

        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data?.admin)
            })



    }, [user])
    return [admin]
}

export default useAdmin