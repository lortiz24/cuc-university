import React, { useEffect, useState } from 'react'

export const useGetOrigin = () => {
    const [origin, setorigin] = useState('')


    useEffect(() => {
        setorigin((typeof window === 'undefined') ? '' : window.location.origin)
    }, [])

    return {
        origin
    }
}
