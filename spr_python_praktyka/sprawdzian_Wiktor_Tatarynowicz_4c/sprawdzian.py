__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Wiktor Tatarynowicz 4c"

import datetime
import json
import os
from models.Student import Student
from models.Teacher import Teacher
from models.Subject import Subject
from models.Grades import Grades
from year_grade import year_grade

base_dir = os.path.dirname(__file__)

teachers = []
subjects = []
students = []
grades = []
with open(os.path.join(base_dir, "teachers.txt"), "r", encoding="utf-8") as f:
    for line in f:
        tid, name, surname = line.strip().split()
        teachers.append(Teacher(int(tid), name, surname))


with open(os.path.join(base_dir, "subjects.txt"), "r", encoding="utf-8") as f:
    for line in f:
        sub_id, name, tid = line.strip().split()
        teacher = next((t for t in teachers if t._id == int(tid)), None)
        if teacher:
            subjects.append(Subject(int(sub_id), name, teacher))


with open(os.path.join(base_dir, "students.txt"), "r", encoding="utf-8") as f:
    for line in f:
        s_id, name, surname, b_date = line.strip().split()
        birthdate = datetime.datetime.strptime(b_date, "%Y-%m-%d").date()
        students.append(Student(int(s_id), name, surname, birthdate))


with open(os.path.join(base_dir, "grades.txt"), "r", encoding="utf-8") as f:
    for line in f:
        s_id, sub_id, *gs = line.strip().split()
        student = next((s for s in students if s._id == int(s_id)), None)
        subject = next((s for s in subjects if s._id == int(sub_id)), None)
        if student and subject:
            g = Grades(student, subject)
            for val in gs[0].split(","):
                g.add_grade(int(val))
            grades.append(g)

print("Oceny i średnie poszczególnych uczniów:\n")
students_data = []

for student in students:
    print(str(student) + ":")
    student_grades = {}
    for g in [gr for gr in grades if gr.student == student]:
        print(f"   {g.subject.name}:")
        oceny = ", ".join(map(str, g.get_grades()))
        srednia = g.get_average()
        koncowa = year_grade(srednia)
        print(f"     Oceny: {oceny}")
        print(f"     Średnia: {srednia}")
        print(f"     Ocena końcowa: {koncowa}")
        student_grades[g.subject.name] = {
            "Oceny": oceny,
            "Srednia": srednia,
            "Ocena roczna": koncowa
        }
    students_data.append({str(student): student_grades})
    print()

with open(os.path.join(base_dir,"students.json"), "w", encoding="utf-8") as f:
    json.dump(students_data, f, indent=4, ensure_ascii=False)

print("=" * 50)
print()

subjects_data = []
for subject in subjects:
    subject_grades = [g for g in grades if g.subject == subject]
    all_grades = [grade for g in subject_grades for grade in g.get_grades()]
    print(f"{subject.name}:")
    print(f"    Nauczyciel: {subject.teacher}")
    print("    Oceny:", ", ".join(map(str, all_grades)))
    srednia = round(sum(all_grades) / len(all_grades), 2) if all_grades else 0.0
    print(f"    Średnia: {srednia}\n")
    subjects_data.append({
        subject.name: {
            "Nauczyciel": str(subject.teacher),
            "Oceny": all_grades,
            "Srednia": srednia
        }
    })

with open(os.path.join(base_dir,"subjects.json"), "w", encoding="utf-8") as f:
    json.dump(subjects_data, f, indent=4, ensure_ascii=False)
