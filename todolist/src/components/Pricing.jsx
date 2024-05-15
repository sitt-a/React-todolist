import React from 'react';

function Pricing() {
  return (
    <section className="pricing flex flex-col items-center pb-24">
      <h2 className="pricing-title text-4xl font-bold mt-12">Choose Your Plan</h2> {/* Increased font size and margin */}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-24 py-12"> {/* Increased padding and gap */}
        
      <div className="pricing-column bg-gray-100 rounded-lg shadow-md p-16 text-center"> {/* Increased padding */}
          <h3 className="pricing-column-title text-2xl font-bold mb-6">Free Trail</h3>
          <p className="pricing-column-price text-3xl font-bold mb-8">$0/month</p> {/* Increased font size */}
          <ul className="pricing-column-features list-none space-y-4"> {/* Increased spacing */}
            <li>Unlimited tasks & projects</li>
            <li>All integrations</li>
            <li>Team collaboration</li>
            <li>Priority support</li>
          </ul>
          <button className="pricing-column-button bg-[#a18330] hover:bg-[#8d732a] text-white font-bold py-3 px-6 rounded-md mt-8">Contact Us</button> {/* Increased padding */}
        </div>
        
        <div className="pricing-column bg-white rounded-lg shadow-md p-16 text-center"> {/* Increased padding */}
          <h3 className="pricing-column-title text-2xl font-bold mb-6">Pro Plan</h3>
          <p className="pricing-column-price text-3xl font-bold mb-8">$7/month</p> {/* Increased font size */}
          <ul className="pricing-column-features list-none space-y-4"> {/* Increased spacing */}
            <li>Unlimited tasks</li>
            <li>10 projects</li>
            <li>All integrations</li>
            <li>Team collaboration</li>
          </ul>
          <button className="pricing-column-button bg-[#a18330] hover:bg-[#8d732a] text-white font-bold py-3 px-6 rounded-md mt-8">Get Started</button> {/* Increased padding */}
        </div>

        <div className="pricing-column bg-gray-100 rounded-lg shadow-md p-16 text-center"> {/* Increased padding */}
          <h3 className="pricing-column-title text-2xl font-bold mb-6">Business Plan</h3>
          <p className="pricing-column-price text-3xl font-bold mb-8">$15/month</p> {/* Increased font size */}
          <ul className="pricing-column-features list-none space-y-4"> {/* Increased spacing */}
            <li>Unlimited tasks & projects</li>
            <li>All integrations</li>
            <li>Team collaboration</li>
            <li>Priority support</li>
          </ul>
          <button className="pricing-column-button bg-[#a18330] hover:bg-[#8d732a] text-white font-bold py-3 px-6 rounded-md mt-8">Contact Us</button> {/* Increased padding */}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
