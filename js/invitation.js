// JavaScript to handle the invitation form

// Attach form submission handler
document.getElementById("invitation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page refresh

    // Variable for recipient name
    let myRecipientName;
    myRecipientName = document.getElementById("recipient-input").value;

    // Variable for host name (ADDED)
    let myHostName;
    myHostName = document.getElementById("host-input").value;

    // Log both values to console (ADDED)
    console.log("Variable myRecipientName: " + myRecipientName);
    console.log("Variable myHostName: " + myHostName);

    // Insert values into placeholders
    document.getElementById("recipient-placeholder").innerHTML = myRecipientName;
    document.getElementById("host-placeholder").innerHTML = myHostName;
});
