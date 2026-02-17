// Shared Logic

const App = {
    // Auth
    getUser: () => localStorage.getItem("user"),
    getRole: () => localStorage.getItem("role"),

    login: (name, role) => {
        if (!name) return alert("Please enter your name!");
        localStorage.setItem("user", name);
        localStorage.setItem("role", role);
        if (role === "student") location.href = "student.html";
        else location.href = "admin.html";
    },

    logout: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        location.href = "login.html";
    },

    requireAuth: (role = null) => {
        const user = App.getUser();
        const currentRole = App.getRole();
        if (!user) location.href = "login.html";
        if (role && currentRole !== role) {
            alert("Unauthorized access!");
            location.href = "login.html";
        }
    },

    // Formatters
    formatPrice: (price) => `₹${price}`,

    // Data
    menu: [
        { id: 1, name: "Gourmet Burger", price: 120, img: "https://placehold.co/600x400/ff9a9e/ffffff?text=Gourmet+Burger", category: "Meals" },
        { id: 2, name: "Cheesy Pizza", price: 180, img: "https://placehold.co/600x400/ff7eb3/ffffff?text=Cheesy+Pizza", category: "Meals" },
        { id: 3, name: "Club Sandwich", price: 80, img: "https://placehold.co/600x400/65c7f7/ffffff?text=Club+Sandwich", category: "Snacks" },
        { id: 4, name: "Fresh Juice", price: 60, img: "https://placehold.co/600x400/9b59b6/ffffff?text=Fresh+Juice", category: "Drinks" },
        { id: 5, name: "Cold Coffee", price: 70, img: "https://placehold.co/600x400/34495e/ffffff?text=Cold+Coffee", category: "Drinks" },
        { id: 6, name: "French Fries", price: 90, img: "https://placehold.co/600x400/f1c40f/ffffff?text=French+Fries", category: "Snacks" }
    ],

    // Global Init
    init: () => {
        // Any global init logic
    }
};

App.init();
