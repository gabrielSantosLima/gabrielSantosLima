const XPS = [
  {
    period: "2018-2020",
    title:
      "Formado em Técnico em Informática pelo Instituto Federal do Amazonas - IFAM",
    wip: false,
  },
  {
    period: "2021-2022",
    title: "Bolsista no Polo de Inovação do IFAM",
    description:
      "Projeto de desenvolvimento de um software  para rastreabilidade dos produtos da empresa Denso utilizando RFID. Atuei como desenvolvedor frontend em React.js, Typescript, Nest.js e SQLServer.",
    wip: false,
  },
  {
    period: "2021-hoje",
    title:
      "Cursando Bacharelado em Sistemas de Informação na Universidade do Estado do Amazonas - UEA",
    wip: true,
  },
  {
    period: "2022-2023",
    title: "Bolsista na Academia Callidus da UEA",
    description:
      "Projeto de capacitação em desenvolvimento de software em que abordamos tecnologias como Node.js, Typescript, React.js, MongoDB, capacitação DevOPS e treinamento em Visão Computacional e IA.",
    wip: false,
  },
  {
    period: "2023-2024",
    title: "Bolsista no Polo de Inovação do IFAM",
    description:
      "Projeto de desenvolvimento de um software  para o setor de qualidade  da empresa Denso. Atuação como desenvolvedor backend em Nest.js, SQLServer, Docker e GitLab.",
    wip: false,
  },
];

// {
//   name: "",
//   category: "pl" | "devops" | "frameworks",
//   type: "normal" | "star" | "learning",
//   imageName: "",
// }

const TECHS = [
  {
    name: "Javascript",
    category: "pl",
    type: "star",
    imageName: "js",
  },
  {
    name: "Typescript",
    category: "pl",
    type: "star",
    imageName: "ts",
  },
  {
    name: "Python",
    category: "pl",
    type: "normal",
    imageName: "py",
  },
  {
    name: "Shell script",
    category: "pl",
    type: "normal",
    imageName: "shell",
  },
  {
    name: "C",
    category: "pl",
    type: "normal",
    imageName: "c",
  },
  {
    name: "C#",
    category: "pl",
    type: "normal",
    imageName: "cs",
  },
  {
    name: "Java",
    category: "pl",
    type: "normal",
    imageName: "java",
  },
  {
    name: "Kotlin",
    category: "pl",
    type: "normal",
    imageName: "kotlin",
  },
  {
    name: "Rust",
    category: "pl",
    type: "learning",
    imageName: "rust",
  },
  {
    name: "ReactJS",
    category: "frameworks",
    type: "star",
    imageName: "react",
  },
  {
    name: "NestJS",
    category: "frameworks",
    type: "star",
    imageName: "nest",
  },
  {
    name: "Express",
    category: "frameworks",
    type: "star",
    imageName: "express",
  },
  {
    name: "Expo",
    category: "frameworks",
    type: "normal",
    imageName: "expo",
  },
  {
    name: "Docker",
    category: "devops",
    type: "star",
    imageName: "docker",
  },
  {
    name: "Git",
    category: "devops",
    type: "star",
    imageName: "git",
  },
  {
    name: "Jenkins",
    category: "devops",
    type: "learning",
    imageName: "jenkins",
  },
];

function renderExperiences() {
  const stotyline = document.querySelector(".storyline");
  let content = "";
  for (const xp of XPS) {
    const mode = xp.wip ? "wip" : "";
    content += `
      <li class="story ${mode}">
        <h2 class="title-1">${xp.period}</h2>
        <h3 class="title-3">${xp.title}</h3>
        ${xp.description ? `<p class="text-1">${xp.description}</p>` : ""}
      </li>
    `;
  }
  stotyline.innerHTML = content + stotyline.innerHTML;
}

function renderTechs() {
  const pl = document.querySelector("#pl");
  const frameworks = document.querySelector("#frameworks");
  const devops = document.querySelector("#devops");

  let plContent = "";
  let frameworksContent = "";
  let devopsContent = "";

  for (const tech of TECHS) {
    const content = `
      <li class="tech ${tech.type === "normal" ? "normal" : "star"}">
        ${
          tech.type !== "normal"
            ? `<label class="text-1">${
                tech.type === "star" ? "maior conhecimento em" : "estudando"
              }</label>`
            : ""
        }
        <img src="./assets/techs/${tech.imageName}.png" alt="${
      tech.imageName
    }" class="logo">
        <label class="title-3">${tech.name}</label>
      </li>
    `;

    if (tech.category === "pl") plContent += content;
    else if (tech.category === "frameworks") frameworksContent += content;
    else devopsContent += content;
  }

  pl.innerHTML = plContent;
  frameworks.innerHTML = frameworksContent;
  devops.innerHTML = devopsContent;
}

function main() {
  renderExperiences();
  renderTechs();
  console.log(
    "%cNão há nada para ver aqui :D",
    "color: #ff9900;font-size:30px;background-color: #303030;"
  );
}

main();
