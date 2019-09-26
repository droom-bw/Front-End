import React from "react"
import { connect } from "react-redux"
import CompanyProfile from "./CompanyProfile"
import SeekerProfile from "./SeekerProfile"

const Profile = props => {
  return (
    <div className="Profile">
      {props.user.type === "seeker" ? <SeekerProfile /> : <CompanyProfile />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {}
)(Profile)
