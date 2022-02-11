function addIssue() {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueSeverity = document.getElementById("issueSeverityInput").value;
  var issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  var issueId = chance.guid();

  //var issuesList = document.getElementById("issuesList").innerHTML;

  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    responsible: issueAssignedTo,
  };

  if (localStorage.getItem("issues") == null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  document.getElementById("issueInputForm").reset();

  showIssues();
}

function setStatusClosed(id) {
  var issues = JSON.parse(localstorage.getItem("issues"));

  for (var i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = "Closed";
    }
  }

  localStorage.setItem("issues", JSON.stringify(issues));

  showIssues();
}

function showIssues() {
  var issues = JSON.parse(localStorage.getItem("issues"));
  var issuesList = document.getElementById("issuesList");

  issuesList.innerHTML = "";

  for (var i = 0; i < issues.length; i++) {
    var issue = issues[i];
    var issueId = issue.id;
    var issueDesc = issue.description;
    var issueSeverity = issue.severity;
    var issueResponsible = issue.responsible;

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
      "</h6></div>";
  }
}
