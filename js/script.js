function addIssue() {
  let issueDesc = document.getElementById("issueDescInput").value;
  let issueSeverity = document.getElementById("issueSeverityInput").value;
  let issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  let issueId = chance.guid();
  let issueStatus = "Open";

  //var issuesList = document.getElementById("issuesList").innerHTML;

  let issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    responsible: issueAssignedTo,
    status: issueStatus,
  };

  if (localStorage.getItem("issues") == null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  } else {
    let issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  document.getElementById("issueInputForm").reset();

  console.log("done");

  showIssues();
}

function deleteIssue(id) {
  let issues = JSON.parse(localStorage.getItem("issues"));

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }
  localStorage.setItem("issues", JSON.stringify(issues));

  showIssues();
}

function setStatusClosed(id) {
  let issues = JSON.parse(localStorage.getItem("issues"));

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = "Closed";
    }
  }

  localStorage.setItem("issues", JSON.stringify(issues));

  showIssues();
}

function showIssues() {
  let issues = JSON.parse(localStorage.getItem("issues"));
  let issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = "";

  for (let i = 0; i < issues.length; i++) {
    let issue = issues[i];
    let issueId = issue.id;
    let issueDesc = issue.description;
    let issueSeverity = issue.severity;
    let issueResponsible = issue.responsible;
    let issueStatus = issue.status;

    issuesList.innerHTML +=
      '<div class="issue">' +
      "<h6>Issue ID: " +
      issueId +
      "</h6>" +
      "<h6>Issue desc: " +
      issueDesc +
      "</h6>" +
      "<h6>Issue Severity: " +
      issueSeverity +
      "</h6>" +
      "<h6>Assigned To: " +
      issueResponsible +
      "</h6>" +
      "<h6>Issue Status: " +
      issueStatus +
      "</h6>" +
      "<button type='button' onclick='setStatusClosed(\"" +
      issueId +
      "\")'>Close</button>" +
      "<button type='button' onclick='deleteIssue(\"" +
      issueId +
      "\")'>Delete</button>";
    ("</div>");
  }
}
