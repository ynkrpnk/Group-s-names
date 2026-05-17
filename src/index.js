"use strict";

const arrGroups = [
  "FE2021-5",
  "Fe2020-2",
  "FD2021",
  "fD2022-1",
  "FE2020-3",
  "FD2020/2",
  "fe2021-3",
  "FD2020$5",
  "FE2008-52",
  "FU2008-3",
  "Fm2008-23",
  "fm2008",
];

function checkGroups(groups) {
  const regex = /^(FD|FM|FE|fd|fm|fe)20\d{2}(-\d+)?$/;

  groups.forEach((group) => {
    const message = regex.test(group)
      ? `Success: ${group}`
      : `Error:   ${group}`;

    console.log(message);
  });
}

checkGroups(arrGroups);