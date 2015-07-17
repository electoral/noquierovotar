<?php

// decode request body
$body = json_decode(file_get_contents('php://input'), true);
$myfile = fopen("post.txt", "w") or die("Unable to open file!");
$txt = $body;
fwrite($myfile, $txt);
fwrite($myfile, file_get_contents('php://input'));
fwrite($myfile, print_r($_REQUEST, TRUE));
fclose($myfile);

if ($body['signature'] == hash_hmac('sha256', $body['timestamp'].$body['token'], 'dcglEgU4O40VJ9kt')) {
  // request is authentified
  $body = json_decode(file_get_contents('php://input'), true);
  $myfile = fopen("contextio/        post.txt", "w") or die("Unable to open file!");
  $txt = $body;
  fwrite($myfile, $txt);
  fclose($myfile);

}
else {
  // invalid request, you can ignore it
}

header("Content-type: application/json");
echo json_encode(array('success'=>true));
