import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { withRouter } from "react-router-dom";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import cityConfig from "../config/CityConfig.js";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const columns = [
  {
    title: "Reviewed? (Click to mark as done)",
    defaultSortOrder: "asc",
    render: (rowData, t) => {
      let reviewed = rowData.labels.some((label) => label.name === "reviewed");

      if (reviewed) {
        return (
          <button type="button" className="btn btn-success">
            Reviewed
          </button>
        );
      } else {
        return (
          <button type="button" className="btn btn-danger">
            To Review
          </button>
        );
      }
    },
  },
  { title: "Title", field: "title" },
  {
    title: "Student",
    field: "user.login",
    render: (rowData) => {
      return <a href={rowData.user.html_url}>{rowData.user.login}</a>;
    },
  },
  {
    title: "School",
    render: (rowData) => {
      let schoolName = "unknown";

      cityConfig.forEach((location) => {
        if (location.students.includes(rowData.user.login)) {
          schoolName = location.name;
        }
      });

      return schoolName.toString();
    },
  },
  {
    title: "Submitted",
    field: "created_at",
    defaultSort: "asc",
    render: (rowData) => {
      return dateToString(new Date(rowData.created_at));
    },
  },
  {
    title: "Homework Module",
    field: "base.repo.name",
    render: (rowData) => {
      return <a href={rowData.base.repo.html_url}>{rowData.base.repo.name}</a>;
    },
  },
  {
    render: (rowData) => {
      return (
        <a
          className="btn btn-outline-primary"
          href={"https://www.gitpod.io/#" + rowData.html_url}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      );
    },
  },
  {
    render: (rowData) => {
      return (
        <a
          className="btn btn-outline-secondary"
          href={rowData.html_url}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Pull Request
        </a>
      );
    },
  },
];

const options = {
  pageSize: 20,
  defaultExpanded: true,
};

function dateToString(a) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  return (
    date +
    " " +
    month +
    " " +
    year +
    " " +
    formatTime(hour) +
    ":" +
    formatTime(min)
  );
}

function formatTime(num) {
  return ("0" + num).slice(-2);
}

class HomeworkTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columns,
      options: options,
    };
  }

  componentWillReceiveProps() {}

  render() {
    return (
      <MaterialTable
        icons={tableIcons}
        columns={this.state.columns}
        data={this.props.data}
        title=""
        isLoading={this.props.isLoading}
        options={this.state.options}
      />
    );
  }
}

export default withRouter(HomeworkTable);
