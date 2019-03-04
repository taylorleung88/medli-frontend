import React, { Component } from 'react';

class Contact extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12">
                        <form>
                            <label for="name">Name:</label>
                            <input type="text" name="name"/>
                            <label for="email">E-mail Address:</label>
                            <input type="email" name="email"/>
                            <label for="message">Message</label>
                            <textarea name="message">Enter your message here</textarea>
                            <button type="submit" name="send">Send Message</button>

                        </form>
                    </div>
                </div>
            </div>

        )}
}

export default Contact;