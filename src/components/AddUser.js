import { useState } from 'react'

const AddUser = ({ onAdd }) => {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [contact, setContact]= useState('')
    const [terms, setTerms]= useState('false')

    const onSubmit =(e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add User Details First')
            return
        }

        onAdd ({ name, email, contact, terms })
        setName('')
        setEmail('')
        setContact('')
        setTerms(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>User Name</label>
                <input type ='text' 
                placeholder='Add Name' 
                value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Email Address</label>
                <input type ='text' 
                placeholder='example@email.com'
                value={email} onChange={(e)=> setEmail(e.target.value)} required />
            </div>
            <div className='form-control'>
                <label>Contact</label>
                <input type ='number' 
                placeholder='Add Contact Number'
                value={contact} onChange={(e)=> setContact(e.target.value)} required />
            </div>
            <div className='form-control from-control-check'>
                <label className='terms'>Agree to Terms & Conditions</label>
                <input type ='checkbox'
                checked={terms} 
                value={terms} onChange={(e)=> setTerms(e.currentTarget.checked)} required/>
            </div>
            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default AddUser
