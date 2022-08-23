

const scores1 = [
    {
      marks: 32,
      name: "Yvette Merritt",
    },
    {
      marks: 57,
      name: "Lillian Ellis",
    },
    {
      marks: 22,
      name: "Mccall Carter",
    },
    {
      marks: 21,
      name: "Pate Collier",
    },
    {
      marks: 91,
      name: "Debra Beard",
    },
    {
      marks: 75,
      name: "Nettie Hancock",
    },
    {
      marks: 20,
      name: "Hatfield Hodge",
    },
  ];

  const passStuNames = scores1
  .filter((s)=>s.marks>=40)
  .map((s)=>s.name);

  console.log(passStuNames);
