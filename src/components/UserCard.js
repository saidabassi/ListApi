import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const UserCard = ({ user }) => {
  return (
      <div>
          <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNe2CKInKv_EIp9V710ABsMYotYFc1VIxDijMhhyj-fE1AQu0dTKzNIebujRjRyU5SF6k&usqp=CAU" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.username}</Card.Text>
      <Card.Text>{user.email}</Card.Text>

          <Button variant="primary">
            <Link to={`/user/${user.id}`}>go to Profile</Link></Button>
    </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard