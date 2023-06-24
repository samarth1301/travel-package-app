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
                <h3 class="card-title">John Doe</h3>
                <p class="card-text">Phone: +1 123-456-7890</p>
                <p class="card-text">Email: john.doe@example.com</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-light bg-dark">
                <h3 class="card-title">Jane Smith</h3>
                <p class="card-text">Phone: +1 987-654-3210</p>
                <p class="card-text">Email: jane.smith@example.com</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-white bg-dark">
                <h3 class="card-title">Mike Johnson</h3>
                <p class="card-text">Phone: +1 555-555-5555</p>
                <p class="card-text">Email: mike.johnson@example.com</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card bg-dark text-light">
              <div class="card-body text-white bg-dark">
                <h3 class="card-title">Sarah Brown</h3>
                <p class="card-text">Phone: +1 111-222-3333</p>
                <p class="card-text">Email: sarah.brown@example.com</p>
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