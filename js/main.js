function showForm(formType) {
    const registerForm = document.getElementById('registerForm');
    const reportForm = document.getElementById('reportForm');
    
    if (formType === 'register') {
        registerForm.style.display = 'block';
        reportForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        reportForm.style.display = 'block';
    }
}

// Form submission handler
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Tambahkan logika submit form di sini
        alert('Terima kasih! Data Anda telah kami terima.');
        form.reset();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('expanded');
    });
    
    // Responsive handling
    function handleResize() {
        if (window.innerWidth < 768) {
            sidebar.classList.add('collapsed');
            content.classList.add('expanded');
        } else {
            sidebar.classList.remove('collapsed');
            content.classList.remove('expanded');
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
});
