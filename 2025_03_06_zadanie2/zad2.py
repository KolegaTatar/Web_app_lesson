from dataclasses import dataclass
from typing import List
import os

@dataclass
class Student:
    student_id: int
    first_name: str
    last_name: str
    age: int
    courses: List[str]

@dataclass
class Course:
    student_id: int
    course_name: str


def load_students(filename: str) -> dict:
    students = {}
    path = os.path.join("Python - zadanie 2", filename)
    with open(path, "r", encoding="utf-8") as file:
        for line in file:
            try:
                student_id, first_name, last_name, age = line.strip().split(",")
                students[int(student_id)] = Student(int(student_id), first_name, last_name, int(age), [])
            except ValueError:
                print(f"Pominięto błędną linię w {filename}: {line.strip()}")
    return students

def load_courses(filename: str, students: dict):
    path = os.path.join("Python - zadanie 2", filename)
    with open(path, "r", encoding="utf-8") as file:
        for line in file:
            try:
                student_id, course_name = line.strip().split(",")
                if int(student_id) in students:
                    students[int(student_id)].courses.append(course_name)
            except ValueError:
                print(f"Pominięto błędną linię w {filename}: {line.strip()}")


def print_students(students: dict):
    for student in students.values():
        courses_str = ', '.join(student.courses)
        print(f"{student.first_name} {student.last_name} ({student.age} lat): {courses_str}")

        filename = f"{student.first_name.lower()}_{student.last_name.lower()}.txt"
        full_path = os.path.join("Python - zadanie 2", filename)

        try:
            with open(full_path, "x", encoding="utf-8") as file:
                file.write("Kursy:\n")
                for course in student.courses:
                    file.write(f"- {course}\n")
        except FileExistsError:
            print(f"Plik {filename} już istnieje – pominięto zapis.")


def main():
    students = load_students("students.txt")
    load_courses("courses.txt", students)
    print_students(students)

if __name__ == "__main__":
    main()
