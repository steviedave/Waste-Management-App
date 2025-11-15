import React from "react";

function ConsumerListingStats() {
  return (
    <div className='listing-stats'>
      <div className='listing-blocks'>
        <div style={{ backgroundColor: "#D0FAE5" }} className='icon-box'>
          <i class="fa-solid fa-location-crosshairs"></i>
        </div>

        <div className='text-section'>
          <p className='title'>Available</p>
          <p className='value'>0</p>
        </div>
      </div>


      <div className='listing-blocks'>
        <div style={{ backgroundColor: "#DBEAFE" }} className='icon-box'>
          <i class="fa-solid fa-cube"></i>
        </div>

        <div className='text-section'>
          <p className='title'>Claimed</p>
          <p className='value'>0</p>
        </div>
      </div>


      <div className='listing-blocks'>
        <div style={{ backgroundColor: "#FEF3C6" }} className='icon-box'>
          <i class="fa-regular fa-clock"></i>
        </div>

        <div className='text-section'>
          <p className='title'>Pending</p>
          <p className='value'>0</p>
        </div>
      </div>


      <div className='listing-blocks'>
        <div style={{ backgroundColor: "#DCFCE7" }} className='icon-box'>
          <i class="fa-regular fa-circle-check"></i>
        </div>

        <div className='text-section'>
          <p className='title'>Completed</p>
          <p className='value'>0</p>
        </div>
      </div>
    </div>
  )
}

export default ConsumerListingStats;