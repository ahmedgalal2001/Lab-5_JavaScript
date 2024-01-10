let Offices = [];
class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours == 7) this.sleepMood = "happy";
    else if (hours > 7) this.sleepMood = "lazy";
    else this.sleepMood = "tired";
  }

  eat(meals) {
    if (meals == 3) this.healthRate = 100;
    else if (meals == 2) this.healthRate = 75;
    else if (meals == 1) this.healthRate = 50;
    else this.healthRate = "unknow rate";
  }

  buy(items) {
    if (items == 1) {
      this.money -= 10;
    }
  }
}

class Employee extends Person {
  #salary = 1000;
  #health_rate = 75;
  #workMood = "happy";
  constructor(id, email, isManager, fullName, money, sleepMood) {
    super(fullName, money, sleepMood, 75);
    this.id = id;
    this.email = email;
    this.isManager = isManager;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (value > 1000) this.#salary = value;
  }
  get heath_rate() {
    return this.#health_rate;
  }
  set heath_rate(value) {
    if (value > 100) this.#health_rate = 100;
    else if (value < 0) this.#health_rate = 0;
    else this.#health_rate = value;
  }
  get workMood() {
    return this.#workMood;
  }
  set workMood(hours) {
    if (hours == 7) this.#workMood = "happy";
    else if (hours > 7) this.#workMood = "lazy";
    else this.#workMood = "tired";
  }
}

class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }
  getAllEmployees() {
    return this.employees;
  }
  getEmployee(ofcName, empId) {
    const ofc = Offices.find((of) => of.name === ofcName);
    if (ofc) {
      const employee = Offices[ofc].employees.find(
        (emp) => emp.empId === empId
      );
      if (employee) {
        if (employee.isManager) {
          delete employee.salary;
          console.log(employee);
        }
        console.log(employee);
      } else {
        alert("Employee not found.");
      }
    } else {
      alert("Office not found.");
    }
  }
  hire(employee) {
    this.employees.push(employee);
  }
  fire(ofcName, empId) {
    const ofc = Offices.findIndex((of) => of.name === ofcName);
    if (ofc != -1) {
      const employee = Offices[ofc].employees.findIndex(
        (emp) => emp.empId === empId
      );

      if (employee !== -1) {
        Offices[ofc].employees.splice(emp, 1);
      } else {
        alert("Employee not found.");
      }
    } else {
      alert("Office not found.");
    }
  }
}

function addEmployee(employees) {
  let id = prompt("Enter Id Of Employee : ");
  let email = prompt("Enter Email Of Employee : ");
  let isManager = confirm("Is Manger: ");
  let fullName = prompt("Enter Name Of Employee : ");
  let salary = Number(prompt("Enter Salary of Employee : "));
  let healthRate = Number(prompt("Enter Heath rate Of Employee : "));
  const emp = new Employee(id, email, isManager, fullName, 100, "good");
  emp.salary = salary;
  emp.heath_rate = healthRate;
  employees.push(emp);
}

function menuOffice() {
  let name_office = "";
  let employees = [];
  do {
    var f = true;
    const choice = Number(
      prompt("1.Add Office\n2.Remove Office\n3.Hire\n4.Fire\n5.Exit")
    );
    switch (choice) {
      case 1:
        name_office = prompt("Enter Name Of Office : ");
        let count_emps = Number(prompt("Enter Number Of Employees : "));
        for (let i = 0; i < count_emps; i++) {
          addEmployee(employees);
        }
        const ofc = new Office(name_office, employees);
        Offices.push(ofc);
        break;
      case 2:
        name_office = prompt("Enter Name Of Office : ");
        let fcc = Offices.findIndex((of) => of.name === name_office);
        if (fcc != -1) {
          Offices.splice(fcc, 1);
        } else {
          alert("Office not found.");
        }
        break;
      case 3:
        name_office = prompt("Enter Name Of Office : ");
        let fc = Offices.findIndex((of) => of.name === name_office);
        if (fc != -1) {
          let employes = Offices[fc].employees;
          addEmployee(employes);
          Offices[fc].employees = employes;
        } else {
          alert("Office not found.");
        }
        break;
      case 4:
        name_office = prompt("Enter Name Of Office : ");
        let Id = prompt("Enter Id Of Employee : ");
        const ofcd = new Office("", "");
        ofcd.fire(name_office, Id);
        break;
      case 5:
        f = false;
        break;
      default:
        alert("Invalid choice. Please try again.");
        break;
    }
  } while (f);
}

function menuMain() {
  do {
    var f = true;
    const choice = Number(prompt("1.Menu Office\n2.Exit"));
    switch (choice) {
      case 1:
        menuOffice();
        break;
      case 2:
        f = false;
        break;
      default:
        alert("Invalid choice. Please try again.");
        break;
    }
  } while (f);
}

menuMain();
