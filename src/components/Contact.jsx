import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>

        <form>
<div>
<label >Name</label>
<input type="text" name="name" placeholder='Enter your Name' required/>
</div>

<div>
<label >E-mail</label>
<input type="email" name="email" placeholder='Enter your Emaik' required/>
</div>

<div>
<label >Message</label>
<input type="text" name="Msg" placeholder='Enter your Query...' required />
</div>

<button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
