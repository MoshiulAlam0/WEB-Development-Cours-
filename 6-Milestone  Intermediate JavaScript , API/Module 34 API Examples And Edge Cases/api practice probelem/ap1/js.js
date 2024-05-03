const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };


  document.getElementById('male').innerText = `${person.result[0].isMale}`;
  document.getElementById('add').innerText = `${person.result[0].address.street}`;
  document.getElementById('age').innerText = `${person.result[0].age}`;
  document.getElementById('name').innerText = `${person.result[0].name.common} ${person.result[0].name.fullName[1]}`;

  document.getElementById('male1').innerText = `${person.result[1].isMale}`;
  document.getElementById('add1').innerText = `${person.result[1].address.street}`;
  document.getElementById('age1').innerText = `${person.result[1].age}`;
  document.getElementById('name1').innerText = `${person.result[1].name.common} ${person.result[0].name.fullName[1]}`;
 