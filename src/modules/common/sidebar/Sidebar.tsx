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
        name: "Dashbaord",
        url: "/create-employee-role",
        key: "key1",
        target: "_blank",
        expandAriaLabel: "Expand Parent link 2",
        collapseAriaLabel: "Collapse Parent link 2",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Student Management",
        url: "/create-employee",
        key: "key2",
        expandAriaLabel: "Expand Parent link 2",
        collapseAriaLabel: "Collapse Parent link 2",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Attendance Management",
        url: "/create-employee",
        key: "key3",
        expandAriaLabel: "Expand Parent link 3",
        collapseAriaLabel: "Collapse Parent link 3",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Exams Management",
        url: "/create-employee",
        key: "key4",
        expandAriaLabel: "Expand Parent link 4",
        collapseAriaLabel: "Collapse Parent link 4",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Fee Management",
        url: "/create-employee",
        key: "key5",
        expandAriaLabel: "Expand Parent link 5",
        collapseAriaLabel: "Collapse Parent link 5",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Transport Management",
        url: "/create-employee",
        key: "key6",
        expandAriaLabel: "Expand Parent link 6",
        collapseAriaLabel: "Collapse Parent link 6",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Employee Management",
        url: "/create-employee",
        key: "key7",
        expandAriaLabel: "Expand Parent link 7",
        collapseAriaLabel: "Collapse Parent link 7",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "User Management",
        url: "/create-employee",
        key: "key8",
        expandAriaLabel: "Expand Parent link 8",
        collapseAriaLabel: "Collapse Parent link 8",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Events Gallery",
        url: "/create-employee",
        key: "key9",
        expandAriaLabel: "Expand Parent link 9",
        collapseAriaLabel: "Collapse Parent link 9",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Reports",
        url: "/create-employee",
        key: "key10",
        expandAriaLabel: "Expand Parent link 10",
        collapseAriaLabel: "Collapse Parent link 10",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Custom Role Permissions",
        url: "/create-employee",
        key: "key11",
        expandAriaLabel: "Expand Parent link 11",
        collapseAriaLabel: "Collapse Parent link 11",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "SMS Integration",
        url: "/create-employee",
        key: "key12",
        expandAriaLabel: "Expand Parent link 12",
        collapseAriaLabel: "Collapse Parent link 12",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Data Management",
        url: "/create-employee",
        key: "key13",
        expandAriaLabel: "Expand Parent link 13",
        collapseAriaLabel: "Collapse Parent link 13",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Email Management",
        url: "/create-employee",
        key: "key14",
        expandAriaLabel: "Expand Parent link 14",
        collapseAriaLabel: "Collapse Parent link 14",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
      {
        name: "Settings",
        url: "/create-employee",
        key: "key15",
        expandAriaLabel: "Expand Parent link 15",
        collapseAriaLabel: "Collapse Parent link 15",
        links: [
          {
            name: "Child link 1",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 2",
            url: "http://example.com",
            target: "_blank",
          },
          {
            name: "Child link 3",
            url: "http://example.com",
            target: "_blank",
          },
        ],
      },
    ],
  },
];

const Sidebar: React.FunctionComponent = () => {

  const navigate = useNavigate();
  
  function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    ev?.preventDefault();
    // console.log(item);
    
    // navigate(item?.url as any);
  }

  return (
    <Nav
      onLinkClick={_onLinkClick}
      styles={navStyles}
      groups={navLinkGroups}
      onLinkExpandClick = {console.log}
    />
  );
};

export default Sidebar;
