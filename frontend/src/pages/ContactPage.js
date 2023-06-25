import React from "react";


function Contact({ contacts }) {
 

  return (

    <>
      <div class="cust-bg text-white px-5 pb-5">
        <h1 class = "custcolor">Contact Us</h1>
        <p>Feel free to get in touch with any of us:</p>
        <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1">
          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-white">
                <h3 class="card-title">Samarth</h3>
                <p class="card-text">Phone: +91 6264274331</p>
                <p class="card-text">Email: Samarth@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-light bg-dark">
                <h3 class="card-title">Praseet Patro</h3>
                <p class="card-text">Phone: +91 8260181868</p>
                <p class="card-text">Email: praseet2001@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-white bg-dark">
                <h3 class="card-title">Shreyas</h3>
                <p class="card-text">Phone: +91 9600017721</p>
                <p class="card-text">Email: Shreyas2002@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-white bg-dark">
                <h3 class="card-title">Shivama</h3>
                <p class="card-text">Phone: +91 9262565336</p>
                <p class="card-text">Email: Shivama1234@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <h1 class = "custcolor mt-5">Let's Meet</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67293400585!2d72.71637670539747!3d19.082502000719877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687608334183!5m2!1sen!2sin" class = "mt-2" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </>
  );
}

export default Contact;