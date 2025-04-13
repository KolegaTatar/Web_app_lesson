__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Wiktor Tatarynowicz 4c"

from models.Teacher import Teacher

class Subject:
    def __init__(self, _id: int, name: str, teacher: Teacher):
        self._id = _id
        self.name = name
        self.teacher = teacher

    def __str__(self) -> str:
        return f"{self.name} {self.teacher}"
    
