import { atom } from "recoil";

export const featureState = atom({
  key: "featureState",
  default: [
    {
      name: "Dashbaord",
      iconName: "DefenderTVM",
      link: "/dashboard",
    },

    {
      name: "Student Management",
      iconName: "AddGroup",
      link: "/student-management",
    },

    {
      name: "Attendance Management",
      iconName: "EntitlementRedemption",
      link: "/attendance-management",
    },
    {
      name: "Exams Management",
      iconName: "ComplianceAudit",
      link: "/exams-management",
    },
    {
      name: "Fee Management",
      iconName: "Script",
      link: "/fee-management",
    },
    {
      name: "Transport Management",
      iconName: "DeliveryTruck",
      link: "/transport-management",
    },
    {
      name: "Employee Management",
      iconName: "SchoolDataSyncLogo",
      link: "/employee-management",
    },
    {
      name: "User Management",
      iconName: "People",
      link: "/user-management",
    },
    {
      name: "Events Gallery",
      iconName: "InternalInvestigation",
      link: "/events-gallery",
    },
    {
      name: "Reports",
      iconName: "EntitlementPolicy",
      link: "/reports",
    },
    {
      name: "Custom Role Permissions",
      iconName: "ReminderPerson",
      link: "/custom-role-permissions",
    },
    {
      name: "SMS Integration",
      iconName: "Message",
      link: "/sms-management",
    },
    {
      name: "Data Management",
      iconName: "DataManagementSettings",
      link: "/data-management",
    },
    {
      name: "Email Management ",
      iconName: "MailOptions",
      link: "/email-management",
    },
    {
      name: "Settings",
      iconName: "Settings",
      link: "/settings",
    },
  ],
});

export const userState = atom({
  key: "userState",
  default: null,
});
