// Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	});
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				navLinks.forEach((link) => {
					link.style.color = "";
					if (link.getAttribute("href") === "#" + entry.target.id) {
						link.style.color = "var(--accent)";
					}
				});
			}
		});
	},
	{ threshold: 0.4 },
);

sections.forEach((section) => observer.observe(section));

// Fade-in sections on scroll
const fadeObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = "1";
				entry.target.style.transform = "translateY(0)";
			}
		});
	},
	{ threshold: 0.1 },
);

document
	.querySelectorAll(
		".project-card, .exp-card, .skill-group, .stat-card, .contact-card",
	)
	.forEach((el) => {
		el.style.opacity = "0";
		el.style.transform = "translateY(16px)";
		el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
		fadeObserver.observe(el);
	});
