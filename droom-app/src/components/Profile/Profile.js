import React from "react"
import CompanyProfile from "./CompanyProfile"
import SeekerProfile from "./SeekerProfile"

const Profile = () => {
  const fakeState = {isSeeker:true};


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
