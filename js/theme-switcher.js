/**
 * Theme Switcher for Trash2Cash
 * Applies cream and dark gray theme to dynamic elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Define theme colors
    const themeColors = {
        cream: '#F5F5DC',
        darkGray: '#444444',
        textDark: '#333333'
    };
    
    // Update Chart.js colors if charts exist
    if (typeof Chart !== 'undefined') {
        // Update area chart if it exists
        const areaChart = document.getElementById('myAreaChart');
        if (areaChart) {
            const areaChartInstance = Chart.getChart(areaChart);
            if (areaChartInstance) {
                areaChartInstance.data.datasets[0].borderColor = themeColors.darkGray;
                areaChartInstance.data.datasets[0].backgroundColor = `${themeColors.darkGray}20`;
                areaChartInstance.update();
            }
        }
        
        // Update pie chart if it exists
        const pieChart = document.getElementById('myPieChart');
        if (pieChart) {
            const pieChartInstance = Chart.getChart(pieChart);
            if (pieChartInstance) {
                pieChartInstance.data.datasets[0].backgroundColor = [
                    themeColors.darkGray,
                    '#777777',
                    '#999999',
                    '#BBBBBB',
                    '#DDDDDD'
                ];
                pieChartInstance.update();
            }
        }
    }
    
    // Apply classes to dynamic badges
    document.querySelectorAll('.badge.bg-success').forEach(badge => {
        badge.classList.remove('bg-success');
        badge.classList.add('bg-dark');
        badge.style.backgroundColor = themeColors.darkGray + ' !important';
    });
    
    // Update any dynamically created success buttons
    document.querySelectorAll('.btn-success').forEach(btn => {
        btn.style.backgroundColor = themeColors.darkGray;
        btn.style.borderColor = themeColors.darkGray;
    });
});
