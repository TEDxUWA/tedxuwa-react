import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Subscribing:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h3 className="font-weight-bold mb-3">Stay in the loop</h3>
            <p className="lead mb-4">
              Join our mailing list to receive the latest updates on upcoming events, 
              speaker announcements, and exclusive TEDxUWA content.
            </p>
            {submitted ? (
              <div className="alert alert-success" role="alert">
                Thanks for subscribing! Please check your email to confirm your subscription.
              </div>
            ) : (
              <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                <div className="form-group mb-2 mr-2 w-50">
                  <input 
                    type="email" 
                    className="form-control w-100" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
              </form>
            )}
            <small className="text-muted mt-2 d-block">
              We respect your privacy. Unsubscribe at any time.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
