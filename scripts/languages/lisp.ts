const Lisp: ProgrammingLanguage = {
    name: "Lisp",
    style: "lisp",
    example:
`(defun sum (a b)
(+ a b))

(defun main ()
(let ((A 8)
      (B 7))
  (format t "~a + ~a = ~a~%" A B (sum A B))))

(main)`
};

add_langugage(Lisp);
