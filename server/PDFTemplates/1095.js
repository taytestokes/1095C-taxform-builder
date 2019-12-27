module.exports = ({
  employee_first_name,
  employee_middle_name,
  employee_last_name,
  employee_ssn,
  employee_address,
  employee_city,
  employee_state,
  employee_zipcode,
  employers_name,
  employers_id,
  employers_address,
  employers_phone_number,
  employers_city,
  employers_state,
  employers_zipcode,
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
  return `<!DOCTYPE html>
<html>
  <body style="font-size: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <img
      src="http://localhost:8080/1095cPDF.png"
      style="width: 100%; max-height: 195%;"
    />
    <img
      src="http://localhost:8080/1095cPDF2.png"
      style="width: 100%; max-height: 195%;"
    />
    <img
      src="http://localhost:8080/1095cPDF3.png"
      style="width: 100%; max-height: 195%;"
    />
    <div style="position: absolute; top: 124px; left: 57px">
      ${employee_first_name}
    </div>
    <div style="position: absolute; top: 124px; left: 162px">
      ${employee_middle_name}
    </div>
    <div style="position: absolute; top: 124px; left: 190px">
      ${employee_last_name}
    </div>
    <div style="position: absolute; top: 124px; left: 300px">
    ${employee_ssn}
    </div>
    <div style="position: absolute; top: 124px; left: 433px">
      ${employers_name}
    </div>
    <div style="position: absolute; top: 124px; left: 675px">
      ${employers_id}
    </div>
    <div style="position: absolute; top: 147px; left: 57px">
      ${employee_address}
    </div>
    <div style="position: absolute; top: 147px; left: 433px">
      ${employers_address}
    </div>
    <div style="position: absolute; top: 147px; left: 675px">
      ${employers_phone_number}
    </div>
    <div style="position: absolute; top: 169px; left: 57px">
      ${employee_city}
    </div>
    <div style="position: absolute; top: 169px; left: 168px">
      ${employee_state}
    </div>
    <div style="position: absolute; top: 169px; left: 297px">
      ${employee_zipcode}
    </div>
    <div style="position: absolute; top: 169px; left: 433px">
        ${employers_city}
    </div>
    <div style="position: absolute; top: 169px; left: 549px">
      ${employers_state}
    </div>
    <div style="position: absolute; top: 169px; left: 675px">
      ${employers_zipcode}
    </div>
    <div style="position: absolute; top: 210px; left: 186px">
      ${jan_14}
    </div>
    <div style="position: absolute; top: 210px; left: 237px">
      ${feb_14}
    </div>
    <div style="position: absolute; top: 210px; left: 290px">
      ${mar_14}
    </div>
    <div style="position: absolute; top: 210px; left: 343px">
      ${apr_14}
    </div>
    <div style="position: absolute; top: 210px; left: 395px">
      ${may_14}
    </div>
    <div style="position: absolute; top: 210px; left: 447px">
      ${jun_14}
    </div>
    <div style="position: absolute; top: 210px; left: 500px">
      ${jul_14}
    </div>
    <div style="position: absolute; top: 210px; left: 553px">
      ${aug_14}
    </div>
    <div style="position: absolute; top: 210px; left: 605px">
      ${sep_14}
    </div>
    <div style="position: absolute; top: 210px; left: 658px">
      ${oct_14}
    </div>
    <div style="position: absolute; top: 210px; left: 711px">
      ${nov_14}
    </div>
    <div style="position: absolute; top: 210px; left: 763px">
      ${dec_14}
    </div>
    <div style="position: absolute; top: 250px; left: 173px">
      ${jan_15}
    </div>
    <div style="position: absolute; top: 250px; left: 225px">
      ${feb_15}
    </div>
    <div style="position: absolute; top: 250px; left: 278px">
      ${mar_15}
    </div>
    <div style="position: absolute; top: 250px; left: 330px">
      ${apr_15}
    </div>
    <div style="position: absolute; top: 250px; left: 383px">
      ${may_15}
    </div>
    <div style="position: absolute; top: 250px; left: 435px">
      ${jun_15}
    </div>
    <div style="position: absolute; top: 250px; left: 487px">
      ${jul_15}
    </div>
    <div style="position: absolute; top: 250px; left: 540px">
        ${aug_15}
    </div>
    <div style="position: absolute; top: 250px; left: 593px">
      ${sep_15}
    </div>
    <div style="position: absolute; top: 250px; left: 645px">
      ${oct_15}
    </div>
    <div style="position: absolute; top: 250px; left: 698px">
      ${nov_15}
    </div>
    <div style="position: absolute; top: 250px; left: 751px">
      ${dec_15}
    </div>
    <div style="position: absolute; top: 275px; left: 186px">
      ${jan_16}
    </div>
    <div style="position: absolute; top: 275px; left: 237px">
      ${feb_16}
    </div>
    <div style="position: absolute; top: 275px; left: 290px">
      ${mar_16}
    </div>
    <div style="position: absolute; top: 275px; left: 343px">
      ${apr_16}
    </div>
    <div style="position: absolute; top: 275px; left: 395px">
      ${may_16}
    </div>
    <div style="position: absolute; top: 275px; left: 447px">
      ${jun_16}
    </div>
    <div style="position: absolute; top: 275px; left: 500px">
      ${jul_16}
    </div>
    <div style="position: absolute; top: 275px; left: 553px">
      ${aug_16}
    </div>
    <div style="position: absolute; top: 275px; left: 605px">
      ${sep_16}
    </div>
    <div style="position: absolute; top: 275px; left: 658px">
      ${oct_16}
    </div>
    <div style="position: absolute; top: 275px; left: 711px">
      ${nov_16}
    </div>
    <div style="position: absolute; top: 275px; left: 763px">
      ${dec_16}
    </div>
  </body>
</html>`;
};
