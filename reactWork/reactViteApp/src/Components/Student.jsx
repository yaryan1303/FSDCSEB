import styles from "./Student.module.css";
function Student({ student }) {
  return (
    <div className={styles.text}>
      <table>
        <tbody>
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
