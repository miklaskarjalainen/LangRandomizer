const OCaml = {
    name: "OCaml",
    style: "ocaml",
    example: `let sum a b = a + b;;

let () =
  let a = 8 in
  let b = 7 in
  print_endline (string_of_int a ^ " + " ^ string_of_int b ^ " = " ^ string_of_int (sum a b))`
};
add_langugage(OCaml);
