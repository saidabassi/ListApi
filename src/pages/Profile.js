 import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import {Card, Button} from 'react-bootstrap'
const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/? id=${id}`)
      .then(res => setUser(res.data[0]))
      .catch(err => console.log(err))
  })
   return (
     <div>
         <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/32/95/b6/3295b632fdf0591d096fbcb671d4aee0.jpg" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.username}</Card.Text>
           <Card.Text>{user.email}</Card.Text>
           <Card.Text>{user.phone}</Card.Text>


      <Button variant="primary"><Link to= {`/users`}>go back</Link></Button>
    </Card.Body>
  </Card>
     </div>
   )
 }
 
 export default Profile