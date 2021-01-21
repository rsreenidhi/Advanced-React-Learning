import React from "react";
import ReactDOM from "react-dom";
import ComponentDetails from "./componentDetails";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ComponentDetails
          author="Sam"
          timeAgo="Today at 4:30PM"
          comment="Nice Blog Post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetails
          author="Ram"
          timeAgo="Today at 5:30AM"
          comment="Cool blog this one"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetails
          author="Bheem"
          timeAgo="Yesterday at 4:30PM"
          comment="This is a great one"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
