<form name="contact" action="/" method="POST" data-netlify="true">
    <p>
      <label>Your Name/Organization: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
  
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Reach out</button>
    </p>
  </form>

  <style>
      form{
          max-width:30%;
          margin:0 auto;
      }
      p>label{
          display: flex;
          justify-content: space-between;
      }
  </style>