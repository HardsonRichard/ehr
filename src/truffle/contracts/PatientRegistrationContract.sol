// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract PatientRegistrationContract {
    struct Patient {
        string firstName;
        string middleName;
        string lastName;
        string dob;
        string gender;
        string nationality;
        string education;
        string tribe;
        string maritalStatus;
        string region;
        string residence;
    }

    mapping(address => Patient) private patients;

    function registerPatient(
        string memory _firstName,
        string memory _middleName,
        string memory _lastName,
        string memory _dob,
        string memory _gender,
        string memory _nationality,
        string memory _education,
        string memory _tribe,
        string memory _maritalStatus,
        string memory _region,
        string memory _residence
    ) public {
        Patient memory newPatient = Patient(
            _firstName,
            _middleName,
            _lastName,
            _dob,
            _gender,
            _nationality,
            _education,
            _tribe,
            _maritalStatus,
            _region,
            _residence
        );

        patients[msg.sender] = newPatient;
    }

    function getPatient() public view returns (Patient memory) {
        return patients[msg.sender];
    }
}
