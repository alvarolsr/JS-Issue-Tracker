function saveIssue() {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueId = chance.guid();

  var issue = {
    id: issueId,
    description: issueDesc,
  };

  var issuesList = document.getElementById("issuesList");

  issuesList.innerHTML +=
    '<div class="issue">' +
    "<h6>Issue ID: " +
    issue[id] +
    "perro" +
    "</h6>" +
    "<h6>Issue desc: " +
    issue[desc] +
    "</h6></div>";
}

function addIssue() {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueId = chance.guid();

  var issue = {
    id: issueId,
    description: issueDesc,
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
  // added
  console.log(issues);

  document.getElementById("issueInputForm").reset();

  /*showIssues();*/

  e.preventDefault();
  /*issuesList.innerHTML +=
    '<div class="issue">' + "<h6>Issue desc: " + issue + "</h6>" + "</div>";*/
}

function showIssues() {
  var issues = JSON.parse(localStorage.getItem("issues"));
  var issuesList = document.getElementById("issuesList");

  console.log(issues);

  issuesList.innerHTML = "";

  for (var i = 0; i < issues.length; i++) {
    var id = issues[i].id;
    var desc = issues[i].description;

    issuesList.innerHTML +=
      '<div class="issue">' +
      "<h6>Issue ID: ${id} </h6>" +
      "<h6>Issue desc: ${desc} </h6></div>";
  }
}
