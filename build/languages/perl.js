const Perl = {
    name: "Perl",
    style: "perl",
    example: `sub sum {
    my ($a, $b) = @_;
    return $a + $b;
}

my $A = 8;
my $B = 7;
print "$A + $B = " . sum($A, $B) . "\n";`
};
add_langugage(Perl);
