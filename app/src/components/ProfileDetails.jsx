import { Card, Container, Row, Col, Dropdown } from "react-bootstrap";
import '../css/profileDetails.css'
import { useRef, useState } from "react";
function ProfileDetails(props) {
  const {selectedOption,user} = props
  let detailsComponent = null;
  const imageRef = useRef(null);

  const uploadPhoto = () => {
    console.log(imageRef)
  };

  switch (selectedOption) {
    case 'profile':
      detailsComponent = (
        <Container className="profile-details-container">
          {/*<h2>{selectedOption}</h2>*/}
          <Row>
            <Col md={7}>
              <div className="profile-details-user">
                <h5>Username: {user?.name}</h5>
                <h5>Email: {user?.email}</h5>
              </div>
            </Col>
            <Col md={5}>
                <img
                  className="profile-details-image"
                  src={user?.icon}
                  alt={user?.icon}
                  ref={imageRef}
                ></img>
                  <Dropdown className="profile-details-dropdown">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        Upload Photo
                      </Dropdown.Item>
                      <Dropdown.Item>
                        Remove Photo
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
            </Col>
          </Row>
        </Container>
      );
      break;
    case 'settings':
      detailsComponent = <div>Settings Details</div>;
      break;
    case 'permissions':
      detailsComponent = <div>Permissions Details</div>;
      break;
    default:
      break;
  }

  return (
    <Card bg="dark" variant="dark">
      <Card.Body>{detailsComponent}</Card.Body>
    </Card>
  );
}

export default ProfileDetails;
