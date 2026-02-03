const STORAGE_KEY = 'studyReminders';

let reminders = [];

const elements = {
    form: document.getElementById('reminderForm'),
    reminderType: document.getElementById('reminderType'),
    reminderName: document.getElementById('reminderName'),
    reminderDate: document.getElementById('reminderDate'),
    reminderTime: document.getElementById('reminderTime'),
    remindersList: document.getElementById('remindersList'),
    reminderCount: document.getElementById('reminderCount')
};

function loadReminders() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            reminders = JSON.parse(stored);
        } catch (e) {
            reminders = [];
        }
    }
    renderReminders();
}

function saveReminders() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
}

function addReminder(type, name, date, time) {
    const reminder = {
        id: Date.now(),
        type,
        name,
        date,
        time,
        datetime: new Date(`${date}T${time}`)
    };

    reminders.push(reminder);
    reminders.sort((a, b) => a.datetime - b.datetime);
    saveReminders();
    renderReminders();
}

function deleteReminder(id) {
    if (confirm('Are you sure you want to delete this reminder?')) {
        reminders = reminders.filter(r => r.id !== id);
        saveReminders();
        renderReminders();
    }
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

function isUpcoming(datetime) {
    return datetime >= new Date();
}

function renderReminders() {
    const upcomingReminders = reminders.filter(r => isUpcoming(r.datetime));

    elements.reminderCount.textContent = upcomingReminders.length;

    if (upcomingReminders.length === 0) {
        elements.remindersList.innerHTML = `
            <div class="empty-state">
                <p>No reminders yet. Add your first one above!</p>
            </div>
        `;
        return;
    }

    elements.remindersList.innerHTML = upcomingReminders.map(reminder => `
        <div class="reminder-item">
            <div class="reminder-info">
                <div class="reminder-header">
                    <span class="reminder-type type-${reminder.type}">
                        ${reminder.type}
                    </span>
                    <span class="reminder-name">${escapeHtml(reminder.name)}</span>
                </div>
                <div class="reminder-datetime">
                    <span>📅 ${formatDate(reminder.date)}</span>
                    <span>⏰ ${formatTime(reminder.time)}</span>
                </div>
            </div>
            <div class="reminder-actions">
                <button class="btn btn-danger" onclick="deleteReminder(${reminder.id})">
                    Delete
                </button>
            </div>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function validateForm(name, date, time) {
    if (!name.trim()) {
        alert('Please enter a reminder name');
        return false;
    }

    if (!date) {
        alert('Please select a date');
        return false;
    }

    if (!time) {
        alert('Please select a time');
        return false;
    }

    const reminderDateTime = new Date(`${date}T${time}`);
    if (reminderDateTime < new Date()) {
        alert('Please select a future date and time');
        return false;
    }

    return true;
}

elements.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const type = elements.reminderType.value;
    const name = elements.reminderName.value;
    const date = elements.reminderDate.value;
    const time = elements.reminderTime.value;

    if (validateForm(name, date, time)) {
        addReminder(type, name, date, time);
        elements.form.reset();
        alert('Reminder added successfully!');
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

loadReminders();
