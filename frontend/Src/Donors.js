import React from 'react';
import './Donors.css';

const donors = [
  { name: 'John Doe', bloodType: 'A+', location: 'New York', lastDonation: 'July 20, 2023' },
  { name: 'Mark Smith', bloodType: 'O−', location: 'Los Angeles', lastDonation: 'June 18, 2023' },
  { name: 'Sarah Brown', bloodType: 'B+', location: 'Chicago', lastDonation: 'August 5, 2023' },
  { name: 'Emily White', bloodType: 'AB−', location: 'Houston', lastDonation: 'May 30, 2023' },
];

const Donors = () => {
  return (
    <div className="donors-container">
      <h2 className="donors-heading">View Donors</h2>
      <table className="donors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Location</th>
            <th>Last Donation</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.bloodType}</td>
              <td>{donor.location}</td>
              <td>{donor.lastDonation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default Donors;
