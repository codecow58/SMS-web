import * as React from "react";

import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react/lib/Nav";
import { useNavigate } from "react-router-dom";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 300,
    height: "100vh",
    boxSizing: "border-box",
    overflowY: "auto",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Schools Management",
        url: "/create-employee-role",
        key: "key1",
        target: "_blank",
        expandAriaLabel: "Expand School Management",
        collapseAriaLabel: "Collapse School Management",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key1-1",
          },
          {
            name: "Schools",
            url: "http://example.com",
            target: "_blank",
            key: "key1-2",
          },
          {
            name: "Classes",
            url: "http://example.com",
            target: "_blank",
            key: "key1-3",
          },
          {
            name: "Sessions",
            url: "http://example.com",
            target: "_blank",
            key: "key1-4",
          },
        ],
      },
      {
        name: "School Management",
        url: "/create-employee",
        key: "key2",
        expandAriaLabel: "Expand Parent link 2",
        collapseAriaLabel: "Collapse Parent link 2",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key2-1",
          },
          {
            name: "Inquiries",
            url: "http://example.com",
            target: "_blank",
            key: "key2-2",
          },
          {
            name: "Settings",
            url: "http://example.com",
            target: "_blank",
            key: "key2-3",
          },
        ],
      },
      {
        name: "Academic Management",
        url: "/create-employee",
        key: "key3",
        expandAriaLabel: "Expand Parent link 3",
        collapseAriaLabel: "Collapse Parent link 3",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key3-1",
          },
          {
            name: "Class Session",
            url: "http://example.com",
            target: "_blank",
            key: "key3-2",
          },
          {
            name: "Subjects",
            url: "http://example.com",
            target: "_blank",
            key: "key3-3",
          },
          {
            name: "Timetable",
            url: "http://example.com",
            target: "_blank",
            key: "key3-4",
          },
          {
            name: "Attendance",
            url: "http://example.com",
            target: "_blank",
            key: "key3-5",
          },
          {
            name: "Student Leaves",
            url: "http://example.com",
            target: "_blank",
            key: "key3-6",
          },
          {
            name: "Study Materials",
            url: "http://example.com",
            target: "_blank",
            key: "key3-7",
          },
          {
            name: "Study Materials",
            url: "http://example.com",
            target: "_blank",
            key: "key3-8",
          },
          {
            name: "Home Work",
            url: "http://example.com",
            target: "_blank",
            key: "key3-9",
          },
          {
            name: "Noticeboard",
            url: "http://example.com",
            target: "_blank",
            key: "key3-10",
          },
          {
            name: "Noticeboard",
            url: "http://example.com",
            target: "_blank",
            key: "key3-11",
          },
          {
            name: "Events",
            url: "http://example.com",
            target: "_blank",
            key: "key3-12",
          },
        ],
      },
      {
        name: "Student Management",
        url: "/create-employee",
        key: "key4",
        expandAriaLabel: "Expand Parent link 4",
        collapseAriaLabel: "Collapse Parent link 4",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key4-1",
          },
          {
            name: "Admission",
            url: "http://example.com",
            target: "_blank",
            key: "key4-2",
          },
          {
            name: "Students",
            url: "http://example.com",
            target: "_blank",
            key: "key4-3",
          },
          {
            name: "Promote",
            url: "http://example.com",
            target: "_blank",
            key: "key4-4",
          },
          {
            name: "Transfer Student",
            url: "http://example.com",
            target: "_blank",
            key: "key4-5",
          },
          {
            name: "Certificates",
            url: "http://example.com",
            target: "_blank",
            key: "key4-6",
          },
          {
            name: "Notifications",
            url: "http://example.com",
            target: "_blank",
            key: "key4-7",
          },
        ],
      },
      {
        name: "School Administrator",
        url: "/create-employee",
        key: "key5",
        expandAriaLabel: "Expand Parent link 5",
        collapseAriaLabel: "Collapse Parent link 5",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key5-1",
          },
          {
            name: "Admins",
            url: "http://example.com",
            target: "_blank",
            key: "key5-2",
          },
          {
            name: "Roles",
            url: "/school-administrator/roles",
            target: "_blank",
            key: "key5-3",
          },
          {
            name: "Staff list",
            url: "http://example.com",
            target: "_blank",
            key: "key5-4",
          },
          {
            name: "Staff Attendance",
            url: "http://example.com",
            target: "_blank",
            key: "key5-5",
          },
          {
            name: "Staff leaves",
            url: "http://example.com",
            target: "_blank",
            key: "key5-6",
          },
        ],
      },
      {
        name: "School Accounting",
        url: "/create-employee",
        key: "key6",
        expandAriaLabel: "Expand Parent link 6",
        collapseAriaLabel: "Collapse Parent link 6",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key6-1",
          },
          {
            name: "Income",
            url: "http://example.com",
            target: "_blank",
            key: "key6-2",
          },
          {
            name: "Expenses",
            url: "http://example.com",
            target: "_blank",
            key: "key6-3",
          },
          {
            name: "Fee Invoice",
            url: "http://example.com",
            target: "_blank",
            key: "key6-4",
          },
          {
            name: "Fee Type",
            url: "http://example.com",
            target: "_blank",
            key: "key6-5",
          },
        ],
      },
      {
        name: "Exams Management",
        url: "/create-employee",
        key: "key7",
        expandAriaLabel: "Expand Parent link 7",
        collapseAriaLabel: "Collapse Parent link 7",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key7-1",
          },
          {
            name: "Manage Exams",
            url: "http://example.com",
            target: "_blank",
            key: "key7-2",
          },
          {
            name: "Admit Cards",
            url: "http://example.com",
            target: "_blank",
            key: "key7-3",
          },
          {
            name: "Exam Results",
            url: "http://example.com",
            target: "_blank",
            key: "key7-4",
          },
          {
            name: "Results Assessment",
            url: "http://example.com",
            target: "_blank",
            key: "key7-5",
          },
        ],
      },
      {
        name: "Library Management",
        url: "/create-employee",
        key: "key8",
        expandAriaLabel: "Expand Parent link 8",
        collapseAriaLabel: "Collapse Parent link 8",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key8-1",
          },
          {
            name: "All Books",
            url: "http://example.com",
            target: "_blank",
            key: "key8-2",
          },
          {
            name: "Books Issued",
            url: "http://example.com",
            target: "_blank",
            key: "key8-3",
          },
          {
            name: "Library Cards",
            url: "http://example.com",
            target: "_blank",
            key: "key8-4",
          },
        ],
      },
      {
        name: "Transport Management",
        url: "/create-employee",
        key: "key9",
        expandAriaLabel: "Expand Parent link 9",
        collapseAriaLabel: "Collapse Parent link 9",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key9-1",
          },
          {
            name: "Vehicles",
            url: "http://example.com",
            target: "_blank",
            key: "key9-2",
          },
          {
            name: "Routes",
            url: "http://example.com",
            target: "_blank",
            key: "key9-3",
          },
          {
            name: "Reports",
            url: "http://example.com",
            target: "_blank",
            key: "key9-4",
          },
        ],
      },
      {
        name: "Hostel Management",
        url: "/create-employee",
        key: "key10",
        expandAriaLabel: "Expand Parent link 10",
        collapseAriaLabel: "Collapse Parent link 10",
        links: [
          {
            name: "Dashboard",
            url: "http://example.com",
            target: "_blank",
            key: "key10-1",
          },
          {
            name: "Hostels",
            url: "http://example.com",
            target: "_blank",
            key: "key10-2",
          },
          {
            name: "Rooms",
            url: "http://example.com",
            target: "_blank",
            key: "key10-3",
          },
        ],
      },

      {
        name: "Settings",
        url: "/create-employee",
        key: "key11",
      },
    ],
  },
];

const Sidebar: React.FunctionComponent = () => {

  const navigate = useNavigate();
  
  function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    ev?.preventDefault();
    // console.log(item);
    
    navigate(item?.url as any);
  }

  return (
    <Nav
      onLinkClick={_onLinkClick}
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

export default Sidebar;
