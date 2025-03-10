from dataclasses import dataclass
from typing import List

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
    with open(f"Python - zadanie 2/{filename}", "r") as file:
        for line in file:
            try:
                student_id, first_name, last_name, age = line.strip().split(", ")
                students[int(student_id)] = Student(int(student_id), first_name, last_name, int(age), [])
            except ValueError:
                print(f"Skipping malformed line in {filename}: {line.strip()}")
    return students

def load_courses(filename: str, students: dict):
    with open(f"Python - zadanie 2/{filename}", "r") as file:
        for line in file:
            try:
                student_id, course_name = line.strip().split(", ")
                if int(student_id) in students:
                    students[int(student_id)].courses.append(course_name)
            except ValueError:
                print(f"Skipping malformed line in {filename}: {line.strip()}")

def print_students(students: dict):
    for student in students.values():
        print(f"{student.first_name} {student.last_name} ({student.age} lat): {', '.join(student.courses)}")
        filename = f"Python - zadanie 2/{student.first_name.lower()}_{student.last_name.lower()}.txt"
        
        try:
            with open(filename, "x") as file: 
                file.write("Kursy:\n" + "\n".join(f"- {course}" for course in student.courses))
        except FileExistsError:
            print(f"File for {student.first_name} {student.last_name} already exists.")

def main():
    students = load_students("students.txt")
    load_courses("courses.txt", students)
    print_students(students)

if __name__ == "__main__":
    main()
