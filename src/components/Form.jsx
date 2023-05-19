import React, {useState} from 'react';
import Button from './button/Button';
import Input from './input/Input';

export default function Form({create}) {
    let [form, changeForm] = useState({
        'title': '',
        'body': ''
      });

    function addNewPost(e) {
        e.preventDefault()
    
        let newPost = {
          'id': Date.now(),
          'text': form.title + '/' + form.body
        }
        
        create(newPost);

        changeForm({
          'title': '',
          'body': ''
        });
      }
      


  return (
    <form>
        <Button type='submit' onClick={addNewPost}>btn!</Button>
        <Input value={form.title} onChange={e=> {
            changeForm({...form, title: e.target.value})
        }} />
        <Input value={form.body} onChange={e=> {
            changeForm({...form, body: e.target.value})
        }} />
    </form>
    )
}
