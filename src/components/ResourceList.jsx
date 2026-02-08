import ResourceCard from "./ResourceCard";

export default function ResourceList() {
  return (
    <div className="resource-list">
      <ResourceCard
        name="MDN Web Docs"
        category="Web Development"
        description="Official documentation for HTML, CSS, and JavaScript."
        link="https://developer.mozilla.org/"
      />

      <ResourceCard
        name="freeCodeCamp"
        category="Programming"
        description="Learn to code with free tutorials and projects."
        link="https://www.freecodecamp.org/"
      />

      <ResourceCard
        name="Internshala"
        category="Internships"
        description="Find internships and training programs."
        link="https://internshala.com/"
      />

      <ResourceCard
        name="LeetCode"
        category="DSA Practice"
        description="Practice coding questions for interviews."
        link="https://leetcode.com/"
      />
    </div>
  );
}
