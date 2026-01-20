document.addEventListener("DOMContentLoaded", () => {

  const services = [
    {
      name: "Pengurusan Izin Usaha (NIB)",
      description: "Layanan pengurusan Nomor Induk Berusaha untuk UMKM dan perusahaan.",
      requirements: ["KTP", "NPWP", "Data Usaha"]
    },
    {
      name: "Izin Tinggal (KITAS)",
      description: "Pengurusan izin tinggal sementara untuk WNA.",
      requirements: ["Paspor", "Sponsor", "Foto"]
    },
    {
      name: "Izin Operasional Usaha",
      description: "Pengurusan izin operasional sesuai bidang usaha.",
      requirements: ["NIB", "Surat Domisili", "Dokumen pendukung"]
    }
  ];

  const whatsappNumber = "6281238490133";
  const serviceList = document.getElementById("serviceList");

  if (serviceList) {
    services.forEach(service => {
      const card = document.createElement("div");
      card.className = "card";

      const message = `Halo Aurorasky, saya ingin mengurus ${service.name}`;
      const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      card.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <strong>Persyaratan:</strong>
        <ul>
          ${service.requirements.map(req => `<li>${req}</li>`).join("")}
        </ul>
        <a href="${waLink}" target="_blank" class="btn">Hubungi via WhatsApp</a>
      `;

      serviceList.appendChild(card);
    });
  }

  /* HAMBURGER */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  /* CHATBOT */
  const botButton = document.getElementById("botFloat");
  const chatbot = document.getElementById("chatbot");
  const closeChat = document.getElementById("closeChat");
  const botOptions = document.querySelectorAll(".bot-options button");
  const waNumber = "6281238490133";

  if (botButton && chatbot) {
    botButton.addEventListener("click", () => {
      chatbot.style.display =
        chatbot.style.display === "block" ? "none" : "block";
    });
  }

  if (closeChat) {
    closeChat.addEventListener("click", () => {
      chatbot.style.display = "none";
    });
  }

  botOptions.forEach(btn => {
    btn.addEventListener("click", () => {
      const message = btn.getAttribute("data-msg");
      const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      window.open(waLink, "_blank");
    });
  });

});
