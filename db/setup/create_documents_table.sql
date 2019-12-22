CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    fileName TEXT,
    createdDate TEXT,
    createdBy TEXT,
    employee_first_name TEXT,
    employee_middle_name TEXT,
    employee_last_name TEXT,
    employee_ssn TEXT,
    employee_address TEXT,
    employee_city TEXT,
    employee_state TEXT,
    employee_zipcode TEXT,
    employers_name TEXT,
    employers_id TEXT,
    employers_address TEXT,
    employers_phone_number TEXT,
    employers_city TEXT,
    employers_state TEXT,
    employers_zipcode TEXT,
    jan_14 TEXT,
    feb_14 TEXT,
    mar_14 TEXT,
    apr_14 TEXT,
    may_14 TEXT,
    jun_14 TEXT,
    jul_14 TEXT,
    aug_14 TEXT,
    sep_14 TEXT,
    oct_14 TEXT,
    nov_14 TEXT,
    dec_14 TEXT,
    jan_15 TEXT,
    feb_15 TEXT,
    mar_15 TEXT,
    apr_15 TEXT,
    may_15 TEXT,
    jun_15 TEXT,
    jul_15 TEXT,
    aug_15 TEXT,
    sep_15 TEXT,
    oct_15 TEXT,
    nov_15 TEXT,
    dec_15 TEXT,
    jan_16 TEXT,
    feb_16 TEXT,
    mar_16 TEXT,
    apr_16 TEXT,
    may_16 TEXT,
    jun_16 TEXT,
    jul_16 TEXT,
    aug_16 TEXT,
    sep_16 TEXT,
    oct_16 TEXT,
    nov_16 TEXT,
    dec_16 TEXT
);