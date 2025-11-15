let emps = [
  { eid: 1001, ename: "Rahul", esal: "44000" },
  { eid: 1011, ename: "Ramu", esal: "54000" },
];
let CE = (emp, callback) => {
  setTimeout(() => {
    emps.push(emp), callback();
  }, 4000);
};
let getemp = () => {
  setTimeout(() => {
    let rows = "";
    for (let em of emps) {
      rows =
        rows +
        `<tr>
        <td>${em.eid}</td>
        <td>${em.ename}</td>
        <td>${em.esal}</td>
                    </tr>`;
    }

    document.getElementById("tbdata").innerHTML = rows;
  }, 1000);
};
CE({ eid: 1012, ename: "Rita", esal: "94000" }, getemp);
// This will shows the
