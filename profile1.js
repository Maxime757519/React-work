import React from 'react';

// Sub-components
const ProfilePicture = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
);

const ProfileName = ({ name }) => <h2>{name}</h2>;

const ProfileBio = ({ bio }) => <p>{bio}</p>;

// Main Profile Component
const Myprofile = ({ name, src, alt, bio }) => {
  return (
    <div style={{ border: '10px solid #ddd', padding: '20px', borderRadius: '10px', textAlign: 'center', width: '250px', }}>
      <ProfilePicture src={src} alt={alt} />
      <ProfileName name={name} />
      <ProfileBio bio={bio} />
    </div>
  );
};

export default Myprofile;
