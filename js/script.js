/*----------------------------------------

Description of functions




------------------------------------------*/

/*****************************************
 * Function: addIssue()
 *
 * This function assigns each value from the Issue Form to a variable, and then it creates a dictionary where this variables  are stored as key/value pairs for the Issue that the user is creating.
 *
 * Then it checks wether there is an array named "issues" in local storage, and then it adds the recently created issue to the "issues" array. Finally, it converts the array to a JSON string and sends it to local storage.
 *
 * The function ends with a call to the function "showIssues", so all the issues already created are visible when the page loads or a new issue is created.
 *
 ******************************************/

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

/*****************************************
 * Function: deleteIssue()
 *
 * This function converts the "stringified" array from the local storage and then assigns it to a variable.
 *
 * Then it iterates through the array looking for the ID number that was passed as argument when the function was called. If the id number is found, then the object is deleted by splicing the array.
 *
 * Finally, the new array (without the object deleted) is stringified again and sent to localstorage. The function ends calling the function showIssues().
 *
 ******************************************/

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

/*****************************************
 * Function: setStatusClosed()
 *
 * This function gets the stringified "issues" array, converts it to a JSON object and assigns it to a variable (array named "issues").
 *
 * Then it iterates through the "issues" array, looking for the ID that was passed as an argument. If the id is found, the value for the "status" property is changed to "Closed"
 *
 * Then, the array is stringified again and sent to localStorage
 *
 * Finally it calls the function showIssues.
 *
 ******************************************/
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

/*****************************************
 * Function: showIssues()
 *
 * This function converts the stringified "issues" array from localStorage and converts it into a JSON object and assigns it to an array.
 *
 * Then, it iterates through the "issues" array, and then it changes innerHTML by creating a div for each issue, with all its attributes.
 *
 ******************************************/

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
      '<div class="issue-box">' +
      "<h6>Issue ID: " +
      issueId +
      "</h6><br>" +
      "<p><span class='label label-default'>" +
      issueStatus +
      "</span></p><br>" +
      "<h3>" +
      issueDesc +
      "</h3><br>" +
      "<p><i class='bi bi-clock'> </i>" +
      issueSeverity +
      "</p><br>" +
      "<p><i class='bi bi-person-fill'> </i>" +
      issueResponsible +
      "</p><br>" +
      "<button class='close-button' type='button' onclick='setStatusClosed(\"" +
      issueId +
      "\")'>Close</button>" +
      "<button class='delete-button' type='button' onclick='deleteIssue(\"" +
      issueId +
      "\")'>Delete</button>";
    ("</div>");
  }
}

window.onload = showIssues();
