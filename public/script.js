fetch("/api/whoami")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("ip").textContent = data.ipaddress;
    document.getElementById("language").textContent = data.language;
    document.getElementById("software").textContent = data.software;
  })
  .catch((err) => console.error("Error:", err));
