<?php

$myfile = fopen("post-failure.txt", "w") or die("Unable to open file!");
$txt = print_r($_POST, TRUE);
fwrite($myfile, $txt);
fclose($myfile);

