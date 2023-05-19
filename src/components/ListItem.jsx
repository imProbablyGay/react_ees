import React from 'react'
import Button from './button/Button';
import {useNavigate} from 'react-router-dom'

export default function ListItem({data, number, remove}) {
  let navigate = useNavigate();
  return (
    <div>
      {data.id}. {data.title}
      <hr></hr>
      <Button onClick={()=>remove(data)}>delete</Button>
      <hr></hr>
      <Button onClick={() => navigate(`/posts/${data.id}`)}>open</Button>
      <hr></hr>
      <br></br>
    </div>
  )
}
