const noticias = [
    {
      titulo: "Lorem ipsum dolor sit amet.",
      categoria: "previsao",
      data: "01/08/2025",
      leitura: "2 min"
    },
    {
      titulo: "Est ullamcorper sit amet.",
      categoria: "acoes",
      data: "01/08/2025",
      leitura: "3 min"
    },
    {
      titulo: "Lorem ipsum dolor sit amet.",
      categoria: "empresas",
      data: "01/08/2025",
      leitura: "2 min"
    }
  ];
  
  const novidades = [
    {
      titulo: "Lorem ipsum dolor sit amet",
      categoria: "acoes",
      data: "01/08/2025",
      leitura: "1 min"
    },
    {
      titulo: "Et egestas sit amet.",
      categoria: "previsao",
      data: "01/08/2025",
      leitura: "2 min"
    },
    {
      titulo: "Dolor sit amet consectetur",
      categoria: "empresas",
      data: "01/08/2025",
      leitura: "3 min"
    }
  ];
  
  function renderCards(lista, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    lista.forEach(n => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <span class="tag">${n.categoria}</span>
        <h3>${n.titulo}</h3>
        <div class="info">
          <span><i class="far fa-calendar-alt"></i> ${n.data}</span>
          <span><i class="fas fa-clock"></i> ${n.leitura}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  renderCards(noticias);

  renderCards(novidades, "novidades");
  
  document.querySelectorAll(".filtro").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filtro.ativo").classList.remove("ativo");
      btn.classList.add("ativo");
  
      const categoria = btn.dataset.categoria;
      const filtradas = categoria === "todas"
        ? noticias
        : noticias.filter(n => n.categoria === categoria);
  
      renderCards(filtradas, "noticias");
    });
  });
  