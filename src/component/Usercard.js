import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Userlist.css';
const Usercard = ({user}) => {
  return (
    <div className='usercard'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        {user.username}
        </Card.Text>
        <Button className='button' variant="primary">
  <Link to={`/profile/${user.id}`} style={{ color: 'white', textDecoration: 'none' }}>
    profile
  </Link>
</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Usercard