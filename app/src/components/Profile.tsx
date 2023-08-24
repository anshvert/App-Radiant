import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileDetails from "./ProfileDetails";
import ProfileOptions from "./ProfileOptions";
function Profile(props) {
  const { user } = props;
  const [selectedOption, setSelectedOption] = useState("profile");
  const handleOptionChange = option => {
    setSelectedOption(option);
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3} color="dark">
          <ProfileOptions
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
        </Col>
        <Col md={9}>
          <ProfileDetails selectedOption={selectedOption} user={user} />
        </Col>
      </Row>
    </Container>
  );
}
export default Profile;
