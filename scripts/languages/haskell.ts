const Haskell: ProgrammingLanguage = {
    name: "Haskell",
    style: "haskell",
    example:
`sum :: Int -> Int -> Int
sum a b = a + b

main :: IO ()
main = do
    let a = 8
        b = 7
    putStrLn $ show a ++ " + " ++ show b ++ " = " ++ show (sum a b)`
};

add_langugage(Haskell);
