import Card from "./Card";

export default function Education() {
  return (
    <section className="education">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-entry">
          <Card
            title="Brigham Young University - Idaho"
            content="Bachelors in Software Engineering, Spring 2023"
            imagePath="" // Replace with the actual image path
          />
        </div>
      </div>
    </section>
  );
}
