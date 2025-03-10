def zadanie_4_1():
    with open("./Dane_PR2/sygnaly.txt", "r") as file:
        lines = file.readlines()
    
    message = "".join(lines[i][9] for i in range(39, len(lines), 40))
    
    with open("wyniki4.txt", "w") as output:
        output.write("4.1. " + message + "\n")

def zadanie_4_2():
    with open("./Dane_PR2/sygnaly.txt", "r") as file:
        lines = file.readlines()
    
    max_unique_letters = 0
    best_word = ""
    
    for word in lines:
        word = word.strip()
        unique_letters = len(set(word))
        if unique_letters > max_unique_letters:
            max_unique_letters = unique_letters
            best_word = word
    
    with open("wyniki4.txt", "a") as output:
        output.write(f"4.2. {best_word} {max_unique_letters}\n")

def zadanie_4_3():
    def is_valid_word(word):
        return all(abs(ord(word[i]) - ord(word[j])) <= 10 for i in range(len(word)) for j in range(i + 1, len(word)))
    
    with open("./Dane_PR2/sygnaly.txt", "r") as file:
        lines = file.readlines()
    
    valid_words = [word.strip() for word in lines if is_valid_word(word.strip())]
    
    with open("wyniki4.txt", "a") as output:
        output.write("4.3.\n" + "\n".join(valid_words) + "\n")

zadanie_4_1()
zadanie_4_2()
zadanie_4_3()

