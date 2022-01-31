function addIssue() {
  var issueDesc = document.getElementById("issueDescInput").value;
  var issueId = chance.guid();

  var issuesList = document.getElementById("issuesList").innerHTML;

  var issue = {
    id: issueId,
    description: issueDesc,
  };

  localStorage.setItem("issue", JSON.stringify(issue));

  console.log(issue);

  localStorage.setItem("test", 1);

  alert(localStorage.getItem("test"));

  /*
  issuesList.innerHTML +=
    '<div class="issue">' +
    "<h6>Issue ID: " +
    issueId +
    "perro" +
    "</h6>" +
    "<h6>Issue desc: " +
    issueDesc +
    "</h6></div>";*/
}

//localStorage.setItem("test", 1);

//alert(localStorage("test"));
