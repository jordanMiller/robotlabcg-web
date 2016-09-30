<?php
header('Content-Type: application/json');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(isset($_POST)) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "jordan@robotlabcg.com";
 
    $email_subject = "Email List Signup";
 
   
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    $email = $_POST['email'];
 
    $email_from = $_POST['email'];
 
    $email_message = "Please add the below email to contact list.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Email Address: ".clean_string($email)."\n";
 
     
 
     
 
    // create email headers
 
    $headers = 'From: '.$email_from."\r\n".
 
    'Reply-To: '.$email_from."\r\n" .
 
    'X-Mailer: PHP/' . phpversion();
 
    /*----
    Un-comment to enable email sending
    ----*/
    // mail($email_to, $email_subject, $email_message, $headers); 
  
?>
{ 

"success": true

}


<?php
} else {
?>
{ 'success' : false} 

<?php
}

?>