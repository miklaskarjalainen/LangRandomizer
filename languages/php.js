const PHP = {
    name: "PHP",
    style: "php",
    example: `<?php
function sum($a, $b) {
    return $a + $b;
}

$A = 8;
$B = 7;
echo "$A + $B = " . sum($A, $B) . "\n";
?>`
};
add_langugage(PHP);
