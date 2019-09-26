import React from "react"
import CompanyProfile from "./CompanyProfile"
import SeekerProfile from "./SeekerProfile"

const Profile = (props) => {
  const fakeState = {isSeeker:false};


  return (
    <div className="Profile">
      {fakeState.isSeeker ? 
      (
        <SeekerProfile />
      ) : 
      
      (

        <CompanyProfile />
      )}
    </div>
  );
}

export default Profile
