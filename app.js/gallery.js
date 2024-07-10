import React from 'react';
import Profile from './profile';

const Gallery = ({ members }) => {
  return (
    <div>
      <Header title="Team Members" />
      <div className="gallery">
        {members.map(member => (
          <Profile name={member.name} role={member.role} photo={member.photo} />
        ))}
      </div>
    </div>
  );
};
export default Gallery