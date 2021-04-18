import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'newspaper'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'newspaper'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Subscription' : 'Add Subscription'}
      </h2>
      <h5>Subscription Type</h5>
      <input
        type='radio'
        name='type'
        value='newspaper'
        checked={type === 'newspaper'}
        onChange={onChange}
      />{' '}
      Newspaper{' '}
      <input
        type='radio'
        name='type'
        value='magazine'
        checked={type === 'magazine'}
        onChange={onChange}
      />{' '}
      Magazine
      {type==='newspaper' &&
          <select name='name' onChange={onChange}>
    <option value="0">Select Newspaper:</option>
    <option value="Times Of India">Times of India        150/per month</option>
    <option value="Hindustan Times">Hindustan Times{' '}        12/per month</option>
    <option value="Deccan Chronicle">Deccan chronicle{' '}        {' '} 16/per month</option>
    <option value="Danik Bhaskar">Dainik Bhaskar{' '}        {' '}105/per month</option>
    <option value="Nav Bharat">Nav Bharat{' '}        {' '}105/per month</option>
    <option value="The Hindu">The Hindu{' '}        {' '}210/per month</option>
    <option value="Punjab Kesari">Punjab Kesari{' '}        {' '}120/per month</option>
    <option value="Sambad">Sambad{' '}        {' '}180/per month</option>
    <option value="Malyala Manorama">Malyala Manorama{' '}        {' '}210/per month</option>
    <option value="The Indian Express">The Indian Express{' '}        {' '}165/per month</option>
  </select>}
  {type==='magazine' &&
          <select name='name' onChange={onChange}>
    <option value="0">Select Magazine:</option>
    <option value="India Today">India Today{' '}        {' '}170/per month</option>
    <option value="Outlook">Outlook{' '}        {' '}210/per month</option>
    <option value="Forbes India">Forbes India{' '}        {' '}240/per month</option>
    <option value="Digit">Digit{' '}        {' '}170/per month</option>
    <option value="AutoCar">AutoCar{' '}        {' '}200/per month</option>
  </select>}
      <input
        type='text'
        placeholder='Address'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Price'
        name='phone'
        value={phone}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value={current ? 'Update Subscription' : 'Add Subscription'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;