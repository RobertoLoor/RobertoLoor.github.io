
document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("results");

  const canchas = [
    { 
      nombre: "Pista 1", tipo: "Interior", profesor: "Laura Gómez",
      horarios: ["7:00 - 8:30", "10:00 - 11:30", "16:00 - 17:30"]
    },
    { 
      nombre: "Pista 2", tipo: "Exterior", profesor: "Carlos Ruiz",
      horarios: ["8:00 - 9:30", "12:30 - 14:00", "18:30 - 20:00"]
    },
    { 
      nombre: "Pista 3", tipo: "Interior", profesor: "Marina López",
      horarios: ["9:00 - 10:30", "13:30 - 15:00", "19:30 - 21:00"]
    },
    { 
      nombre: "Pista 4", tipo: "Exterior", profesor: "Andrés Martínez",
      horarios: ["10:00 - 11:30", "14:30 - 16:00", "20:30 - 22:00"]
    }
  ];

  canchas.forEach(c => {
    c.horarios.forEach(horario => {
      const card = document.createElement("div");
      card.classList.add("card", "disponible");

      card.innerHTML = `
        <h4>${c.nombre} (${c.tipo})</h4>
        <p>Hora: ${horario}</p>
        <p>Profesor: <strong>${c.profesor}</strong></p>
        <button class="reservar-btn">Reservar</button>
      `;

      const btn = card.querySelector(".reservar-btn");
      btn.addEventListener("click", () => {
        btn.textContent = "Reservado ✅";
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.style.opacity = "0.6";
        btn.style.borderColor = "gray";
        btn.style.color = "gray";
        btn.style.boxShadow = "none";
      });

      resultsContainer.appendChild(card);
    });
  });
});
