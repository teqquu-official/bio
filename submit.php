<?php
// Get user's name and bio from the web form
$name = $_POST['name'];
$bio = $_POST['bio'];

// Generate a unique ID for the user's bio link
$id = uniqid();

// Create the bio link using the user's name and ID
$biolink = "teqquu.com/" . $name . $id;

// Store the bio link and user's information in the database
// ...

// Generate HTML for the user's bio page
$html = "<html><head><title>$name's Bio</title></head><body><h1>$name</h1><p>$bio</p></body></html>";

// Create a new file for the user's bio page
$filename = "bio/$id.html";
$file = fopen($filename, 'w');
fwrite($file, $html);
fclose($file);

// Display the user's bio link on the web page
echo "Your custom bio link is: " . $biolink;
?>
