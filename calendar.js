function getCalender() {
    return CONFIG.CALENDAR_ID === 'primary'
        ? CalendarApp.getDefaultCalendar()
        : CalendarApp.getCalenderById(CONFIG.CALENDAR_ID);
    
}
function getTodayEvents() {
    const events = getCalender().getEventsForDay(new Date());
    return events.map(ev => ({
        time: ev.isAllDayEvent()
            ? '終日'
            :Utilities.formatDate(ev.getStartTime(),'Asia/Tokyo','HH:mm'),
        title: ev.getTitle(),
    }));
}
function getUpcomingReminders() {
    const today = new Date();
    today.setHours(0,0,0,0);
    const end = new Date(today.getTime() + 31 * 24 * 60 * 60 * 1000);

    return getCalender().getEvents(today, end)
        .map(ev => {
            const start = new Date(ev.getStartTime());
            start.setHours(0,0,0,0);
            const days = Math.round((start - today) / (24 * 60 * 60 * 1000));
            return {  days, title: ev.getTitle(), date: ev.getStartTime(), remind: getRemindDays(ev.getTitle())};
        })
        .filter(r => r.days > 0 && r.days <= r.remind);
    
   
}
function getRemindDays(title) {

    for (const kw of CONFIG.SAME_DAY_KEYWORDS) {
        if (title.includes(kw)) return 0;
    }
    //
    const match = title.match(/(\d+)\s*$/);
    if (match) return parseInt(match[1], 10);

    return CONFIG.DEFAULT_REMIND_DAYS;
}
function testGetRemindDays() {
    ['レポート提出 5', 'バイト', 'MTG', '飲み会'].forEach(t =>
        console.log(t, '→', getRemindDays(t))
    );
}

