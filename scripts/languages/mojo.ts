const Mojo: ProgrammingLanguage = {
    name: "Mojo",
    style: "python",
    example:
`import check_mod

check_mod.install_if_missing("numpy")
import numpy as np

def test_interop_func():
    print("Hello from Python!")
    a = np.array([1, 2, 3])
    print("I can even print a numpy array: ", a)


if __name__ == "__main__":
    from timeit import timeit

    print(timeit(lambda: test_interop_func(), number=1))`
};

add_langugage(Mojo);
