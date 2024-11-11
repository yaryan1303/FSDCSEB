function Student({ student }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>ABES ENGINERRING COLLEGE</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{student.name}</td>
          </tr>
          <tr>
            <td>Roll No:</td>
            <td>{student.rollno}</td>
          </tr>
          <tr>
            <td>Course:</td>
            <td>{student.course}</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>{student.branch}</td>
          </tr>
          <tr>
            <td>Valid Till:</td>
            <td>2026</td>
          </tr>
          <tr>
            <td>Phone No:</td>
            <td>{student.phoneno}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
