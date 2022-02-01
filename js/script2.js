function addIssue() {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueId = chance.guid();

  var issuesList = document.getElementById("issuesList").innerHTML;

  var issue = {
    id: issueId,
    description: issueDesc,
  };

  localStorage.setItem("issue", JSON.stringify(issue));

  console.log(issueId);
  console.log(issueDesc);

  //localStorage.setItem("test", 1);

  //alert(localStorage.getItem("test"));

  document.getElementById("issuesList").innerHTML +=
    '<div class="issue">' +
    "<h6>Issue ID: " +
    issueId +
    "</h6>" +
    "<h6>Issue desc: " +
    issueDesc +
    "</h6></div>";

  //e.preventDefault();
}

//localStorage.setItem("test", 1);

//alert(localStorage("test"));
