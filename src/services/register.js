const ENDPOINT = 'https://still-savannah-85586.herokuapp.com'

export default function register({ email, password }) {
    return fetch(`${ENDPOINT}/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        console.log(email, password);
        if (!res.ok) throw new Error('Response is NOT ok')
        return true
    })
}