// My initial technical skills and their levels
let techSkills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "C++", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
];

// My initial creative skills and their levels
let creativeSkills = [
  { name: "Adobe Photoshop", level: "Beginner" },
  { name: "Adobe Illustrator", level: "Beginner" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Figma", level: "Advanced" },
];

/**
 * Renders the skills list for either technical or creative skills.
 * This function updates the corresponding <ul> in the DOM with each skill,
 * showing the name, a horizontal line, the level badge, and a remove button.
 * @param {string} type - "tech" for technical skills, "creative" for creative skills
 */
function renderSkills(type) {
  // Decide which list and skills array to use
  const listId = type === "tech" ? "tech-skills-list" : "creative-skills-list";
  const skills = type === "tech" ? techSkills : creativeSkills;
  const ul = document.getElementById(listId);
  ul.innerHTML = ""; // Clear the list before rendering

  // Loop through each skill and add it to the list
  skills.forEach((skill, idx) => {
    ul.innerHTML += `
      <li style="margin-bottom: 18px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="flex: 1;">
            <!-- Skill name -->
            <span style="font-weight: 500;">${skill.name}</span>
            <!-- Horizontal line for separation -->
            <hr style="margin: 6px 0 8px 0; border: none; border-top: 1.5px solid #e0e0e0;">
            <!-- Skill level badge -->
            <span class="badge-skill ${skill.level.toLowerCase()}">${
      skill.level
    }</span>
          </div>
          <!-- Remove button for this skill -->
          <button onclick="removeSkill('${type}',${idx})" style="margin-left: 18px;">Remove</button>
        </div>
      </li>
    `;
  });
}

/**
 * Adds a new skill to either the technical or creative skills list.
 * Reads the skill name and level from the input fields, adds to the array,
 * and re-renders the list.
 * @param {string} type - "tech" or "creative"
 */
function addSkill(type) {
  // Get the correct input fields based on skill type
  const nameInput = document.getElementById(
    type === "tech" ? "new-tech-skill" : "new-creative-skill"
  );
  const levelInput = document.getElementById(
    type === "tech" ? "new-tech-skill-level" : "new-creative-skill-level"
  );
  const name = nameInput.value.trim();
  const level = levelInput.value;

  // Only add if both name and level are provided
  if (name && level) {
    if (type === "tech") techSkills.push({ name, level });
    else creativeSkills.push({ name, level });
    // Reset input fields after adding
    nameInput.value = "";
    levelInput.value = "Beginner";
    renderSkills(type);
  }
}

/**
 * Removes a skill from the specified list by index and re-renders.
 * @param {string} type - "tech" or "creative"
 * @param {number} idx - Index of the skill to remove
 */
function removeSkill(type, idx) {
  if (type === "tech") techSkills.splice(idx, 1);
  else creativeSkills.splice(idx, 1);
  renderSkills(type);
}

// When the page loads, render both skills lists
document.addEventListener("DOMContentLoaded", function () {
  renderSkills("tech");
  renderSkills("creative");
});
