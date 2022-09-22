document.querySelectorAll(".navbar-nav > .parent").forEach((md) =>
	md.addEventListener("click", () => {
		md.querySelector(".sub-nav").classList.toggle("show");
	})
);

let containers = document.querySelectorAll("section.lazy");
containers.forEach( (element) => {
	let columns = element.querySelectorAll("section > *");
	let tl = gsap.timeline()
  		.from(columns, {y:200, stagger:0.1, opacity: 0}, 0)
	
	ScrollTrigger.create({
		trigger:element,
		start:"top 90%",
		toggleActions:"play none none none",
		animation:tl
	})
})

const hero = document.getElementById("hero");

if (hero) {
	// Hero - Text animation
	gsap.set("svg#hero-svg", { y: 10 });
	gsap.set(".blue-topleft", {
		x: -165,
		y: -125,
		scale: 0.75,
		transformOrigin: "bottom right"
	});
	gsap.set(".blue-topright", {
		x: 640,
		y: -125,
		scale: 0.75,
		transformOrigin: "bottom left"
	});
	gsap.set(".blue-top", {
		x: 240,
		y: -640,
		scale: 0.75,
		transformOrigin: "center"
	});
	gsap.set(".blue-bottom", {
		x: 0,
		y: 220,
		scale: 0.75,
		transformOrigin: "center"
	});
	gsap.set(".blue-bottomleft", {
		x: -165,
		y: 125,
		scale: 0.75,
		transformOrigin: "top right"
	});
	gsap.set(".blue-bottomright", {
		x: 640,
		y: 125,
		scale: 0.75,
		transformOrigin: "top left"
	});
	gsap.set(".red-bottomright", { x: 100, y: 190, scale: 1.25 });
	gsap.set(".red-topright", { x: 150, y: 0, scale: 1.25 });
	gsap.set(".red-bottomleft", { x: -160, y: -80, scale: 1.25 });
	gsap.set(".red-topleft", { x: -150, y: -230, scale: 1.25 });
	gsap.set(".red-bottom", { x: -200, y: 120, scale: 1.25 });
	gsap.set(".red-top", { x: 120, y: -240, scale: 1.25 });

	gsap.registerPlugin(ScrollTrigger);

	const tl = gsap.timeline();
	tl
		.to(".animate-text-challenging", {
			text: "Challenging",
			ease: "power1.in",
			duration: 1.5
		})
		.to(
			".animate-text-minds",
			{
				text: "Minds",
				ease: "power1.in",
				duration: 1.5
			},
			"<"
		)
		.to(
			".blue-top",
			{ x: 240, y: -415, scale: 1, duration: 3, transformOrigin: "center" },
			"<"
		)
		.to(
			".blue-bottom",
			{ x: 0, y: -4.5, scale: 1, duration: 3, transformOrigin: "center" },
			"<"
		)
		.to(
			".blue-topleft",
			{ x: 1, y: 1, scale: 1, duration: 3, transformOrigin: "bottom right" },
			"<"
		)
		.to(
			".blue-topright",
			{ x: 480, y: 0, scale: 1, duration: 3, transformOrigin: "bottom left" },
			"<"
		)
		.to(
			".blue-bottomleft",
			{ x: 0, y: 0, scale: 1, duration: 3, transformOrigin: "top right" },
			"<"
		)
		.to(
			".blue-bottomright",
			{ x: 480, y: 0, scale: 1, duration: 3, transformOrigin: "top left" },
			"<"
		)
		.to(".red-top", { x: 0, y: 0, scale: 1, duration: 3 }, "<")
		.to(".red-bottom", { x: 0, y: -4.6, scale: 1, duration: 3 }, "<")
		.to(".red-topleft", { x: 0, y: 0, scale: 1, duration: 3 }, "<")
		.to(".red-topright", { x: 0, y: 0, scale: 1, duration: 3 }, "<")
		.to(".red-bottomleft", { x: 0, y: 0, scale: 1, duration: 3 }, "<")
		.to(".red-bottomright", { x: 0, y: -1, scale: 1, duration: 3 }, "<")
		.to("svg#hero-svg", { x: -150, scale: 0.6, duration: 3 }, "<");

	const heroHeadings = gsap.utils.toArray(".animate-text");
	heroHeadings.forEach((text, i) => {
		gsap.from(text, {
			scrollTrigger: {
				trigger: ".animate-text-hearts",
				start: "bottom 60%",
				// end: "top top",
				// scrub: true,
				// markers: true,
				toggleActions: "play none none none"
			},
			text: "",
			duration: 1
		});
	});

	const makingMensches = gsap.utils.toArray(".animate-text-mm");
	makingMensches.forEach((text, i) => {
		gsap.from(text, {
			scrollTrigger: {
				trigger: ".animate-text-mensches",
				start: "bottom 60%",
				toggleActions: "play none none none"
			},
			text: "",
			duration: 1.5
		});
	});
}

const multiplePerspectives = document.getElementById("multiple-perspectives");

if (multiplePerspectives) {
	let multPerspecivesWidth = $("#multiple-perspectives .mp-outer").width();
	$("#multiple-perspectives .mp-outer").height(multPerspecivesWidth);

	$(window).resize(function () {
		let multPerspecivesWidth = $("#multiple-perspectives .mp-outer").width();
		$("#multiple-perspectives .mp-outer").height(multPerspecivesWidth);
	});
}

// YouTube scripts
const video = document.getElementById("video");
if (video) {
	var players = document.querySelectorAll(".youtube-player");
	var playBtn = document.querySelector(".bi-play-btn-fill");

	var loadPlayer = function (event) {
		var target = event.currentTarget;
		var iframe = document.createElement("iframe");

		iframe.height = target.clientHeight;
		iframe.width = target.clientWidth;
		iframe.src =
			"https://www.youtube.com/embed/" + target.dataset.videoId + "?autoplay=1";
		iframe.setAttribute("frameborder", 0);

		target.classList.remove("pristine");
		playBtn.style.display = "none";

		if (target.children.length) {
			target.replaceChild(iframe, target.firstElementChild);
		} else {
			target.appendChild(iframe);
		}
	};

	var config = { once: true };

	Array.from(players).forEach(function (player) {
		player.addEventListener("click", loadPlayer, config);
	});
}

// Search bar toggle
const searchToggle = document.getElementById("search-toggle");
searchToggle.addEventListener("click", () => {
	var searchBar = document.getElementById("search-bar");
	if (searchBar.style.display === "none") {
		searchBar.style.display = "block";
	} else {
		searchBar.style.display = "none";
	}
});

// Faculty/Staff Directory - sort
const grid = document.getElementById("grid");

if (grid) {
	var maxHeight = 0,
		maxHeightElement = null,
		maxSubNavHeight = 0;
	$(".fac-staff .content p:nth-child(2)").each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
			maxHeightElement = $(this);
		}
	});
	$(".fac-staff .content p:nth-child(2)").height(maxHeightElement);

	var Shuffle = window.Shuffle;

	class Demo {
		constructor(element) {
			this.element = element;
			this.shuffle = new Shuffle(element, {
				itemSelector: ".fac-staff > div"
				// sizer: element.querySelector(".fac-staff")
			});

			// Log events.
			this.addShuffleEventListeners();
			this._activeFilters = [];
			this.addSorting();
		}

		/**
		 * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
		 * for them like you normally would (with jQuery for example).
		 */
		addShuffleEventListeners() {
			this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
				// console.log("layout. data:", data);
			});
			this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
				// console.log("removed. data:", data);
			});
		}

		addFilterButtons() {
			const options = document.querySelector(".filter-options");
			if (!options) {
				return;
			}

			const filterButtons = Array.from(options.children);
			const onClick = this._handleFilterClick.bind(this);
			filterButtons.forEach((button) => {
				button.addEventListener("click", onClick, false);
			});
		}

		_handleFilterClick(evt) {
			const btn = evt.currentTarget;
			const isActive = btn.classList.contains("active");
			const btnGroup = btn.getAttribute("data-group");

			this._removeActiveClassFromChildren(btn.parentNode);

			let filterGroup;
			if (isActive) {
				btn.classList.remove("active");
				filterGroup = Shuffle.ALL_ITEMS;
			} else {
				btn.classList.add("active");
				filterGroup = btnGroup;
			}

			this.shuffle.filter(filterGroup);
		}

		_removeActiveClassFromChildren(parent) {
			const { children } = parent;
			for (let i = children.length - 1; i >= 0; i--) {
				children[i].classList.remove("active");
			}
		}

		addSorting() {
			document
				.querySelector(".sort-options")
				.addEventListener("change", this._handleSortChange.bind(this));
		}

		_handleSortChange(event) {
			const value = event.target.value;

			function sortByName(element) {
				return element.dataset.name.toLowerCase();
			}

			function sortByTitle(element) {
				return element.dataset.title.toLowerCase();
			}

			let options;
			if (value === "name") {
				options = {
					// reverse: true,
					by: sortByName
				};
			} else if (value === "title") {
				options = {
					by: sortByTitle
				};
			} else {
				options = {};
			}

			this.shuffle.sort(options);
		}
	}

	document.addEventListener("DOMContentLoaded", () => {
		window.demo = new Demo(document.getElementById("grid"));
	});
}
