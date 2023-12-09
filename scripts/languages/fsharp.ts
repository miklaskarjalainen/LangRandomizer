const FSharp: ProgrammingLanguage = {
  name: "F#",
  style: "fsharp",
  example:
`let sum a b = a + b

[<EntryPoint>]
let main argv =
  let A = 8
  let B = 7
  printfn "%i + %i = %i" A B (sum A B)
  0 // Return an integer exit code
`
};

add_langugage(FSharp);