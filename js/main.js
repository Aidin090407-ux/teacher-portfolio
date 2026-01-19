fetch("content/profile.md")
  .then((res) => res.text())
  .then((text) => {
    // временно — позже автоматизируем
    document.getElementById("name").innerText = "Джумабаева Махабат Муптуевна";
    document.getElementById("position").innerText =
      "Учитель Русского Языка и Литературы Средняя школа имени Адена Истамбекова";
    document.getElementById("experience").innerText = "22 лет";

    document.getElementById("awards").innerHTML = `
      <ul>
        <li>Грамота МОН КР (2022)</li>
        <li>Лучший учитель школы (2023)</li>
      </ul>
    `;
    document.getElementById("courses").innerHTML = `
      <ul>
        <li>Цифровые технологии в образовании</li>
        <li>Методика преподавания математики</li>
      </ul>
    `;
  });
