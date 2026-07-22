// Orders page – filter by status
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.orders-filters .filter-btn');
    const rows = document.querySelectorAll('#ordersTableBody tr');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const status = btn.dataset.status;
            rows.forEach(row => {
                if (status === 'all') {
                    row.style.display = '';
                } else {
                    const badge = row.querySelector('.status-badge');
                    const match = badge && badge.classList.contains('status-' + status);
                    row.style.display = match ? '' : 'none';
                }
            });
        });
    });
});