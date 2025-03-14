
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