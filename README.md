# Study Reminder App

A mobile-first Progressive Web App (PWA) for students to manage class schedules and assignment deadlines.

## Features

- Add class schedules with name, date, and time
- Add assignment deadlines with name, date, and time
- View all upcoming reminders sorted by date
- Delete reminders
- Responsive design (mobile, tablet, desktop)
- Works offline as a PWA
- Data persists using localStorage
- Dark mode support

## Files Structure

```
├── index.html          # Main HTML file
├── style.css           # Responsive CSS styles
├── app.js              # JavaScript logic with localStorage
├── manifest.json       # PWA configuration
├── service-worker.js   # PWA offline support
└── README.md           # This file
```

## Installation

1. Open the app in a web browser
2. For mobile devices (iOS/Android):
   - Tap the share/menu button
   - Select "Add to Home Screen"
3. For desktop (Chrome/Edge):
   - Click the install icon in the address bar
   - Or go to Menu → Install App

## Usage

### Adding a Reminder

1. Select reminder type (Class Schedule or Assignment Deadline)
2. Enter the name
3. Select date and time
4. Click "Add Reminder"

### Viewing Reminders

- All upcoming reminders are displayed in chronological order
- Past reminders are automatically hidden
- Counter shows total upcoming reminders

### Deleting Reminders

- Click the "Delete" button on any reminder
- Confirm the deletion when prompted

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **Storage**: Browser localStorage
- **Responsive**: CSS Flexbox
- **PWA**: Service Worker for offline functionality
- **Browser Support**: All modern browsers

## PWA Icons Note

For full PWA functionality, you'll need to create two icon files:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

You can create these using any image editor or online tool. Use your school logo or a book/study-related icon.

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 11.3+)
- Opera: Full support

## Future Enhancements

- Push notifications
- Recurring reminders
- Categories and tags
- Export/import data
- Calendar view

## License

Free to use for educational purposes.
