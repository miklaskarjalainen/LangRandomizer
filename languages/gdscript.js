const GDScript = {
    name: "GDScript",
    style: "gdscript",
    example: `func _sum(a, b):
    return a + b

func _ready():
    var A = 8
    var B = 7
    print("%d + %d = %d" % [A, B, _sum(A, B)])`
};
add_langugage(GDScript);
