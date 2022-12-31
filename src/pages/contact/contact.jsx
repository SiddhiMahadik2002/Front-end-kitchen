import React from "react";
export const Contact=()=>{
    return(
        <div className="contactpage">
            <div className="leftcontact">
                <p>Contact Me</p>
                <h1>How can I help you?</h1>
                <p>Fill in the form or drop an email</p>
                <div>
                    <div className="email">
                    <ion-icon name="mail-outline"></ion-icon>
                    <p><a href="mailto:siddhimahadik257@gmail.com">siddhimahadik257@gmail.com</a></p>
                    </div>
                    <div className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <p><a href="https://instagram.com/siiddhi._25">Siddhi Mahadik</a></p>
                    </div>
                </div>
            </div>
            <div className="rightcontact">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="email" placeholder="Phone number" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send Message</button>
            </div>
        </div>
    )
}