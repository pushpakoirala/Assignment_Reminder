# How to Use the Study Reminder App

## Getting Started

### For Development

1. Make sure you have Node.js installed on your computer
2. Open your terminal/command prompt
3. Navigate to the project folder
4. Run: `npm install` (only needed once)
5. Run: `npm run dev`
6. The app will open in your browser automatically

### For Production

1. Run: `npm run build`
2. The production files will be in the `dist` folder
3. Deploy the `dist` folder to any web hosting service

## How to Test the App

### Adding Your First Reminder

1. Open the app in your browser
2. Select "Class Schedule" or "Assignment Deadline"
3. Enter a name (e.g., "Math 101 Lecture")
4. Pick a future date
5. Pick a time
6. Click "Add Reminder"

### Testing Features

**Test Case 1: Add a Class Schedule**
- Type: Class Schedule
- Name: Physics Lab
- Date: Tomorrow
- Time: 2:00 PM
- Expected: Reminder appears in the list

**Test Case 2: Add an Assignment**
- Type: Assignment Deadline
- Name: History Essay
- Date: Next week
- Time: 11:59 PM
- Expected: Reminder appears sorted by date

**Test Case 3: Delete a Reminder**
- Click "Delete" on any reminder
- Confirm the deletion
- Expected: Reminder is removed from the list

**Test Case 4: Validation**
- Try submitting empty form
- Expected: Browser shows validation errors
- Try selecting a past date
- Expected: Alert shows error message

**Test Case 5: Data Persistence**
- Add several reminders
- Close the browser tab
- Reopen the app
- Expected: All reminders are still there

### Testing Responsiveness

1. **Desktop**: Resize browser window - form stays on left, list on right
2. **Tablet**: Medium screen - should look balanced
3. **Mobile**: Small screen - form and list stack vertically

### Testing PWA Features

1. **Desktop (Chrome/Edge)**:
   - Look for install icon in address bar
   - Click to install the app
   - App should open in its own window

2. **Mobile (iOS)**:
   - Open in Safari
   - Tap the Share button
   - Select "Add to Home Screen"
   - Icon appears on home screen

3. **Mobile (Android)**:
   - Open in Chrome
   - Tap the menu (three dots)
   - Select "Install app" or "Add to Home screen"
   - Icon appears on home screen

4. **Offline Test**:
   - Load the app once
   - Turn off Wi-Fi/mobile data
   - Close and reopen the app
   - Expected: App still loads (may show cached version)

## Common Issues

### Reminder doesn't save
- Check browser console for errors
- Make sure localStorage is enabled in browser settings
- Try a different browser

### PWA won't install
- Make sure you're using HTTPS (or localhost)
- Check that manifest.json loads correctly
- Try clearing browser cache

### Past reminders still showing
- They should automatically hide
- Check that system date/time is correct
- Refresh the page

## Project Submission Checklist

- [ ] App runs without errors
- [ ] Can add class schedules
- [ ] Can add assignments
- [ ] Can delete reminders
- [ ] Data persists after refresh
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop
- [ ] PWA can be installed
- [ ] Code is well-commented
- [ ] README is complete

## Tips for Presentation

1. Start with a clean localStorage (no existing reminders)
2. Add 2-3 reminders during demo
3. Show delete functionality
4. Demonstrate responsiveness
5. Show PWA installation
6. Explain localStorage in code

## Customization Ideas

- Change color scheme in `style.css`
- Add more reminder types
- Add a note/description field
- Add priority levels (high/medium/low)
- Add notification sounds
- Add recurring reminders
- Add categories or tags
- Export reminders to calendar
- Add search/filter functionality

Good luck with your project presentation!
