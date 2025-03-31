from models.Student import Student
from models.Subject import Subject

class Grades:
    def __init__(self, student: Student, subject: Subject):
        self.grades = []
        self.student = student
        self.subject = subject

    def add_grade(self, grade: int):
        if not (1 <= grade <= 6):
            raise ValueError("Grade must be between 1 and 6.")
        self.grades.append(grade)

    def get_grades(self):
        return self.grades

    def get_average(self):
        return sum(self.grades) / len(self.grades) if self.grades else 0