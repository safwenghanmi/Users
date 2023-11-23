import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';


const Profile = () => {
    const [user,setUser]=useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then((res) => setUser(res.data[0]))
        .catch((err) => console.log(err));
    });
    const{id}=useParams();
  return (
    <div>
           <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-user-icon-man-profil-homme-d-affaires-avatar-personne-ic%C3%B4ne-illustration-vectorielle.jpg" />
      <Card.Body>
        <Card.Title >{user.name}</Card.Title>
        <Card.Text >
        {user.username}
        </Card.Text>
        <Button variant="primary" style={{ backgroundColor: '#007bff', border: 'none' }}>
  <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>
    Back
  </Link>
</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile