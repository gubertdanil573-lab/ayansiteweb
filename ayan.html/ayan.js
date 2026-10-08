/* =====================================================
   QAZPHONE — НЕГІЗГІ JAVASCRIPT
===================================================== */


/* =====================================================
   ДЕРЕКТЕР
===================================================== */

const products = [
    {
        id: 1,
        brand: "Apple",
        name: "iPhone 17 Pro",
        memory: "256 ГБ",
        color: "Қара",
        price: 649990,
        oldPrice: 699990,
        stock: 14,
        discount: 7,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        memory: "512 ГБ",
        color: "Титан сұр",
        price: 599990,
        oldPrice: 649990,
        stock: 9,
        discount: 8,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        brand: "Xiaomi",
        name: "Xiaomi 16",
        memory: "256 ГБ",
        color: "Көк",
        price: 329990,
        oldPrice: 359990,
        stock: 21,
        discount: 8,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        brand: "Google",
        name: "Pixel 10 Pro",
        memory: "256 ГБ",
        color: "Ақ",
        price: 399990,
        oldPrice: 429990,
        stock: 11,
        discount: 7,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        brand: "Redmi",
        name: "Redmi Note 15 Pro",
        memory: "256 ГБ",
        color: "Күлгін",
        price: 179990,
        oldPrice: 199990,
        stock: 30,
        discount: 10,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        brand: "Apple",
        name: "iPhone 17",
        memory: "128 ГБ",
        color: "Көк",
        price: 479990,
        oldPrice: 509990,
        stock: 17,
        discount: 6,
        image: "https://images.unsplash.com/photo-1592286927505-2fd0c1e1b4b0?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        brand: "Samsung",
        name: "Galaxy S26+",
        memory: "256 ГБ",
        color: "Қара",
        price: 459990,
        oldPrice: 499990,
        stock: 13,
        discount: 8,
        image: "https://images.unsplash.com/photo-1610945264803-47c1c7a4d8d6?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        brand: "Redmi",
        name: "Redmi Note 15",
        memory: "128 ГБ",
        color: "Жасыл",
        price: 139990,
        oldPrice: 159990,
        stock: 27,
        discount: 12,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80"
    }
];


let cart = JSON.parse(localStorage.getItem("qazphone_cart")) || [];

let users = JSON.parse(localStorage.getItem("qazphone_users")) || [
    {
        id: 1,
        name: "Айдос Нұрлан",
        email: "aidos@mail.kz",
        phone: "+7 700 111 22 33",
        role: "Әкімші",
        date: "02.10.2026",
        status: "Белсенді"
    },
    {
        id: 2,
        name: "Аружан Серік",
        email: "aruzhan@mail.kz",
        phone: "+7 701 222 33 44",
        role: "Менеджер",
        date: "29.09.2026",
        status: "Белсенді"
    },
    {
        id: 3,
        name: "Ерлан Қасым",
        email: "erlan@mail.kz",
        phone: "+7 702 333 44 55",
        role: "Клиент",
        date: "27.09.2026",
        status: "Белсенді"
    }
];

let comments = JSON.parse(localStorage.getItem("qazphone_comments")) || [
    {
        id: 1,
        name: "Мадина",
        phone: "+7 700 123 45 67",
        rating: 5,
        text: "Телефон өте жылдам жеткізілді. Өнімге көңілім толды.",
        date: "02.10.2026",
        status: "Жарияланған"
    },
    {
        id: 2,
        name: "Арман",
        phone: "+7 701 555 33 22",
        rating: 5,
        text: "Бағасы жақсы және қызмет көрсету сапасы жоғары.",
        date: "01.10.2026",
        status: "Жарияланған"
    },
    {
        id: 3,
        name: "Дана",
        phone: "+7 702 888 11 22",
        rating: 4,
        text: "Тапсырысым уақытында келді.",
        date: "30.09.2026",
        status: "Күтуде"
    }
];

let posts = [
    {
        title: "Жаңа iPhone 17 Pro сатылымда",
        category: "Жаңалық",
        text: "Жаңа iPhone 17 Pro моделін QazPhone дүкенінен тапсырыс бере аласыз.",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Samsung Galaxy жаңа сериясы",
        category: "Жаңалық",
        text: "Samsung компаниясының жаңа флагмандық смартфондары біздің дүкенде.",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80"
    },
    {
        title: "Смартфондарға арнайы жеңілдіктер",
        category: "Акция",
        text: "Таңдалған смартфондарға 10%-ға дейін жеңілдік ұсынылады.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
    }
];


const sectionNames = {
    dashboard: "Басты бет",
    products: "Телефондар",
    posts: "Жаңалықтар",
    media: "Медиа",
    pages: "Беттер",
    comments: "Пікірлер",
    appearance: "Дизайн",
    plugins: "Қосымшалар",
    users: "Пайдаланушылар",
    settings: "Баптаулар"
};


/* =====================================================
   DOM
===================================================== */

const authScreen = document.getElementById("authScreen");
const app = document.getElementById("app");
const content = document.getElementById("content");

const registerView = document.getElementById("registerView");
const loginView = document.getElementById("loginView");

const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");


/* =====================================================
   АВТОРИЗАЦИЯ
===================================================== */

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("qazphone_current_user"));
}

function saveCurrentUser(user) {
    localStorage.setItem("qazphone_current_user", JSON.stringify(user));
}

function checkAuth() {

    const currentUser = getCurrentUser();

    if (currentUser) {
        showApp(currentUser);
    } else {
        showAuth();
    }
}

function showAuth() {
    authScreen.classList.remove("hidden");
    app.classList.add("hidden");
}

function showApp(user) {

    authScreen.classList.add("hidden");
    app.classList.remove("hidden");

    const name = user.name || "Әкімші";
    const letter = name.charAt(0).toUpperCase();

    document.getElementById("sidebarUserName").textContent = name;
    document.getElementById("topUserName").textContent = name;

    document.getElementById("sidebarAvatar").textContent = letter;
    document.getElementById("topAvatar").textContent = letter;

    renderSection("dashboard");
}

document.getElementById("showLogin").addEventListener("click", () => {
    registerView.classList.add("hidden");
    loginView.classList.remove("hidden");
});

document.getElementById("showRegister").addEventListener("click", () => {
    loginView.classList.add("hidden");
    registerView.classList.remove("hidden");
});


/* =====================================================
   ТІРКЕЛУ
===================================================== */

document.getElementById("registerForm").addEventListener("submit", function(e) {

    e.preventDefault();

    clearErrors(this);

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const phone = document.getElementById("registerPhone").value.trim();
    const password = document.getElementById("registerPassword").value;
    const repeat = document.getElementById("registerPasswordRepeat").value;

    let valid = true;

    if (name.length < 2) {
        showFieldError("registerName", "Аты-жөніңізді енгізіңіз.");
        valid = false;
    }

    if (!email.includes("@")) {
        showFieldError("registerEmail", "Дұрыс электрондық пошта енгізіңіз.");
        valid = false;
    }

    if (phone.length < 10) {
        showFieldError("registerPhone", "Телефон нөмірін дұрыс енгізіңіз.");
        valid = false;
    }

    if (password.length < 6) {
        showFieldError("registerPassword", "Құпия сөз кемінде 6 таңбадан тұруы керек.");
        valid = false;
    }

    if (password !== repeat) {
        showFieldError("registerPasswordRepeat", "Құпия сөздер сәйкес келмейді.");
        valid = false;
    }

    if (!valid) return;

    const user = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        role: "Әкімші",
        date: new Date().toLocaleDateString("kk-KZ"),
        status: "Белсенді"
    };

    users.push(user);

    localStorage.setItem("qazphone_users", JSON.stringify(users));

    saveCurrentUser(user);

    showToast("Тіркелу сәтті аяқталды!", "success");

    showApp(user);
});


/* =====================================================
   КІРУ
===================================================== */

document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    clearErrors(this);

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const user = users.find(
        item => item.email === email && item.password === password
    );

    if (!user) {
        showToast("Электрондық пошта немесе құпия сөз қате.", "error");
        return;
    }

    saveCurrentUser(user);

    showToast("Жүйеге сәтті кірдіңіз!", "success");

    showApp(user);
});


/* =====================================================
   ҚҰПИЯ СӨЗ
===================================================== */

document.getElementById("forgotPassword").addEventListener("click", () => {

    showModal(`
        <h2>Құпия сөзді қалпына келтіру</h2>

        <p style="font-size:12px;color:#777;margin-bottom:20px;">
            Электрондық поштаңызды енгізіңіз. Қалпына келтіру
            нұсқаулығы көрсетілген мекенжайға жіберіледі.
        </p>

        <div class="form-group">
            <label>Электрондық пошта</label>
            <input id="resetEmail" type="email" placeholder="example@mail.kz">
        </div>

        <button class="primary-button" style="width:100%;" onclick="resetPassword()">
            Нұсқаулық жіберу
        </button>
    `);
});

function resetPassword() {

    const email = document.getElementById("resetEmail").value.trim();

    if (!email.includes("@")) {
        showToast("Электрондық поштаңызды дұрыс енгізіңіз.", "error");
        return;
    }

    closeModal();

    showToast("Қалпына келтіру нұсқаулығы жіберілді.", "success");
}


/* =====================================================
   ҚАТЕЛЕР
===================================================== */

function clearErrors(form) {

    form.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
    });

    form.querySelectorAll("input").forEach(input => {
        input.classList.remove("input-error");
    });
}

function showFieldError(id, message) {

    const input = document.getElementById(id);

    if (!input) return;

    input.classList.add("input-error");

    const group = input.closest(".form-group");

    if (group) {
        const error = group.querySelector(".error-message");

        if (error) {
            error.textContent = message;
        }
    }
}


/* =====================================================
   SIDEBAR
===================================================== */

document.querySelectorAll(".menu-item").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".menu-item").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const section = button.dataset.section;

        renderSection(section);

        document.getElementById("sidebar").classList.remove("open");
    });
});


/* =====================================================
   SECTION RENDER
===================================================== */

function renderSection(section) {

    document.getElementById("currentSectionName").textContent =
        sectionNames[section] || "Басты бет";

    switch (section) {

        case "dashboard":
            renderDashboard();
            break;

        case "products":
            renderProducts();
            break;

        case "posts":
            renderPosts();
            break;

        case "media":
            renderMedia();
            break;

        case "pages":
            renderPages();
            break;

        case "comments":
            renderComments();
            break;

        case "appearance":
            renderAppearance();
            break;

        case "plugins":
            renderPlugins();
            break;

        case "users":
            renderUsers();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderDashboard();
    }
}


/* =====================================================
   DASHBOARD
===================================================== */

function renderDashboard() {

    content.innerHTML = `

        <div class="page-header">
            <div>
                <h1>Басты бет</h1>
                <p>Дүкеніңіздің негізгі көрсеткіштерін бақылаңыз.</p>
            </div>

            <div class="header-actions">
                <button class="secondary-button" onclick="renderSection('products')">
                    Телефондарды көру
                </button>

                <button class="primary-button" onclick="openCart()">
                    🛒 Себет
                    <span id="dashboardCartCount">${getCartCount()}</span>
                </button>
            </div>
        </div>


        <div class="stats-grid">

            <div class="stat-card">
                <div class="stat-top">
                    <div class="stat-icon">₸</div>
                </div>

                <div class="stat-label">Жалпы сатылым</div>
                <div class="stat-value">8 420 500 ₸</div>
                <div class="stat-change">↑ 12,8% өткен аймен салыстырғанда</div>
            </div>

            <div class="stat-card">
                <div class="stat-top">
                    <div class="stat-icon">□</div>
                </div>

                <div class="stat-label">Тапсырыстар саны</div>
                <div class="stat-value">1 284</div>
                <div class="stat-change">↑ 8,4% өткен аймен салыстырғанда</div>
            </div>

            <div class="stat-card">
                <div class="stat-top">
                    <div class="stat-icon">▣</div>
                </div>

                <div class="stat-label">Өнімдер саны</div>
                <div class="stat-value">${products.length}</div>
                <div class="stat-change">6 жаңа өнім қосылды</div>
            </div>

            <div class="stat-card">
                <div class="stat-top">
                    <div class="stat-icon">♙</div>
                </div>

                <div class="stat-label">Тұтынушылар саны</div>
                <div class="stat-value">${users.length + 1240}</div>
                <div class="stat-change">↑ 5,2% осы айда</div>
            </div>

        </div>


        <div class="dashboard-grid">

            <div class="card">

                <div class="card-header">
                    <h3>Сатылым статистикасы</h3>
                    <span>Соңғы 7 күн</span>
                </div>

                <div class="card-body">
                    <div class="chart">

                        ${createChartBar(48, "Дс")}
                        ${createChartBar(65, "Сс")}
                        ${createChartBar(55, "Ср")}
                        ${createChartBar(82, "Бс")}
                        ${createChartBar(70, "Жм")}
                        ${createChartBar(94, "Сб")}
                        ${createChartBar(78, "Жс")}

                    </div>
                </div>

            </div>


            <div class="card">

                <div class="card-header">
                    <h3>Ең көп сатылатындар</h3>
                    <span>Осы ай</span>
                </div>

                <div class="card-body">

                    ${products.slice(0, 4).map((product, index) => `
                        <div style="
                            display:flex;
                            align-items:center;
                            gap:10px;
                            padding:10px 0;
                            border-bottom:1px solid var(--border);
                        ">

                            <img
                                src="${product.image}"
                                style="
                                    width:42px;
                                    height:42px;
                                    object-fit:contain;
                                    background:#f5f5f8;
                                    border-radius:8px;
                                "
                            >

                            <div style="flex:1;">
                                <strong style="font-size:10px;">
                                    ${product.name}
                                </strong>

                                <div style="
                                    color:var(--muted);
                                    font-size:9px;
                                    margin-top:3px;
                                ">
                                    ${index + 1} орын
                                </div>
                            </div>

                            <strong style="font-size:10px;">
                                ${formatPrice(product.price)}
                            </strong>

                        </div>
                    `).join("")}

                </div>

            </div>

        </div>


        <div class="card">

            <div class="card-header">
                <h3>Соңғы тапсырыстар</h3>
                <span>Барлығын көру</span>
            </div>

            <div class="table-wrapper">

                <table class="data-table">

                    <thead>
                        <tr>
                            <th>Тапсырыс</th>
                            <th>Клиент</th>
                            <th>Өнім</th>
                            <th>Сома</th>
                            <th>Күйі</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>#QP-10284</td>
                            <td>Айша Талғат</td>
                            <td>iPhone 17 Pro</td>
                            <td>649 990 ₸</td>
                            <td><span class="status status-success">Аяқталды</span></td>
                        </tr>

                        <tr>
                            <td>#QP-10283</td>
                            <td>Данияр Әли</td>
                            <td>Galaxy S26 Ultra</td>
                            <td>599 990 ₸</td>
                            <td><span class="status status-warning">Жеткізілуде</span></td>
                        </tr>

                        <tr>
                            <td>#QP-10282</td>
                            <td>Сая Марат</td>
                            <td>Xiaomi 16</td>
                            <td>329 990 ₸</td>
                            <td><span class="status status-info">Өңделуде</span></td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    `;
}

function createChartBar(height, label) {

    return `
        <div class="chart-column">
            <div
                class="chart-bar"
                style="height:${height}%"
            ></div>

            <div class="chart-label">${label}</div>
        </div>
    `;
}


/* =====================================================
   PRODUCTS
===================================================== */

function renderProducts() {

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Телефондар</h1>
                <p>Смартфондар каталогын басқарыңыз.</p>
            </div>

            <div class="header-actions">

                <button class="primary-button" onclick="openCart()">
                    🛒 Себет
                    <span id="cartCount">${getCartCount()}</span>
                </button>

                <button
                    class="secondary-button"
                    onclick="showToast('Жаңа өнім қосу терезесі ашылды.')"
                >
                    + Өнім қосу
                </button>

            </div>

        </div>


        <div class="product-toolbar">

            <div class="search-box">

                <span>⌕</span>

                <input
                    id="productSearch"
                    type="search"
                    placeholder="Телефон іздеу..."
                >

            </div>


            <select class="filter-select" id="brandFilter">

                <option value="">Барлық бренд</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Redmi">Redmi</option>
                <option value="Google">Google</option>

            </select>


            <select class="filter-select" id="memoryFilter">

                <option value="">Барлық жад</option>
                <option value="128 ГБ">128 ГБ</option>
                <option value="256 ГБ">256 ГБ</option>
                <option value="512 ГБ">512 ГБ</option>

            </select>


            <select class="filter-select" id="priceFilter">

                <option value="">Баға бойынша</option>
                <option value="low">Арзаннан қымбатқа</option>
                <option value="high">Қымбаттан арзанға</option>

            </select>

        </div>


        <div id="productGrid" class="product-grid"></div>
    `;

    updateProductGrid();

    document.getElementById("productSearch")
        .addEventListener("input", updateProductGrid);

    document.getElementById("brandFilter")
        .addEventListener("change", updateProductGrid);

    document.getElementById("memoryFilter")
        .addEventListener("change", updateProductGrid);

    document.getElementById("priceFilter")
        .addEventListener("change", updateProductGrid);
}


function updateProductGrid() {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    const search = document
        .getElementById("productSearch")
        .value
        .toLowerCase();

    const brand = document.getElementById("brandFilter").value;

    const memory = document.getElementById("memoryFilter").value;

    const price = document.getElementById("priceFilter").value;

    let filtered = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search);

        const matchesBrand =
            !brand || product.brand === brand;

        const matchesMemory =
            !memory || product.memory === memory;

        return matchesSearch && matchesBrand && matchesMemory;
    });

    if (price === "low") {
        filtered.sort((a,b) => a.price - b.price);
    }

    if (price === "high") {
        filtered.sort((a,b) => b.price - a.price);
    }

    if (!filtered.length) {

        grid.innerHTML = `
            <div class="card" style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
            ">
                <h3>Өнім табылмады</h3>
                <p style="color:var(--muted);font-size:12px;margin-top:8px;">
                    Іздеу параметрлерін өзгертіп көріңіз.
                </p>
            </div>
        `;

        return;
    }

    grid.innerHTML = filtered.map(product => `

        <div class="product-card">

            <div class="product-image">

                <span class="discount-badge">
                    -${product.discount}%
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-meta">
                    <span>${product.memory}</span>
                    <span>${product.color}</span>
                    <span>${product.stock} дана</span>
                </div>

                <div class="product-price">

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    Себетке қосу
                </button>

            </div>

        </div>

    `).join("");
}


/* =====================================================
   CART
===================================================== */

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function saveCart() {
    localStorage.setItem("qazphone_cart", JSON.stringify(cart));
}

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();

    showToast(`${product.name} себетке қосылды.`, "success");

    const count = document.getElementById("cartCount");

    if (count) {
        count.textContent = getCartCount();
    }
}


function changeQuantity(productId, amount) {

    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    saveCart();

    openCart();
}


function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== productId);

    saveCart();

    openCart();

    showToast("Өнім себеттен өшірілді.");
}


function openCart() {

    const total = cart.reduce((sum, item) => {

        const product = products.find(p => p.id === item.id);

        return sum + (product ? product.price * item.quantity : 0);

    }, 0);


    const itemsHtml = cart.length
        ? cart.map(item => {

            const product = products.find(p => p.id === item.id);

            if (!product) return "";

            return `
                <div class="cart-item">

                    <img src="${product.image}" alt="${product.name}">

                    <div class="cart-item-info">
                        <strong>${product.name}</strong>
                        <span>${formatPrice(product.price)}</span>
                    </div>

                    <div class="quantity-control">

                        <button onclick="changeQuantity(${product.id}, -1)">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${product.id}, 1)">
                            +
                        </button>

                    </div>

                    <button
                        class="danger-button"
                        onclick="removeFromCart(${product.id})"
                    >
                        Өшіру
                    </button>

                </div>
            `;

        }).join("")
        : `
            <div style="
                text-align:center;
                padding:40px 10px;
                color:var(--muted);
            ">
                <div style="font-size:35px;margin-bottom:10px;">🛒</div>
                <strong>Себет бос</strong>
                <p style="font-size:11px;margin-top:6px;">
                    Қалаған телефоныңызды себетке қосыңыз.
                </p>
            </div>
        `;


    showModal(`

        <h2>Себет</h2>

        ${itemsHtml}

        <div class="cart-total">

            <span>Жалпы сома</span>

            <span>
                ${formatPrice(total)}
            </span>

        </div>

        <button
            class="primary-button"
            style="width:100%;margin-top:20px;"
            onclick="makeOrder()"
            ${cart.length ? "" : "disabled"}
        >
            Тапсырыс беру
        </button>
    `);
}


function makeOrder() {

    if (!cart.length) return;

    cart = [];

    saveCart();

    closeModal();

    showToast("Тапсырысыңыз қабылданды!", "success");

    renderSection("dashboard");
}


/* =====================================================
   POSTS
===================================================== */

function renderPosts() {

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Жаңалықтар</h1>
                <p>Дүкен жаңалықтары мен мақалаларын басқарыңыз.</p>
            </div>

            <button
                class="primary-button"
                onclick="openPostModal()"
            >
                + Жаңа жазба қосу
            </button>

        </div>


        <div class="news-grid">

            ${posts.map((post, index) => `

                <div class="news-card">

                    <div class="news-image">
                        <img src="${post.image}" alt="${post.title}">
                    </div>

                    <div class="news-content">

                        <div class="news-category">
                            ${post.category}
                        </div>

                        <div class="news-title">
                            ${post.title}
                        </div>

                        <div class="news-text">
                            ${post.text}
                        </div>

                        <div style="
                            display:flex;
                            gap:6px;
                            margin-top:14px;
                        ">

                            <button
                                class="small-primary"
                                onclick="showToast('Жазба өңдеу режимінде.')"
                            >
                                Өзгерту
                            </button>

                            <button
                                class="danger-button"
                                onclick="deletePost(${index})"
                            >
                                Өшіру
                            </button>

                        </div>

                    </div>

                </div>

            `).join("")}

        </div>
    `;
}


function openPostModal() {

    showModal(`

        <h2>Жаңа жазба қосу</h2>

        <div class="form-group">
            <label>Тақырып</label>
            <input id="postTitle" placeholder="Жазба тақырыбы">
        </div>

        <div class="form-group">
            <label>Сурет сілтемесі</label>
            <input id="postImage" placeholder="Сурет сілтемесі">
        </div>

        <div class="form-group">
            <label>Мәтін</label>
            <textarea id="postText" placeholder="Жазба мәтіні"></textarea>
        </div>

        <div class="form-group">
            <label>Санат</label>

            <select id="postCategory">
                <option>Жаңалық</option>
                <option>Мақала</option>
                <option>Акция</option>
                <option>Жаңа түскен өнім</option>
            </select>

        </div>

        <button
            class="primary-button"
            style="width:100%;"
            onclick="createPost()"
        >
            Жариялау
        </button>
    `);
}


function createPost() {

    const title = document.getElementById("postTitle").value.trim();
    const image = document.getElementById("postImage").value.trim();
    const text = document.getElementById("postText").value.trim();
    const category = document.getElementById("postCategory").value;

    if (!title || !text) {
        showToast("Тақырып пен мәтінді енгізіңіз.", "error");
        return;
    }

    posts.unshift({
        title,
        category,
        text,
        image: image || products[0].image
    });

    closeModal();

    renderPosts();

    showToast("Жаңа жазба жарияланды.", "success");
}


function deletePost(index) {

    posts.splice(index, 1);

    renderPosts();

    showToast("Жазба өшірілді.");
}


/* =====================================================
   MEDIA
===================================================== */

function renderMedia() {

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Медиа</h1>
                <p>Суреттер мен басқа медиа файлдарын басқарыңыз.</p>
            </div>

            <button
                class="primary-button"
                onclick="showToast('Медиа қосу терезесі ашылды.')"
            >
                + Медиа қосу
            </button>

        </div>


        <div class="media-grid">

            ${products.map(product => `

                <div class="media-item">

                    <div class="media-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>

                    <div class="media-info">

                        <strong>${product.name}</strong>

                        <button
                            class="danger-button"
                            onclick="deleteMedia(${product.id})"
                        >
                            Өшіру
                        </button>

                    </div>

                </div>

            `).join("")}

        </div>
    `;
}


function deleteMedia(id) {

    showToast("Медиа файлы өшірілді.");

    const item = document.querySelector(
        `.media-item:nth-child(${id})`
    );

    if (item) {
        item.remove();
    }
}


/* =====================================================
   PAGES
===================================================== */

function renderPages() {

    const pages = [
        ["Басты бет", "Дүкеннің негізгі беті"],
        ["Телефондар", "Смартфондар каталогы"],
        ["Біз туралы", "Компания туралы ақпарат"],
        ["Байланыс", "Байланыс ақпараты"],
        ["Жеткізу", "Жеткізу шарттары"],
        ["Қайтару саясаты", "Өнімді қайтару шарттары"]
    ];

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Беттер</h1>
                <p>Сайт беттерін басқарыңыз.</p>
            </div>

            <button
                class="primary-button"
                onclick="showToast('Жаңа бет қосу функциясы дайын.')"
            >
                + Жаңа бет
            </button>

        </div>


        <div class="page-list">

            ${pages.map((page, index) => `

                <div class="page-row">

                    <div class="page-name">

                        <div class="page-icon">
                            ▤
                        </div>

                        <div>
                            <strong>${page[0]}</strong>
                            <span>${page[1]}</span>
                        </div>

                    </div>

                    <div class="page-actions">

                        <button
                            class="small-primary"
                            onclick="showToast('${page[0]} беті ашылды.')"
                        >
                            Көру
                        </button>

                        <button
                            class="secondary-button"
                            onclick="showToast('Бет өзгерту режимінде.')"
                        >
                            Өзгерту
                        </button>

                        <button
                            class="danger-button"
                            onclick="showToast('Бетті өшіру сұранысы жіберілді.')"
                        >
                            Өшіру
                        </button>

                    </div>

                </div>

            `).join("")}

        </div>
    `;
}


/* =====================================================
   COMMENTS
===================================================== */

function renderComments() {

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Пікірлер</h1>
                <p>Клиенттердің пікірлерін басқарыңыз.</p>
            </div>

            <div class="header-actions">

                <span class="status status-warning">
                    ${comments.filter(c => c.status === "Күтуде").length} күтуде
                </span>

            </div>

        </div>


        <div class="card">

            <div class="table-wrapper">

                <table class="data-table">

                    <thead>
                        <tr>
                            <th>Клиент</th>
                            <th>Телефон</th>
                            <th>Баға</th>
                            <th>Пікір</th>
                            <th>Күні</th>
                            <th>Статус</th>
                            <th>Әрекет</th>
                        </tr>
                    </thead>

                    <tbody>

                        ${comments.map(comment => `

                            <tr>

                                <td>
                                    <strong>${comment.name}</strong>
                                </td>

                                <td>${comment.phone}</td>

                                <td>
                                    ${"★".repeat(comment.rating)}
                                    <span style="color:#ccc;">
                                        ${"★".repeat(5 - comment.rating)}
                                    </span>
                                </td>

                                <td style="max-width:300px;white-space:normal;">
                                    ${comment.text}
                                </td>

                                <td>${comment.date}</td>

                                <td>
                                    <span class="status ${
                                        comment.status === "Жарияланған"
                                            ? "status-success"
                                            : "status-warning"
                                    }">
                                        ${comment.status}
                                    </span>
                                </td>

                                <td>

                                    <div style="display:flex;gap:5px;">

                                        <button
                                            class="success-button"
                                            onclick="publishComment(${comment.id})"
                                        >
                                            Жариялау
                                        </button>

                                        <button
                                            class="danger-button"
                                            onclick="deleteComment(${comment.id})"
                                        >
                                            Өшіру
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>
    `;
}


function publishComment(id) {

    const comment = comments.find(item => item.id === id);

    if (!comment) return;

    comment.status = "Жарияланған";

    saveComments();

    renderComments();

    showToast("Пікір жарияланды.", "success");
}


function deleteComment(id) {

    comments = comments.filter(item => item.id !== id);

    saveComments();

    renderComments();

    showToast("Пікір өшірілді.");
}


function saveComments() {
    localStorage.setItem("qazphone_comments", JSON.stringify(comments));
}


/* =====================================================
   APPEARANCE
===================================================== */

function renderAppearance() {

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Дизайн</h1>
                <p>Сайттың сыртқы көрінісін баптаңыз.</p>
            </div>

        </div>


        <div class="two-columns">

            <div class="card settings-card">

                <h3>Түс тақырыбы</h3>

                <p>
                    Панельдің негізгі түсін таңдаңыз.
                </p>

                <div class="color-options">

                    <button
                        class="color-option active"
                        style="background:#635bff;"
                        onclick="changePrimaryColor('#635bff', this)"
                    ></button>

                    <button
                        class="color-option"
                        style="background:#0ea5e9;"
                        onclick="changePrimaryColor('#0ea5e9', this)"
                    ></button>

                    <button
                        class="color-option"
                        style="background:#10b981;"
                        onclick="changePrimaryColor('#10b981', this)"
                    ></button>

                    <button
                        class="color-option"
                        style="background:#f43f5e;"
                        onclick="changePrimaryColor('#f43f5e', this)"
                    ></button>

                    <button
                        class="color-option"
                        style="background:#f59e0b;"
                        onclick="changePrimaryColor('#f59e0b', this)"
                    ></button>

                </div>

            </div>


            <div class="card settings-card">

                <h3>Экран режимі</h3>

                <p>
                    Жарық немесе қараңғы режимді таңдаңыз.
                </p>

                <label style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    font-size:11px;
                ">

                    <span>Қараңғы режим</span>

                    <label class="switch">

                        <input
                            type="checkbox"
                            ${document.body.classList.contains("dark") ? "checked" : ""}
                            onchange="toggleDarkMode(this.checked)"
                        >

                        <span class="switch-slider"></span>

                    </label>

                </label>

            </div>


            <div class="card settings-card">

                <h3>Логотип</h3>

                <p>
                    Дүкен атауы мен логотипін өзгертіңіз.
                </p>

                <div class="form-group">
                    <label>Дүкен атауы</label>
                    <input value="QazPhone">
                </div>

                <button
                    class="primary-button"
                    onclick="showToast('Логотип баптаулары сақталды.', 'success')"
                >
                    Сақтау
                </button>

            </div>


            <div class="card settings-card">

                <h3>Мәзір стилі</h3>

                <p>
                    Бүйірлік мәзірдің сыртқы көрінісін таңдаңыз.
                </p>

                <select class="filter-select" style="width:100%;">
                    <option>Қараңғы мәзір</option>
                    <option>Ашық мәзір</option>
                    <option>Минималистік мәзір</option>
                </select>

            </div>

        </div>
    `;
}


function toggleDarkMode(enabled) {

    document.body.classList.toggle("dark", enabled);

    localStorage.setItem(
        "qazphone_dark_mode",
        enabled ? "1" : "0"
    );
}


function changePrimaryColor(color, element) {

    document.documentElement.style.setProperty(
        "--primary",
        color
    );

    document.documentElement.style.setProperty(
        "--primary-dark",
        color
    );

    document
        .querySelectorAll(".color-option")
        .forEach(item => item.classList.remove("active"));

    element.classList.add("active");

    localStorage.setItem("qazphone_primary_color", color);
}


/* =====================================================
   PLUGINS
===================================================== */

function renderPlugins() {

    const plugins = [
        {
            icon: "₸",
            name: "Төлем жүйесі",
            text: "Онлайн төлем қабылдау",
            active: true
        },
        {
            icon: "□",
            name: "Жеткізу жүйесі",
            text: "Тапсырыстарды жеткізуді басқару",
            active: true
        },
        {
            icon: "✈",
            name: "Telegram хабарламалары",
            text: "Telegram арқылы хабарлама алу",
            active: false
        },
        {
            icon: "☏",
            name: "WhatsApp байланысы",
            text: "Клиенттермен WhatsApp арқылы сөйлесу",
            active: true
        },
        {
            icon: "A",
            name: "Google Analytics",
            text: "Сайт статистикасын бақылау",
            active: false
        }
    ];

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Қосымшалар</h1>
                <p>Дүкенге қосымша мүмкіндіктер қосыңыз.</p>
            </div>

        </div>


        <div class="plugin-grid">

            ${plugins.map(plugin => `

                <div class="plugin-card">

                    <div class="plugin-info">

                        <div class="plugin-icon">
                            ${plugin.icon}
                        </div>

                        <div>

                            <strong>${plugin.name}</strong>

                            <p>${plugin.text}</p>

                        </div>

                    </div>


                    <label class="switch">

                        <input
                            type="checkbox"
                            ${plugin.active ? "checked" : ""}
                            onchange="pluginChanged('${plugin.name}', this.checked)"
                        >

                        <span class="switch-slider"></span>

                    </label>

                </div>

            `).join("")}

        </div>
    `;
}


function pluginChanged(name, enabled) {

    showToast(
        `${name}: ${enabled ? "қосылды" : "өшірілді"}.`,
        enabled ? "success" : ""
    );
}


/* =====================================================
   USERS
===================================================== */

function renderUsers() {

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Пайдаланушылар</h1>
                <p>Сайт пайдаланушыларын басқарыңыз.</p>
            </div>

            <button
                class="primary-button"
                onclick="openUserModal()"
            >
                + Пайдаланушы қосу
            </button>

        </div>


        <div class="card">

            <div class="table-wrapper">

                <table class="data-table">

                    <thead>

                        <tr>
                            <th>Аты-жөні</th>
                            <th>Email</th>
                            <th>Телефон</th>
                            <th>Рөлі</th>
                            <th>Тіркелген күні</th>
                            <th>Статус</th>
                            <th>Әрекет</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${users.map(user => `

                            <tr>

                                <td>
                                    <strong>${user.name}</strong>
                                </td>

                                <td>${user.email}</td>

                                <td>${user.phone}</td>

                                <td>
                                    <span class="status status-info">
                                        ${user.role}
                                    </span>
                                </td>

                                <td>${user.date}</td>

                                <td>
                                    <span class="status status-success">
                                        ${user.status}
                                    </span>
                                </td>

                                <td>

                                    <button
                                        class="danger-button"
                                        onclick="deleteUser(${user.id})"
                                    >
                                        Өшіру
                                    </button>

                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>
    `;
}


function openUserModal() {

    showModal(`

        <h2>Пайдаланушы қосу</h2>

        <div class="form-group">
            <label>Аты-жөні</label>
            <input id="newUserName" placeholder="Аты-жөні">
        </div>

        <div class="form-group">
            <label>Email</label>
            <input id="newUserEmail" type="email" placeholder="example@mail.kz">
        </div>

        <div class="form-group">
            <label>Телефон</label>
            <input id="newUserPhone" placeholder="+7 700 000 00 00">
        </div>

        <div class="form-group">

            <label>Рөлі</label>

            <select id="newUserRole">

                <option>Клиент</option>
                <option>Менеджер</option>
                <option>Әкімші</option>

            </select>

        </div>

        <button
            class="primary-button"
            style="width:100%;"
            onclick="createUser()"
        >
            Қосу
        </button>
    `);
}


function createUser() {

    const name = document.getElementById("newUserName").value.trim();
    const email = document.getElementById("newUserEmail").value.trim();
    const phone = document.getElementById("newUserPhone").value.trim();
    const role = document.getElementById("newUserRole").value;

    if (!name || !email || !phone) {
        showToast("Барлық өрісті толтырыңыз.", "error");
        return;
    }

    users.push({
        id: Date.now(),
        name,
        email,
        phone,
        role,
        date: new Date().toLocaleDateString("kk-KZ"),
        status: "Белсенді"
    });

    localStorage.setItem("qazphone_users", JSON.stringify(users));

    closeModal();

    renderUsers();

    showToast("Пайдаланушы қосылды.", "success");
}


function deleteUser(id) {

    const current = getCurrentUser();

    if (current && current.id === id) {
        showToast("Қазіргі аккаунтты өшіру мүмкін емес.", "error");
        return;
    }

    users = users.filter(user => user.id !== id);

    localStorage.setItem("qazphone_users", JSON.stringify(users));

    renderUsers();

    showToast("Пайдаланушы өшірілді.");
}


/* =====================================================
   SETTINGS
===================================================== */

function renderSettings() {

    const saved = JSON.parse(
        localStorage.getItem("qazphone_settings")
    ) || {
        shopName: "QazPhone",
        phone: "+7 700 000 00 00",
        email: "info@qazphone.kz",
        address: "Алматы қаласы",
        whatsapp: "+7 700 000 00 00",
        instagram: "@qazphone",
        hours: "09:00 — 21:00"
    };

    content.innerHTML = `

        <div class="page-header">

            <div>
                <h1>Баптаулар</h1>
                <p>Дүкен туралы негізгі ақпаратты басқарыңыз.</p>
            </div>

            <button
                class="primary-button"
                onclick="saveSettings()"
            >
                Сақтау
            </button>

        </div>


        <div class="two-columns">

            <div class="card settings-card">

                <h3>Дүкен туралы ақпарат</h3>

                <p>
                    Клиенттерге көрсетілетін негізгі ақпарат.
                </p>

                <div class="form-group">
                    <label>Дүкен атауы</label>
                    <input id="shopName" value="${saved.shopName}">
                </div>

                <div class="form-group">
                    <label>Телефон</label>
                    <input id="shopPhone" value="${saved.phone}">
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input id="shopEmail" value="${saved.email}">
                </div>

                <div class="form-group">
                    <label>Мекенжай</label>
                    <input id="shopAddress" value="${saved.address}">
                </div>

            </div>


            <div class="card settings-card">

                <h3>Байланыс арналары</h3>

                <p>
                    Клиенттер сізбен осы арналар арқылы байланыса алады.
                </p>

                <div class="form-group">
                    <label>WhatsApp</label>
                    <input id="shopWhatsapp" value="${saved.whatsapp}">
                </div>

                <div class="form-group">
                    <label>Instagram</label>
                    <input id="shopInstagram" value="${saved.instagram}">
                </div>

                <div class="form-group">
                    <label>Жұмыс уақыты</label>
                    <input id="shopHours" value="${saved.hours}">
                </div>

            </div>


            <div class="card settings-card">

                <h3>Хабарландырулар</h3>

                <p>
                    Дүкен оқиғалары туралы хабарландыруларды басқарыңыз.
                </p>

                ${createSettingSwitch("Жаңа тапсырыстар", true)}
                ${createSettingSwitch("Email хабарламалары", true)}
                ${createSettingSwitch("Тапсырыс мәртебесі", true)}
                ${createSettingSwitch("Жаңа пікірлер", false)}

            </div>


            <div class="card settings-card">

                <h3>Қауіпсіздік</h3>

                <p>
                    Аккаунт қауіпсіздігіне қатысты параметрлер.
                </p>

                <button
                    class="secondary-button"
                    onclick="showToast('Құпия сөзді өзгерту терезесі ашылды.')"
                >
                    Құпия сөзді өзгерту
                </button>

            </div>

        </div>
    `;
}


function createSettingSwitch(text, checked) {

    return `
        <div style="
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:13px 0;
            border-bottom:1px solid var(--border);
            font-size:11px;
        ">

            <span>${text}</span>

            <label class="switch">

                <input
                    type="checkbox"
                    ${checked ? "checked" : ""}
                >

                <span class="switch-slider"></span>

            </label>

        </div>
    `;
}


function saveSettings() {

    const settings = {
        shopName: document.getElementById("shopName").value,
        phone: document.getElementById("shopPhone").value,
        email: document.getElementById("shopEmail").value,
        address: document.getElementById("shopAddress").value,
        whatsapp: document.getElementById("shopWhatsapp").value,
        instagram: document.getElementById("shopInstagram").value,
        hours: document.getElementById("shopHours").value
    };

    localStorage.setItem(
        "qazphone_settings",
        JSON.stringify(settings)
    );

    showToast("Баптаулар сақталды.", "success");
}


/* =====================================================
   LOGOUT
===================================================== */

document.getElementById("logoutButton").addEventListener("click", () => {

    localStorage.removeItem("qazphone_current_user");

    showToast("Жүйеден шықтыңыз.");

    setTimeout(() => {
        showAuth();
    }, 400);
});


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

document.getElementById("mobileMenuButton")
    .addEventListener("click", () => {

        document
            .getElementById("sidebar")
            .classList.toggle("open");
    });


/* =====================================================
   THEME
===================================================== */

document.getElementById("themeButton")
    .addEventListener("click", () => {

        const enabled = !document.body.classList.contains("dark");

        toggleDarkMode(enabled);
    });


/* =====================================================
   NOTIFICATIONS
===================================================== */

document.getElementById("notificationButton")
    .addEventListener("click", () => {

        showModal(`

            <h2>Хабарландырулар</h2>

            <div style="
                padding:15px;
                border-radius:10px;
                background:#f5f5f8;
                margin-bottom:10px;
            ">
                <strong style="font-size:11px;">
                    Жаңа тапсырыс
                </strong>

                <p style="
                    color:#777;
                    font-size:10px;
                    margin-top:5px;
                ">
                    #QP-10284 тапсырысы қабылданды.
                </p>
            </div>

            <div style="
                padding:15px;
                border-radius:10px;
                background:#f5f5f8;
            ">
                <strong style="font-size:11px;">
                    Жаңа пікір
                </strong>

                <p style="
                    color:#777;
                    font-size:10px;
                    margin-top:5px;
                ">
                    Клиент жаңа пікір қалдырды.
                </p>
            </div>

        `);
    });


/* =====================================================
   MODAL
===================================================== */

function showModal(html) {

    modalContent.innerHTML = html;

    modalOverlay.classList.remove("hidden");
}

function closeModal() {

    modalOverlay.classList.add("hidden");

    modalContent.innerHTML = "";
}

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", event => {

    if (event.target === modalOverlay) {
        closeModal();
    }
});


/* =====================================================
   TOAST
===================================================== */

function showToast(message, type = "") {

    const container = document.getElementById("toastContainer");

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}


/* =====================================================
   FORMAT PRICE
===================================================== */

function formatPrice(number) {

    return new Intl.NumberFormat("kk-KZ").format(number) + " ₸";
}


/* =====================================================
   LOCAL STORAGE SETTINGS
===================================================== */

function loadSavedSettings() {

    const dark = localStorage.getItem("qazphone_dark_mode");

    if (dark === "1") {
        document.body.classList.add("dark");
    }

    const color = localStorage.getItem("qazphone_primary_color");

    if (color) {
        document.documentElement.style.setProperty(
            "--primary",
            color
        );

        document.documentElement.style.setProperty(
            "--primary-dark",
            color
        );
    }
}


/* =====================================================
   START
===================================================== */

loadSavedSettings();

checkAuth();