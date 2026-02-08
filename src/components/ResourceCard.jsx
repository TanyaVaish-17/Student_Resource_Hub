export default function ResourceCard({ name, category, description, link }) {
    return (
      <div className="resource-card">
        <h2>{name}</h2>
        <span className="category">{category}</span>
        <p>{description}</p>
        <a href={link} target="_blank">Visit Resource</a>
      </div>
    );
  }
  