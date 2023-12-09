const Elixir = {
    name: "Elixir",
    style: "elixir",
    example: `defmodule Math do
    def sum(a, b) do
        a + b
    end
end

defmodule Main do
    def run do
        a = 8
        b = 7
        IO.puts "#{a} + #{b} = #{Math.sum(a, b)}"
    end
end

Main.run()
`
};
add_langugage(Elixir);
