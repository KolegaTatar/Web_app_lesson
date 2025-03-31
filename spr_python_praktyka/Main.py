import os
import datetime
import json


PACKAGE_NAME = "SPR_PYTHON_PRAKTYKA"
MODELS_DIR = os.path.join(PACKAGE_NAME, "models")
os.makedirs(MODELS_DIR, exist_ok=True)


files = {
    os.path.join(MODELS_DIR, "Student.py"): student_code,
    os.path.join(MODELS_DIR, "Teacher.py"): teacher_code,
    os.path.join(MODELS_DIR, "Subject.py"): subject_code,
    os.path.join(MODELS_DIR, "Grades.py"): grades_code,
    os.path.join(PACKAGE_NAME, "year_grade.py"): year_grade_code,
}

for path, code in files.items():
    with open(path, "w", encoding="utf-8") as file:
        file.write(code)

print("Struktura pakietu i podstawowe pliki zostały utworzone.")
