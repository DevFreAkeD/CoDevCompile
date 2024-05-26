import {
    clang,
    cpplang,
    jslang,
    Csharp,
    java,
    python,
} from "../assets"

export const languageNames = {
    c: 'c',
    cpp: 'cpp',
    javascript: 'javascript',
    java: 'java',
    csharp: 'csharp',
    python: 'python'
};

export const icons = [
    {
        id: "0",
        title: "C",
        icon: clang,
        width: 34,
        height: 34,
        language: 'C',
        filename: 'main.c',
        template: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
    `
  },
    {
        id: "1",
        title: "C++",
        icon: cpplang,
        width: 34,
        height: 34,
        language: 'C++',
        filename: 'main.cpp',
        template: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
    `
    },
    {
        id: "2",
        title: "JavaScript",
        icon: jslang,
        width: 34,
        height: 34,
        language: 'Javascript',
        filename: 'main.js',
        template: `console.log("Hello World");        
`
    },
    {
        id: "3",
        title: "Java",
        icon: java,
        width: 34,
        height: 34,
        language: 'Java',
        filename: 'main.java',
        template: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`
    },
    {
        id: "4",
        title: "Python",
        icon: python,
        width: 34,
        height: 34,
        language: 'Python',
        filename: 'main.py',
        template: `print("Hello, World!")
    `
    },
    {
        id: "5",
        title: "C Sharp",
        icon: Csharp,
        width: 34,
        height: 34,
        language: 'C#',
        filename: 'main.cs',
        template: `using System;

class HelloWorld {
    static void Main() {
        Console.WriteLine("Hello, World!");
        }
}      
`
    },
];