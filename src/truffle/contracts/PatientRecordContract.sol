// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

import "./UserContract.sol";

contract PatientContract is UserContract {
    //a state variable for patientIDs
    uint256 private patientID;

    //a state variable that stores an instance of the UserContract
    UserContract public userContract;

    //a state variable for appointments
    uint256 appointmentID;

    ////////////STATE VARIABLES END //////////////////

    //////////ARRAYS END ////////////////////////////

    constructor(address UserContractAddress) {
        patientID = 1; //initializes the patientID to 1;
        appointmentID = 1; //initializes appointmentID to 1
        userContract = UserContract(UserContractAddress); //initialize the user contract constructor
    }

    //////////// CONSTRUCTOR END /////////////////////////

    //an address of a patient
    address private patientAddress;

    //an address to map patient insurances
    address private PatientInsuranceAddress;

    ///////////////ADDRESSES END////////////////

    //mapping for all patients
    mapping(address => Patient) private patients;

    //mapping for all patient demographics
    mapping(address => PatientDemographics) private patientDemographics;

    //mapping for patient insurances
    mapping(address => PatientInsurance) private patientInsurances;

    //mapping for patient records
    mapping(address => PatientRecord) private patientRecords;

    //mapping for patient record report
    mapping(address => Report) private reports;

    //mapping for appointments
    mapping(uint => Appointment) private appointments;

    ////////////////////MAPPINGS END///////////////////////////////////

    //event to show new patient has been added
    event PatientAdded(uint _patientID, string[3] _patientName);

    //an event to show patient demographics has been added
    event PatientDemographicsAdded(uint _patientID, uint _phoneNumber);

    //an event to show patient insurance has been added
    event PatientInsuranceAdded(
        string _insuranceName,
        uint _insuranceCardNumber
    );

    //an event to show a new patient record has been added
    event PatientRecordAdded(uint _patientID);

    //an event to show that a patient record report is been added
    event RecordReportAdded(uint _patientID, uint appointmentID);

    //////////////// EVENTS END//////////////////////////////////////

    //struct for patient basic info
    struct Patient {
        uint patientID;
        string[3] patientName;
        uint dob;
    }

    //struct for patient demographics
    struct PatientDemographics {
        uint patientID;
        string gender;
        uint phoneNumber;
        string educationLevel;
        string country;
        string religion;
        string tribe;
        string maritalStatus;
        string region;
        string occupation;
        string residence;
    }

    //struct for patient insurances
    struct PatientInsurance {
        uint patientID;
        string insuranceName;
        uint insuranceCardNumber;
        bool insuranceCardStatus;
    }

    //struct for diagnosis
    struct Diagnosis {
        string code;
        string name;
    }

    //struct for prescription
    struct Prescription {
        string medicationName; // medication name using RxNorm
        uint[3] dosage; // dosage amount, unit, and frequency
        uint duration; // duration of prescription in days
        uint datePrescribed; // timestamp of when prescription was created
        bool isFilled; // whether or not the prescription has been filled
    }

    //struct for report
    struct Report {
        uint appointmentID;
        string[] symptoms;
        Diagnosis diagnosis;
        Prescription prescription;
    }

    //struct that defines a new patient record
    struct PatientRecord {
        uint patientID;
        uint appointmentID;
        string[] symptoms;
        Diagnosis diagnosis;
        bool test;
        Prescription prescription;
        bool medication;
    }

    //struct for appointments
    struct Appointment {
        uint appointmentID;
        uint patientID;
        uint doctorID;
    }

    ///////////////// STRUCTS END /////////////////////////////////////

    //a modifier to check if the appointment exists
    modifier doesAppointmentExist(uint _appointmentID) {
        require(
            appointments[_appointmentID].appointmentID == _appointmentID,
            "Appointment does not exist"
        );
        _;
    }

    //a modifier to check if patient id exists
    modifier doesPatientExist(uint _patientID) {
        require(_patientID <= patientID, "Patient does not exist");
        _;
    }

    // a modifier to check if the patients' demographics is already filled or not
    modifier patientDemographicsFilled(uint _patientID) {
        generatePatientAddress(_patientID);
        require(
            patientDemographics[patientAddress].patientID != 0,
            "Patient demographics Filled"
        );
        _;
    }

    // a modifier to check if the patients' demographics is already filled or not
    modifier patientInsuranceFilled(uint _patientID) {
        generatePatientAddress(_patientID);
        require(
            patientInsurances[patientAddress].patientID != 0,
            "Patient insurance Filled"
        );
        _;
    }

    ///////////// MODIFIERS END /////////////////////////////////

    //function to add new patient
    function addPatient(
        string[3] memory _patientName,
        uint _dob
    ) public onlyReceptionists {
        generatePatientAddress(patientID);
        Patient memory patient = Patient({
            patientID: patientID,
            patientName: _patientName,
            dob: _dob
        });

        patients[patientAddress] = patient;

        patientID++;

        emit PatientAdded(patientID, _patientName);
    }

    //function to get patient basic info
    function getPatient(
        uint _patientID
    ) public onlyReceptionists returns (Patient memory) {
        generatePatientAddress(_patientID);

        Patient memory patient = patients[patientAddress];

        return patient;
    }

    //function to add patient demographics
    function addPatientDemographics(
        uint _patientID,
        string memory _gender,
        uint _phoneNumber,
        string memory _educationLevel,
        string memory _country,
        string memory _religion,
        string memory _tribe,
        string memory _maritalStatus,
        string memory _region,
        string memory _occupation,
        string memory _residence
    )
        public
        doesPatientExist(_patientID)
        patientDemographicsFilled(_patientID)
        onlyReceptionists
    {
        generatePatientAddress(_patientID);
        PatientDemographics memory patientDemographic = PatientDemographics({
            patientID: _patientID,
            gender: _gender,
            phoneNumber: _phoneNumber,
            educationLevel: _educationLevel,
            country: _country,
            religion: _religion,
            tribe: _tribe,
            maritalStatus: _maritalStatus,
            region: _region,
            occupation: _occupation,
            residence: _residence
        });

        patientDemographics[patientAddress] = patientDemographic;

        emit PatientDemographicsAdded(_patientID, _phoneNumber);
    }

    //function to get patient demographics from its mapping
    function getPatientDemographics(
        uint _patientID
    )
        public
        doesPatientExist(_patientID)
        onlyReceptionists
        returns (PatientDemographics memory)
    {
        generatePatientAddress(_patientID);

        return patientDemographics[patientAddress];
    }

    //function to add patient insurance
    function addPatientInsurance(
        uint _patientID,
        string memory _insuranceName,
        uint _insuranceCardNumber,
        bool _insuranceCardStatus
    )
        public
        doesPatientExist(_patientID)
        patientInsuranceFilled(_patientID)
        onlyReceptionists
    {
        generatePatientAddress(_insuranceCardNumber);
        PatientInsurance memory patientInsurance = PatientInsurance({
            patientID: _patientID,
            insuranceName: _insuranceName,
            insuranceCardNumber: _insuranceCardNumber,
            insuranceCardStatus: _insuranceCardStatus
        });

        patientInsurances[PatientInsuranceAddress] = patientInsurance;

        emit PatientInsuranceAdded(_insuranceName, _insuranceCardNumber);
    }

    //function to get patient health insurance
    function getPatientInsurance(
        uint _patientID
    ) public onlyReceptionists returns (PatientInsurance memory) {
        generatePatientAddress(_patientID);

        return patientInsurances[patientAddress];
    }

    //function to automatically generate patient address
    function generatePatientAddress(uint _patientID) public {
        bytes32 patientIDHash = keccak256(abi.encodePacked(_patientID));
        patientAddress = address(bytes20(patientIDHash));
    }

    //function to generate an appointment
    function addAppointment(
        uint _doctorID,
        uint _patientID
    ) public onlyReceptionists {
        Appointment memory appointment = Appointment({
            appointmentID: appointmentID,
            doctorID: _doctorID,
            patientID: _patientID
        });

        appointments[appointmentID] = appointment;
    }

    //function to view appointment
    function viewAppointment(
        uint _appointmentID
    ) public view onlyDoctors returns (Appointment memory) {
        return appointments[_appointmentID];
    }

    //function to add a new patient record
    function addPatientRecord(
        uint _patientID,
        uint _appointmentID,
        string[] memory _symptoms,
        Diagnosis memory _diagnosis,
        bool _test,
        Prescription memory _prescription,
        bool _medication
    )
        public
        doesAppointmentExist(_patientID)
        doesPatientExist(_patientID)
        onlyDoctors
    {
        generatePatientAddress(_appointmentID);
        patientRecords[patientAddress] = PatientRecord({
            patientID: _patientID,
            appointmentID: _appointmentID,
            symptoms: _symptoms,
            diagnosis: _diagnosis,
            test: _test,
            prescription: _prescription,
            medication: _medication
        });

        emit PatientRecordAdded(_patientID);

        generateReport(
            _patientID,
            _appointmentID,
            _symptoms,
            _diagnosis,
            _prescription
        );

        emit RecordReportAdded(_patientID, _appointmentID);
    }

    //function to get a patient record from the mapping
    function getPatientRecord(
        uint _appointmentID
    ) public onlyDoctors returns (PatientRecord memory) {
        generatePatientAddress(_appointmentID);
        return patientRecords[patientAddress];
    }

    //function to automatically generate patient record report
    function generateReport(
        uint _patientID,
        uint _appointmentID,
        string[] memory _symptoms,
        Diagnosis memory _diagnosis,
        Prescription memory _prescription
    ) public {
        Report memory report = Report({
            appointmentID: _appointmentID,
            symptoms: _symptoms,
            diagnosis: _diagnosis,
            prescription: _prescription
        });

        generatePatientAddress(_patientID);

        reports[patientAddress] = report;
    }

    //function to get patient record report from the mapping
    function getReport(
        uint _patientID
    ) public onlyDoctors returns (Report memory) {
        generatePatientAddress(_patientID);

        return reports[patientAddress];
    }

    ////////////////////////FUNCTIONS END /////////////////////////////////
}