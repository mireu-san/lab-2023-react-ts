import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

//     const postData = () => {
//         axios.post()
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
// }

const postData = () => {
    axios.post(`https://63f823145b0e4a127de09eb7.mockapi.io/fakeData`, {
        firstName,
        lastName,
        checkbox,
    })
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
}

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    {/* <input placeholder='First Name' /> */}
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    {/* <input placeholder='Last Name' /> */}
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                {/* <Button type='submit'>Submit</Button> */}
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}



// How to Use Axios to Send API Requests to the Mock APIs