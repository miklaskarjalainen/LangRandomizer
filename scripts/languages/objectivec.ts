const ObjectiveC: ProgrammingLanguage = {
    name: "Objective-C",
    style: "objc",
    example:
`#import <Foundation/Foundation.h>

int sum(int a, int b) {
    return a + b;
}

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        const int A = 8, B = 7;
        NSLog(@"%i + %i = %i", A, B, sum(A, B));
    }
    return 0;
}`
};

add_langugage(ObjectiveC);
