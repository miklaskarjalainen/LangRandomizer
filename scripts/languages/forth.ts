const Forth: ProgrammingLanguage = {
    name: "Forth",
    style: "bash",
    example:
`: sum + ;
: main
  8 7 sum . cr ;
main
`
};

add_langugage(Forth);