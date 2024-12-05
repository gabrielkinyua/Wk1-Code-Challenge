# Toy Problem Solutions

This repository contains JavaScript solutions to three programming challenges. The instructions for each problem are provided below.

---

## Challenges Overview

### 1. Student Grade Generator
**Description**: This program prompts the user to input student marks (between 0 and 100) and outputs the corresponding grade based on the following criteria:

| Marks Range       | Grade |
|-------------------|-------|
| Above 79         | A     |
| 60 to 79         | B     |
| 50 to 59         | C     |
| 40 to 49         | D     |
| Below 40         | E     |

**File**: `grade.js`

**How to Use**:
1. Run the script.
2. Input the marks when prompted.
3. View the corresponding grade in the output.

---

### 2. Speed Detector
**Description**: This program calculates demerit points for a driver based on the speed of a car. It uses the following logic:
- If the speed is less than 70, it prints `Ok`.
- For every 5 km/s above the speed limit (70), the program gives the driver one demerit point and prints the total.
- If the driver accrues more than 12 demerit points, it prints `License suspended`.

**File**: `speed.js`

**How to Use**:
1. Run the script.
2. Input the car's speed when prompted.
3. View the status or demerit points in the output.


### 3. Net Salary Calculation

**Description**: This function calculates the net salary of an employee after deducting tax, NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund). The function takes the gross salary (including any benefits) and returns the net salary after deductions.

### How it works:

1. **Gross Salary**: The total salary before deductions.
2. **Tax Calculation**: The salary is taxed based on various tax brackets.
3. **NHIF Deduction**: The NHIF deduction is applied based on the salary.
4. **NSSF Deduction**: The NSSF deduction is applied with a cap on the amount deducted.
5. **Net Salary**: The final salary after applying tax, NHIF, and NSSF deductions.

## How to Run the Scripts

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/Wk1-Code-Challenge.git
    cd toy-problems
    ```

2. Make sure you have Node.js installed.

3. Run any of the scripts using the following command:
    ```bash
    node <file-name>.js
  





