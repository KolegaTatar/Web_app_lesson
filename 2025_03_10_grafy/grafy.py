from typing import List, Tuple

def read_graph(filename: str) -> Tuple[List[List[int]], int]:
    with open(filename, "r") as file:
        n = int(file.readline().strip()) 
        adjacency_list = []
        
        for _ in range(n):
            line = list(map(int, file.readline().strip().split()))
            adjacency_list.append(line[1:])  
    
    return adjacency_list, n

def write_neighbours_list(adjacency_list: List[List[int]]) -> None:
    for i, neighbors in enumerate(adjacency_list):
        print(f"Sąsiadami wierzchołka {i} są: {', '.join(map(str, neighbors))}")

def list_to_matrix(adjacency_list: List[List[int]], n: int) -> List[List[int]]:
    matrix = [[0] * n for _ in range(n)] 
    
    for i, neighbors in enumerate(adjacency_list):
        for neighbor in neighbors:
            matrix[i][neighbor] = 1 
    
    return matrix

def write_matrix(matrix: List[List[int]]) -> None:
    for row in matrix:
        print(" ".join(map(str, row)))

def main() -> None:
    filename = "przyklad.txt"
    adjacency_list, n = read_graph(filename)
    
    print("Lista sąsiedztwa:")
    write_neighbours_list(adjacency_list)
    
    matrix = list_to_matrix(adjacency_list, n)
    
    print("\nMacierz sąsiedztwa:")
    write_matrix(matrix)

if __name__ == "__main__":
    main()
