const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '44.200.194.74',
  user: 'appuser',
  password: 'Password@123',
  database: 'Student_DB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
    return;
  }

  console.log('✅ Connected to MySQL');

  // ✅ UPDATE
  connection.query(
    "UPDATE Students SET Name = 'Rayan', Age = 19, Course = 'AI' WHERE id = 1",
    (err, result) => {
      if (err) {
        console.error('Update error:', err);
        return;
      }

      console.log('✅ Updated:', result.affectedRows);

      // ✅ FETCH AFTER UPDATE (optional)
      connection.query("SELECT * FROM Students", (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('📦 Updated Data:', results);
        connection.end();
      });
    }
  );
});

