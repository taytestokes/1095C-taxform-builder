module.exports = ({
  employees_1,
  employees_2,
  employees_3,
  employees_4,
  employees_5,
  employees_6,
  employers_7,
  employers_8,
  employers_9,
  employers_10,
  employers_11,
  employers_12,
  employers_13,
  jan_14,
  feb_14,
  mar_14,
  apr_14,
  may_14,
  jun_14,
  jul_14,
  aug_14,
  sep_14,
  oct_14,
  nov_14,
  dec_14,
  jan_15,
  feb_15,
  mar_15,
  apr_15,
  may_15,
  jun_15,
  jul_15,
  aug_15,
  sep_15,
  oct_15,
  nov_15,
  dec_15,
  jan_16,
  feb_16,
  mar_16,
  apr_16,
  may_16,
  jun_16,
  jul_16,
  aug_16,
  sep_16,
  oct_16,
  nov_16,
  dec_16
}) => {
  const employeeFirst = employees_1.split(" ")[0];
  const employeeMiddle = employees_1.split(" ")[1];
  const employeeLast = employees_1.split(" ")[2];

  return `<!DOCTYPE html>
<html>
  <body style="font-size: 8px; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <img
      src="http://localhost:8080/1095cPDF.png"
      style="width: 100%; max-height: 200%;"
    />
    <div style="position: absolute; top: 128px; left: 57px">
      ${employeeFirst}
    </div>
    <div style="position: absolute; top: 128px; left: 162px">
      ${employeeMiddle}
    </div>
    <div style="position: absolute; top: 128px; left: 190px">
      ${employeeLast}
    </div>
    <div style="position: absolute; top: 128px; left: 300px">
    ${employees_2}
    </div>
    <div style="position: absolute; top: 128px; left: 433px">
      ${employers_7}
    </div>
    <div style="position: absolute; top: 128px; left: 675px">
      ${employers_8}
    </div>
    <div style="position: absolute; top: 151px; left: 57px">
      ${employees_3}
    </div>
    <div style="position: absolute; top: 151px; left: 433px">
      ${employers_9}
    </div>
    <div style="position: absolute; top: 151px; left: 675px">
      ${employers_10}
    </div>
    <div style="position: absolute; top: 174px; left: 57px">
      ${employees_4}
    </div>
    <div style="position: absolute; top: 174px; left: 168px">
      ${employees_5}
    </div>
    <div style="position: absolute; top: 174px; left: 297px">
      ${employees_6}
    </div>
    <div style="position: absolute; top: 174px; left: 433px">
        ${employers_11}
    </div>
    <div style="position: absolute; top: 174px; left: 549px">
      ${employers_12}
    </div>
    <div style="position: absolute; top: 174px; left: 675px">
      ${employers_13}
    </div>
    <div style="position: absolute; top: 215px; left: 185px">
      ${jan_14}
    </div>
    <div style="position: absolute; top: 215px; left: 235px">
      ${feb_14}
    </div>
    <div style="position: absolute; top: 215px; left: 290px">
      ${mar_14}
    </div>
    <div style="position: absolute; top: 215px; left: 343px">
      ${apr_14}
    </div>
    <div style="position: absolute; top: 215px; left: 395px">
      ${may_14}
    </div>
    <div style="position: absolute; top: 215px; left: 447px">
      ${jun_14}
    </div>
    <div style="position: absolute; top: 215px; left: 500px">
      ${jul_14}
    </div>
    <div style="position: absolute; top: 215px; left: 553px">
      ${aug_14}
    </div>
    <div style="position: absolute; top: 215px; left: 605px">
      ${sep_14}
    </div>
    <div style="position: absolute; top: 215px; left: 658px">
      ${oct_14}
    </div>
    <div style="position: absolute; top: 215px; left: 711px">
      ${nov_14}
    </div>
    <div style="position: absolute; top: 215px; left: 763px">
      ${dec_14}
    </div>
    <div style="position: absolute; top: 256px; left: 173px">
      ${jan_15}
    </div>
    <div style="position: absolute; top: 256px; left: 225px">
      ${feb_15}
    </div>
    <div style="position: absolute; top: 256px; left: 278px">
      ${mar_15}
    </div>
    <div style="position: absolute; top: 256px; left: 330px">
      ${apr_15}
    </div>
    <div style="position: absolute; top: 256px; left: 383px">
      ${may_15}
    </div>
    <div style="position: absolute; top: 256px; left: 435px">
      ${jun_15}
    </div>
    <div style="position: absolute; top: 256px; left: 487px">
      ${jul_15}
    </div>
    <div style="position: absolute; top: 256px; left: 540px">
        ${aug_15}
    </div>
    <div style="position: absolute; top: 256px; left: 593px">
      ${sep_15}
    </div>
    <div style="position: absolute; top: 256px; left: 645px">
      ${oct_15}
    </div>
    <div style="position: absolute; top: 256px; left: 698px">
      ${nov_15}
    </div>
    <div style="position: absolute; top: 256px; left: 751px">
      ${dec_15}
    </div>
    <div style="position: absolute; top: 280px; left: 185px">
      ${jan_14}
    </div>
    <div style="position: absolute; top: 280px; left: 235px">
      ${feb_16}
    </div>
    <div style="position: absolute; top: 280px; left: 290px">
      ${mar_16}
    </div>
    <div style="position: absolute; top: 280px; left: 343px">
      ${apr_16}
    </div>
    <div style="position: absolute; top: 280px; left: 395px">
      ${may_16}
    </div>
    <div style="position: absolute; top: 280px; left: 447px">
      ${jun_16}
    </div>
    <div style="position: absolute; top: 280px; left: 500px">
      ${jul_16}
    </div>
    <div style="position: absolute; top: 280px; left: 553px">
      ${aug_16}
    </div>
    <div style="position: absolute; top: 280px; left: 605px">
      ${sep_16}
    </div>
    <div style="position: absolute; top: 280px; left: 658px">
      ${oct_16}
    </div>
    <div style="position: absolute; top: 280px; left: 711px">
      ${nov_16}
    </div>
    <div style="position: absolute; top: 280px; left: 763px">
      ${dec_16}
    </div>
  </body>
</html>`;
};
