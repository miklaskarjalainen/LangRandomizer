const Lua = {
    name: "Lua",
    style: "lua",
    example: `function sum(a, b)
    return a + b
end

local A = 8
local B = 7
print(A .. " + " .. B .. " = " .. sum(A, B))`
};
add_langugage(Lua);
