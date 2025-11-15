import React from "react";

function ProducerListings() {
  return (
    <div>
        {/* list new waste button */}
        <button className="list-new-waste-button" onClick={''}>
          <i class="fa-solid fa-plus"></i>
          <strong>List New Waste</strong>
        </button>

        <div>
          <div className='listings-heading'>
            <p>My Listings</p>
          </div>

          <div className='producer-listings'>
            <i class="fa-solid fa-cube" style={{ color: 'rgba(128, 128, 128, 0.8)', fontSize: '7rem', padding: '60px 0 0 0' }}></i>
            <p>
              No listings yet
            </p>
            <p>Start listing your waste materials to connect with collectors
            </p>

            <button className="create-first-listing-button" onClick={''}>
              <i class="fa-solid fa-plus"></i>
              <strong>Create Your First Listing</strong>
            </button>

          </div>
        </div>
      </div>
  )
}

export default ProducerListings;