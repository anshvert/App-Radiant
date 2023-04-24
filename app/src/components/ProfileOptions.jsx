import { ListGroup } from 'react-bootstrap';

function ProfileOptions(props) {
  const { selectedOption, handleOptionChange } = props;

  return (
    <ListGroup>
      <ListGroup.Item
        active={selectedOption === 'profile'}
        onClick={() => handleOptionChange('profile')}
      >
        Profile
      </ListGroup.Item>
      <ListGroup.Item
        active={selectedOption === 'settings'}
        onClick={() => handleOptionChange('settings')}
      >
        Settings
      </ListGroup.Item>
      <ListGroup.Item
        active={selectedOption === 'permissions'}
        onClick={() => handleOptionChange('permissions')}
      >
        Permissions
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProfileOptions;
