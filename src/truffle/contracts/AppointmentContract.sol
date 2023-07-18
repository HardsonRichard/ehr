// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract AppointmentContract {
    struct Appointment {
        uint256 id;
        string doctor;
        string time;
    }

    Appointment[] public appointments;

    function addAppointment(string memory _doctor, string memory  _time) external {
        uint256 appointmentId = appointments.length + 1;
        Appointment memory newAppointment = Appointment(appointmentId, _doctor, _time);
        appointments.push(newAppointment);
    }

    function getAppointments() external view returns (Appointment[] memory) {
        return appointments;
    }
}
