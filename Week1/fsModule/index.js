const fs = require("fs");
// Now all that codes were written by async purposes, if you want to run all of them sync order , write them Sync way

// Write file
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Dosya oluşturuldu");
    }
  }
);

// Read File
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Update File
fs.appendFile(
  "employees.json",
  '{"name": "Employee 2 Name", "salary": 2200}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// Delete File
fs.unlink("employees.json", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Dosya silindi");
  }
});

//  Updating a predefined value :
// Firstly readfile function is read the single data from the inside of folder and then we can change that value whatever we want.Finally write the file with a new data
function readAndUpdateData() {
  let currentData;
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      currentData = JSON.parse(data); //fetch data from the employees.json file
      currentData.name = "Emre Pala";
      currentData.salary = 3000;

      fs.writeFile(
        "employees.json",
        JSON.stringify(currentData),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Dosya oluşturuldu");
          }
        }
      );
    }
  });
}
readAndUpdateData();
