const Pascal: ProgrammingLanguage = {
  name: "Pascal",
    style: "pascal",
    example:
`program SumProgram;

function Sum(a, b: Integer): Integer;
begin
  Sum := a + b;
end;

var
  A, B: Integer;

begin
  A := 8;
  B := 7;
  writeln(A, ' + ', B, ' = ', Sum(A, B));
end.`
};

add_langugage(Pascal);
