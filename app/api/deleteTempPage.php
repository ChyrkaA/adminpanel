<?php
$file = '../../weetehf578_fghfthf.html';
if (file_exists($file)){
        unlink($file);
} else {
        header('HTTP/1.0 400 Bad request');
}