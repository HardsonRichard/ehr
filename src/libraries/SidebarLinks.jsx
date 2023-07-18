import {HiBriefcase, HiClipboard, HiCog, HiDatabase, HiDocument, HiIdentification, HiLogout, HiQuestionMarkCircle, HiUsers, HiViewGrid} from 'react-icons/hi';

export const RECEPTIONIST_SIDEBAR_LINKS = [
    {
        key:"patientRegistration",
        path: "/patientRegistration",
        label: "PATIENT REGISTRATION",
        icon: <HiIdentification />
    },
    {
        key:"receptioinistAppointmentsPage",
        path: "/receptionistApppointmentsPage",
        label: "APPOINTMENTS",
        icon: <HiBriefcase />
    },
    {
        key:"viewAppointments",
        path: "/viewAppointments",
        label: "VIEW APPOINTMENTS",
        icon: <HiBriefcase />
    },
    {
        key:"viewPatientRecord",
        path: "/viewPatientRecord",
        label: "VIEW PATIENT RECORD",
        icon: <HiViewGrid />
    },
    {
        key:"orderedTests",
        path: "/orderedTests",
        label: "ORDERED TESTS",
        icon: <HiClipboard />
    },

    {
        key:"orderedPrescription",
        path: "/orderedPrescription",
        label: "ORDERED PRESCRIPTIONS",
        icon: <HiClipboard />
    },

    {
        key:"users",
        path: "/users",
        label: "USERS",
        icon: <HiUsers />
    },




]


export const DOCTOR_SIDEBAR_LINKS = [
    {
        key:"viewAppointments",
        path: "/viewAppointments",
        label: "VIEW APPOINTMENTS",
        icon: <HiBriefcase />
    },
    {
        key:"viewPatientRecord",
        path: "/viewPatientRecord",
        label: "VIEW PATIENT RECORD",
        icon: <HiViewGrid />
    },

]

export const LABTECH_SIDEBAR_LINKS = [
    {
        key:"orderedTests",
        path: "/orderedTests",
        label: "ORDERED TESTS",
        icon: <HiClipboard />
    },
    {
        key:"addTestResult",
        path: "/addTestResult",
        label: "ADD TEST RESULT",
        icon: <HiDocument />
    },

]

export const PHARMACIST_SIDEBAR_LINKS = [
    {
        key:"orderedPrescription",
        path: "/orderedPrescription",
        label: "ORDERED PRESCRIPTIONS",
        icon: <HiClipboard />
    },
    {
        key:"addMedication",
        path: "/addmedication",
        label: "ADD MEDICATION",
        icon: <HiDocument />
    },

]

export const ADMIN_SIDEBAR_LINKS = [
    {
        key:"users",
        path: "/users",
        label: "USERS",
        icon: <HiUsers />
    },
    {
        key:"eventsLog",
        path: "/eventsLog",
        label: "eventsLog",
        icon: <HiDatabase />
    },

]


export const SIDEBAR_BOTTOM_LINKS = [
    {
        key:"settings",
        path: "/settings",
        label: "Settings",
        icon: <HiCog />
    },
    {
        key:"help and support",
        path: "/helpAndSupport",
        label: "Help & Support",
        icon: <HiQuestionMarkCircle />
    },
    {
        key:"logOut",
        path: "/logOut",
        label: "Log Out",
        icon: <HiLogout />
    },
]