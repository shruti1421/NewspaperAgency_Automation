import React, { Fragment, useContext,useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';


const Contacts = () => {
    
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(()=>{
        getContacts();
       //eslint-disable-next-line
    },[]);

    if(contacts.length===0){
        return <h4>Please add a contact</h4>

    }

    let price = 0;

    contacts.forEach(contact => {
        price+=parseInt(contact.phone);
    });

    return (
        <Fragment>
           {filtered!==null? filtered.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            )):contacts.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
            ))}
            <h1>Total Price : <i className="fas fa-rupee-sign">{price}</i></h1>
        </Fragment>
    )
}

export default Contacts;
