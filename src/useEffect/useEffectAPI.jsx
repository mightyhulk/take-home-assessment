import React, { useState, useEffect } from 'react'

const UseEffectAPI = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/posts')
        setLoading(false)
        // setUsers(await response.json());
        response = await response.json()
        setUsers(response)
      } catch (error) {
        setLoading(false)
        console.log('my error is ' + error)
      }
      if (loading) {
        return <Loading />
      }
    }

    getUsers()
  }, [])

  return (
    <>
      {users.map((item, index) => (
        <div key={index}>
          <h1> {item.post} </h1>
          <h1> {item.num} </h1>
        </div>
      ))}
    </>
  )
}

export default UseEffectAPI