const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/products`

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const show = async (productId) => {
    try {
        const res = await fetch(`${BASE_URL}/${productId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const createOrder = async (productId, commentFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/Order`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentFormData)
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export default { index, show, createOrder }