import React, {useContext,useRef, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {

    const contactContext = useContext(ContactContext);

    const {filtered,filterContacts,clearFilter} = contactContext;

    const text = useRef('');

    useEffect(()=>{
        if(filtered===null){
           text.current.value='';
        }
    });

    const onChange = e => {
        if(text.current.vaue !== ''){
            filterContacts(e.target.value);
        }else{
            clearFilter();
        }
    }

    return (
        <form>
           <input ref={text} type="text" placeholder="Filter Subscriptions..." onChange={onChange} /> 
        </form>
    )
}

export default ContactFilter;