import { Card, Container, Row, Col, Dropdown } from "react-bootstrap";
import '../css/profileDetails.css'
import { useEffect, useRef, useState } from "react";
function ProfileDetails(props) {
  const {selectedOption,user} = props
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  let detailsComponent = null;

  useEffect(()=>{
    setImage(localStorage.getItem("user-prof")??"")
  },[image])
  const updateUserProfilePic = async (img)=>{
    localStorage.removeItem('user-prof')
    localStorage.setItem("user-prof",img)
    localStorage.removeItem('userData')
    user.profileImage = img
    localStorage.setItem("userData",JSON.stringify({user}))
  }
  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleInputChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      setImage(reader.result);
      await updateUserProfilePic(reader.result)
    };
    reader.readAsDataURL(file);
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
                  src={image || user?.icon}
                  alt={user?.icon}
                ></img>
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleInputChange}
                />
                  <Dropdown className="profile-details-dropdown">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleUploadClick}>
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
