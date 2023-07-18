pragma solidity ^0.8.0;

contract UserManagement {
    enum Role { Receptionist, Doctor, LaboratoryTechnician, Pharmacist, Admin }

    struct User {
        bytes32 name;
        bytes32 email;
        Role role;
        uint256 createdAt;
    }

    mapping(address => User) private users;

    event UserCreated(address indexed _address, bytes32 _name, bytes32 _email, Role _role, uint256 _created_at);
    event UserDeleted(address indexed _address);
    event UserUpdated(address indexed _address, bytes32 _name, bytes32 _email, Role _role);

    modifier onlyExistingUser() {
        require(users[msg.sender].createdAt > 0, "User does not exist");
        _;
    }

    modifier onlyValidName(bytes32 name) {
        require(name != "", "Invalid name");
        _;
    }

    modifier onlyValidEmail(bytes32 email) {
        require(email != "", "Invalid email");
        _;
    }

    modifier onlyValidRole(Role role) {
        require(role >= Role.Receptionist && role <= Role.Admin, "Invalid role");
        _;
    }

    function destroy() public onlyExistingUser {
        delete users[msg.sender];
        emit UserDeleted(msg.sender);
    }

    function login(bytes32 email) public view returns (bytes32, Role) {
        require(users[msg.sender].email == email, "Invalid email");
        return (users[msg.sender].name, users[msg.sender].role);
    }

    function signup(bytes32 name, bytes32 email, Role role) public payable onlyValidName(name) onlyValidEmail(email) onlyValidRole(role) returns (bytes32) {
        require(users[msg.sender].createdAt == 0, "User already exists");
        
        users[msg.sender] = User({
            name: name,
            email: email,
            role: role,
            createdAt: block.timestamp
        });
        
        emit UserCreated(msg.sender, name, email, role, block.timestamp);
        
        return name;
    }

    function getUserRole(address userAddress) public view returns (Role) {
        return users[userAddress].role;
    }
}

