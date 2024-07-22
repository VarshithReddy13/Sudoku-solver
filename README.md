# Sudoku Solver

A web-based Sudoku Solver that allows users to input a Sudoku puzzle, solve it, or clear the board. This project utilizes HTML, CSS, and JavaScript with jQuery for a simple and intuitive user interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project provides a Sudoku solver where users can:
- Input a Sudoku puzzle.
- Solve the puzzle with a single click.
- Clear the board to start a new puzzle.

## Features

- **Responsive Design**: The layout adjusts to different screen sizes.
- **Validation**: Ensures only valid numbers (1-9) are entered in the cells.
- **Solver**: Implements a backtracking algorithm to solve the puzzle.
- **Error Handling**: Displays an error message if the puzzle is unsolvable.

## Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/VarshithReddy13/sudoku-solver.git
    cd sudoku-solver
    ```

2. **Open `index.html` in your web browser** to view and interact with the Sudoku solver.

## Usage

### Sudoku Board
- Click on a cell to enter a number between 1 and 9.
- The board validates the input to ensure it is a valid Sudoku number.

### Buttons
- **Solve**: Click this button to solve the current puzzle. If the puzzle is unsolvable, an error message will be displayed.
- **Clear board**: Click this button to clear all cells and start a new puzzle.

## File Structure

- `index.html`: The main HTML file containing the structure of the Sudoku solver.
- `styles.css`: The CSS file for styling the Sudoku solver.
- `index.js`: The JavaScript file containing the logic for solving the Sudoku puzzle and handling user interactions.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to fork the repository and submit a pull request. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
