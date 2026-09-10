const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

document.querySelector("#contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.querySelector("#name").value.trim();
  document.querySelector("#formStatus").textContent =
    `Thank you, ${name || "there"}! This demo form is working on the page. For a live message service, connect it to Formspree, Netlify Forms, or another backend before final submission.`;
  e.target.reset();
});
